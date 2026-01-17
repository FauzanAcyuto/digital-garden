---
id: Apache Airflow
tags:
- Seedling
creationDate: 2025-11-04
publish: true
category: 2. Atomic Notes
date: '2026-01-17'
---

Parent: [[Apache Suite]]
***
Airflow is a platform where you can plan, architect, trigger, and monitor you data pipelines. The core function of it is as an [[Data Orchestration|orchestrator]] that governs how each function/script/tool interact with each other: 
1. In what sequence?
2. Under what condition?
3. How frequent?
4. With what SLA?
5. What to do when something fails?

> [!NOTE] What Airflow does for you
> It handles the sequential logic of a simple python script, the if's and elses

In order to do this you need to define a few things using python:
1. [[DAG]] (the pipeline governor)
2. Tasks (the operations within the pipeline)
3. Operators (now kinda abstracted away with Taskflow)

Airflow is useful in the following use cases:
1. Data powered applications - eg. Garmin connect
2. Data powering critical operational processes (also fun) - eg. MH02 alerts
3. Data for reporting and analytics 
4. Data for ML Models and predicions

When not to use Airflow:
1. Not for [[Stream Processing]]
2. Its not for data transformation per se, its for managing data workflows

# Enough theory!
Lets get to practice:
[[Setting up airflow in a reproducible way]]
[[Airflow Operators]]
[[Production grade airflow scripting]]

### Related:
[[Python]]
[[Data Orchestration]]
[[Airflow Engine]]
### Resources:



