// Données des produits détaillées
const productsData = {
  1: {
    title: "Fauteuil Royal Baoulé",
    price: "85,000 XAF",
    description:
      "Fauteuil en bois sculpté avec tissu wax authentique. Inspiré des trônes traditionnels baoulés de Côte d'Ivoire. Chaque détail est sculpté à la main par des artisans expérimentés.",
    features: [
      "Bois d'ébène massif sculpté à la main",
      "Tissu wax 100% coton authentique",
      "Assise rembourrée naturelle",
      "Dimensions: 80cm x 90cm x 110cm",
      "Poids: 25kg",
      "Livraison gratuite",
    ],
    image: "fauteuil-baoule.jpg",
  },
  2: {
    title: "Vase Fleurs Tropicales",
    price: "25,000 XAF",
    description:
      "Vase en céramique peint à la main avec motifs floraux inspirés de la flore africaine tropicale. Parfait pour égayer votre intérieur avec une touche d'authenticité.",
    features: [
      "Céramique artisanale de haute qualité",
      "Peinture à main levée par des artisans locaux",
      "Motifs floraux uniques et authentiques",
      "Dimensions: 30cm x 15cm",
      "Capacité: 3L d'eau",
      "Entretien facile",
    ],
    image: "vase-fleurs.jpg",
  },
  3: {
    title: "Table Basse Ébène",
    price: "45,000 XAF",
    description:
      "Table basse en ébène massif avec incrustations de nacre et motifs tribaux traditionnels. Une pièce centrale qui attire tous les regards.",
    features: [
      "Ébène massif naturel",
      "Incrustations de nacre authentique",
      "Pattes sculptées motifs adinkra",
      "Dimensions: 120cm x 60cm x 45cm",
      "Finition huile naturelle",
      "Stable et durable",
    ],
    image: "table-ebene.jpg",
  },
  4: {
    title: "Miroir Soleil Africain",
    price: "35,000 XAF",
    description:
      "Miroir décoratif avec cadre en bois sculpté représentant le soleil, symbole de vie et d'énergie. Illumine votre espace avec élégance.",
    features: [
      "Cadre en bois d'acajou sculpté",
      "Verre trempé sécurité",
      "Motifs rayonnants symboliques",
      "Dimensions: 60cm de diamètre",
      "Accroche murale renforcée",
      "Livré prêt à poser",
    ],
    image: "miroir-soleil.jpg",
  },
  5: {
    title: "Lampe Masque Tribal",
    price: "55,000 XAF",
    description:
      "Lampe d'ambiance inspirée des masques traditionnels africains, créant une lumière chaleureuse et une atmosphère unique dans votre intérieur.",
    features: [
      "Base en bois sculpté masque tribal",
      "Abat-jour en tissu wax",
      "Ampoule LED incluse (3000K)",
      "Interrupteur intégré",
      "Hauteur totale: 50cm",
      "Éclairage chaleureux",
    ],
    image: "lampe-masque.jpg",
  },
  6: {
    title: "Pot Fleurs Ancestral",
    price: "18,000 XAF",
    description:
      "Pot en terre cuite avec gravures traditionnelles, idéal pour les plantes d'intérieur tropicales. La terre cuite naturelle régule l'humidité.",
    features: [
      "Terre cuite naturelle non vernie",
      "Gravures motifs adinkra",
      "Drainage intégré",
      "Dimensions: 25cm x 25cm",
      "Poids: 3kg",
      "Idéal pour plantes tropicales",
    ],
    image: "pot-fleurs.jpg",
  },
};

// Numéro WhatsApp
const whatsappNumber = "242067678128";
let currentProduct = null;

// Fonction pour commander via WhatsApp
function commanderWhatsApp(productName, productPrice) {
  console.log("Commande WhatsApp:", productName, productPrice);
  const message = `Bonjour ! Je souhaite commander le produit suivant :\n\n📦 *${productName}*\n💰 Prix : ${formatPrice(
    productPrice
  )} XAF\n\nPouvez-vous me donner plus d'informations sur la disponibilité et les délais de livraison ?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}

// Fonction pour commander depuis le modal
function commanderModalWhatsApp() {
  if (currentProduct) {
    commanderWhatsApp(
      currentProduct.title,
      currentProduct.price.replace(/[^0-9]/g, "")
    );
  }
}

// Fonction pour formater le prix
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Fonction pour afficher les détails du produit
function afficherDetails(productId) {
  console.log("Affichage détails produit:", productId);
  const product = productsData[productId];

  if (product) {
    currentProduct = product;

    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalPrice").textContent = product.price;
    document.getElementById("modalDescription").textContent =
      product.description;

    const featuresList = document.getElementById("modalFeatures");
    featuresList.innerHTML = "";
    product.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Afficher le modal
    document.getElementById("productModal").style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

// Fonction pour fermer le modal
function fermerModal() {
  document.getElementById("productModal").style.display = "none";
  document.body.style.overflow = "auto";
  currentProduct = null;
}

// Fonction pour scroller vers les produits
function scrollToProducts() {
  document.getElementById("produits").scrollIntoView({
    behavior: "smooth",
  });
}

// Initialisation après chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  console.log("Site Belle Afrique chargé avec succès !");

  // Navigation smooth scroll
  const navLinks = document.querySelectorAll(".nav a, .footer-section a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Fermer modal en cliquant en dehors
  window.addEventListener("click", function (e) {
    const modal = document.getElementById("productModal");
    if (e.target === modal) {
      fermerModal();
    }
  });

  // Fermer modal avec la touche Échap
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      fermerModal();
    }
  });
});
