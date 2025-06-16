const jobs = [
  {
    title: "Frontend Developer",
    company: "TechSoft",
    location: "Remote",
    description: "Build user interfaces using HTML, CSS, and JavaScript.",
  },
  {
    title: "Backend Developer",
    company: "CodeCloud",
    location: "Bangalore",
    description: "Develop APIs with Node.js and Express.",
  },
  {
    title: "UI/UX Designer",
    company: "Designify",
    location: "Delhi",
    description: "Create intuitive user experiences and interfaces.",
  },
];

const jobList = document.getElementById("job-list");
const searchInput = document.getElementById("search");

function displayJobs(filteredJobs) {
  jobList.innerHTML = "";
  if (filteredJobs.length === 0) {
    jobList.innerHTML = "<p>No jobs found.</p>";
    return;
  }
  filteredJobs.forEach((job) => {
    const jobEl = document.createElement("div");
    jobEl.classList.add("job");
    jobEl.innerHTML = `
      <h2>${job.title}</h2>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
    `;
    jobList.appendChild(jobEl);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword)
  );
  displayJobs(filtered);
});

displayJobs(jobs);
