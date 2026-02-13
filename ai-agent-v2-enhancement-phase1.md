# Module Enhancement Prompt

# AI Agents — Role Execution Flow Intelligence

---

# Context

You are enhancing the **AI Agents Module** inside an Enterprise AI Development Platform.

The platform already contains:

* Dashboard Module
* Projects Module
* Workflows Module
* Agents Overview
* Agent Detail Pages

Agents currently display:

* KPIs
* Success Rate
* Execution Logs
* Activity History

This enhancement introduces:

> **Role-Based Execution Flow Visualization**

Each agent must visually demonstrate how it processes work and hands off execution to the next role in the software delivery lifecycle.

---

# Objective

Design and implement a **Flow-Based Execution Model** for every agent role page to show:

* Task ownership
* Processing stages
* Real-time execution state
* Inter-agent handoffs
* Validation lifecycle

This must align with workflow pipelines and shared mock data.

---

# Supported Agent Roles

Execution flows must be generated for:

* Frontend Agent
* Backend Agent
* QA Agent
* DevOps Agent
* UX Agent

Each role has unique execution responsibilities.

---

# PHASE 1 — ROLE EXECUTION FLOW MODEL

---

## 1. Execution Visualization Concept

Each agent page must display a **horizontal flow diagram** representing its role in delivery execution.

Flow must show:

```
Input Source → Processing Stages → Output → Next Role Handoff
```

---

## 2. Frontend Agent Flow

Execution Model:

```
UX Design
   ↓
UI Implementation
   ↓
Component Development
   ↓
State Integration
   ↓
API Binding
   ↓
Handoff → Backend
```

---

### Responsibilities

Frontend Agent handles:

* UI generation
* Component structuring
* State wiring
* API consumption
* Responsiveness

---

### Mock Flow Outputs

```
Input: Figma Design
Output: React Components
Handoff: Backend APIs
```

---

## 3. Backend Agent Flow

Execution Model:

```
Receives UI Contracts
        ↓
API Development
        ↓
Business Logic Processing
        ↓
Database Integration
        ↓
Security Implementation
        ↓
Handoff → QA
```

---

### Responsibilities

Backend Agent handles:

* API creation
* Auth services
* Data processing
* Schema management

---

### Mock Flow Outputs

```
Input: UI Contracts
Output: REST APIs
Handoff: QA Validation
```

---

## 4. QA Agent Flow

Execution Model:

```
Receives Build
       ↓
Test Case Generation
       ↓
Automation Execution
       ↓
Bug Detection
       ↓
Regression Testing
       ↓
Validation Report
```

---

### Responsibilities

QA Agent handles:

* Functional testing
* Automation suites
* Defect logging
* Quality scoring

---

### Real-Time Validation View

Show:

* Passed tests
* Failed tests
* Blocking defects

---

## 5. DevOps Agent Flow

Execution Model:

```
Receives QA Approved Build
          ↓
CI Pipeline Trigger
          ↓
Containerization
          ↓
Infra Provisioning
          ↓
Deployment Release
          ↓
Monitoring & Alerts
```

---

### Responsibilities

DevOps Agent handles:

* CI/CD automation
* Docker builds
* Cloud infra
* Release monitoring

---

## 6. UX Agent Flow

Execution Model:

```
Requirement Intake
        ↓
User Research
        ↓
Wireframe Creation
        ↓
Design System Setup
        ↓
Accessibility Review
        ↓
Handoff → Frontend
```

---

### Responsibilities

UX Agent handles:

* Interaction design
* Usability flows
* Visual systems

---

# Flow Component Requirements

Create reusable component:

```
agent-role-execution-flow.tsx
```

---

## Node Schema

```
interface RoleExecutionNode {
  id: string
  agentId: string
  stageName: string
  inputArtifact: string
  outputArtifact: string
  status: "COMPLETED" | "IN_PROGRESS" | "PENDING"
  timestamp: string
}
```

---

## Edge Schema

```
interface RoleExecutionEdge {
  fromStageId: string
  toStageId: string
  handoffType: "INTERNAL" | "EXTERNAL"
}
```

---

# Visualization Rules

Flow must display:

* Stage nodes
* Direction arrows
* Status colors
* Active stage highlight
* Handoff indicators

---

# Status Color Mapping

```
COMPLETED → Green
IN_PROGRESS → Blue
PENDING → Gray
FAILED → Red
```

# End of prompt phase 1
---
Once you complete this task perfectly, let me know. We’ll move to Phase 2, okay?