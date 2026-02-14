🧩 SETTINGS → COMPANY INFO

🧠 Prompt — COMPANY INFO PAGE
🎯 Objective

Design the Company Info Settings page that manages organization-level configuration impacting the entire AI Dev Platform.

This page controls:

Org identity & branding

Governance defaults

Compliance settings

Deployment regions

Environment mapping

AI operational boundaries

Changes here cascade across:

Agents execution policies

Sandbox provisioning

Governance approvals

Integrations

Deployments

🧱 Page Layout Structure
1️⃣ Organization Profile Card

Displays core company identity.

Fields

Company Name

Legal Entity Name

Industry

Organization Size

Headquarters Location

Founded Year

Website

Support Contact Email

Mock Data

Field	Value
Company Name	Cognation AI Labs
Industry	Enterprise AI Platforms
Size	2,500 Employees
HQ	San Francisco, USA
Founded	2016

Buttons:

Edit Company Info

Upload Logo

Update Branding

2️⃣ Branding & Identity Configuration

Controls platform white-labeling.

Settings

Company Logo

Favicon

Brand Color

Platform Display Name

Email Template Branding

Preview Panel

Shows:

Login screen branding

Agent dashboard logo

Demo build watermark

3️⃣ Organizational Structure Mapping

Defines hierarchy used in governance + approvals.

Structure Layers

Executive

Engineering

QA

DevOps

AI Research

Product

Mock Hierarchy

Department	Head	Teams
Engineering	David Kim	Frontend, Backend
AI Research	Elena Ross	ML, Agents
DevOps	Mark Chen	Infra, SRE

Used by:

Approval routing

Code review escalation

ADR sign-offs

4️⃣ Compliance & Governance Defaults

Defines org-wide governance rules.

Settings

Require architecture approval → Yes

Require security review → Yes

Mandatory QA validation → Yes

AI prompt audit logging → Enabled

Data retention policy → 180 days

Compliance Standards:

SOC 2

ISO 27001

GDPR

HIPAA (optional toggle)

5️⃣ Deployment Regions & Infrastructure Policy

Controls where systems deploy.

Regions

US East

US West

Europe

India

Singapore

Mock Config

Environment	Region	Provider
Production	US East	AWS
Staging	India	Azure
Sandbox	Singapore	GCP

Impacts:

Deployments module

Sandbox environments

Demo builds hosting

6️⃣ Environment Strategy Mapping

Defines environment lifecycle structure.

Environment Types

Local

Sandbox

Dev

QA

Staging

Production

Policies

Auto-expire sandbox → 7 days

Demo builds retention → 30 days

Production deployment approval → Required

7️⃣ AI Governance Defaults

Controls how AI operates org-wide.

Settings

Allow autonomous agent execution

Require human approval for production code

AI prompt logging level

Model usage restrictions

Token consumption caps

8️⃣ License & Subscription Overview

Org billing + usage tier.

Details

Plan Type → Enterprise

Agent Execution Credits → 2M/month

Sandbox Hours → 5,000 hrs

API Simulation Calls → Unlimited

📊 Insights Panel (Right Side)

Add charts showing:

Deployments by region

Sandbox usage by team

Agent execution volume

Compliance violations

This fills visual empty space meaningfully.

🔗 Interconnections
Module	Impact
Governance	Approval hierarchy
Sandbox	Region provisioning
Agents	Execution permissions
Deployments	Infra region
Integrations	Compliance routing
Security	Policy enforcement
✅ Validation Rules

HQ location required

Compliance toggles affect governance workflows

Region selection must match cloud providers

Branding updates propagate platform-wide