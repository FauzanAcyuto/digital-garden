---
tags:
- Fleeting
creationDate: 2026-10-03
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Dataflows Gen2]]
***
*How do you optimize dataflows gen2 performance?*

There are three features in Power Query that you need to get good at in order to become a good analytics engineer:
1. Query folding
2. Preview-only steps
3. Fast copy

*What is Query Folding?*

Query folding is a feature of Power Query pushes the transformation step back into the source system by converting it into native SQL query. This is more efficient because:
1. Source systems are usually more optimized for queries and has more compute
2. Minimizes the ammount of data that goes through the network
3. Minimizes the amount of processing Power Query has to do, which speeds up refresh times.
Power Query does query folding automatically on compatible transformations.
You should be constantly be checking if the Query Folding breaks in order to make adjustments for it.

Optimizing for query folding is **critical** for efficient Power Query usage, as it can cut down refresh time from hours to minutes.

![[Pasted image 20261003165127.png]]
You can check whether or not the transformation step is foldable by hovering over the step itself, a green database logo with a lightnigh on it shows that the query is foldable up to that step. 

# Folding-friendly patterns
**Transformations that typically fold:**
- Filter rows (WHERE clauses)
- Select or remove columns (SELECT specific columns)
- Sort rows (ORDER BY)
- Group by and aggregate (GROUP BY with SUM, COUNT, and similar functions)
- Merge queries from the same source (JOIN)
- Change data types (CAST)
- Rename columns (AS aliases)

**Transformations that typically break folding:**
- Add custom columns with complex M expressions
- Pivot and unpivot operations
- Merge queries from different data sources
- Operations using `Table.Buffer` force evaluation
- Some text transformations with M-specific functions

*What is Preview-Only step?*

It is a step that only operates only in the "transform" page of Power Query, this step doesn't get evaluated during production runs.
At Astra International we worked with tables with hundreds and thousands of rows, pulling 


*What is Fast Copy*

### Related:


### Resources:


