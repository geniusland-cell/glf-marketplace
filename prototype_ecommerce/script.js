// ===== DONNÉES DES PRODUITS AVEC GALERIE D'IMAGES =====
const produits = [
  {
    id: 1,
    nom: "Samsung Galaxy A54",
    categorie: "smartphone",
    prix: 250000,
    description:
      'Smartphone Android performant avec écran 6.4" Super AMOLED et triple caméra 50MP. Testé et fonctionnel.',
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=400&fit=crop", // Écran allumé
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop", // Face arrière
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=400&fit=crop", // Interface caméra
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=400&fit=crop", // Démonstration
    ],
    caracteristiques: [
      'Écran 6.4" Super AMOLED',
      "128GB Stockage",
      "8GB RAM",
      "Triple Caméra 50MP",
      "Batterie 5000mAh",
    ],
    enStock: true,
    badge: "Nouveau",
  },
  {
    id: 2,
    nom: "Tecno Spark 10",
    categorie: "smartphone",
    prix: 120000,
    description:
      "Excellent rapport qualité-prix avec batterie longue durée. Interface HiOS testée et fonctionnelle.",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=400&fit=crop", // Écran allumé
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=400&fit=crop", // Profil
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=400&fit=crop", // Interface
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop", // Démonstration
    ],
    caracteristiques: [
      'Écran 6.6" HD+',
      "64GB Stockage",
      "4GB RAM",
      "Batterie 5000mAh",
      "Double caméra",
    ],
    enStock: true,
    badge: "Populaire",
  },
  {
    id: 3,
    nom: "iPhone 13 Reconditionné",
    categorie: "smartphone",
    prix: 650000,
    description:
      "iPhone reconditionné comme neuf avec garantie. iOS parfaitement fonctionnel.",
    images: [
      "https://images.unsplash.com/photo-1632661674599-501fd53c19cb?w=500&h=400&fit=crop", // Écran iOS
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop", // Face arrière
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=400&fit=crop", // Interface apps
      "https://images.unsplash.com/photo-1581091226825-c6b7a4a1c8c9?w=500&h=400&fit=crop", // Caméra active
    ],
    caracteristiques: [
      'Écran 6.1" Super Retina',
      "128GB Stockage",
      "Double Caméra 12MP",
      "iOS 16",
      "Face ID",
    ],
    enStock: true,
    badge: "Premium",
  },
  {
    id: 4,
    nom: "Nokia 105",
    categorie: "telephone-base",
    prix: 35000,
    description:
      "Téléphone basique robuste avec autonomie exceptionnelle. Testé et fonctionnel.",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=400&fit=crop", // Téléphone allumé
      "https://images.unsplash.com/photo-1581091226825-c6b7a4a1c8c9?w=500&h=400&fit=crop", // Menu principal
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=400&fit=crop", // Radio FM
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=400&fit=crop", // Lampe torche
    ],
    caracteristiques: [
      'Écran 1.8"',
      "Batterie 800mAh",
      "Radio FM",
      "Lampe torche",
      "Double SIM",
    ],
    enStock: true,
    badge: "Économique",
  },
  {
    id: 5,
    nom: "Itel A56",
    categorie: "smartphone",
    prix: 80000,
    description:
      "Smartphone entrée de gamme parfait pour débuter. Testé et vérifié.",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=400&fit=crop", // Écran allumé
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=400&fit=crop", // Design
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=400&fit=crop", // Interface
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop", // Fonctionnalités
    ],
    caracteristiques: [
      'Écran 6.0" HD+',
      "32GB Stockage",
      "2GB RAM",
      "Face Unlock",
      "Batterie 4000mAh",
    ],
    enStock: true,
  },
  {
    id: 6,
    nom: "Coque Protection Africaine",
    categorie: "accessoire",
    prix: 15000,
    description:
      "Coque de protection en silicone avec motif africain authentique.",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=400&fit=crop", // Coque avant
      "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&h=400&fit=crop", // Coque arrière
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=400&fit=crop", // Détail motif
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=400&fit=crop", // Sur téléphone
    ],
    caracteristiques: [
      "Protection anti-chocs",
      "Motif africain",
      "Silicone souple",
      "Compatibilité multiple",
    ],
    enStock: true,
  },
  {
    id: 7,
    nom: "Xiaomi Redmi Note 12",
    categorie: "smartphone",
    prix: 180000,
    description:
      "Performance exceptionnelle à prix abordable. MIUI testé et fonctionnel.",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=400&fit=crop", // Écran MIUI
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop", // Design
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=400&fit=crop", // Caméra
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=400&fit=crop", // Performance
    ],
    caracteristiques: [
      'Écran 6.67" AMOLED',
      "128GB Stockage",
      "6GB RAM",
      "Charge rapide 33W",
      "Quad caméra",
    ],
    enStock: true,
    badge: "Valeur sûre",
  },
  {
    id: 8,
    nom: "Écouteurs Bluetooth",
    categorie: "accessoire",
    prix: 25000,
    description:
      "Écouteurs sans fil avec autonomie 20 heures. Testés et fonctionnels.",
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=400&fit=crop", // Écouteurs
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=400&fit=crop", // Boitier charge
      "https://images.unsplash.com/photo-1590658165737-15a047b8b5e8?w=500&h=400&fit=crop", // En utilisation
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=400&fit=crop", // Détails
    ],
    caracteristiques: [
      "Autonomie 20h",
      "Réduction de bruit",
      "Bluetooth 5.0",
      "Étanche IPX5",
      "Charge rapide",
    ],
    enStock: true,
  },
];

// ===== VARIABLES GLOBALES =====
let produitsFiltres = [...produits];
let indexImageActuelle = 0;
let produitActuel = null;
const numeroWhatsApp = "242064525183";

// ===== FONCTIONS PRINCIPALES =====

// Formater le prix en FCFA
function formaterPrix(prix) {
  return new Intl.NumberFormat("fr-FR").format(prix) + " FCFA";
}

// Créer une carte produit
function creerCarteProduit(produit) {
  return `
        <div class="product-card" data-category="${
          produit.categorie
        }" data-prix="${produit.prix}">
            ${
              produit.badge
                ? `<div class="product-badge">${produit.badge}</div>`
                : ""
            }
            <div class="product-image">
                <img src="${produit.images[0]}" alt="${
    produit.nom
  }" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${produit.nom}</h3>
                <p class="product-description">${produit.description}</p>
                <div class="product-price">${formaterPrix(produit.prix)}</div>
                <div class="product-actions">
                    <button class="btn-whatsapp" onclick="commanderWhatsApp(${
                      produit.id
                    })">
                        <i class="fab fa-whatsapp"></i> Commander
                    </button>
                    <button class="btn-details" onclick="voirDetails(${
                      produit.id
                    })">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Afficher tous les produits
function afficherProduits(produitsAAfficher) {
  const grid = document.getElementById("products-grid");

  if (produitsAAfficher.length === 0) {
    grid.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666;">Aucun produit trouvé</h3>
                <p style="color: #999;">Essayez de modifier vos filtres de recherche</p>
            </div>
        `;
    return;
  }

  grid.innerHTML = produitsAAfficher
    .map((produit) => creerCarteProduit(produit))
    .join("");
}

// Filtrer les produits
function filtrerProduits() {
  const categorie = document.getElementById("category-filter").value;
  const prixMax = document.getElementById("price-filter").value;
  const recherche = document.getElementById("search-input").value.toLowerCase();

  produitsFiltres = produits.filter((produit) => {
    // Filtre par catégorie
    if (categorie !== "all" && produit.categorie !== categorie) {
      return false;
    }

    // Filtre par prix maximum
    if (prixMax !== "all" && produit.prix > parseInt(prixMax)) {
      return false;
    }

    // Filtre par recherche
    if (recherche && !produit.nom.toLowerCase().includes(recherche)) {
      return false;
    }

    return true;
  });

  afficherProduits(produitsFiltres);
}

// Commander via WhatsApp
function commanderWhatsApp(produitId) {
  const produit = produits.find((p) => p.id === produitId);
  if (!produit) return;

  const message = `Bonjour! Je souhaite commander le produit suivant :%0A%0A*${
    produit.nom
  }*%0A${formaterPrix(
    produit.prix
  )}%0A%0APouvez-vous me donner plus d'informations ?`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${message}`;
  window.open(urlWhatsApp, "_blank");
}

// Voir les détails avec galerie
function voirDetails(produitId) {
  produitActuel = produits.find((p) => p.id === produitId);
  if (!produitActuel) return;

  indexImageActuelle = 0;

  const modalHTML = `
        <div class="modal-overlay" id="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" onclick="fermerModal()">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="modal-body">
                    <div class="modal-gallery">
                        <div class="gallery-main">
                            <img id="main-image" src="${
                              produitActuel.images[0]
                            }" alt="${produitActuel.nom}">
                            <button class="gallery-prev" onclick="changerImage(-1)">‹</button>
                            <button class="gallery-next" onclick="changerImage(1)">›</button>
                        </div>
                        
                        <div class="gallery-thumbnails" id="thumbnails">
                            ${produitActuel.images
                              .map(
                                (image, index) => `
                                <div class="thumbnail ${
                                  index === 0 ? "active" : ""
                                }" onclick="selectionnerImage(${index})">
                                    <img src="${image}" alt="Vue ${index + 1}">
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    
                    <div class="modal-info">
                        <h2 id="modal-titre">${produitActuel.nom}</h2>
                        <div class="modal-price">${formaterPrix(
                          produitActuel.prix
                        )}</div>
                        <p class="modal-description">${
                          produitActuel.description
                        }</p>
                        
                        <div class="modal-features">
                            <h3>Caractéristiques :</h3>
                            <ul>
                                ${produitActuel.caracteristiques
                                  .map((carac) => `<li>${carac}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                        
                        <div class="proof-indicators">
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Écran fonctionnel vérifié</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Caméra testée et opérationnelle</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Applications fonctionnelles</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Batterie testée</span>
                            </div>
                        </div>
                        
                        <div class="modal-actions">
                            <button class="btn-whatsapp large" onclick="commanderWhatsApp(${
                              produitActuel.id
                            })">
                                <i class="fab fa-whatsapp"></i> Commander via WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
  document.body.style.overflow = "hidden";
}

// Changer d'image dans la galerie
function changerImage(direction) {
  if (!produitActuel) return;

  indexImageActuelle += direction;

  if (indexImageActuelle < 0) {
    indexImageActuelle = produitActuel.images.length - 1;
  } else if (indexImageActuelle >= produitActuel.images.length) {
    indexImageActuelle = 0;
  }

  mettreAJourGalerie();
}

// Sélectionner une image spécifique
function selectionnerImage(index) {
  indexImageActuelle = index;
  mettreAJourGalerie();
}

// Mettre à jour l'affichage de la galerie
function mettreAJourGalerie() {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  if (mainImage && produitActuel) {
    mainImage.src = produitActuel.images[indexImageActuelle];
  }

  thumbnails.forEach((thumb, index) => {
    if (index === indexImageActuelle) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

// Fermer la modale
function fermerModal() {
  const modal = document.getElementById("modal-overlay");
  if (modal) {
    modal.remove();
    document.body.style.overflow = "auto";
  }
  produitActuel = null;
}

// Initialiser les événements
function initialiserEvenements() {
  // Filtres
  document
    .getElementById("category-filter")
    .addEventListener("change", filtrerProduits);
  document
    .getElementById("price-filter")
    .addEventListener("change", filtrerProduits);
  document
    .getElementById("search-input")
    .addEventListener("input", filtrerProduits);

  // Catégories
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      const categorie = this.dataset.category;
      document.getElementById("category-filter").value = categorie;
      filtrerProduits();
      document
        .getElementById("produits")
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Navigation mobile
  document.querySelector(".menu-mobile").addEventListener("click", function () {
    const nav = document.querySelector(".nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  // Fermer modale en cliquant à l'extérieur
  document.addEventListener("click", function (event) {
    if (event.target.id === "modal-overlay") {
      fermerModal();
    }
  });

  // Navigation clavier dans la galerie
  document.addEventListener("keydown", function (event) {
    if (produitActuel) {
      if (event.key === "ArrowLeft") {
        changerImage(-1);
      } else if (event.key === "ArrowRight") {
        changerImage(1);
      } else if (event.key === "Escape") {
        fermerModal();
      }
    }
  });
}

// ===== INITIALISATION =====
document.addEventListener("DOMContentLoaded", function () {
  // Afficher tous les produits
  afficherProduits(produits);

  // Initialiser les événements
  initialiserEvenements();

  console.log("🛒 Site e-commerce Tech Congo initialisé avec succès!");
  console.log(`📱 ${produits.length} produits chargés`);
  console.log(`💬 WhatsApp: +${numeroWhatsApp}`);
  console.log(`🖼️ Galerie multi-images activée`);
});

// ===== FONCTIONNALITÉS AVANCÉES =====

// Ajouter un nouveau produit
function ajouterProduit(nouveauProduit) {
  const nouvelId = Math.max(...produits.map((p) => p.id)) + 1;
  produits.push({
    id: nouvelId,
    ...nouveauProduit,
  });
  filtrerProduits();
}

// Mettre à jour un produit
function mettreAJourProduit(id, modifications) {
  const index = produits.findIndex((p) => p.id === id);
  if (index !== -1) {
    produits[index] = { ...produits[index], ...modifications };
    filtrerProduits();
  }
}

// Supprimer un produit
function supprimerProduit(id) {
  const index = produits.findIndex((p) => p.id === id);
  if (index !== -1) {
    produits.splice(index, 1);
    filtrerProduits();
  }
}

// Exporter les données produits (pour sauvegarde)
function exporterProduits() {
  return JSON.stringify(produits, null, 2);
}

// Importer des produits
function importerProduits(donneesJSON) {
  try {
    const nouveauxProduits = JSON.parse(donneesJSON);
    produits.length = 0;
    produits.push(...nouveauxProduits);
    filtrerProduits();
    return true;
  } catch (error) {
    console.error("Erreur importation:", error);
    return false;
  }
}
