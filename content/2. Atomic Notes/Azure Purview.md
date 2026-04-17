---
tags:
- Fleeting
creationDate: 2026-04-16
publish: 'True'
category: 2. Atomic Notes
date: '2026-04-17'
---

Parent: [[Azure]]  compliance & governance
***
Azure Purview is THE platform for making sure your infrastructure meets compliance standards. It has 3 main functions:

*Architecture*
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MICROSOFT PURVIEW ARCHITECTURE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                           DATA SOURCES                                      │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│   │Microsoft │ │  Azure   │ │   AWS    │ │   GCP    │ │On-Premises│         │
│   │   365    │ │ Services │ │   S3     │ │ BigQuery │ │   SQL    │          │
│   └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘          │
│        │            │            │            │            │                │
│        └────────────┴────────────┴────────────┴────────────┘                │
│                                  │                                          │
│                                  ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                                                                     │   │
│   │                        MICROSOFT PURVIEW                            │   │
│   │                                                                     │   │
│   │   ┌─────────────────────────────────────────────────────────────┐   │   │
│   │   │                      DATA MAP                               │   │   │
│   │   │              (Scan, Classify, Catalog)                      │   │   │
│   │   └─────────────────────────────────────────────────────────────┘   │   │
│   │                              │                                      │   │
│   │          ┌───────────────────┼───────────────────┐                  │   │
│   │          ▼                   ▼                   ▼                  │   │
│   │   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐           │   │
│   │   │ GOVERNANCE  │     │  SECURITY   │     │ COMPLIANCE  │           │   │
│   │   │             │     │             │     │             │           │   │
│   │   │ • Catalog   │     │ • DLP       │     │ • Audit     │           │   │
│   │   │ • Quality   │     │ • Labels    │     │ • eDiscovery│           │   │
│   │   │ • Lineage   │     │ • Insider   │     │ • Compliance│           │   │
│   │   │ • Glossary  │     │   Risk      │     │   Manager   │           │   │
│   │   └─────────────┘     └─────────────┘     └─────────────┘           │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                  │                                          │
│                                  ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      OUTCOMES                                       │   │
│   │                                                                     │   │
│   │   ✓ Know what data you have and where it lives                      │   │
│   │   ✓ Protect sensitive data automatically                            │   │
│   │   ✓ Meet regulatory compliance requirements                         │   │
│   │   ✓ Detect and respond to insider threats                           │   │
│   │   ✓ Govern AI and Copilot usage                                     │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```
# 1. Data Compliance Solutions
- Compliance Manager: Straight up a system that scans your system, gives you a score for how well you are adhering to compliance standards (ISO, GDPR etc.), and what can you do to improve that score.
![[Pasted image 20260416161243.png|400]]
- eDiscovery: Scans all you files in Microsoft 365, Sharepoint, Teams, Onedrive, Outlook, basically everything to help with collecting, auditing, and indetifiying data.
- Audit: A portal to help you in auditing data when a security concern appears
- Data lifecycle management: Create policies for data retention and deletion.

# 2. Data Governance
- Data Map: A very powerful data lineage scanner that scans Power BI, Azure SQL, Azure Data Lake, Synapse, and even data lakes of other vendors (AWS, GCP, Snowflake, etc.)
- Unified catalog
- Data Lineage

# 3. Data Security
- Sensitivity labels: This is where Azure clasifies the tags: PUBLIC, INTERNAL, CONFIDENTIAL, HIGHLY CONFIDENTIAL tags you typically see in company documents
- [[Azure Data loss prevention (DLP)]]: Deserves its own page to be honest, its a pretty high tech deep learning service that detects risky activities done by users
- Sensitifity information types (SITs) 
- Insider risk management



### Related:


### Resources:


