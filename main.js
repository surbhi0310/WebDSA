/* ===============================
   DSA ROADMAP – MAIN JS
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveLink();
});

/* ===============================
   Highlight Active Sidebar Link
   =============================== */
function highlightActiveLink() {
  const links = document.querySelectorAll(".sidebar a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");

      // Auto-open parent <details>
      const parentDetails = link.closest("details");
      if (parentDetails) {
        parentDetails.open = true;
      }
    }
  });
}

