---
type: AtomicNote
title: Systems Design
createdAt: 2025-07-19 16:16:58.669000+00:00
creationDate: 2025-07-19 23:16
modificationDate: 2025-07-28 12:41
tags:
- MOC
publish: 'true'
category: Tech
date: '2026-01-13'
---

Parent: [[Solutions Architecture]]
***
[What is System Design? A Comprehensive Guide to System Architecture and Design Principles - GeeksforGeeks](Weblinks/What%20is%20System%20Design%20A%20Comprehensive%20Guide%20to%20System%20Architecture%20and%20Design%20P.md)

Systems Design is the act of creating a blueprint for a system that satisfies all requirements, which includes (but not limited to):

1. Efficiecy: Budget vs performance
2. [[Durability]]: Reliability, Assurance
3. [[Scalability]]: Load tolerance
4. [[Availability]]: Fault tolerance, "Reliability", "Redundancy"
5. Maintainability: Clean, readable code 

These requirements are measured through SLA's (service level agreements). 

**Systems design SLA's:**
1. [[Availability]] : System uptime
2. [[Durability]] : Consistency of data across time
3. [[System Resiliency]] : Ability to recover from outages or issues
4. [[Reliability]] : Guarantee of function quality
5. [[Availability Patterns]] : Fail-over (level up from availability)

The first component to discuss in system design is [[Scalability]]. It is generally accepted that you should design your systems to be [horizontally scalable](Pages/encounterHorizotal%20Scalability.md), as [[Vertical Scalability]] is limited to current technology and it mostly pretains to singular hardware power.

Then, after you've split your computing power into multiple machines, how would you get them to work as a unit? That is where [[Load Balancers]] come in!

Load balancers allow you to, well, **balance load** between all of the machines in the system. 

Another thing you need to consider when designing systems is [[Throughput vs Latency]] (System Speed). Do you optimize for speedy data transfers? or A LOT of data going through at once?

In order to design systems that scale, you need its components to be able to function independently, that is where the philosophy of [[Modularity]] comes in. This is discussed extensively in the [[UNIX Pilosophy]] note.

Compute engines aren't the only that can scale horizontally. [[Database Systems]] also scale by implementing [[Replication]].

It is important to understand that much of system design involves [[Systems Design High Level Tradeoffs|tradeoffs]]. So much so that this fact has a theorem called the [[CAP Theorem]].

The P in CAP stands for partition tolerance, which dictates a systems ability to maintain operation when one of its network partition is compromized. This is where understanding [[Networking]] becomes very important.


# Related:
[[Scalability vs Performance]]
[[Systems Design High Level Tradeoffs]]
[[Logging and Monitoring]]
[[CAP Theorem]]

# Resources:
[[System Design Concepts Course and Interview Prep]]
[[The Systems Design Primer GitHub]]
﻿[System Design for Data Engineers.](Weblinks/System%20Design%20for%20Data%20Engineers.md)

### Links:
```dataview
LIST FROM ([[#]]) OR outgoing([[#]]) WHERE file.name != this.file.name SORT file.name ASC
```