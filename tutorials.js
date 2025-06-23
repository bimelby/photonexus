// Tutorials data
const tutorialsData = [
  {
    id: 1,
    title: "Complete Guide to Portrait Photography",
    excerpt: "Master the art of portrait photography with professional lighting techniques and posing tips.",
    category: "Portrait",
    difficulty: "intermediate",
    duration: "45 min",
    lessons: 8,
    instructor: "Sarah Johnson",
    rating: 4.9,
    views: 15420,
    image: "https://images.unsplash.com/photo-1554048612-b6a482b224b8?w=600&h=400&fit=crop",
    featured: true,
    tags: ["portrait", "lighting", "posing", "studio"],
    description: "Learn professional portrait photography techniques from setup to final edit.",
  },
  {
    id: 2,
    title: "Landscape Photography Fundamentals",
    excerpt: "Capture breathtaking landscapes with composition rules and natural lighting techniques.",
    category: "Landscape",
    difficulty: "beginner",
    duration: "30 min",
    lessons: 6,
    instructor: "Michael Chen",
    rating: 4.8,
    views: 12350,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    featured: false,
    tags: ["landscape", "composition", "golden hour", "filters"],
    description: "Essential techniques for capturing stunning landscape photographs.",
  },
  {
    id: 3,
    title: "Street Photography Masterclass",
    excerpt: "Learn to capture authentic moments and tell stories through street photography.",
    category: "Street",
    difficulty: "advanced",
    duration: "60 min",
    lessons: 10,
    instructor: "Elena Rodriguez",
    rating: 4.7,
    views: 9800,
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
    featured: false,
    tags: ["street", "candid", "storytelling", "urban"],
    description: "Advanced street photography techniques for capturing life in motion.",
  },
  {
    id: 4,
    title: "Macro Photography Basics",
    excerpt: "Explore the miniature world with close-up photography techniques and equipment.",
    category: "Macro",
    difficulty: "beginner",
    duration: "25 min",
    lessons: 5,
    instructor: "David Kim",
    rating: 4.6,
    views: 8750,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    featured: false,
    tags: ["macro", "close-up", "equipment", "lighting"],
    description: "Discover the fascinating world of macro photography.",
  },
  {
    id: 5,
    title: "Night Photography Techniques",
    excerpt: "Master low-light photography with long exposure and astrophotography techniques.",
    category: "Night",
    difficulty: "advanced",
    duration: "50 min",
    lessons: 9,
    instructor: "Alex Thompson",
    rating: 4.8,
    views: 11200,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    featured: false,
    tags: ["night", "long exposure", "stars", "astrophotography"],
    description: "Capture stunning images in challenging low-light conditions.",
  },
  {
    id: 6,
    title: "Wildlife Photography Safari",
    excerpt: "Learn patience, preparation, and ethical practices for wildlife photography.",
    category: "Wildlife",
    difficulty: "intermediate",
    duration: "40 min",
    lessons: 7,
    instructor: "Jennifer Park",
    rating: 4.9,
    views: 13500,
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600&h=400&fit=crop",
    featured: false,
    tags: ["wildlife", "nature", "telephoto", "ethics"],
    description: "Ethical wildlife photography techniques and best practices.",
  }
];

// Global variables
let filteredTutorials = [...tutorialsData];
let currentPage = 1;
const tutorialsPerPage = 6;
let selectedCategory = "";
let selectedDifficulty = "";

// Initialize tutorials page
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedTutorial();
  loadCategories();
  loadDifficultyLevels();
  loadPopularTutorials();
  loadTutorials();
  setupSearch();
  updateCartCount();
});

