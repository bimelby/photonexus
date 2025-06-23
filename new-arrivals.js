// New Arrivals data (sample data, extend as needed)
const newArrivalsData = [
  {
    id: 1001,
    title: "Aurora Borealis Dance",
    photographer: "Astral Lens",
    price: 320,
    originalPrice: 380,
    category: "Space",
    image: "https://images.unsplash.com/photo-1534790566957-c3ad3a32756b?w=600&h=400&fit=crop",
    rating: 4.9,
    downloads: 150,
    tags: ["aurora", "night sky", "nature", "space"],
    resolution: "7000x4500",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A breathtaking capture of the Northern Lights dancing across the Arctic sky.",
    dateAdded: "2024-03-10"
  },
  {
    id: 1002,
    title: "Neon City Rain",
    photographer: "Urban Glimpse",
    price: 280,
    originalPrice: 330,
    category: "Urban",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop",
    rating: 4.8,
    downloads: 120,
    tags: ["city", "rain", "neon", "night"],
    resolution: "6000x4000",
    format: "JPEG",
    license: "Standard",
    description: "Vibrant neon reflections on wet city streets after a heavy downpour.",
    dateAdded: "2024-03-08"
  },
  {
    id: 1003,
    title: "Whispering Forest",
    photographer: "Green Canopy",
    price: 250,
    originalPrice: 300,
    category: "Nature",
    image: "https://images.unsplash.com/photo-1500382017468-9049ce8b650c?w=600&h=400&fit=crop",
    rating: 4.7,
    downloads: 90,
    tags: ["forest", "trees", "mist", "peaceful"],
    resolution: "5500x3500",
    format: "RAW",
    license: "Extended",
    description: "An ethereal view of a misty forest, evoking a sense of calm and mystery.",
    dateAdded: "2024-03-05"
  },
  {
    id: 1004,
    title: "Abstract Light Trails",
    photographer: "Luminous Art",
    price: 200,
    originalPrice: 240,
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop",
    rating: 4.6,
    downloads: 80,
    tags: ["abstract", "light", "motion", "colorful"],
    resolution: "4000x6000",
    format: "JPEG",
    license: "Standard",
    description: "Dynamic light trails creating an abstract masterpiece.",
    dateAdded: "2024-03-03"
  },
  {
    id: 1005,
    title: "Desert Nomad",
    photographer: "Wanderlust Captures",
    price: 290,
    originalPrice: 340,
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1518098268026-c2579495774a?w=600&h=400&fit=crop",
    rating: 4.8,
    downloads: 110,
    tags: ["desert", "travel", "adventure", "landscape"],
    resolution: "6500x4200",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A lone figure traversing vast desert dunes under a dramatic sky.",
    dateAdded: "2024-03-01"
  },
  {
    id: 1006,
    title: "Vintage Camera Still Life",
    photographer: "Timeless Frames",
    price: 180,
    originalPrice: 210,
    category: "Still Life",
    image: "https://images.unsplash.com/photo-1510127034255-43e3870c222c?w=600&h=400&fit=crop",
    rating: 4.5,
    downloads: 70,
    tags: ["vintage", "camera", "still life", "retro"],
    resolution: "4000x3000",
    format: "JPEG",
    license: "Standard",
    description: "A classic vintage camera beautifully arranged as a still life.",
    dateAdded: "2024-02-28"
  },
  {
    id: 1007,
    title: "Underwater Symphony",
    photographer: "Deep Blue Vision",
    price: 350,
    originalPrice: 400,
    category: "Underwater",
    image: "https://images.unsplash.com/photo-1503756234508-e358dbe5dd4a?w=600&h=400&fit=crop",
    rating: 4.9,
    downloads: 130,
    tags: ["underwater", "ocean", "marine life", "coral"],
    resolution: "7500x5000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A vibrant underwater scene teeming with colorful marine life.",
    dateAdded: "2024-02-25"
  },
  {
    id: 1008,
    title: "Minimalist Architecture",
    photographer: "Clean Lines Studio",
    price: 260,
    originalPrice: 310,
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop",
    rating: 4.7,
    downloads: 95,
    tags: ["architecture", "minimalist", "modern", "design"],
    resolution: "5000x7000",
    format: "JPEG",
    license: "Standard",
    description: "Striking minimalist architecture with clean lines and geometric forms.",
    dateAdded: "2024-02-22"
  }
];

