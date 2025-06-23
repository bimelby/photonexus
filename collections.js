// Collections data
const collectionsData = [
  {
    id: 1,
    title: "Urban Landscapes",
    description: "A curated collection of stunning urban photography showcasing the beauty of city life and architecture.",
    curator: "Sarah Johnson",
    category: "Urban",
    photos: [
      {
        id: 101,
        title: "City Lights",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop",
        price: 29
      },
      {
        id: 102,
        title: "Modern Architecture",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        price: 35
      },
      {
        id: 103,
        title: "Street Reflections",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        price: 25
      },
      {
        id: 104,
        title: "Urban Geometry",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop",
        price: 32
      }
    ],
    featured: true,
    likes: 1250,
    views: 8500,
    price: 99,
    originalPrice: 121,
    tags: ["urban", "city", "architecture", "modern"],
    createdDate: "2024-01-20"
  },
  {
    id: 2,
    title: "Nature's Serenity",
    description: "Peaceful landscapes and natural beauty captured in their most pristine moments.",
    curator: "Michael Chen",
    category: "Nature",
    photos: [
      {

        id: 201,
        title: "Mountain Lake",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 42
      },
      {
        id: 202,
        title: "Forest Path",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        price: 38
      },
      {
        id: 203,
        title: "Sunset Valley",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop",
        price: 45
      },
      {
        id: 204,
        title: "Misty Mountains",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec3e5e?w=400&h=300&fit=crop",
        price: 40
      }
    ],
    featured: false,
    likes: 980,
    views: 6200,
    price: 135,
    originalPrice: 165,
    tags: ["nature", "landscape", "mountains", "peaceful"],
    createdDate: "2024-01-18"
  },
  {
    id: 3,
    title: "Portrait Masters",
    description: "Professional portrait photography showcasing diverse subjects and lighting techniques.",
    curator: "Elena Rodriguez",
    category: "Portrait",
    photos: [
      {
        id: 301,
        title: "Golden Hour Portrait",
        image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=400&h=300&fit=crop",
        price: 55
      },
      {
        id: 302,
        title: "Studio Portrait",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        price: 48
      },
      {
        id: 303,
        title: "Natural Light",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
        price: 52
      },
      {
        id: 304,
        title: "Creative Portrait",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
        price: 58
      }
    ],
    featured: false,
    likes: 1450,
    views: 9800,
    price: 180,
    originalPrice: 213,
    tags: ["portrait", "people", "studio", "professional"],
    createdDate: "2024-01-15"
  },
  {
    id: 4,
    title: "Abstract Visions",
    description: "Creative abstract photography exploring colors, shapes, and artistic compositions.",
    curator: "David Kim",
    category: "Abstract",
    photos: [
      {
        id: 401,
        title: "Color Flow",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop",
        price: 35
      },
      {
        id: 402,
        title: "Geometric Patterns",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 32
      },
      {
        id: 403,
        title: "Light Waves",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
        price: 38
      },
      {
        id: 404,
        title: "Abstract Motion",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop",
        price: 40
      }
    ],
    featured: false,
    likes: 750,
    views: 4800,
    price: 120,
    originalPrice: 145,
    tags: ["abstract", "artistic", "creative", "modern"],
    createdDate: "2024-01-12"
  },
  {
    id: 5,
    title: "Wildlife Wonders",
    description: "Stunning wildlife photography capturing animals in their natural habitats.",
    curator: "Lisa Wang",
    category: "Wildlife",
    photos: [
      {
        id: 501,
        title: "Lion Portrait",
        image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop",
        price: 65
      },
      {
        id: 502,
        title: "Eagle Flight",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        price: 58
      },
      {
        id: 503,
        title: "Elephant Family",
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
        price: 62
      },
      {
        id: 504,
        title: "Tiger Eyes",
        image: "https://images.unsplash.com/photo-1605979399824-6d3d60c2d8d2?w=400&h=300&fit=crop",
        price: 70
      }
    ],
    featured: false,
    likes: 1680,
    views: 11200,
    price: 220,
    originalPrice: 255,
    tags: ["wildlife", "animals", "nature", "safari"],
    createdDate: "2024-01-10"
  },
  {
    id: 6,
    title: "Architectural Marvels",
    description: "Modern and classic architecture from around the world captured in stunning detail.",
    curator: "Alex Thompson",
    category: "Architecture",
    photos: [
      {
        id: 601,
        title: "Modern Skyscraper",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        price: 45
      },
      {
        id: 602,
        title: "Classic Cathedral",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop",
        price: 50
      },
      {
        id: 603,
        title: "Bridge Design",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
        price: 42
      },
      {
        id: 604,
        title: "Interior Spaces",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        price: 48
      }
    ],
    featured: false,
    likes: 890,
    views: 5600,
    price: 155,
    originalPrice: 185,
    tags: ["architecture", "buildings", "design", "structure"],
    createdDate: "2024-01-08"
  }
];

// Global variables
let filteredCollections = [...collectionsData];
let currentPage = 1;
const collectionsPerPage = 6;
let viewMode = "grid";
let selectedCategory = "";

// Initialize collections page
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedCollection();
  loadCategories();
  loadCurators();
  loadPopularCollections();
  loadTrendingTags();
  loadCollections();
  setupSearch();
  updateCartCount();
});

// Load featured collection
function loadFeaturedCollection() {
  const featuredContainer = document.getElementById("featuredCollection");
  const featured = collectionsData.find(collection => collection.featured);

  if (!featured) return;

  featuredContainer.innerHTML = `
    <div class="featured-card" onclick="openCollectionModal(${featured.id})">
      <div class="featured-images">
        ${featured.photos.slice(0, 4).map((photo, index) => `
          <div class="featured-image">
            <img src="${photo.image}" alt="${photo.title}" loading="lazy">
          </div>
        `).join("")}
      </div>
      <div class="featured-badge">Featured</div>
      <div class="featured-overlay">
        <div class="featured-curator">Curated by ${featured.curator}</div>
        <h2 class="featured-title">${featured.title}</h2>
        <p class="featured-description">${featured.description}</p>
        <div class="featured-stats">
          <div class="collection-photos">
            <i class="fas fa-images"></i>
            <span>${featured.photos.length} photos</span>
          </div>
          <div class="collection-likes">
            <i class="fas fa-heart"></i>
            <span>${featured.likes}</span>
          </div>
          <div class="collection-views">
            <i class="fas fa-eye"></i>
            <span>${featured.views}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Load categories
function loadCategories() {
  const categoriesContainer = document.getElementById("categoryList");
  const categoryFilter = document.getElementById("categoryFilter");

  // Get unique categories with counts
  const categories = {};
  collectionsData.forEach(collection => {
    categories[collection.category] = (categories[collection.category] || 0) + 1;
  });

  // Populate sidebar categories
  categoriesContainer.innerHTML = Object.entries(categories)
    .map(([category, count]) => `
      <div class="category-item" onclick="filterByCategory('${category}')">
        <span>${category}</span>
        <span class="item-count">${count}</span>
      </div>
    `).join("");

  // Populate filter dropdown
  categoryFilter.innerHTML = '<option value="">All Categories</option>' +
    Object.keys(categories)
      .map(category => `<option value="${category}">${category}</option>`)
      .join("");
}

// Load curators
function loadCurators() {
  const curatorsContainer = document.getElementById("curatorsList");

  // Get unique curators with stats
  const curators = {};
  collectionsData.forEach(collection => {
    if (!curators[collection.curator]) {
      curators[collection.curator] = {
        name: collection.curator,
        collections: 0,
        totalPhotos: 0,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(collection.curator)}&background=06b6d4&color=fff`
      };
    }
    curators[collection.curator].collections++;
    curators[collection.curator].totalPhotos += collection.photos.length;
  });

  const topCurators = Object.values(curators)
    .sort((a, b) => b.collections - a.collections)
    .slice(0, 5);

  curatorsContainer.innerHTML = topCurators
    .map(curator => `
      <div class="curator-item" onclick="filterByCurator('${curator.name}')">
        <img src="${curator.avatar}" alt="${curator.name}" class="curator-avatar">
        <div class="curator-info">
          <div class="curator-name">${curator.name}</div>
          <div class="curator-stats">
            <span>${curator.collections} collections</span>
            <span>${curator.totalPhotos} photos</span>
          </div>
        </div>
      </div>
    `).join("");
}

// Load popular collections
function loadPopularCollections() {
  const popularContainer = document.getElementById("popularCollections");

  const popular = collectionsData
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  popularContainer.innerHTML = popular
    .map(collection => `
      <div class="popular-item" onclick="openCollectionModal(${collection.id})">
        <img src="${collection.photos[0].image}" alt="${collection.title}" class="popular-thumbnail">
        <div class="popular-content">
          <div class="popular-title">${collection.title}</div>
          <div class="popular-meta">
            <span>${collection.photos.length} photos</span>
            <span>${collection.views} views</span>
          </div>
        </div>
      </div>
    `).join("");
}

// Load trending tags
function loadTrendingTags() {
  const tagsContainer = document.getElementById("tagsCloud");

  // Get all tags with counts
  const tags = {};
  collectionsData.forEach(collection => {
    collection.tags.forEach(tag => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });

  const topTags = Object.entries(tags)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 12);

  tagsContainer.innerHTML = topTags
    .map(([tag, count]) => `
      <span class="tag-item" onclick="filterByTag('${tag}')">${tag}</span>
    `).join("");
}

// Load collections
function loadCollections() {
  const container = document.getElementById("collectionsGrid");
  const resultsCount = document.getElementById("resultsCount");

  // Calculate pagination
  const startIndex = (currentPage - 1) * collectionsPerPage;
  const endIndex = startIndex + collectionsPerPage;
  const collectionsToShow = filteredCollections.slice(startIndex, endIndex);

  // Update results count
  resultsCount.textContent = filteredCollections.length;

  // Clear container
  container.innerHTML = "";
  container.className = `collections-grid ${viewMode}-view`;

  if (collectionsToShow.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No collections found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    return;
  }

  // Create collection cards
  collectionsToShow.forEach(collection => {
    const card = createCollectionCard(collection);
    container.appendChild(card);
  });

  // Update pagination
  updatePagination();
}

// Create collection card
function createCollectionCard(collection) {
  const card = document.createElement("div");
  card.className = `collection-card ${viewMode === "list" ? "list-view" : ""}`;
  card.onclick = () => openCollectionModal(collection.id);

  const previewImages = collection.photos.slice(0, 3);
  const remainingCount = collection.photos.length - 3;

  card.innerHTML = `
    <div class="collection-preview">
      <div class="collection-images">
        ${previewImages.map((photo, index) => `
          <div class="collection-image">
            <img src="${photo.image}" alt="${photo.title}" loading="lazy">
          </div>
        `).join("")}
      </div>
      ${remainingCount > 0 ? `<div class="collection-count">+${remainingCount} more</div>` : ""}
    </div>
    <div class="collection-content">
      <div class="collection-category">${collection.category}</div>
      <h3 class="collection-title">${collection.title}</h3>
      <p class="collection-description">${collection.description}</p>
      <div class="collection-meta">
        <div class="collection-curator">
          <i class="fas fa-user"></i>
          <span>${collection.curator}</span>
        </div>
        <div class="collection-stats">
          <span><i class="fas fa-images"></i> ${collection.photos.length}</span>
          <span><i class="fas fa-heart"></i> ${collection.likes}</span>
          <span><i class="fas fa-eye"></i> ${collection.views}</span>
        </div>
      </div>
      <div class="collection-footer">
        <div class="collection-price">
          $${collection.price}
          ${collection.originalPrice > collection.price ? `<span style="text-decoration: line-through; color: #64748b; font-size: 1rem; margin-left: 0.5rem;">$${collection.originalPrice}</span>` : ""}
        </div>
        <div class="collection-actions">
          <button class="action-btn" onclick="event.stopPropagation(); addCollectionToCart(${collection.id})">
            Add to Cart
          </button>
          <button class="action-btn" onclick="event.stopPropagation(); previewCollection(${collection.id})">
            Preview
          </button>
        </div>
      </div>
    </div>
  `;

  return card;
}

// Filter functions
function filterByCategory(category) {
  selectedCategory = selectedCategory === category ? "" : category;
  
  // Update active state
  document.querySelectorAll(".category-item").forEach(item => {
    item.classList.toggle("active", item.textContent.includes(category) && selectedCategory);
  });

  // Update dropdown
  document.getElementById("categoryFilter").value = selectedCategory;

  applyFilters();
}

function filterByCurator(curator) {
  // Filter by curator
  filteredCollections = collectionsData.filter(collection => collection.curator === curator);
  currentPage = 1;
  loadCollections();
}

function filterByTag(tag) {
  // Filter by tag
  filteredCollections = collectionsData.filter(collection => collection.tags.includes(tag));
  currentPage = 1;
  loadCollections();
}

function filterCollections() {
  selectedCategory = document.getElementById("categoryFilter").value;
  applyFilters();
}

function applyFilters() {
  const sortBy = document.getElementById("sortFilter").value;

  // Filter collections
  filteredCollections = collectionsData.filter(collection => {
    if (selectedCategory && collection.category !== selectedCategory) return false;
    return true;
  });

  // Sort collections
  switch (sortBy) {
    case "popular":
      filteredCollections.sort((a, b) => b.views - a.views);
      break;
    case "photos":
      filteredCollections.sort((a, b) => b.photos.length - a.photos.length);
      break;
    case "alphabetical":
      filteredCollections.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default: // newest
      filteredCollections.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
  }

  currentPage = 1;
  loadCollections();
}

// View mode functions
function setViewMode(mode) {
  viewMode = mode;

  document.getElementById("gridView").classList.toggle("active", mode === "grid");
  document.getElementById("listView").classList.toggle("active", mode === "list");

  loadCollections();
}

// Collection modal functions
function openCollectionModal(collectionId) {
  const collection = collectionsData.find(c => c.id === collectionId);
  if (!collection) return;

  const modal = document.getElementById("collectionModal");
  const modalTitle = document.getElementById("collectionModalTitle");
  const modalBody = document.getElementById("collectionModalBody");

  modalTitle.textContent = collection.title;

  modalBody.innerHTML = `
    <div class="modal-collection-header">
      <h2 class="modal-collection-title">${collection.title}</h2>
      <div class="modal-collection-curator">Curated by ${collection.curator}</div>
      <p class="modal-collection-description">${collection.description}</p>
      
      <div class="modal-collection-stats">
        <div class="modal-stat-item">
          <div class="modal-stat-value">${collection.photos.length}</div>
          <div class="modal-stat-label">Photos</div>
        </div>
        <div class="modal-stat-item">
          <div class="modal-stat-value">${collection.likes}</div>
          <div class="modal-stat-label">Likes</div>
        </div>
        <div class="modal-stat-item">
          <div class="modal-stat-value">${collection.views}</div>
          <div class="modal-stat-label">Views</div>
        </div>
        <div class="modal-stat-item">
          <div class="modal-stat-value">$${collection.price}</div>
          <div class="modal-stat-label">Price</div>
        </div>
      </div>
    </div>

    <div class="modal-collection-photos">
      ${collection.photos.map(photo => `
        <div class="modal-photo-item" onclick="viewPhotoDetail(${photo.id})">
          <img src="${photo.image}" alt="${photo.title}">
          <div class="modal-photo-overlay">
            <div class="modal-photo-title">${photo.title}</div>
            <div class="modal-photo-price">$${photo.price}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  modal.style.display = "block";
}

