---
tags:
- Fleeting
creationDate: 2026-09-26
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Big Data Systems]] also based on [[Microsoft Onelake]]
***
*What is a lakehouse?*

A lakehouse is a data storage architecture that combines the flexibility of [[What is a datalake?|Data lakes]] and the ease of use of [[Data Warehouses]]. The idea is that you can store unstructured data (JSON, CSV, Parquet, Video etc.) and structured/tabular data in one roof. Allowing your whole data team to work in a single area collaboratively.

This is done by relying on the [[Delta Lake Format]] which enables you to have RDBS (relational databases systems) characteristics on parquet files: [[ACID]], Mutability (can append new rows to the data), while also mending the weaknesses of Parquet (small file problem, immutability, file name listing problem etc.)

This way you can have unstructured data and structured data stored in one system, which saves costs on transforming and moving data from one system to another.

*How is data organized in Fabric Lakehouse?*
![[Pasted image 20260927130812.png]]

Data is organized into two folder types, **Tables folder** and **Files folder**:

Tables folder is where the [[Delta Lake Format|delta lakes tables]] live:
- It supports SQL Queries through the SQL Analytics Endpoint
- It has enforced schemas
- Can be accessed directly by [[Microsoft Power BI]]
- Benefits from automatic optimization and maintenance, just like RDBS

Files folder is where the unstructured data lives:
- Supports open file format (JSON, CSV, Parquet, Videos, Images, Text etc.)
- Supports schema-on-read data types like parquet
- Is directly readable by AI systems without preprocessing
- Suitable for raw data storage
- Not directly queriable using SQL



### Related:
[[Delta Lake Format]]
[[Working with data inside Lakehouse]]
[[Power BI Direct Lake Connector]]


### Resources:


