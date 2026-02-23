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

// ── DOM Elements ──
const jobContainer = document.getElementById("jobContainer");
const noJobs = document.getElementById("noJobs");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobsCountLabel = document.getElementById("jobsCountLabel");
const tabs = document.querySelectorAll(".tab");

// ── Render Cards ──
function renderCards() {
  jobContainer.innerHTML = "";

  let filtered = [];

  if (currentTab === "all") {
    filtered = jobs;
  } else if (currentTab === "interview") {
    filtered = jobs.filter(j => j.status === "interview");
  } else if (currentTab === "rejected") {
    filtered = jobs.filter(j => j.status === "rejected");
  }

  // Show/hide no jobs message
  if (filtered.length === 0) {
    noJobs.classList.remove("hidden");
    jobsCountLabel.textContent = currentTab === "all" ? "0 jobs" : "0 of " + jobs.length + " jobs";
  } else {
    noJobs.classList.add("hidden");
    if (currentTab === "all") {
      jobsCountLabel.textContent = filtered.length + " jobs";
    } else {
      jobsCountLabel.textContent = filtered.length + " of " + jobs.length + " jobs";
    }
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");
    if (job.status === "interview") card.classList.add("interview-card");
    if (job.status === "rejected") card.classList.add("rejected-card");
    card.setAttribute("data-id", job.id);

    // Status badge text
    let badgeText = "NOT APPLIED";
    let badgeClass = "";
    if (job.status === "interview") { badgeText = "INTERVIEW"; badgeClass = "interview"; }
    if (job.status === "rejected")  { badgeText = "REJECTED";  badgeClass = "rejected"; }

    card.innerHTML = `
      <div class="card-top">
        <div>
          <p class="company-name">${job.companyName}</p>
          <p class="position">${job.position}</p>
        </div>
        <button class="delete-btn" onclick="deleteJob(${job.id})"><img src="./Assets/delete.png" alt="delete" /></button>
      </div>
      <p class="card-meta">
        <span>${job.location}</span>
        <span>${job.type}</span>
        <span>${job.salary}</span>
      </p>
      <span class="status-badge ${badgeClass}">${badgeText}</span>
      <p class="description">${job.description}</p>
      <div class="card-buttons">
        <button class="btn-interview ${job.status === 'interview' ? 'active' : ''}" onclick="setStatus(${job.id}, 'interview')">INTERVIEW</button>
        <button class="btn-rejected ${job.status === 'rejected' ? 'active' : ''}" onclick="setStatus(${job.id}, 'rejected')">REJECTED</button>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  updateDashboard();
}

// ── Update Dashboard ──
function updateDashboard() {
  const total = jobs.length;
  const interview = jobs.filter(j => j.status === "interview").length;
  const rejected = jobs.filter(j => j.status === "rejected").length;

  totalCount.textContent = total;
  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;
}

// ── Set Status (Interview / Rejected Toggle) ──
function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  // Toggle: same button click again removes status
  if (job.status === status) {
    job.status = "none";
  } else {
    job.status = status;
  }

  renderCards();
}

// ── Delete Job ──
function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  if (index !== -1) {
    jobs.splice(index, 1);
  }
  renderCards();
}

// ── Tab Switching ──
tabs.forEach(tab => {
  tab.addEventListener("click", function () {
    tabs.forEach(t => t.classList.remove("active"));
    this.classList.add("active");
    currentTab = this.getAttribute("data-tab");
    renderCards();
  });
});

// ── Initial Render ──
renderCards();