function closeCollectionModal() {
  document.getElementById("collectionModal").style.display = "none";
}

function previewCollection(collectionId) {
  openCollectionModal(collectionId);
}

// Cart functions
function addCollectionToCart(collectionId) {
  const collection = collectionsData.find(c => c.id === collectionId);
  if (!collection) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Check if collection already in cart
  const existingItem = cart.find(item => item.id === `collection_${collectionId}`);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: `collection_${collectionId}`,
      title: collection.title,
      photographer: collection.curator,
      price: collection.price,
      image: collection.photos[0].image,
      quantity: 1,
      type: "collection"
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification(`${collection.title} collection added to cart!`, "success");
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        searchCollections(query);
      } else if (query.length === 0) {
        filteredCollections = [...collectionsData];
        currentPage = 1;
        loadCollections();
      }
    });
  }
}

function searchCollections(query) {
  const searchTerm = query.toLowerCase();

  filteredCollections = collectionsData.filter(collection => {
    return (
      collection.title.toLowerCase().includes(searchTerm) ||
      collection.description.toLowerCase().includes(searchTerm) ||
      collection.curator.toLowerCase().includes(searchTerm) ||
      collection.category.toLowerCase().includes(searchTerm) ||
      collection.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  currentPage = 1;
  loadCollections();
}

// Pagination
function updatePagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(filteredCollections.length / collectionsPerPage);

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  let paginationHTML = "";

  // Previous button
  paginationHTML += `
    <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      paginationHTML += `
        <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ""}>
          ${i}
        </button>
      `;
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      paginationHTML += "<button disabled>...</button>";
    }
  }

  // Next button
  paginationHTML += `
    <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredCollections.length / collectionsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  loadCollections();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Utility functions
function viewPhotoDetail(photoId) {
  localStorage.setItem("selectedPhotoId", photoId);
  window.location.href = "product-detail.html";
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${
      type === "error"
        ? "linear-gradient(135deg, #ef4444, #dc2626)"
        : type === "success"
          ? "linear-gradient(135deg, #10b981, #059669)"
          : "linear-gradient(135deg, #06b6d4, #3b82f6)"
    };
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    z-index: 3000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Update mini profile avatar in navbar
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");
  const mini = document.getElementById("profileMini");
  if (mini && user) {
    mini.src = user.avatar && user.avatar.trim() !== ""
      ? user.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}`;
    mini.alt = user.name || "Profile";
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

// Cart functions
function openCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = "block";
  loadCartItems();
}

function closeCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = "none";
}

function loadCartItems() {
  const container = document.getElementById("cartItems");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #64748b;">
        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cart
    .map(item => `
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-bottom: 1px solid rgba(71, 85, 105, 0.5);">
        <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
        <div style="flex: 1;">
          <h4 style="margin: 0 0 0.25rem 0; color: #f1f5f9;">${item.title}</h4>
          <p style="margin: 0; color: #64748b; font-size: 0.875rem;">by ${item.photographer}</p>
          <p style="margin: 0.25rem 0 0 0; color: #06b6d4; font-weight: 600;">$${item.price}</p>
        </div>
        <button onclick="removeFromCart('${item.id}')" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 0.5rem;">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `)
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cartTotal").textContent = total.toFixed(2);
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  loadCartItems();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Close modal when clicking outside
window.onclick = (event) => {
  const collectionModal = document.getElementById("collectionModal");
  const cartModal = document.getElementById("cartModal");

  if (event.target === collectionModal) {
    closeCollectionModal();
  }
  if (event.target === cartModal) {
    closeCart();
  }
};


