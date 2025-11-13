// Gestion du marketplace principal - OPTIMISÉ
document.addEventListener("DOMContentLoaded", function () {
  const boutiqueCards = document.querySelectorAll(".boutique-card");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const logo = document.querySelector(".logo-glf-bottom");

  // Effets au survol des cartes boutique
  boutiqueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
      this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.25)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
    });
  });

  // Smooth scroll pour la navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Effet de pulsation sur le logo GLF
  setInterval(() => {
    logo.style.transform = "scale(1.1)";
    setTimeout(() => {
      logo.style.transform = "scale(1)";
    }, 600);
  }, 3000);

  // Gestion des boutons boutique
  const boutiqueButtons = document.querySelectorAll(".boutique-btn");
  boutiqueButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (
        this.textContent.includes("Contactez") ||
        this.textContent.includes("rejoindre")
      ) {
        e.preventDefault();
        // Scroll vers la section rejoindre
        document.querySelector("#rejoindre").scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Animation d'apparition des cartes au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, entry.target.dataset.delay || 0);
      }
    });
  }, observerOptions);

  // Observer les cartes boutique avec délai progressif
  boutiqueCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    card.dataset.delay = index * 200;
    observer.observe(card);
  });

  // Gestion du scroll pour la navigation fixe
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scroll down - cacher la navbar
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scroll up - montrer la navbar
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // SUPPRIMÉ : L'animation du gradient qui changeait les couleurs
  // function animateGradient() { ... } - CETTE FONCTION A ÉTÉ SUPPRIMÉE

  // Gestion du chargement des images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease";
  });

  // Analytics event tracking (à activer avec Google Analytics)
  function trackEvent(category, action, label) {
    if (typeof gtag !== "undefined") {
      gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }
  }

  // Tracking des clics sur les boutiques
  boutiqueButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const boutiqueName =
        this.closest(".boutique-card").querySelector("h3").textContent;
      trackEvent("Boutique", "click", boutiqueName);
    });
  });
});
