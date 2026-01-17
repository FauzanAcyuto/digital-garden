---
tags:
- Fleeting
creationDate: 2026-01-16
publish: 'true'
category: AtomicNotes
date: '2026-01-17'
---

Parent: [[Systems Design]]
***
Imagine a situation where your script fails mid run, well you don't have to imagine it, its pretty common after all. What happens when the script retries?

Will it:
1. Skip the process that it should be running, resulting in missing data?
2. Reprocess what has already been processed, resulting in duplicates?
3. Or deviates entirely?

This is the core of idempotency for data engineering. Can your script give the same output reliably when retried multiple times?

In my experience, idempotency is designed into data engineering in the `WHERE` clause, in which the clause should be scoped in a way where each subsequent run of that query yields the same results.

For instance this is non-idempotent:
```sql
SELECT TOP 1000 s3_key
FROM table
WHERE created_date = GETDATE()
ORDER BY created_date DESC
```
If the table gets new keys between script retries, you will get a different set of keys

And idempotent query looks like this:
```sql
-- Claim keys first
UPDATE TOP 1000 table
SET s3_run_id = {transaction_id} -- unique id for that particular script run
WHERE created_date = GETDATE()
ORDER BY created_date DESC

-- Select based on the run id
SELECT TOP 1000 s3_key
FROM table
WHERE s3_run_id = {transaction_id}
```
This way re-running the select statement will yield the same keys no matter how many times you run it.

### Related:


### Resources:


