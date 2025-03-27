// ========================== SMOOTH SCROLL ==========================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // ========================== ANIMASI SCROLL ==========================
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    sections.forEach((section) => {
      const position = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (position < screenPosition && !section.classList.contains("visible")) {
        section.classList.add("visible");
      }
    });
  });

  // ========================== EFEK HOVER PADA CARD ==========================
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});
