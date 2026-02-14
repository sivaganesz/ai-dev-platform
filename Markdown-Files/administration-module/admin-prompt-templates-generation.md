4️⃣ Submodule: Prompt Templates

This is the AI instruction intelligence layer.

Stores:

Agent prompts

Governance prompts

Simulation prompts

Generate the **Prompt Templates Administration submodule**.

This module manages reusable AI prompt instructions used across agents and simulations.

---

# Folder Structure

src/modules/administration/prompt-templates/
│
├── pages/
│   └── prompt-templates-page.tsx
│
├── components/
│   ├── prompt-library-grid.tsx
│   ├── prompt-editor.tsx
│   ├── version-history-panel.tsx
│   ├── usage-mapping-table.tsx
│   └── create-prompt-modal.tsx
│
└── hooks/
    └── use-prompts-data.ts

---

# Mock Data

{
  id: "PRMPT-001",
  name: "Frontend Code Generator",
  agent: "Frontend Agent",
  version: "v3.1",
  usageCount: 124,
  lastUpdated: "2026-02-10"
}

---

# UI Sections

Prompt Library:

- Prompt name
- Agent mapping
- Version

Editor:

- Modify instructions

Usage Mapping:

- Which agents use it
- Which workflows triggered it

---

# Interconnections

Connect prompts to:

- Agents
- Sandbox builds
- Demo previews

Goal: Govern AI instruction lifecycle.
