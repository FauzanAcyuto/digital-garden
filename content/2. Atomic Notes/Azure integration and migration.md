---
tags:
- Fleeting
creationDate: 2026-04-13
publish: 'True'
category: 2. Atomic Notes
date: '2026-04-17'
---

Parent: [[Azure]]
***
Azure has a suite of tools for migration (Databases, Virtual machines, Raw data, etc.) as well as integration (hybrid cloud architecture, etc.)

There are 4 main methodologies for migrating infra from on-prem/other providers to Azure (going from lowest friction to highest):
1. Lift and shift: move infrastructure as is, with minimal modifications
2. Refactor: move infrastructure with some modifications for cloud optimization
3. Redesign: redesign the architecture of applications to maximize return on cloud migration
4. Rebuild: rebuild the app entirely, suitable for out of date applications and architectures

# Large scale migration
[[Azure migrate]]: monitors migrations, it contains dashboards, management tools, and monitoring integrations to help you keep a close eye on the progress of you migration.
[[Azure database migration tool]]: continuously syncs databases from the source to Azure, ensuring that you have a drop in replacement ready whenever you reroute the db connection.
[[Azure site recovery tool]]: Replicates all your apps to a secondary location and sets up fail-overs to anticipate outtages.

# Small/file level integration
[[AzCopy]]: CLI tool for moving files to and from Azure (like SCP)
[[Azure File Explorer]]: File explorer for interacting with files in Azure 
[[Azure File Sync]]: Syncthing for Azure


### Related:


### Resources:


