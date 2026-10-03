---
tags:
- Fleeting
creationDate: 2026-09-30
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Microsoft Fabric]]
***
*When should you use Lakehouse?*

Lakehouse is suitable for when you need to gather data from various formats and sources. For example you have data coming from Onedrive Excel, CSV from an app, JSON from an API etc. You want to put them in one area so your team can start working with the data. This is also where you would do medallion architecture with Spark notebooks.


*When should you use Warehouse?*

Use the warehouse when you want full T-SQL capabilities and [[Dimensional Modelling]]. This is because the schema is enforced and Warehouse has full DDL (table metadata manipulation: Create, Alter, Rename etc.) support.


*When should you combine the options?*

If you want to gather various formats, pull the data into Lakehouse first:
1. Onedrive excel shortcut to Onelake 
2. CSV upload through API
3. JSON copy through pipelines

Then turn all that data into a delta table using the "load to tables" feature. 

Once the data is all in Delta tables then you can join process and join them with the data in Warehouse using the [[Fabric cross database joins / three part naming]] and shortcuts, then:
1. Process the transactional data into dimensions and facts using T-SQL
2. Join them into semantic models
3. Visualize them in Power BI

Voila, you have an architecture that combines data from multiple sources and formats into a dimensional data model.


> [!tip] Slowly Changing Dimensions
> [[Slowly Changing Dimensions level 2 | SCD's]] require UPDATE and DELETE statements only available in Warehouse




### Related:
[[Fabric cross database joins / three part naming]]


### Resources:


