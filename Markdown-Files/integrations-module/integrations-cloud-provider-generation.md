3️⃣ Submodule: Cloud Providers

Infrastructure layer.

Examples:

AWS

Azure

GCP

📄 Prompt File
integrations-cloud-generation.md

Gemini CLI Prompt — Cloud
Generate the **Cloud Providers Integration submodule**.

This module manages infrastructure environments used for deployments and sandbox hosting.

---

# Folder Structure

src/modules/integrations/cloud/
│
├── pages/
│   └── cloud-providers-page.tsx
│
├── components/
│   ├── cloud-provider-card.tsx
│   ├── resource-usage-chart.tsx
│   ├── deployment-regions-map.tsx
│   ├── environment-list.tsx
│   └── connect-cloud-modal.tsx
│
└── hooks/
    └── use-cloud-data.ts

---

# Mock Data

{
  id: "INT-CLD-001",
  provider: "AWS",
  linkedPipelines: ["INT-CICD-001"],
  environments: [
    { id: "ENV-001", name: "Production", region: "us-east-1" },
    { id: "ENV-002", name: "Staging", region: "eu-west-1" }
  ],
  resourceUsage: {
    cpu: 68,
    storage: 74,
    bandwidth: 52
  },
  status: "ACTIVE"
}

---

# UI Sections

Top Stats:

- Active Providers
- Total Environments
- Resource Utilization %

Provider Cards:

- Provider name
- Regions
- Environments
- Status

Charts:

- CPU usage
- Storage usage

---

# Interconnections

Connect to:

- CI/CD pipelines
- Demo Builds
- Sandbox environments
- Deployments

Goal: Manage infrastructure and deployment environments.