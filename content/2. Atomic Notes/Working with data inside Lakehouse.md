---
tags:
- Fleeting
creationDate: 2026-09-27
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Lakehouse]]
***
*How do you get data into lakehouse?*

For starters Lakehouse supports the following ways to get your data into it:
1. Manual file upload
2. Load to tables : A lakehouse function to load open format files into Delta lake tables automatically, allowing you to modify the data seamlessly
3. Dataflow Gen2 : A transformation tool that saves the resulting data into Lakehouse
4. Notebooks : Ingest the data using apache spark and save it into Lakehouse
5. Data factory pipelines : The copy data function saves data into the Lakehouse
6. Shortcuts : Create a link to an external data, shows up as a folder in Lakehouse. This is different from [[Snowflake External Tables]] in that Lakehouse shortcuts support writing and modifying the source data, it is bi-directional.

*How do you work with/transform the data in Lakehouse?*

You can use the same data transformation tools to do this:
1. [[Dataflows Gen2]]
2. [[Fabric Notebooks]]
3. [[Data Factory Pipelines]]
4. Power Query through the SQL Analytics Endpoint page -> Visual Query Editor

You use the SQL analytics Endpoint to analyse, validate, as well as open a connection to BI Tools using SQL.
Or you can connect an SSMS instance to the lakehouse using the SQL connection string provided through the Onelake overview page of the lakehouse


> [!warning] Fabric Spark Notebooks Pricing
> The spark engine used in fabric notebooks spin up a VM which can drive up costs. If possible just use T-SQL in the data warehouse for transformations.


![[Pasted image 20260927151754.png|0]]



![[Pasted image 20260927132232.png]]

![[Pasted image 20260927132211.png]]


### Related:
[[Using spark in Lakehouse]]
[[Choosing a data integration strategy in fabric]]


### Resources:


