---
type: AtomicNote
title: Availability
createdAt: 2025-07-20 05:42:08.350000+00:00
creationDate: 2025-07-20 12:42
modificationDate: 2025-07-26 09:54
tags:
- Seedling
publish: true
category: 2. Atomic Notes
date: '2026-02-14'
---

parent: [[Systems Design]]
***
![[Pasted image 20260214203545.png]]
Availability: The guarantee that the system always runs well, regardless of what happens to the nodes behind the scenes.

### Availability = system uptime
The formula for availability is actual uptime / expected uptime. 

```python
expected uptime = 24*operationaldays
availability% = (uptime - downtime) / expected uptime
```

The golden standard for availability in the industry is "The five 9's" which is 99.999% availability (only 5m downtime/year!). Achieving this number should be the goal for all architects creating a highly available system.

**Other availability numbers:**
Four 9's (99.99%) = 52m downtime/year
Three 9's (99.9%) = 8h 45m downtime/year

> although **not** all systems should have availablity as their main goal, read [[CAP Theorem]]

**You create a highly available system by implementing redundancy, fail-overs, or graceful degradation.** The point being, any degradation of individual nodes in a system should not compromise the system in its entirety.

You can achieve high availability by implementing the following principles:
1. [[Availability Patterns|Faul-tolerance]]
2. [[Reliability]]
3. [[System Resiliency]]
Learn more in [[Availability Patterns]]

### Related: 
[[Systems Design High Level Tradeoffs]]


### Resources:

[[System Design Concepts Course and Interview Prep]]