// Load featured tutorial
function loadFeaturedTutorial() {
  const featuredContainer = document.getElementById("featuredTutorial");
  const featured = tutorialsData.find(tutorial => tutorial.featured);

  if (!featured) return;

  featuredContainer.innerHTML = `
    <div class="featured-card" onclick="viewTutorial(${featured.id})">
      <img src="${featured.image}" alt="${featured.title}" class="featured-image">
      <div class="featured-badge">Featured</div>
      <div class="tutorial-difficulty ${featured.difficulty}">${featured.difficulty}</div>
      <div class="featured-overlay">
        <div class="featured-category">${featured.category}</div>
        <h2 class="featured-title">${featured.title}</h2>
        <p class="featured-excerpt">${featured.excerpt}</p>
        <div class="featured-meta">
          <div class="tutorial-duration">
            <i class="fas fa-clock"></i>
            <span>${featured.duration}</span>
          </div>
          <div class="tutorial-lessons">
            <i class="fas fa-play-circle"></i>
            <span>${featured.lessons} lessons</span>
          </div>
          <div class="tutorial-rating">
            <i class="fas fa-star"></i>
            <span>${featured.rating}</span>
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
  tutorialsData.forEach(tutorial => {
    categories[tutorial.category] = (categories[tutorial.category] || 0) + 1;
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

// Load difficulty levels
function loadDifficultyLevels() {
  const difficultyContainer = document.getElementById("difficultyList");

  const difficulties = {};
  tutorialsData.forEach(tutorial => {
    difficulties[tutorial.difficulty] = (difficulties[tutorial.difficulty] || 0) + 1;
  });

  difficultyContainer.innerHTML = Object.entries(difficulties)
    .map(([difficulty, count]) => `
      <div class="difficulty-item" onclick="filterByDifficulty('${difficulty}')">
        <span>${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>
        <span class="item-count">${count}</span>
      </div>
    `).join("");
}

// Load popular tutorials
function loadPopularTutorials() {
  const popularContainer = document.getElementById("popularTutorials");

  const popular = tutorialsData
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  popularContainer.innerHTML = popular
    .map(tutorial => `
      <div class="popular-item" onclick="viewTutorial(${tutorial.id})">
        <img src="${tutorial.image}" alt="${tutorial.title}" class="popular-image">
        <div class="popular-content">
          <div class="popular-title">${tutorial.title}</div>
          <div class="popular-meta">
            <span>${tutorial.duration}</span>
            <span>${tutorial.views} views</span>
          </div>
        </div>
      </div>
    `).join("");
}

// Load tutorials
// Load tutorials
function loadTutorials() {
  const container = document.getElementById("tutorialsGrid");
  const resultsCount = document.getElementById("resultsCount");

  // Calculate pagination
  const startIndex = (currentPage - 1) * tutorialsPerPage;
  const endIndex = startIndex + tutorialsPerPage;
  const tutorialsToShow = filteredTutorials.slice(startIndex, endIndex);

  // Update results count
  resultsCount.textContent = filteredTutorials.length;

  // Clear container
  container.innerHTML = "";

  if (tutorialsToShow.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No tutorials found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    return;
  }

  // Create tutorial cards
  tutorialsToShow.forEach(tutorial => {
    const card = createTutorialCard(tutorial);
    container.appendChild(card);
  });

  // Update pagination
  updatePagination();
}

// Create tutorial card
function createTutorialCard(tutorial) {
  const card = document.createElement("div");
  card.className = "tutorial-card";
  card.onclick = () => viewTutorial(tutorial.id);

  card.innerHTML = `
    <div class="tutorial-image">
      <img src="${tutorial.image}" alt="${tutorial.title}" loading="lazy">
      <div class="tutorial-play-btn">
        <i class="fas fa-play"></i>
      </div>
      <div class="tutorial-duration-badge">${tutorial.duration}</div>
    </div>
    <div class="tutorial-content">
      <div class="tutorial-category">${tutorial.category}</div>
      <h3 class="tutorial-title">${tutorial.title}</h3>
      <p class="tutorial-excerpt">${tutorial.excerpt}</p>
      <div class="tutorial-meta">
        <div class="tutorial-instructor">
          <i class="fas fa-user"></i>
          <span>${tutorial.instructor}</span>
        </div>
        <div class="tutorial-stats">
          <span>${tutorial.lessons} lessons</span>
          <span>${tutorial.views} views</span>
        </div>
      </div>
      <div class="tutorial-footer">
        <div class="tutorial-difficulty-badge ${tutorial.difficulty}">
          ${tutorial.difficulty}
        </div>
        <div class="tutorial-rating">
          <i class="fas fa-star"></i>
          <span>${tutorial.rating}</span>
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

function filterByDifficulty(difficulty) {
  selectedDifficulty = selectedDifficulty === difficulty ? "" : difficulty;
  
  // Update active state
  document.querySelectorAll(".difficulty-item").forEach(item => {
    item.classList.toggle("active", item.textContent.toLowerCase().includes(difficulty) && selectedDifficulty);
  });

  // Update dropdown
  document.getElementById("difficultyFilter").value = selectedDifficulty;

  applyFilters();
}

function filterTutorials() {
  selectedCategory = document.getElementById("categoryFilter").value;
  selectedDifficulty = document.getElementById("difficultyFilter").value;
  applyFilters();
}

function applyFilters() {
  const sortBy = document.getElementById("sortFilter").value;

  // Filter tutorials
  filteredTutorials = tutorialsData.filter(tutorial => {
    if (selectedCategory && tutorial.category !== selectedCategory) return false;
    if (selectedDifficulty && tutorial.difficulty !== selectedDifficulty) return false;
    return true;
  });

  // Sort tutorials
  switch (sortBy) {
    case "popular":
      filteredTutorials.sort((a, b) => b.views - a.views);
      break;
    case "rating":
      filteredTutorials.sort((a, b) => b.rating - a.rating);
      break;
    case "duration":
      filteredTutorials.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
      break;
    default: // newest
      filteredTutorials.sort((a, b) => b.id - a.id);
  }

  currentPage = 1;
  loadTutorials();
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        searchTutorials(query);
      } else if (query.length === 0) {
        filteredTutorials = [...tutorialsData];
        currentPage = 1;
        loadTutorials();
      }
    });
  }
}

function searchTutorials(query) {
  const searchTerm = query.toLowerCase();

  filteredTutorials = tutorialsData.filter(tutorial => {
    return (
      tutorial.title.toLowerCase().includes(searchTerm) ||
      tutorial.excerpt.toLowerCase().includes(searchTerm) ||
      tutorial.instructor.toLowerCase().includes(searchTerm) ||
      tutorial.category.toLowerCase().includes(searchTerm) ||
      tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  currentPage = 1;
  loadTutorials();
}

// Pagination
function updatePagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(filteredTutorials.length / tutorialsPerPage);

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
  const totalPages = Math.ceil(filteredTutorials.length / tutorialsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  loadTutorials();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// View tutorial
function viewTutorial(tutorialId) {
  localStorage.setItem("selectedTutorialId", tutorialId);
  window.location.href = "tutorial-detail.html";
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
  const modal = document.getElementById("cartModal");
  if (event.target === modal) {
    closeCart();
  }
};

