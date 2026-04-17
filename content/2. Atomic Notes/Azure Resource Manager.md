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
![[Pasted image 20260405165213.png]]

[[Infrastructure as Code (IaaC)]]
# ARM Templates
Azure resource manager has a feature that uses IaC to deploy resources in a version control, repeatable, and reliable manner using "Templates", these templates are defined using a JSON file:

*An example for a storage account template*
```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "location": {
      "type": "string",
      "defaultValue": "[resourceGroup().location]"
    }
  },
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2025-06-01",
      "name": "mystorageaccount",
      "location": "[parameters('location')]",
      "sku": {
        "name": "Standard_LRS"
      },
      "kind": "StorageV2"
    }
  ]
}
```

And heres the cool thing, ARM can orchestrate the order of which templates get deployed in, so the dependencies between resources are preseved. A single template file can contain as many or as few resources as you need.

# Resource tags & resource locks



### Related:


### Resources:


