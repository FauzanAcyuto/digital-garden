---
tags:
- Fleeting
creationDate: 2026-01-04
is_article_quality: false
publish: true
category: 2. Atomic Notes
date: '2026-01-17'
---

Parent: [[Apache Airflow]]
***
Usually one of the best ways to run airflow UI is through docker, but not all environments support that, so lets set that aside for now. In order to run it at the dev server at pama you can use `pip` or `uv`.

In order to preserve resources (and is the usual format for production use) you should only have one airflow installation per machine, with all the combine project dependencies in the requirements.txt

But for development purposes you can have one `airflow standalone` installation per project, spinning it up only costs 500-800MB ram and shutting it down costs nothing.

There are three flavors to installing airflow
1. [[Production Airflow Docker Compose|Full production use with docker compose (Postgresql, Redis, Scheduler, Worker, Webserver)]] - requires 4GB of ram, supports distributed compute and paralel processing.
2. Using the [[Airflow Standalone - Pip|standalone installation]] through pip
3. And somewhere in the middle you can install the [[Airflow standalone - Docker|standalone in a docker container,]] achieving a more persistent but still lightweight setup.
### Related:


### Resources:


