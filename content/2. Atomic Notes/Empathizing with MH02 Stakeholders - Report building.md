---
tags:
- Fleeting
creationDate: 2026-02-02
publish: 'true'
category: 2. Atomic Notes
date: '2026-02-02'
---

Parent: [[Microsoft Power BI]]
***
Personas:
1. Safety dept. head
2. Operations dept. head

The safety dept head questions:
1. Is my investment on this safety tool paying off? - Cannot answer, need estimates of potential cost saved per caught violations
2. Is this tool achieving jobsite safety? - Partially answer, need data on how many incidents happened this month, but the number of correct fatigue follow ups give partial answer to the questiosn
3. What safety initiatives I need to create? which problem is the worst? - Can answer by the number of correct alerts (if most alerts are fatigue based then make a fatigue safety initiative)
4. How safe are my operators working? (Should be answerable through the amount of violation follow ups)
5. How many alerts does my team need to follow up? (Directly answerable from the data)
6. What are the most dangerous risks to my jobsite safety? (Directly Answerable from the data)

The operation dept head questions:
1. How many operators are risking my operation? (Directly Answerable from the data)
2. Which operators do I need to give rest? (Directly Answerable from the data)
3. Are my operational targets getting met? (Partially answerable from the data by speed compliance)
4. Are the operators staying under the speed limit but not too far under? (Direclty answerable from the data) 

Safety Metrics:
1. Number of true context violations that's properly followed up per week - Count the number of true context alerts per day, with weekly filters - Tables: t_control - Visual: Card
2. Number of true context alerts per violation type - Sum the number of true context alerts per violation type - Tables: t_control - Visual: Bar chart (x: violation type, y: COUNT true context)
3. Number of alerts not followed up - Percentage of alerts that's followed up per day - Tables: t_control - Visual: Stacked Bar chart (x: date, y: percentage validated vs not)
4. How many alerts have their evidence delivered (important for areas of poor coverage) - Tables: t_control - Visual: Stacked Bar chart (x: date, y: percentage video downloaded)
5. Metrics per operator - all safety metrics per operator (Alerts per violation type, true context percentage, evidence delivery, follow up stats) filtered per operator - Drill through maybe?

Operations Metrics:
1. Number of safety violations per operator per shift - 

### Related:


### Resources:


