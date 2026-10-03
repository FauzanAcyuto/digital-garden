---
tags:
- Fleeting
creationDate: 2026-09-26
publish: 'true'
category: 1. Maps of Content
date: '2026-10-03'
---

Parent: [[DevOps]]
***
*What is a database system?*

Database systems are programs that help you structure, manage, store, and read data. 

They help you achieve the following functions:
1. Connect from other systems in a safe and uniform manner
2. Store and structure data in partitions, shards, schemas, tables, view, etc
3. Replicate data between many systems
4. Even create full-fledged functions in the form of stored procedures

The usual database systems that you come accross is for [[Structured data]], but there are also databases for [[Unstructured data]] and even [[semi-structured data]].

This is different from the way data is stored in [[Big Data Systems]].

*How should you select databases for OLTP vs OLAP needs?*

OLAP databases are read heavy, dimensionally modelled and they are happy with hourly updates. For these workloads having a colum-store database is preferable because analytic workloads usually selects for specific columns, this includes:
1. Fabric  Warehouse/Lakehouse uses Delta format which is column store
2. Clickhouse
3. Bigquery
4. AWS Redshift

OLTP databases are write&update heavy, theyre usually highly denormalized for the fastest performance. These workloads prefer row-store databases which provides faster update operations on singular rows. This includes:
1. SQL Server
2. PostgreSQL
3. MySQL





### Related:


### Resources:
   
