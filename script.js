function displayJobs(list = jobs) {
  const container = document.getElementById("list");

  if (!container) return;

  if (!list.length) {
    container.innerHTML = "<p>No jobs found.</p>";
    return;
  }

  container.innerHTML = list.map(job => `
    <article class="card">
      <h2>${job.title}</h2>
      <p>📍 Category: ${job.category}</p>
      <p>📅 Date: ${job.date}</p>
      <p>💼 Type: ${job.type}</p>
    </article>
  `).join("");
}

function searchSite() {
  const input = document.getElementById("search");
  const query = input ? input.value.toLowerCase().trim() : "";

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(query) ||
    job.category.toLowerCase().includes(query) ||
    job.type.toLowerCase().includes(query)
  );

  displayJobs(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  displayJobs();
});
