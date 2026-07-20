export const profile = {
  name: "Vũ Chí Thành",
  shortName: "Thành",
  handle: "vcth4nh",
  siteUrl: "https://thanh.vc",
  email: {
    user: "hello",
    domain: "thanh.vc",
  },
  title: "Vulnerability researcher",
  positioning:
    "Vulnerability researcher building exploits and AI-assisted security tooling.",
  summary:
    "I investigate the assumptions around authentication, trust boundaries, and complex application behavior—then turn the findings into clear, reproducible security research.",
  availability: [
    "Research collaboration",
    "Security consulting",
    "Full-time opportunities",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/vcth4nh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vcth4nh" },
    { label: "X", href: "https://x.com/vcth4nh" },
    {
      label: "Disclosure record",
      href: "https://dbugs.ptsecurity.com/researchers/Vcth4Nh",
    },
  ],
  current: {
    label: "Currently",
    title: "MSc Computing Science student",
    detail: "Cyber Security specialisation · Radboud University · 2026–2028",
  },
  experience: [
    {
      organization: "VinSOC",
      role: "Cyber Security Specialist",
      team: "Security Technology Research Department",
      period: "Jan 2026 — Jul 2026",
      highlights: [
        "Built LLM-integrated offensive tooling for patch diffing, fuzz-harness generation, and exploit prototyping.",
        "Engineered custom exploits and infrastructure for red-team operations.",
      ],
    },
    {
      organization: "Viettel Cyber Security",
      role: "Cyber Security Researcher",
      team: "Offensive Security Service Center",
      period: "Oct 2023 — Jan 2026",
      highlights: [
        "Researched pre-authentication vulnerabilities across web, mobile, and IoT products.",
        "Produced proofs of concept and coordinated responsible disclosure leading to vendor advisories and CVE records.",
      ],
    },
    {
      organization: "Korea Internet & Security Agency",
      role: "Cyber Security Mentor",
      team: "Part-time",
      period: "Apr 2024 — Sep 2025",
      highlights: [
        "Led small-cohort exploitation labs, project guidance, and career mentoring.",
      ],
    },
    {
      organization: "Viettel Cyber Security",
      role: "Cyber Security Research Intern",
      team: "Part-time",
      period: "Dec 2021 — Oct 2023",
      highlights: [
        "Trained across application security, systems security, red teaming, and exploit analysis.",
      ],
    },
  ],
  education: [
    {
      school: "Radboud University",
      degree: "MSc Computing Science — Cyber Security specialisation",
      period: "2026 — 2028",
      note: "Current student",
    },
    {
      school: "Hanoi University of Science and Technology",
      degree: "BSc Information Technology",
      period: "2020 — 2024",
      note: "English-taught programme · GPA 3.2/4.0",
    },
  ],
  awards: [
    {
      title: "Pwn2Own Ireland — team participation",
      issuer: "VCS team · Team ANTHUD",
      year: "2024–25",
    },
    {
      title: "2nd place, Cybersecurity Arena",
      issuer: "Security Bootcamp",
      year: "2025",
    },
    {
      title: "1st place, ROOTCON 18 CTF",
      issuer: "ROOTCON Hacking Conference",
      year: "2024",
    },
    {
      title: "Excellent Prize, HackTheon Sejong",
      issuer: "Sejong Special Self-Governing City",
      year: "2024",
    },
    {
      title: "1st place, ASEAN Cyber Shield",
      issuer: "KISA",
      year: "2023",
    },
    {
      title: "2nd place, Cyber SEA Game",
      issuer: "AJCCBC",
      year: "2023",
    },
  ],
  certifications: [
    {
      title: "Burp Suite Certified Practitioner",
      issuer: "PortSwigger",
      year: "2022",
      href: "https://portswigger.net/web-security/e/c/f784d51ce83ff795",
    },
    { title: "IELTS 7.5", issuer: "English proficiency", year: "" },
  ],
  capabilities: [
    {
      label: "Research",
      items: [
        "Web and enterprise applications",
        "Pre-authentication attack surfaces",
        "Mobile and IoT assessment",
        "Patch diffing and exploit prototyping",
      ],
    },
    {
      label: "Engineering",
      items: [
        "Python, JavaScript, Java, C#/.NET, C/C++",
        "Burp Suite, IDA, dnSpy, jadx, Frida",
        "CodeQL, Semgrep, fuzzing workflows",
        "LLM agents and Model Context Protocol",
      ],
    },
    {
      label: "Systems",
      items: [
        "Linux and Windows Server",
        "Docker and multi-container services",
        "VMware vSphere and Nutanix AHV",
        "Network segmentation, VPN, proxy, and TLS",
      ],
    },
  ],
  homelab: {
    title: "A lab that never quite stays finished.",
    description:
      "Outside formal research, I run a homelab for self-hosted services, monitoring, automation, network segmentation, and small local AI experiments. It is where infrastructure becomes tangible—and where I can break things on purpose.",
    areas: [
      "Wazuh · Uptime Kuma",
      "n8n · Home Assistant",
      "WireGuard · VLANs",
      "Traefik · Cloudflare",
      "Docker · Virtualization",
      "Local AI · MCP",
    ],
  },
} as const;

export type Profile = typeof profile;