// Global variables
let filteredNewArrivals = [...newArrivalsData];
let currentPage = 1;
const photosPerPage = 6;
let viewMode = "grid";
let selectedCategory = "";
let selectedPhotographer = "";
let minPriceFilter = 0;
let maxPriceFilter = 1000;

// Initialize new arrivals page
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedArrivals();
  loadCategories();
  loadPhotographers();
  loadTrendingPhotos();
  loadNewArrivals();
  setupPriceRange();
  setupSearch();
  updateCartCount();
});

// Load featured new arrivals
function loadFeaturedArrivals() {
  const featuredContainer = document.getElementById("featuredArrivals");
  // Get the 3 most recent photos as featured
  const featured = [...newArrivalsData]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 3);

  if (!featuredContainer) return;
  featuredContainer.innerHTML = "";

  featured.forEach(photo => {
    const photoCard = createNewArrivalPhotoCard(photo); // Using local createNewArrivalPhotoCard
    featuredContainer.appendChild(photoCard);
  });
}

// Load categories
function loadCategories() {
  const categoriesContainer = document.getElementById("categoryList");
  const categoryFilter = document.getElementById("categoryFilter");

  // Get unique categories with counts
  const categories = {};
  newArrivalsData.forEach(photo => {
    categories[photo.category] = (categories[photo.category] || 0) + 1;
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

// Load photographers
function loadPhotographers() {
  const photographersContainer = document.getElementById("photographersList");

  // Get unique photographers with counts
  const photographers = {};
  newArrivalsData.forEach(photo => {
    photographers[photo.photographer] = (photographers[photo.photographer] || 0) + 1;
  });

  // Sort photographers by number of photos
  const sortedPhotographers = Object.entries(photographers)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5); // Limit to top 5

  photographersContainer.innerHTML = sortedPhotographers
    .map(([photographer, count]) => `
      <div class="photographer-item" onclick="filterByPhotographer('${photographer}')">
        <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(photographer)}&background=06b6d4&color=fff" alt="${photographer}" class="photographer-avatar">
        <span>${photographer}</span>
        <span class="item-count">${count}</span>
      </div>
    `).join("");
}

// Load trending photos
function loadTrendingPhotos() {
  const trendingContainer = document.getElementById("trendingPhotos");

  // Sort photos by downloads (as a proxy for trending)
  const trending = [...newArrivalsData]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 3); // Limit to top 3

  trendingContainer.innerHTML = trending
    .map(photo => `
      <div class="trending-item" onclick="openPhotoModal(${photo.id})">
        <img src="${photo.image}" alt="${photo.title}">
        <div class="trending-info">
          <div class="trending-title">${photo.title}</div>
          <div class="trending-photographer">by ${photo.photographer}</div>
        </div>
      </div>
    `).join("");
}

// Setup price range sliders
function setupPriceRange() {
  const minSlider = document.getElementById("minPrice");
  const maxSlider = document.getElementById("maxPrice");
  const minDisplay = document.getElementById("minPriceValue");
  const maxDisplay = document.getElementById("maxPriceValue");

  minSlider.addEventListener("input", () => {
    let minVal = parseInt(minSlider.value);
    let maxVal = parseInt(maxSlider.value);
    if (minVal > maxVal) {
      minSlider.value = maxVal;
      minVal = maxVal;
    }
    minDisplay.textContent = minVal;
  });

  maxSlider.addEventListener("input", () => {
    let minVal = parseInt(minSlider.value);
    let maxVal = parseInt(maxSlider.value);
    if (maxVal < minVal) {
      maxSlider.value = minVal;
      maxVal = minVal;
    }
    maxDisplay.textContent = maxVal;
  });

  // Initialize display values
  minDisplay.textContent = minSlider.value;
  maxDisplay.textContent = maxSlider.value;
}

// Apply price filter
function applyPriceFilter() {
  minPriceFilter = parseInt(document.getElementById("minPrice").value);
  maxPriceFilter = parseInt(document.getElementById("maxPrice").value);
  applyFilters();
}

// Load and display new arrivals
function loadNewArrivals() {
  const container = document.getElementById("newArrivalsGrid");
  const resultsCount = document.getElementById("resultsCount");

  // Calculate pagination
  const startIndex = (currentPage - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;
  const photosToShow = filteredNewArrivals.slice(startIndex, endIndex);

  // Update results count
  resultsCount.textContent = `${startIndex + 1}-${Math.min(endIndex, filteredNewArrivals.length)} of ${filteredNewArrivals.length}`;

  // Clear container
  container.innerHTML = "";
  container.className = `new-arrivals-grid ${viewMode}-view`;

  if (photosToShow.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No new arrivals found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    return;
  }

  // Create photo cards
  photosToShow.forEach(photo => {
    const card = createNewArrivalPhotoCard(photo);
    container.appendChild(card);
  });

  // Update pagination
  updatePagination();
}

// Create photo card for new arrivals (similar to catalog.js)
function createNewArrivalPhotoCard(photo) {
  const card = document.createElement("div");
  card.className = `photo-card ${viewMode === "list" ? "list-view" : ""}`;
  card.onclick = () => openPhotoModal(photo.id);

  const detailsHTML =
    viewMode === "list"
      ? `
    <div class="photo-details">
      <div class="detail-row">
        <span>Resolution:</span>
        <span>${photo.resolution}</span>
      </div>
      <div class="detail-row">
        <span>Format:</span>
        <span>${photo.format}</span>
      </div>
      <div class="detail-row">
        <span>License:</span>
        <span>${photo.license}</span>
      </div>
      <div class="photo-tags">
        ${photo.tags.map((tag) => `<span class="photo-tag">${tag}</span>`).join("")}
      </div>
    </div>
  `
      : "";

  card.innerHTML = `
    <div class="photo-image">
      <img src="${photo.image}" alt="${photo.title}" loading="lazy">
      <div class="photo-badge">${photo.category}</div>
      ${photo.originalPrice > photo.price ? '<div class="photo-badge sale-badge">Sale</div>' : ""}
      <div class="photo-overlay">
        <div class="photo-rating">
          <i class="fas fa-star"></i>
          <span>${photo.rating}</span>
        </div>
        <div class="photo-downloads">
          <i class="fas fa-download"></i>
          ${photo.downloads}
        </div>
      </div>
    </div>
    <div class="photo-content">
      <h3 class="photo-title">${photo.title}</h3>
      <p class="photo-photographer">by ${photo.photographer}</p>
      ${detailsHTML}
      <div class="photo-footer">
        <div class="photo-pricing">
          <div class="photo-price">$${photo.price}</div>
          ${photo.originalPrice > photo.price ? `<div class="photo-original-price">$${photo.originalPrice}</div>` : ""}
        </div>
        <div class="photo-actions">
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openPhotoModal(${photo.id})">
            Preview
          </button>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${photo.id})">
            <i class="fas fa-shopping-cart"></i> Add to Cart
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

  // Update active state in sidebar
  document.querySelectorAll(".category-item").forEach(item => {
    item.classList.toggle("active", item.textContent.includes(category) && selectedCategory);
  });

  // Update dropdown
  document.getElementById("categoryFilter").value = selectedCategory;

  applyFilters();
}

function filterByPhotographer(photographer) {
  selectedPhotographer = selectedPhotographer === photographer ? "" : photographer;

  // Update active state in sidebar
  document.querySelectorAll(".photographer-item").forEach(item => {
    item.classList.toggle("active", item.textContent.includes(photographer) && selectedPhotographer);
  });

  applyFilters();
}

function filterNewArrivals() {
  selectedCategory = document.getElementById("categoryFilter").value;
  // selectedPhotographer is handled by filterByPhotographer directly
  applyFilters();
}

function applyFilters() {
  const sortBy = document.getElementById("sortFilter").value;

  // Filter by category and photographer
  filteredNewArrivals = newArrivalsData.filter(photo => {
    if (selectedCategory && photo.category !== selectedCategory) return false;
    if (selectedPhotographer && photo.photographer !== selectedPhotographer) return false;
    if (photo.price < minPriceFilter || photo.price > maxPriceFilter) return false;
    return true;
  });

  // Sort photos
  switch (sortBy) {
    case "price-low":
      filteredNewArrivals.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredNewArrivals.sort((a, b) => b.price - a.price);
      break;
    case "popular":
      filteredNewArrivals.sort((a, b) => b.downloads - a.downloads);
      break;
    default: // newest
      filteredNewArrivals.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  }

  currentPage = 1;
  loadNewArrivals();
}

// View mode functions
function setViewMode(mode) {
  viewMode = mode;

  document.getElementById("gridView").classList.toggle("active", mode === "grid");
  document.getElementById("listView").classList.toggle("active", mode === "list");

  loadNewArrivals();
}

// Photo Modal functions
function openPhotoModal(photoId) {
  const photo = newArrivalsData.find(p => p.id === photoId);
  if (!photo) return;

  const modal = document.getElementById("photoModal");
  const modalTitle = document.getElementById("photoModalTitle");
  const modalBody = document.getElementById("photoModalBody");

  modalTitle.textContent = photo.title;

  modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <img src="${photo.image}" alt="${photo.title}" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px;">
      <div style="padding: 0 1rem;">
        <h3 style="color: #f1f5f9; margin-bottom: 0.5rem;">${photo.title}</h3>
        <p style="color: #64748b; margin-bottom: 1rem;">by ${photo.photographer}</p>
        <p style="color: #cbd5e1; margin-bottom: 1.5rem;">${photo.description}</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
          <div>
            <strong style="color: #06b6d4;">Category:</strong>
            <span style="color: #cbd5e1;">${photo.category}</span>
          </div>
          <div>
            <strong style="color: #06b6d4;">Resolution:</strong>
            <span style="color: #cbd5e1;">${photo.resolution}</span>
          </div>
          <div>
            <strong style="color: #06b6d4;">Format:</strong>
            <span style="color: #cbd5e1;">${photo.format}</span>
          </div>
          <div>
            <strong style="color: #06b6d4;">License:</strong>
            <span style="color: #cbd5e1;">${photo.license}</span>
          </div>
          <div>
            <strong style="color: #06b6d4;">Rating:</strong>
            <span style="color: #cbd5e1;"><i class="fas fa-star" style="color: #fbbf24;"></i> ${photo.rating}</span>
          </div>
          <div>
            <strong style="color: #06b6d4;">Downloads:</strong>
            <span style="color: #cbd5e1;"><i class="fas fa-download"></i> ${photo.downloads}</span>
          </div>
        </div>

        <div class="photo-tags" style="margin-bottom: 1.5rem;">
          ${photo.tags.map(tag => `<span class="photo-tag">${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `;

  const modalFooter = modal.querySelector(".modal-footer");
  if (modalFooter) {
    modalFooter.innerHTML = `
      <div style="font-size: 1.5rem; font-weight: bold; color: #06b6d4;">$${photo.price}</div>
      <button class="btn btn-primary" onclick="addToCart(${photo.id}); closePhotoModal();">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
    `;
  }

  modal.style.display = "block";
}

function closePhotoModal() {
  document.getElementById("photoModal").style.display = "none";
}

// Pagination
function updatePagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(filteredNewArrivals.length / photosPerPage);

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
  const totalPages = Math.ceil(filteredNewArrivals.length / photosPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  loadNewArrivals();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        searchNewArrivals(query);
      } else if (query.length === 0) {
        filteredNewArrivals = [...newArrivalsData];
        currentPage = 1;
        loadNewArrivals();
      }
    });
  }
}

function searchNewArrivals(query) {
  const searchTerm = query.toLowerCase();

  filteredNewArrivals = newArrivalsData.filter(photo => {
    return (
      photo.title.toLowerCase().includes(searchTerm) ||
      photo.photographer.toLowerCase().includes(searchTerm) ||
      photo.category.toLowerCase().includes(searchTerm) ||
      photo.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  currentPage = 1;
  loadNewArrivals();
}

// Utility functions (re-using from script.js or defining locally if needed)
// Note: addToCart, updateCartCount, openCart, closeCart, loadCartItems, removeFromCart, showNotification, toggleMobileMenu
// are assumed to be available globally from script.js or defined in this file if not.
// For this response, I'll assume they are global from script.js as per the HTML includes.

// Close modal when clicking outside
window.onclick = (event) => {
  const photoModal = document.getElementById("photoModal");
  const cartModal = document.getElementById("cartModal");

  if (event.target === photoModal) {
    closePhotoModal();
  }
  if (event.target === cartModal) {
    closeCart();
  }
};
