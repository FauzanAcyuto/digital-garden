---
tags:
- Fleeting
creationDate: 2026-01-14
publish: 'True'
category: AtomicNotes
date: '2026-01-16'
---

Parent: [[Apache Airflow]]
***
In this note we will breakdown the best practices to writing production ready airflow code.

[[Structuring DAGs code]]

# Key Design Principles
1. Airflow **only** orchestrates, business logic lives in modules and functions [[Break Airflow Code into Modules]]
2. Avoing passing `**context` to @task, use jinja templating instead [[Accessing Airflow Params]]
3. Explicit type hints and outputs `def function(variable: str)->list[str]:`
4. Split functions by 'units of work' not logical steps [[DuckDB Relations in Python Functions]]
 5. Safe SQL parameters using parameter binding [[DuckDB parameter binding]] 
# Production code example
```python

# ====== DAG DEFINITION ======
@dag(
    dag_id="s3_datalog_processor",
    schedule=timedelta(hours=1),
    start_date=datetime(2026, 1, 5),
    params={
        "distrik": Param("BRCB", enum=["BRCG", "BRCB"]),
        "key_limit_per_run": Param(1000, type="integer"),
        "ram_limit": Param("10GB", type="string"),
        "target_path": Param(
            "s3://smartdbucket/datalog/cis_smartd_tbl_iot_scania",
            enum=["data", "s3://smartdbucket/datalog/cis_smartd_tbl_iot_scania"],
        ),
        "bucket_name": "smartdbucket",
    },
    tags=["AWS", "ETL", "S3"],
    render_template_as_native_obj=True,
)
def compacter():

    @task
    def get_keys(distrik: str, limit: int) -> list[str]:
        engine = MsSqlHook(mssql_conn_id="mssql-pama").get_sqlalchemy_engine()
        return get_pending_keys_sql(engine, distrik, limit)

    @task
    def compact(
        keys: list,
        bucket_name: str,
        distrik: str,
        ram_limit: str,
        target_path: str,
    ) -> list[str]:

        if not keys:
            raise AirflowSkipException("No keys provided")
        conn = BaseHook.get_connection("aws-creds")
        aws_creds = {
            "aws_secret_access_key": conn.extra_dejson.get("aws_secret_access_key"),
            "aws_access_key_id": conn.extra_dejson.get("aws_access_key_id"),
            "aws_region": conn.extra_dejson.get("aws_region"),
        }

        with init_duckdb_connection(aws_creds, ram_limit) as conn:
            try:
                row_count = get_datalog_from_s3_per_hiveperiod(
                    conn, bucket_name, keys, target_path, distrik
                )
                if row_count == 0:
                    raise AirflowSkipException("No data produced")
                return keys
            except Exception:
                raise Exception("Exception during compact run")

    @task
    def update_status(keys: list, distrik: str):
        mssql_hook = MsSqlHook(mssql_conn_id="mssql-pama")
        engine = mssql_hook.get_sqlalchemy_engine()

        update_compression_status_in_db(engine, keys, distrik)

    keys = get_keys(
        "{{params.distrik}}",
        "{{params.key_limit_per_run}}",
    )  # jinja templating rendered only during runtime
    result = compact(
        keys,
        "{{params.bucket_name}}",
        "{{params.distrik}}",
        "{{params.ram_limit}}",
        "{{params.target_path}}",
    )
    update_status(result, "{{params.distrik}}")


compacter()

```

### Related:


### Resources:


