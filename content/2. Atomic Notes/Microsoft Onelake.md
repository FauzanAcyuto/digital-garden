---
tags:
- Fleeting
creationDate: 2026-09-26
publish: 'true'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Microsoft Fabric]]
***
*What is microsoft Onelake?*

Onelake is a unified storage for all of Microsoft Fabrics data analytics stack. I stores data in the ADLS2 formats: Parquet, CSV, JSON, and Delta which all of the Fabric tools can access seamlessly (Data Factory, Power BI, Real-time analytics, etc.). This is the "fabric" of Microsoft Fabric, the thing that joins all of the tooling together into one integrated system.

*How is data stored in Onelake?*

Unstructured data is stored in Parquet, CSV, JSON while tabular data is stored in Delta-parquet format. By default all Microsoft Fabric compute stores data in Onelake.
The data is organized in the Onelake catalogue, which allows you to view lineage, ownership, content, etc.

On top of Onelake you can create data stores that is specifically designed with your workload:
1. [[Lakehouse]] : for storing and working with both tabular and unstructured data
2. [[Fabric Data Warehouse]] : for storing silver/gold data coming from multiple sources
3. [[Fabric Eventhouse]] : For storing, processing, managing, and analysing real time data in KQL databases

[[Case study Fabric lakehouse & warehouse hybrid architecture]]

and many more "houses" you can see the full list in the fabric workspace

*How do I interact with the data in Onelake?*

You can use [[Lakehouse]] to create(design) semantic models, do ad-hoc querying, or transform the data using spark
Or if the data is already in business ready format you can connect to it as a semantic model directly to Power BI
You can also create a shortcut to the data to link it into your personal workspace.

### Related


### Resources:


