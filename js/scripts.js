document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize carousel
  var templatesCarousel = new bootstrap.Carousel(
    document.getElementById("templatesCarousel"),
    {
      interval: 3000,
    }
  );
});
