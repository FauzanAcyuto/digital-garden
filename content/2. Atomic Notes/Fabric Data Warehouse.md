---
tags:
- Fleeting
creationDate: 2026-09-28
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Data Warehouses]]
***
*What makes Fabric Data Warehouse different?*

In practice the Fabric Data Warehouse is basically what you see in the usual SQL Server DWH, with the differentiating factor of:
1. The data is stored in the Delta Lake format in Onelake for performance and open-format flexibility. 
2. The data warehouse is also primarily accessed, modified, and interacted with using SQL. 
3. The difference between the DWH and SQL Analytics Endpoint is that the DWH supports reads and writes, while the SQL Analytics Endpoint is read-only.
4. Besides using T-SQL you can also use the Power Query visual editor to query the data.

For instance you can upload files into Fabric DWH using the COPY INTO SQL:
```SQL
COPY INTO dbo.Region
FROM 'https://mystorageaccount.blob.core.windows.net/data/Region.csv'
WITH (
    FILE_TYPE = 'CSV',
    CREDENTIAL = (
        IDENTITY = 'Shared Access Signature',
        SECRET = 'xxx'
    ),
    FIRSTROW = 2
)
GO
```

There is also an interesting feature in Fabric DWH called [[Clone Table in Microsoft Fabric|Data Clone]].

*What is the downstream output of Fabric DWH?*

The output of the DWH are:
1. Analytics ready data models : snowflake or star schema data models with the data getting split into fact tables and dimension tables
2. Semantic models : After modelling the data, Power BI can then join the keys in the semantic model
3. Views : Clean, business language view of the data (free of ETL attributes, keys, etc) with human readable column names and descriptionsk

>I used to do this in Power Query on BigQuery when I designed data models at Momomedia, but now it would be much easier to do this in Fabric

*When should I not use Fabric Warehouse?*

The fabric warehouse runs on the Polaris engine with the Delta format as the underlying data store. Since the delta format is columnar, it is not suitable for row specific read/write/updates. So the Onelake data storage is really NOT suitable for OLTP (transactional application data). For OLTP its better to use SQL Server, PostgreSQL or similar row-store databases


### Related:
[[Fabric DWH Security]]


### Resources:


