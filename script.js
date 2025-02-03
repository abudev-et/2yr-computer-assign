// document.addEventListener("DOMContentLoaded", () => {
//     const searchBar = document.getElementById("search-bar");
//     const topics = document.querySelectorAll("ul li");
  
//     searchBar.addEventListener("input", (event) => {
//       const query = event.target.value.toLowerCase();
//       topics.forEach((topic) => {
//         if (topic.textContent.toLowerCase().includes(query)) {
//           topic.style.display = "block";
//         } else {
//           topic.style.display = "none";
//         }
//       });
//     });
//   });

// Toggle the mobile menu visibility
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
  