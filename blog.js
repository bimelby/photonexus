// Blog data
const blogData = [
  {
    id: 1,
    title: "Behind the Lens: My Journey into Photography",
    excerpt: "Discover how I started my photography journey and the lessons learned along the way.",
    content: "Photography has been my passion for over a decade. It all started with a simple point-and-shoot camera...",
    category: "Personal",
    author: "Sarah Johnson",
    date: "2024-01-20",
    image: "https://images.unsplash.com/photo-1554048612-b6a482b224b8?w=600&h=400&fit=crop",
    featured: true,
    views: 2450,
    comments: 18,
    tags: ["photography", "journey", "personal", "inspiration"],
  },
  {
    id: 2,
    title: "The Art of Street Photography: Capturing Life in Motion",
    excerpt: "Learn the techniques and mindset needed to excel in street photography.",
    content: "Street photography is about capturing the essence of life as it happens...",
    category: "Techniques",
    author: "Michael Chen",
    date: "2024-01-18",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
    featured: false,
    views: 1890,
    comments: 12,
    tags: ["street photography", "techniques", "urban", "candid"],
  },
  {
    id: 3,
    title: "Equipment Review: Best Cameras for Beginners in 2024",
    excerpt: "A comprehensive guide to choosing your first camera in 2024.",
    content: "Choosing your first camera can be overwhelming with so many options available...",
    category: "Reviews",
    author: "Elena Rodriguez",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop",
    featured: false,
    views: 3200,
    comments: 25,
    tags: ["equipment", "cameras", "beginners", "review"],
  },
  {
    id: 4,
    title: "Mastering Natural Light: Golden Hour Photography Tips",
    excerpt: "Make the most of golden hour lighting with these professional tips.",
    content: "Golden hour is often called the magic hour for photographers...",
    category: "Techniques",
    author: "David Kim",
    date: "2024-01-12",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    featured: false,
    views: 2100,
    comments: 15,
    tags: ["golden hour", "natural light", "techniques", "landscape"],
  },
  {
    id: 5,
    title: "Photography Business: From Hobby to Professional",
    excerpt: "Essential steps to turn your photography passion into a profitable business.",
    content: "Making the transition from hobbyist to professional photographer requires careful planning...",
    category: "Business",
    author: "Lisa Wang",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    featured: false,
    views: 1750,
    comments: 22,
    tags: ["business", "professional", "career", "photography"],
  },
  {
    id: 6,
    title: "Post-Processing Magic: Lightroom vs Photoshop",
    excerpt: "Compare the two most popular photo editing software and when to use each.",
    content: "Both Lightroom and Photoshop are essential tools for photographers...",
    category: "Post-Processing",
    author: "Alex Thompson",
    date: "2024-01-08",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    featured: false,
    views: 2800,
    comments: 19,
    tags: ["lightroom", "photoshop", "editing", "post-processing"],
  },
  {
    id: 7,
    title: "Travel Photography: Capturing Culture and Adventure",
    excerpt: "Tips for documenting your travels and creating compelling visual stories.",
    content: "Travel photography is about more than just taking pictures of landmarks...",
    category: "Travel",
    author: "Jennifer Park",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    featured: false,
    views: 2300,
    comments: 16,
    tags: ["travel", "culture", "adventure", "storytelling"],
  },
  {
    id: 8,
    title: "Portrait Photography: Connecting with Your Subject",
    excerpt: "Learn how to create intimate and powerful portraits that tell a story.",
    content: "Great portrait photography is about capturing the essence of a person...",
    category: "Techniques",
    author: "Maria Rodriguez",
    date: "2024-01-03",
    image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=600&h=400&fit=crop",
    featured: false,
    views: 1950,
    comments: 14,
    tags: ["portrait", "people", "connection", "storytelling"],
  }
];

// Global variables
let filteredBlog = [...blogData];
let currentPage = 1;
const postsPerPage = 5;
let selectedCategory = "";

// Initialize blog page
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedPost();
  loadCategories();
  loadRecentPosts();
  loadTags();
  loadBlogPosts();
  setupSearch();
  setupNewsletter();
  updateCartCount();
});

