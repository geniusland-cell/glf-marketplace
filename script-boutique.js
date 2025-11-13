// Gestion de la boutique - OPTIMISÉ
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const articleCards = document.querySelectorAll(".article-card");
  const searchInput = document.getElementById("searchInput");
  const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

  // Filtrage par catégorie
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Ajouter la classe active au bouton cliqué
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      articleCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Recherche en temps réel
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();

    articleCards.forEach((card) => {
      const productName = card.querySelector("h3").textContent.toLowerCase();
      const productDesc = card
        .querySelector(".article-description")
        .textContent.toLowerCase();

      if (
        productName.includes(searchTerm) ||
        productDesc.includes(searchTerm)
      ) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });

  // Intégration WhatsApp
  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const product = this.getAttribute("data-product");
      const price = this.getAttribute("data-price");
      const phoneNumber = "+242067678128";

      const message = `Bonjour ! Je souhaite commander le produit suivant :%0A%0A🛍️ *${product}*%0A💰 Prix : ${price} FCFA%0A%0APouvez-vous me confirmer la disponibilité et les modalités de livraison ? Merci !`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(whatsappUrl, "_blank");
    });
  });

  // Animation des cartes au chargement
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

  // Appliquer l'animation à chaque carte avec délai progressif
  articleCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    card.dataset.delay = index * 100;
    observer.observe(card);
  });

  // Effet de survol sur les cartes
  articleCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Gestion du scroll pour la navigation fixe
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scroll down
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scroll up
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Logo GLF pulsation
  const logo = document.querySelector(".logo-glf-bottom");
  setInterval(() => {
    logo.style.transform = "scale(1.1)";
    setTimeout(() => {
      logo.style.transform = "scale(1)";
    }, 600);
  }, 3000);
});
