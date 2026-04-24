# Red Diamond OS (RDAOS) - Architecture v0.4.0

## Data Flow
1. **Lead Intake:** Facebook/Zillow -> n8n Webhook.
2. **Logic Gate:** n8n checks Notion Status -> Sends Gmail Approval.
3. **Action:** Upon approval, n8n triggers `lead-sync.gs`.
4. **Storage:** Data is written to the "Red Diamond Master Sheet" and Notion DB.

## Hardware Environment
- **Host:** i7-8700 Rig
- **Storage:** B: Drive (Primary Dev/Repo Path)
- **Runtime:** WSL2 / Ubuntu / Docker