// Load featured post
function loadFeaturedPost() {
  const featuredContainer = document.getElementById("featuredPost");
  const featured = blogData.find(post => post.featured);

  if (!featured) return;

  featuredContainer.innerHTML = `
    <div class="featured-card" onclick="viewPost(${featured.id})">
      <img src="${featured.image}" alt="${featured.title}" class="featured-image">
      <div class="featured-badge">Featured</div>
      <div class="featured-overlay">
        <div class="featured-category">${featured.category}</div>
        <h2 class="featured-title">${featured.title}</h2>
        <p class="featured-excerpt">${featured.excerpt}</p>
        <div class="featured-meta">
          <div class="post-author">
            <i class="fas fa-user"></i>
            <span>${featured.author}</span>
          </div>
          <div class="post-date">
            <i class="fas fa-calendar"></i>
            <span>${formatDate(featured.date)}</span>
          </div>
          <div class="post-comments">
            <i class="fas fa-comments"></i>
            <span>${featured.comments} comments</span>
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
  blogData.forEach(post => {
    categories[post.category] = (categories[post.category] || 0) + 1;
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

// Load recent posts
function loadRecentPosts() {
  const recentContainer = document.getElementById("recentPosts");

  const recent = blogData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  recentContainer.innerHTML = recent
    .map(post => `
      <div class="recent-post" onclick="viewPost(${post.id})">
        <img src="${post.image}" alt="${post.title}" class="recent-image">
        <div class="recent-content">
          <div class="recent-title">${post.title}</div>
          <div class="recent-date">${formatDate(post.date)}</div>
        </div>
      </div>
    `).join("");
}

// Load tags
function loadTags() {
  const tagsContainer = document.getElementById("tagsCloud");

  // Get all unique tags
  const allTags = new Set();
  blogData.forEach(post => {
    post.tags.forEach(tag => allTags.add(tag));
  });

  tagsContainer.innerHTML = Array.from(allTags)
    .slice(0, 15)
    .map(tag => `
      <span class="tag-item" onclick="filterByTag('${tag}')">${tag}</span>
    `).join("");
}

// Load blog posts
function loadBlogPosts() {
  const container = document.getElementById("blogPosts");
  const resultsCount = document.getElementById("resultsCount");

  // Calculate pagination
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = filteredBlog.slice(startIndex, endIndex);

  // Update results count
  resultsCount.textContent = filteredBlog.length;

  // Clear container
  container.innerHTML = "";

  if (postsToShow.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No posts found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    return;
  }

  // Create post cards
  postsToShow.forEach(post => {
    const card = createBlogCard(post);
    container.appendChild(card);
  });

  // Update pagination
  updatePagination();
}

// Create blog card
function createBlogCard(post) {
  const card = document.createElement("div");
  card.className = "blog-post";
  card.onclick = () => viewPost(post.id);

  card.innerHTML = `
    <div class="post-image">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
    </div>
    <div class="post-content">
      <div class="post-category">${post.category}</div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <div class="post-meta">
        <div class="post-author">
          <i class="fas fa-user"></i>
          <span>${post.author}</span>
        </div>
        <div class="post-stats">
          <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="fas fa-eye"></i> ${post.views}</span>
          <span><i class="fas fa-comments"></i> ${post.comments}</span>
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

function filterByTag(tag) {
  // Filter by tag
  filteredBlog = blogData.filter(post => post.tags.includes(tag));
  currentPage = 1;
  loadBlogPosts();
}

function filterBlog() {
  selectedCategory = document.getElementById("categoryFilter").value;
  applyFilters();
}

function applyFilters() {
  const sortBy = document.getElementById("sortFilter").value;

  // Filter blog posts
  filteredBlog = blogData.filter(post => {
    if (selectedCategory && post.category !== selectedCategory) return false;
    return true;
  });

  // Sort blog posts
  switch (sortBy) {
    case "oldest":
      filteredBlog.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "popular":
      filteredBlog.sort((a, b) => b.views - a.views);
      break;
    case "comments":
      filteredBlog.sort((a, b) => b.comments - a.comments);
      break;
    default: // newest
      filteredBlog.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  currentPage = 1;
  loadBlogPosts();
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        searchBlog(query);
      } else if (query.length === 0) {
        filteredBlog = [...blogData];
        currentPage = 1;
        loadBlogPosts();
      }
    });
  }
}

function searchBlog(query) {
  const searchTerm = query.toLowerCase();

  filteredBlog = blogData.filter(post => {
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.author.toLowerCase().includes(searchTerm) ||
      post.category.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  currentPage = 1;
  loadBlogPosts();
}

// Newsletter signup
function setupNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input[type='email']").value;
      
      // Simulate newsletter signup
      showNotification("Thank you for subscribing to our newsletter!", "success");
      form.reset();
    });
  }
}

// Pagination
function updatePagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(filteredBlog.length / postsPerPage);

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
  const totalPages = Math.ceil(filteredBlog.length / postsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  loadBlogPosts();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// View post
function viewPost(postId) {
  localStorage.setItem("selectedPostId", postId);
  window.location.href = "post-detail.html";
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
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
  const cartModal = document.getElementById("cartModal");
  if (event.target === cartModal) {
    closeCart();
  }
};

  // Page numbers
 