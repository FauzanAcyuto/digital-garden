---
tags:
- Fern
creationDate: 2026-01-14
publish: 'True'
category: 2. Atomic Notes
date: '2026-01-17'
---

Parent: [[Apache Airflow]]
***
You can acces airflow parameters either by [[Jinja Templating]] or [[The Kwargs Collector (**)|kwargs]].
Either way works but there are important considerations.
Remember that without `render_template_as_native_obj=True` jinja templating returns your params as strings, even if they're set as integers.

## This is the comparison
### Kwargs:
```python
	@task()
	def function(**context):
		params = context['params']
		
		return business_logic_function(params['district'])
		
	function()
```
At first glance this looks fine and even the Airflow documentation mentions this as the first method of passing DAG params to a function. But at a glance there are a few weaknesses here:
1. `**context` pulls all the dag params in every function, and it happens every time the dag gets parsed by Airflow
2. Its not visible at a glance which param gets passed to this function.
3. Less readable than the next alternative

### Jinja Templating:
```python
	@task()
	def function(district):
		params = context['params']
		
		return business_logic_function(district)
		
	function('{{params.district}}')

```
Now this is significantly better because:
1. Only the params used in this function is accessed
2. Its explicitly visible which params are required, both in the function definition and implementation
3. More readable

> [!warning] Specific to jinja
> You need to pass `render_template_as_native_obj=True` in the @dag decorator, otherwise all params will be rendered as string

### Related:
[[Writing clean code]]
[[Refactoring]]

### Resources:


