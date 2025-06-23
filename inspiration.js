// Inspiration data
const inspirationData = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    artist: "Sarah Johnson",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=400&h=600&fit=crop",
    likes: 1250,
    views: 8500,
    featured: true,
    tags: ["portrait", "golden hour", "natural light"],
    description: "A stunning portrait captured during the golden hour with beautiful natural lighting.",
  },
  {
    id: 2,
    title: "Mountain Reflection",
    artist: "Michael Chen",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
    likes: 980,
    views: 6200,
    featured: true,
    tags: ["landscape", "mountains", "reflection"],
    description: "Serene mountain landscape with perfect reflection in still water.",
  },
  {
    id: 3,
    title: "Urban Geometry",
    artist: "Elena Rodriguez",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=700&fit=crop",
    likes: 750,
    views: 4800,
    featured: true,
    tags: ["architecture", "urban", "geometry"],
    description: "Modern architectural photography showcasing geometric patterns.",
  },
  {
    id: 4,
    title: "Street Life",
    artist: "David Park",
    category: "Street",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=600&fit=crop",
    likes: 1100,
    views: 7300,
    featured: false,
    tags: ["street", "candid", "urban life"],
    description: "Candid street photography capturing authentic moments of city life.",
  },
  {
    id: 5,
    title: "Macro Wonder",
    artist: "Lisa Wang",
    category: "Macro",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
    likes: 650,
    views: 3900,
    featured: false,
    tags: ["macro", "nature", "close-up"],
    description: "Intricate macro photography revealing the hidden beauty of nature.",
  },
  {
    id: 6,
    title: "Starry Night",
    artist: "Alex Thompson",
    category: "Astrophotography",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
    likes: 1400,
    views: 9200,
    featured: false,
    tags: ["stars", "night", "astrophotography"],
    description: "Breathtaking astrophotography capturing the beauty of the night sky.",
  },
  {
    id: 7,
    title: "Wildlife Portrait",
    artist: "Jennifer Park",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=500&fit=crop",
    likes: 890,
    views: 5600,
    featured: false,
    tags: ["wildlife", "nature", "animal"],
    description: "Intimate wildlife portrait showcasing the beauty of nature's creatures.",
  },
  {
    id: 8,
    title: "Abstract Colors",
    artist: "Maria Rodriguez",
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=700&fit=crop",
    likes: 720,
    views: 4200,
    featured: false,
    tags: ["abstract", "colors", "artistic"],
    description: "Creative abstract photography with vibrant colors and flowing forms.",
  }
];

// Global variables
let filteredInspiration = [...inspirationData];
let currentPage = 1;
let imagesPerLoad = 12;
let viewMode = "masonry";
let selectedCategory = "";

// Initialize inspiration page
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedGallery();
  loadCategories();
  loadFeaturedArtists();
  loadTrendingTags();
  loadInspiration();
  setupSearch();
  updateCartCount();
});

// Load featured gallery
function loadFeaturedGallery() {
  const featuredContainer = document.getElementById("featuredGrid");
  const featured = inspirationData.filter(item => item.featured);

  featuredContainer.innerHTML = featured
    .map(item => `
      <div class="featured-item" onclick="openImageModal(${item.id})">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="featured-overlay">
          <div class="featured-title">${item.title}</div>
          <div class="featured-artist">by ${item.artist}</div>
          <div class="featured-stats">
            <span><i class="fas fa-heart"></i> ${item.likes}</span>
            <span><i class="fas fa-eye"></i> ${item.views}</span>
          </div>
        </div>
      </div>
    `).join("");
}

// Load categories
function loadCategories() {
  const categoriesContainer = document.getElementById("categoryList");
  const categoryFilter = document.getElementById("categoryFilter");

  // Get unique categories with counts
  const categories = {};
  inspirationData.forEach(item => {
    categories[item.category] = (categories[item.category] || 0) + 1;
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

// Load featured artists
function loadFeaturedArtists() {
  const artistsContainer = document.getElementById("artistsList");

  // Get unique artists with stats
  const artists = {};
  inspirationData.forEach(item => {
    if (!artists[item.artist]) {
      artists[item.artist] = {
        name: item.artist,
        photos: 0,
        likes: 0,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.artist)}&background=06b6d4&color=fff`
      };
    }
    artists[item.artist].photos++;
    artists[item.artist].likes += item.likes;
  });

  const topArtists = Object.values(artists)
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 5);

  artistsContainer.innerHTML = topArtists
    .map(artist => `
      <div class="artist-item" onclick="filterByArtist('${artist.name}')">
        <img src="${artist.avatar}" alt="${artist.name}" class="artist-avatar">
        <div class="artist-info">
          <div class="artist-name">${artist.name}</div>
          <div class="artist-stats">
            <span>${artist.photos} photos</span>
            <span>${artist.likes} likes</span>
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
  inspirationData.forEach(item => {
    item.tags.forEach(tag => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });

  const topTags = Object.entries(tags)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);

  tagsContainer.innerHTML = topTags
    .map(([tag, count]) => `
      <span class="tag-item" onclick="filterByTag('${tag}')">${tag}</span>
    `).join("");
}

// Load inspiration images
function loadInspiration() {
  const container = document.getElementById("inspirationGrid");
  const resultsCount = document.getElementById("resultsCount");

  // Update results count
  resultsCount.textContent = filteredInspiration.length;

  // Get images to show
  const imagesToShow = filteredInspiration.slice(0, currentPage * imagesPerLoad);

  // Clear container
  container.innerHTML = "";

  if (imagesToShow.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No images found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    return;
  }

  // Create image items
  imagesToShow.forEach(item => {
    const imageItem = createInspirationItem(item);
    container.appendChild(imageItem);
  });

  // Update load more button
  updateLoadMoreButton();
}

// Create inspiration item
function createInspirationItem(item) {
  const div = document.createElement("div");
  div.className = "inspiration-item";
  div.onclick = () => openImageModal(item.id);

  div.innerHTML = `
    <img src="${item.image}" alt="${item.title}" loading="lazy">
    <div class="inspiration-overlay">
      <div class="inspiration-title">${item.title}</div>
      <div class="inspiration-artist">by ${item.artist}</div>
      <div class="inspiration-actions">
        <div class="inspiration-stats">
          <span><i class="fas fa-heart"></i> ${item.likes}</span>
          <span><i class="fas fa-eye"></i> ${item.views}</span>
        </div>
        <div class="inspiration-buttons">
          <button class="action-btn" onclick="event.stopPropagation(); likeImage(${item.id})">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn" onclick="event.stopPropagation(); shareImage(${item.id})">
            <i class="fas fa-share"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return div;
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

function filterByArtist(artist) {
  // Filter by artist
  filteredInspiration = inspirationData.filter(item => item.artist === artist);
  currentPage = 1;
  loadInspiration();
}

function filterByTag(tag) {
  // Filter by tag
  filteredInspiration = inspirationData.filter(item => item.tags.includes(tag));
  currentPage = 1;
  loadInspiration();
}

function filterInspiration() {
  selectedCategory = document.getElementById("categoryFilter").value;
  applyFilters();
}

function applyFilters() {
  const sortBy = document.getElementById("sortFilter").value;

  // Filter inspiration
  filteredInspiration = inspirationData.filter(item => {
    if (selectedCategory && item.category !== selectedCategory) return false;
    return true;
  });

  // Sort inspiration
  switch (sortBy) {
    case "popular":
      filteredInspiration.sort((a, b) => b.views - a.views);
      break;
    case "likes":
      filteredInspiration.sort((a, b) => b.likes - a.likes);
      break;
    case "views":
      filteredInspiration.sort((a, b) => b.views - a.views);
      break;
    default: // newest
      filteredInspiration.sort((a, b) => b.id - a.id);
  }

  currentPage = 1;
  loadInspiration();
}

// View mode functions
function setViewMode(mode) {
  viewMode = mode;

  document.getElementById("masonryView").classList.toggle("active", mode === "masonry");
  document.getElementById("gridView").classList.toggle("active", mode === "grid");

  const container = document.getElementById("inspirationGrid");
  container.className = `inspiration-grid ${mode}-view`;
}

// Load more images
function loadMoreImages() {
  currentPage++;
  loadInspiration();
}

function updateLoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const totalImages = filteredInspiration.length;
  const loadedImages = currentPage * imagesPerLoad;

  if (loadedImages >= totalImages) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

// Image modal functions
function openImageModal(imageId) {
  const image = inspirationData.find(item => item.id === imageId);
  if (!image) return;

  const modal = document.getElementById("imageModal");
  const modalTitle = document.getElementById("imageModalTitle");
  const modalBody = document.getElementById("imageModalBody");

  modalTitle.textContent = image.title;

  modalBody.innerHTML = `
    <div class="image-modal-body">
      <div class="modal-image">
        <img src="${image.image}" alt="${image.title}">
      </div>
      <div class="modal-details">
        <h3>${image.title}</h3>
        <div class="artist-name">by ${image.artist}</div>
        <div class="description">${image.description}</div>
        
        <div class="modal-stats">
          <div class="stat-item">
            <div class="stat-value">${image.likes}</div>
            <div class="stat-label">Likes</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${image.views}</div>
            <div class="stat-label">Views</div>
          </div>
        </div>

        <div class="tags-list">
          ${image.tags.map(tag => `<span class="tag-item">${tag}</span>`).join("")}
        </div>

        <div class="modal-actions">
          <button class="btn btn-primary" onclick="likeImage(${image.id})">
            <i class="fas fa-heart"></i> Like
          </button>
          <button class="btn btn-secondary" onclick="shareImage(${image.id})">
            <i class="fas fa-share"></i> Share
          </button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = "block";
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Action functions
function likeImage(imageId) {
  const image = inspirationData.find(item => item.id === imageId);
  if (image) {
    image.likes++;
    loadInspiration();
    showNotification("Image liked!", "success");
  }
}

function shareImage(imageId) {
  const image = inspirationData.find(item => item.id === imageId);
  if (image && navigator.share) {
    navigator.share({
      title: image.title,
      text: `Check out this amazing photo by ${image.artist}`,
      url: window.location.href
    });
  } else {
    // Fallback - copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    showNotification("Link copied to clipboard!", "success");
  }
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        searchInspiration(query);
      } else if (query.length === 0) {
        filteredInspiration = [...inspirationData];
        currentPage = 1;
        loadInspiration();
      }
    });
  }
}

function searchInspiration(query) {
  const searchTerm = query.toLowerCase();

  filteredInspiration = inspirationData.filter(item => {
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.artist.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  currentPage = 1;
  loadInspiration();
}

// Utility functions
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
        <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 0.5rem;">
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
  const imageModal = document.getElementById("imageModal");
  const cartModal = document.getElementById("cartModal");

  if (event.target === imageModal) {
    closeImageModal();
  }
  if (event.target === cartModal) {
    closeCart();
  }
};
