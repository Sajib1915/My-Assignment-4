// ── Job Data ──
const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "none"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "none"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Design and develop interactive data dashboards and reports. Strong knowledge of D3.js and Tableau is required.",
    status: "none"
  },
  {
    id: 4,
    companyName: "CloudNine Systems",
    position: "Backend Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description: "Develop scalable backend services using Node.js and AWS. You will work with a high-performance engineering team.",
    status: "none"
  },
  {
    id: 5,
    companyName: "PixelCraft Studio",
    position: "UI/UX Designer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description: "Design beautiful user interfaces and experiences for mobile and web applications. Figma expertise is a must.",
    status: "none"
  },
  {
    id: 6,
    companyName: "SecureNet Labs",
    position: "Cybersecurity Analyst",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Monitor and protect company infrastructure from security threats. Experience with penetration testing is preferred.",
    status: "none"
  },
  {
    id: 7,
    companyName: "AI Frontier Inc",
    position: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160,000 - $200,000",
    description: "Build and deploy machine learning models at scale. Strong knowledge of Python, TensorFlow, and PyTorch required.",
    status: "none"
  },
  {
    id: 8,
    companyName: "GreenTech Ventures",
    position: "Full Stack Developer",
    location: "Denver, CO",
    type: "Remote",
    salary: "$100,000 - $140,000",
    description: "Work on innovative sustainability-focused web applications using React and Django. Join a passionate green-tech team.",
    status: "none"
  }
];
// ── State ──
let currentTab = "all";
