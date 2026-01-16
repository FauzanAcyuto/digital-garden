---
tags:
- Fleeting
creationDate: 2026-01-14
publish: 'true'
category: AtomicNotes
date: '2026-01-16'
---

Parent: [[Production grade airflow scripting]]
***
## Why?
The reason you do this is to get a clear distinction that Airflow is just an **orchestrator and should be separated from the business logic.**

> [!idea] The golden rule
> **Your DAG file should read like a workflow diagram, not like an implementation. All it should contain is what happens and when it happens**

Tasks should be made lean, clean, and easy to read. Part of the reason is because dag files get read multiple times while its processed. Putting too much in your DAG's cause overhead for the [[DAG Processor]].

## How?
This note has a prerequisite: [[Creating python modules]]

The gold standard for a task looks like this 
```
from compacter.sql_utils import get_pending_sql_keys

	@task
	def get_keys(distrik,limit):
		engine = MsSqlHook(conn_id='mssql_creds').get_sqlalchemy_engine()
		return get_pending_sql_keys(distrik,limit)
```

Very lean, no logic involved, just tells you what gets ran and when.

### Related:
*read how to grab dag params here [[Accessing Airflow Params]]*


### Resources:


