export interface SecuritySummary {
  activeSessions: number;
  mfaEnabledUsers: number;
  failedLogins7d: number;
  securityIncidents: number;
  threatAlerts: number;
}

export interface AuthControl {
  id: string;
  policy: string;
  status: string;
  description: string;
}

export interface MFAUser {
  id: string;
  user: string;
  status: 'ENABLED' | 'DISABLED';
  method: string;
  lastVerified: string;
}

export interface ActiveSession {
  id: string;
  user: string;
  device: string;
  location: string;
  ip: string;
  loginTime: string;
  status: 'ACTIVE' | 'IDLE';
}

export interface RegisteredDevice {
  id: string;
  name: string;
  owner: string;
  trustLevel: 'TRUSTED' | 'UNVERIFIED' | 'REVOKED';
  lastAccess: string;
}

export interface SecurityIncident {
  id: string;
  type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  module: string;
  status: 'INVESTIGATING' | 'RESOLVED' | 'OPEN';
  timestamp: string;
}

export interface SecurityPolicy {
  id: string;
  policy: string;
  enforcement: string;
}

export const securitySummary: SecuritySummary = {
  activeSessions: 126,
  mfaEnabledUsers: 82, // percentage in display
  failedLogins7d: 43,
  securityIncidents: 2,
  threatAlerts: 5
};

export const authControls: AuthControl[] = [
  { id: "AC-001", policy: "MFA Required", status: "Enabled", description: "Enforce multi-factor authentication for all users." },
  { id: "AC-002", policy: "Password Length", status: "12 chars", description: "Minimum character count for platform passwords." },
  { id: "AC-003", policy: "SSO Enablement", status: "Enabled", description: "Allow login via enterprise identity providers." },
  { id: "AC-004", policy: "Session Timeout", status: "30 mins", description: "Automatic logout after period of inactivity." }
];

export const mfaUsers: MFAUser[] = [
  { id: "MU-001", user: "Peter Johnson", status: "ENABLED", method: "Authenticator App", lastVerified: "2 hrs ago" },
  { id: "MU-002", user: "Sarah Lee", status: "ENABLED", method: "SMS OTP", lastVerified: "1 day ago" },
  { id: "MU-003", user: "Mike Chen", status: "DISABLED", method: "—", lastVerified: "—" },
  { id: "MU-004", user: "Alice Smith", status: "ENABLED", method: "Hardware Key", lastVerified: "5 mins ago" }
];

export const activeSessions: ActiveSession[] = [
  { id: "S-001", user: "Admin", device: "Chrome / Windows", location: "India", ip: "10.2.x.x", loginTime: "2 hrs ago", status: "ACTIVE" },
  { id: "S-002", user: "DevOps Agent", device: "Safari / macOS", location: "US East", ip: "18.4.x.x", loginTime: "5 hrs ago", status: "ACTIVE" },
  { id: "S-003", user: "QA Lead", device: "Firefox / Linux", location: "Europe", ip: "172.16.x.x", loginTime: "10 mins ago", status: "ACTIVE" }
];

export const registeredDevices: RegisteredDevice[] = [
  { id: "D-001", name: "MacBook Pro 16", owner: "QA Lead", trustLevel: "TRUSTED", lastAccess: "Today" },
  { id: "D-002", name: "Windows Workstation", owner: "Backend Dev", trustLevel: "UNVERIFIED", lastAccess: "3 days ago" },
  { id: "D-003", name: "iPhone 15", owner: "Product Mgr", trustLevel: "TRUSTED", lastAccess: "Yesterday" }
];

export const securityIncidents: SecurityIncident[] = [
  { id: "SEC-001", type: "Unauthorized API Access", severity: "HIGH", module: "Agents", status: "INVESTIGATING", timestamp: "2026-02-14T10:30:00Z" },
  { id: "SEC-002", type: "MFA Bypass Attempt", severity: "MEDIUM", module: "Auth", status: "RESOLVED", timestamp: "2026-02-13T14:20:00Z" },
  { id: "SEC-003", type: "Multiple Failed Logins", severity: "LOW", module: "Identity", status: "RESOLVED", timestamp: "2026-02-12T09:15:00Z" }
];

export const securityPolicies: SecurityPolicy[] = [
  { id: "POL-001", policy: "MFA Mandatory", enforcement: "Yes" },
  { id: "POL-002", policy: "Key Rotation", enforcement: "60 days" },
  { id: "POL-003", policy: "Session Timeout", enforcement: "30 mins" },
  { id: "POL-004", policy: "IP Restrictions", enforcement: "Enabled" }
];

export const securityAuditLogs = [
  { action: "Role Updated", user: "Admin", target: "USR-042", date: "2 mins ago" },
  { action: "Key Rotated", user: "System", target: "AK-8829", date: "1 hour ago" },
  { action: "Policy Changed", user: "Security Lead", target: "POL-001", date: "3 hours ago" }
];

export const loginTrendData = [
  { name: 'Mon', success: 1200, failed: 12 },
  { name: 'Tue', success: 1150, failed: 8 },
  { name: 'Wed', success: 1340, failed: 25 },
  { name: 'Thu', success: 1280, failed: 15 },
  { name: 'Fri', success: 1420, failed: 43 },
  { name: 'Sat', success: 980, failed: 5 },
  { name: 'Sun', success: 850, failed: 2 },
];
