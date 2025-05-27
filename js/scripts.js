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

document.addEventListener("DOMContentLoaded", function () {
  // Handle site preview modal
  const siteModal = document.getElementById("siteModal");
  if (siteModal) {
    siteModal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      const siteUrl = button.getAttribute("data-site-url");
      const iframe = document.getElementById("sitePreviewFrame");
      if (iframe && siteUrl) {
        iframe.src = siteUrl;
      }
    });

    // Clear iframe when modal is closed
    siteModal.addEventListener("hidden.bs.modal", function () {
      const iframe = document.getElementById("sitePreviewFrame");
      if (iframe) {
        iframe.src = "";
      }
    });
  }
});
