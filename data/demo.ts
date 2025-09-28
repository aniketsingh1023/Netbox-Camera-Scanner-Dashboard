export type Risk = "High" | "Medium" | "Low"

export const devicesBase = [
  {
    id: "cctv-001",
    make: "Hikvision",
    model: "DS-2CD2142FWD",
    firmware: "V5.4.5",
    ip: "10.0.0.12",
    country: "US",
    risk: "Medium" as Risk,
    cves: ["CVE-2017-7921", "CVE-2018-6414"],
    coords: { xPct: 28, yPct: 35 },
  },
  {
    id: "dvr-023",
    make: "Dahua",
    model: "NVR5216-16P-4KS2",
    firmware: "V3.216",
    ip: "10.0.0.45",
    country: "DE",
    risk: "Low" as Risk,
    cves: ["CVE-2019-9670"],
    coords: { xPct: 52, yPct: 32 },
  },
  {
    id: "cam-114",
    make: "Axis",
    model: "P3225-LVE",
    firmware: "9.80.3",
    ip: "10.0.0.77",
    country: "JP",
    risk: "High" as Risk,
    cves: ["CVE-2020-6077", "CVE-2021-31986", "CVE-2022-12345"],
    coords: { xPct: 83, yPct: 43 },
  },
]

export const devicesScanned = [
  ...devicesBase.slice(0, 2),
  {
    id: "cam-114",
    make: "Axis",
    model: "P3225-LVE",
    firmware: "9.80.3",
    ip: "10.0.0.77",
    country: "JP",
    risk: "High" as Risk,
    cves: ["CVE-2020-6077", "CVE-2021-31986", "CVE-2022-12345", "CVE-2024-10001"],
    coords: { xPct: 83, yPct: 43 },
  },
  {
    id: "cam-220",
    make: "Uniview",
    model: "IPC2322EBR5",
    firmware: "V1.0.12",
    ip: "10.0.0.88",
    country: "BR",
    risk: "Medium" as Risk,
    cves: ["CVE-2020-10987"],
    coords: { xPct: 39, yPct: 60 },
  },
]

export const alerts = [
  {
    id: "a-001",
    time: "2025-09-28 10:03 UTC",
    title: "Scan started (demo)",
    severity: "Low" as Risk,
    details: "Demo scan initiated for 10.0.0.0/24.",
  },
  {
    id: "a-002",
    time: "2025-09-28 10:04 UTC",
    title: "Device discovered",
    severity: "Low" as Risk,
    details: "Found Axis P3225-LVE on 10.0.0.77.",
  },
  {
    id: "a-003",
    time: "2025-09-28 10:06 UTC",
    title: "Potential RCE in firmware",
    severity: "High" as Risk,
    details: "CVE-2022-12345 matched with high confidence.",
  },
]

export const insights = [
  {
    id: "i-1",
    vuln: "Default credentials",
    severity: "High" as Risk,
    confidence: 0.91,
    exploitation: [
      "Attempt login with vendor-default username",
      "Use known password permutations",
      "Capture response codes & lockout behavior",
    ],
    mitigation: ["Enforce password rotation", "Disable default accounts", "Enable lockout after failed attempts"],
  },
  {
    id: "i-2",
    vuln: "Outdated firmware",
    severity: "Medium" as Risk,
    confidence: 0.83,
    exploitation: ["Enumerate firmware via headers", "Match build tags to CVE DB"],
    mitigation: ["Upgrade to latest LTS firmware", "Enable auto-updates if available"],
  },
  {
    id: "i-3",
    vuln: "Open RTSP port",
    severity: "Low" as Risk,
    confidence: 0.76,
    exploitation: ["Probe rtsp:// endpoints", "Check anonymous stream access"],
    mitigation: ["Restrict RTSP to internal network", "Require credentials"],
  },
]
