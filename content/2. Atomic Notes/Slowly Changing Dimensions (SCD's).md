---
tags:
- Fleeting
creationDate: 2026-10-02
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Database Systems]]
***
*What is a slowly changing dimension?*

Dimensions can also get updated from time to time, and you need a way to track those changes. For instance an employee might get transfered to another department, or a customer might change details. There are multiple ways you can track these changes.

*What are the types of slowly changing dimensions?*

**Type 0** : Retain original
	Put simply: doesn't allow changes. This SCD type is used for dimensions that describe the past (not present or future) such as date of birth, location of birth, first day of work, etc.
**Type 1**: Overwrite
	Overwrites the value without storing the past data, you retain just one row per dimension item. You can usually pair this with a "last updated" column.
**Type 2**: Add new row
	The most interesting one, perserves old data. When a dimension item gets updated the system then adds a new row, flags the old row as "not current".
	This SCD type is essential when you want to store a history of past changes in the dimension. (this is the solution I inavertedly made for the master device table at PAMA)
	You do need some technical ETL to do this though:
	`When an update happens you insert a new row with the change date as the StartDate, some placeholder as the EndDate and a True flag in the IsCurrent column. Then you update the old data's End date with the previous days date and update the IsCurrent flag to False.
	![[Pasted image 20261002215328.png]]
**Type 3**: Add new column
	Typically the table has an extra column for the "previous data". For example if an employee is expected to get promotions often then the dimension table can have the columns `CurrentPosition` and `PreviousPosition`
**Type 6**: Hybrid Approach
	Type 6 combines elements of Type 1, Type 2, and Type 3. It maintains full version history (Type 2) while also storing the current value on every row (Type 1 overwrite on a specific column) and the previous value (Type 3).

**Cheat sheet**
![[Pasted image 20261002215852.png]]

**Tradeoffs:**
Each SCD type has cost and complexity implications:
- **Storage**: Type 2 dimensions grow over time as new version rows accumulate. Plan for increased storage and consider how the growth affects query performance.
- **Query complexity**: Joining fact tables to Type 2 dimensions requires matching on effective dates or using the current flag, which adds complexity to queries.
- **ETL complexity**: Type 2 and Type 6 require more sophisticated ETL logic to detect changes, expire old rows, and insert new versions.
- **Business requirements**: The choice of SCD type should be driven by business needs. Don't track history where it isn't needed, and don't skip history tracking where it is.
### Related:


### Resources:


