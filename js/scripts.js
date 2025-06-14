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
  // Handle// Initialize showcase carousel
document.addEventListener('DOMContentLoaded', function() {
    const showcaseCarousel = new bootstrap.Carousel(
        document.getElementById('showcaseCarousel'), {
            interval: 3000,
            touch: true
        }
    );

    // Add animation classes to features on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});

// Share functionality
document.addEventListener('DOMContentLoaded', function() {
    const shareModal = document.getElementById('shareModal');
    const shareLink = document.getElementById('shareLink');
    const copyButton = document.getElementById('copyButton');
    const shareWhatsApp = document.getElementById('shareWhatsApp');
    const qrCode = document.getElementById('qrCode');
    
    // Current page URL
    const pageUrl = window.location.href;
    
    // Update QR Code
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pageUrl)}`;
    
    // Copy link function
    copyButton.addEventListener('click', function() {
        shareLink.select();
        document.execCommand('copy');
        
        // Visual feedback
        copyButton.innerHTML = '<i class="fas fa-check me-2"></i>Copiado!';
        setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy me-2"></i>Copiar';
        }, 2000);
    });
    
    // WhatsApp share
    shareWhatsApp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent('Confira meu LinkPro: ' + pageUrl)}`;
    
    // Reset modal on close
    shareModal.addEventListener('hidden.bs.modal', function() {
        copyButton.innerHTML = '<i class="fas fa-copy me-2"></i>Copiar';
    });
});
