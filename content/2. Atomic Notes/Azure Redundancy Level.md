---
tags:
- Fleeting
creationDate: 2026-04-05
publish: 'True'
category: 2. Atomic Notes
date: '2026-04-17'
---

Parent: [[Azure]]
***
[[Availability]] [[Disaster Recovery]]

Azures storage redundancy level is very similar to AWS's [[Placement Groups]], which is how you design the distribution of your data between storage racks, data centers, and regions in order to get the right balance of performance, cost, and availability.

You can select these options in any storage related setup pages. i.e. the virtual machine "Disk" page 

![[Pasted image 20260405170126.png|800]]

# LRS 
*Locally-redundant storage*
Cheapest option for protection against server rack and disk failures. Your data gets replicated in three server nodes within the same data center

i.e if your data center goes down, your storage goes down with it

# ZRS
*zone redundant storage*

In every region there are multiple availability zones (AZ's), in this redundancy option your data gets replicated *syncronously* to multiple availability zones, that means your data will survive data center down time. Achieves **12 nines** of availability

Regional outages will take out your storage.

# GRS
*Geo-redundant storage*

This is an *inter-region replication option* where you data gets replication to a secondary region. This option protects against full regional outage. Achieves **16 nines** of availability
There are two types of GRS's

## Regular GRS
Your secondary data isn't immediately available for reading when the primary region goes down

## RA-GRS
Your secondary data is immediately available for read-only operations 

# GZRS
*Geo-zone redundant storage*

A combination of GRS and ZRS where your data is replicated in multiple availability zones and multiple regions. The primary region gets ZRS applied while the secondary region gets LRS.
this is the highest durability available for Azure storages.

### Related:k


### Resources:


