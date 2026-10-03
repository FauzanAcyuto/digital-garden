---
tags:
- Fleeting
creationDate: 2026-09-28
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Database Systems]]
***
*What is a data warehouse?*

It is a system what consolidates data from multiple sources into one analytics & business ready database design. This is different from traditional database systems that is geared towards transactional or operational data.

*How is data stored in a data warehouse?*

In a data warehouse the data is modelled intentionally to optimize for analytics. Usually the data is somewhat denormalized in a data warehouse, where although the data is still split into facts & dimension tables, the dimension tables still contain multiple categorical columns. This is done to minimize joins and optimize performance, with the tradeoff of higher risk of duplication and being more storage intensive.

Data warehouse schemas are usually in start or snowflake schema:
1. Star schema: denormalized, one fact table joins to multiple dimenstion tables for filter context and categorical detail
![[Pasted image 20260928201118.png]]
2. Snowflake schema: more normalized, one fact table joins to multiple dimension tables, and there are dimension tables for the dimension tables (normalization)
![[Pasted image 20260928201135.png]]

More in [[Dimensional Modelling]]


> [!itip] Normalization tradeoff
> More normalized = less duplication, less storage required, more reliable, more joins/less performant
> Denormalized = More performant/less joins, more duplication, more storage required


### Related:
[[Dimensional Modelling]]


### Resources:


