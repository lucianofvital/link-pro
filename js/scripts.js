document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Set the countdown time (2 hours from now)
  const countDownDate = new Date().getTime() + 2 * 60 * 60 * 1000;

  // Update the countdown every second
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.querySelector(".hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.querySelector(".minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.querySelector(".seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );

    // If the countdown is finished
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "OFERTA ENCERRADA";
    }
  }, 1000);
});
