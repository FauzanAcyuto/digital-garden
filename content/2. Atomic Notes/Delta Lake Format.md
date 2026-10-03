---
tags:
- Fleeting
creationDate: 2026-09-26
publish: 'True'
category: 2. Atomic Notes
date: '2026-10-03'
---

Parent: [[Big Data Systems]]
***
*What is the delta lake format?*

It is a format that attempts to perfect the parquet format by giving it the characteristics of RDBS (relational database systems). It does so by adding a transaction log to the parquet file folder, allowing the system reading it to know what parquet files are available, what has been done to it, and how best to read it. It gives the reading system context on the parquet files, and this accomplishes the following things:

1. The system is ACID compliant: Delta lake table writes are atomic, that means there are no half written data which means no corruption.
2. Eliminates the small files problem: Incrementally writing parquet files create the problem of having many small files which hurt read performance, Delta Lake format allows for appending data into existing ones
3. Eliminates the file name problem: Reading parquet files require you to first get the file names, this is a slow step that can cost money (for cloud APIs). Delta lake stores the available parquet file names in the transaction log
4. Improves predicate pushdown: Knowing what files exists and what data is stored in each file means the system can pull only the required data through partitioning very efficiently
5. Schema manipulation: The columns in the parquet files are abstracted into the transaction log, so you can change column names and drop columns more easily without having to rewrite the parquet file
6. Schema enforcement: Only allow appends from a dataframe that matches the schema of the existing Delta Lake
7. Delete rows: By storing which data is located in which file, Delta lake allows you to pin point which data you want to delete and limit the delete process to only those files (i.e deleting data for a single user). In Parquet you need to read the whole data, delete the specified data and rewrite the whole thing.
8. Check column constraints: Remember the error in Pama where a single parquet file contained letters in a column that should be numeric? wouldn't happen in Delta lake, you can check constraints in this system
9. Data Versioning, Rollback & time travel: The transaction log stores all transactions that has happened on the system, allowing version control and time travel (querying the previous version of the data) or rollback the data
10. Data retention limit (Vacuum command): Just like MongoDB you can set a limit of the data that will be retained in the system (30 days, 30 files etc.)
11. Merge: The merge command allows you to update rows, upsert, or even create SCD's in a very efficient way



### Related:


### Resources:


