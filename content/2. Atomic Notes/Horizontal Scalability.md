---
tags:
- Fern
publish: true
category: 2. Atomic Notes
date: '2026-01-17'
---

Parent: [[Systems Design]]
***
One big guy building the fences or a bunch of medium-sized people working in collaboration? This is the concept of Horizontal vs Vertical scalability. Although if we equate manpower to servers, horizontal scaling isn't limited to compute. Databases, Storage, Network, basically everything in the scope of [[Systems Design]] can be scaled horizontally. 

To be horizontally scalable you need hardware to be able to work in conjunction and [[Load Balancing|load balance]] between one another. This add complexity while allowing you to scale your system (theoretically) infinitely.

## The Benefits
Horizontally scalable systems can achieve high availability through various [[Availability Patterns]]. On top of that while vertical scalability is limited by the current technology, horizontal scalability can grow with older hardware.

## The Limitations
Of course its not all nice. Creating a horizontally scalable system increases complexity, and making sure all nodes have the same data (aka [[Consistency Patterns|the consistency problem]]), as well as the trade off between [[Systems Design High Level Tradeoffs|availability and consistency]]

