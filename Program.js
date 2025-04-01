document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animated-text, .animated-text-2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  animatedElements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animated-text-2, .sq-box, .sq-box-2"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 } )

  animatedElements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuItem = document.querySelector(".menu-item");

  menuToggle.addEventListener("click", () => {
    menuItem.classList.toggle("active"); // Toggle the "active" class
  });
});