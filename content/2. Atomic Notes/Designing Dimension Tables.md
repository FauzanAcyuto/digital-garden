---
tags:
- Fleeting
creationDate: 2026-10-02
publish: 'true'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Dimensional Modelling]]
***
*What is a dimensional table?*

A table that contains the contextual information of a fact table in a unique and storage efficient manner. Usually joined to the fact table using natural/business keys.
A dimensional table has 3 components
1. Surrogate key: index/system generated row specific key that is used as the primary key
2. Natural key (aka business key): Business readable ID for the dimension (SKU, Store kode, site code etc.)
3. Dimensions: the categorical data that is used to enrich the fact table


> [!tip] Why do you need a surrogate key?
> Though you might be tempted to use the natural key as the primary key, using a surrogate key instead is preferable because: natural keys might be longer than necessary for an index, supports [[Slowly Changing Dimensions (SCD's)| SCD type 2]] tracking where multiple rows can exist for a single dimension item, allows you to consolidate data from multiple sources without conflict.
> **The fabric test answer:** They insulate the data warehouse from source system changes and support historical tracking




*What is a role-playing dimension?*

This is a dimension table where the natural key *may* join to multiple columns in the fact table, it is usually the date dimension but not always.
![[Pasted image 20261002213154.png]]
In power BI this is called "active relationships".





### Related:


### Resources:


