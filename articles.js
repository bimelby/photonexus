// Data default artikel
const defaultArticles = [
  {
    id: 1,
    title: "Mastering Portrait Photography: Light and Shadow Techniques",
    excerpt:
      "Learn how to use natural and artificial light to create stunning portrait photographs that capture emotion and depth.",
    content: `
      <p>Portrait photography is one of the most rewarding and challenging genres in photography. The key to creating compelling portraits lies in understanding how light interacts with your subject.</p>
      
      <h3>Understanding Natural Light</h3>
      <p>Natural light offers endless possibilities for portrait photography. The golden hour, just after sunrise or before sunset, provides warm, soft light that flatters most subjects. Window light can create beautiful, even illumination for indoor portraits.</p>
      
      <h3>Working with Artificial Light</h3>
      <p>Studio lighting gives you complete control over your portrait's mood and atmosphere. Start with a simple one-light setup and gradually add complexity as you become more comfortable.</p>
      
      <h3>Shadow and Contrast</h3>
      <p>Shadows are just as important as highlights in portrait photography. They add depth, dimension, and drama to your images. Learn to see shadows as a creative tool rather than something to avoid.</p>
    `,
    category: "Portrait",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readingTime: "8 min read",
    image: "https://plus.unsplash.com/premium_photo-1741629489767-e147cf0ff31e?w=600&auto=format&fit=crop",
    featured: true,
    views: 2450,
    tags: ["portrait", "lighting", "techniques", "studio"],
  },
  {
    id: 2,
    title: "Landscape Photography: Capturing the Perfect Golden Hour",
    excerpt: "Discover the secrets of timing, composition, and camera settings for breathtaking landscape photographs.",
    content: `
      <p>The golden hour is a magical time for landscape photographers. This brief period offers warm, soft light that can transform ordinary scenes into extraordinary photographs.</p>
      
      <h3>Planning Your Shoot</h3>
      <p>Successful golden hour photography starts with careful planning. Use apps like PhotoPills or Sun Surveyor to predict exactly when and where the sun will be.</p>
      
      <h3>Camera Settings</h3>
      <p>Use a tripod for stability, shoot in RAW format for maximum flexibility in post-processing, and consider using graduated neutral density filters to balance exposure.</p>
    `,
    category: "Landscape",
    author: "Michael Chen",
    date: "2024-01-12",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    featured: false,
    views: 1890,
    tags: ["landscape", "golden hour", "planning", "filters"],
  },
  {
    id: 3,
    title: "Street Photography Ethics: Capturing Life Respectfully",
    excerpt: "Navigate the complex world of street photography while respecting privacy and cultural sensitivities.",
    content: `
      <p>Street photography offers a unique window into human life and culture, but it comes with important ethical considerations that every photographer should understand.</p>
      
      <h3>Legal Considerations</h3>
      <p>Understanding the laws in your area regarding photography in public spaces is crucial. While laws vary by location, generally you can photograph in public spaces, but be aware of restrictions.</p>
      
      <h3>Cultural Sensitivity</h3>
      <p>Different cultures have different attitudes toward photography. Always be respectful and when in doubt, ask permission before photographing people.</p>
    `,
    category: "Street",
    author: "Elena Rodriguez",
    date: "2024-01-10",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
    featured: false,
    views: 1234,
    tags: ["street", "ethics", "culture", "legal"],
  },
  {
    id: 4,
    title: "Macro Photography: Exploring the Miniature World",
    excerpt:
      "Dive into the fascinating world of macro photography and discover techniques for capturing stunning close-up images.",
    content: `
      <p>Macro photography opens up an entirely new world of photographic possibilities, allowing us to see familiar subjects in completely new ways.</p>
      
      <h3>Equipment Essentials</h3>
      <p>While dedicated macro lenses offer the best results, you can start macro photography with extension tubes or close-up filters on your existing lenses.</p>
      
      <h3>Lighting Challenges</h3>
      <p>Macro photography often requires additional lighting due to the close working distances and small apertures needed for adequate depth of field.</p>
    `,
    category: "Macro",
    author: "David Kim",
    date: "2024-01-08",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    featured: false,
    views: 987,
    tags: ["macro", "close-up", "equipment", "lighting"],
  },
  {
    id: 5,
    title: "Night Photography: Mastering Low Light Conditions",
    excerpt: "Learn the techniques and settings needed to capture stunning images in challenging low-light situations.",
    content: `
      <p>Night photography presents unique challenges but offers incredible creative opportunities for those willing to master the techniques.</p>
      
      <h3>Camera Settings</h3>
      <p>Shooting in manual mode gives you complete control. Start with ISO 1600-3200, aperture f/2.8-f/4, and shutter speeds of 15-30 seconds for star trails.</p>
      
      <h3>Essential Equipment</h3>
      <p>A sturdy tripod is absolutely essential for night photography. Consider also bringing a headlamp with a red filter to preserve your night vision.</p>
    `,
    category: "Night",
    author: "Alex Thompson",
    date: "2024-01-05",
    readingTime: "9 min read",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    featured: false,
    views: 1567,
    tags: ["night", "low light", "stars", "long exposure"],
  },
  {
    id: 6,
    title: "Wildlife Photography: Patience and Preparation",
    excerpt: "Essential tips for capturing amazing wildlife photographs while respecting nature and animal welfare.",
    content: `
      <p>Wildlife photography combines technical skill with patience and respect for nature. Success often comes from understanding animal behavior and being prepared.</p>
      
      <h3>Research and Planning</h3>
      <p>Study your subjects before heading out. Understanding animal behavior patterns will help you anticipate great photo opportunities.</p>
      
      <h3>Ethical Considerations</h3>
      <p>The welfare of wildlife should always come first. Never disturb animals for a photograph, and maintain appropriate distances at all times.</p>
    `,
    category: "Wildlife",
    author: "Jennifer Park",
    date: "2024-01-03",
    readingTime: "6 min read",
    image: "https://plus.unsplash.com/premium_photo-1679952779080-638d0d700533?w=600&auto=format&fit=crop",
    featured: false,
    views: 2100,
    tags: ["wildlife", "nature", "ethics", "telephoto"],
  },
];

let articlesData = [];
const storedArticles = localStorage.getItem('articles');
if (storedArticles) {
  const localArticles = JSON.parse(storedArticles);
  const ids = new Set(localArticles.map(a => a.id));
  articlesData = [...localArticles, ...defaultArticles.filter(a => !ids.has(a.id))];
} else {
  articlesData = [...defaultArticles];
}

// Global variables
let filteredArticles = [...articlesData]
let currentPage = 1
const articlesPerPage = 6
let selectedCategory = ""
let selectedTag = ""

// Initialize articles page
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedArticle()
  loadCategories()
  loadTags()
  loadPopularArticles()
  loadArticles()
  setupSearch()
  updateCartCount()
})

// Load featured article
function loadFeaturedArticle() {
  const featuredContainer = document.getElementById("featuredArticle")
  const featured = articlesData.find((article) => article.featured)

  if (!featured) return

  featuredContainer.innerHTML = `
    <div class="featured-card" onclick="viewArticle(${featured.id})">
      <img src="${featured.image}" alt="${featured.title}" class="featured-image">
      <div class="featured-badge">Featured</div>
      <div class="featured-overlay">
        <div class="featured-category">${featured.category}</div>
        <h2 class="featured-title">${featured.title}</h2>
        <p class="featured-excerpt">${featured.excerpt}</p>
        <div class="featured-meta">
          <div class="featured-author">
            <i class="fas fa-user"></i>
            <span>${featured.author}</span>
          </div>
          <div class="featured-date">
            <i class="fas fa-calendar"></i>
            <span>${formatDate(featured.date)}</span>
          </div>
          <div class="featured-reading-time">
            <i class="fas fa-clock"></i>
            <span>${featured.readingTime}</span>
          </div>
        </div>
      </div>
    </div>
  `
}

// Load categories
function loadCategories() {
  const categoriesContainer = document.getElementById("categoryList")
  const categoryFilter = document.getElementById("categoryFilter")

  // Get unique categories with counts
  const categories = {}
  articlesData.forEach((article) => {
    categories[article.category] = (categories[article.category] || 0) + 1
  })

  // Populate sidebar categories
  categoriesContainer.innerHTML = Object.entries(categories)
    .map(
      ([category, count]) => `
      <div class="category-item" onclick="filterByCategory('${category}')">
        <span>${category}</span>
        <span class="category-count">${count}</span>
      </div>
    `,
    )
    .join("")

  // Populate filter dropdown
  categoryFilter.innerHTML =
    '<option value="">All Categories</option>' +
    Object.keys(categories)
      .map((category) => `<option value="${category}">${category}</option>`)
      .join("")
}

// Load tags
function loadTags() {
  const tagsContainer = document.getElementById("tagsCloud")

  // Get all unique tags
  const allTags = new Set()
  articlesData.forEach((article) => {
    article.tags.forEach((tag) => allTags.add(tag))
  })

  tagsContainer.innerHTML = Array.from(allTags)
    .map(
      (tag) => `
      <span class="tag-item" onclick="filterByTag('${tag}')">${tag}</span>
    `,
    )
    .join("")
}

// Load popular articles
function loadPopularArticles() {
  const popularContainer = document.getElementById("popularArticles")

  const popular = articlesData.sort((a, b) => b.views - a.views).slice(0, 5)

  popularContainer.innerHTML = popular
    .map(
      (article) => `
      <div class="popular-item" onclick="viewArticle(${article.id})">
        <img src="${article.image}" alt="${article.title}" class="popular-image">
        <div class="popular-content">
          <div class="popular-title">${article.title}</div>
          <div class="popular-date">${formatDate(article.date)}</div>
        </div>
      </div>
    `,
    )
    .join("")
}

// Load articles
function loadArticles() {
  const container = document.getElementById("articlesGrid")
  const resultsCount = document.getElementById("resultsCount")

  // Calculate pagination
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const articlesToShow = filteredArticles.slice(startIndex, endIndex)

  // Update results count
  resultsCount.textContent = filteredArticles.length

  // Clear container
  container.innerHTML = ""

  if (articlesToShow.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No articles found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `
    return
  }

  // Create article cards
  articlesToShow.forEach((article) => {
    const card = createArticleCard(article)
    container.appendChild(card)
  })

  // Update pagination
  updatePagination()
}

// Create article card
function createArticleCard(article) {
  const card = document.createElement("div")
  card.className = "article-card"
  card.onclick = () => viewArticle(article.id)

  card.innerHTML = `
    <img src="${article.image}" alt="${article.title}" class="article-image">
    <div class="article-content">
      <div class="article-category">${article.category}</div>
      <h3 class="article-title">${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-meta">
        <div class="article-author">
          <i class="fas fa-user"></i>
          <span>${article.author}</span>
        </div>
        <div class="article-date">
          <i class="fas fa-calendar"></i>
          <span>${formatDate(article.date)}</span>
        </div>
        <div class="article-reading-time">
          <i class="fas fa-clock"></i>
          <span>${article.readingTime}</span>
        </div>
      </div>
    </div>
  `

  return card
}

// Filter functions
function filterByCategory(category) {
  selectedCategory = selectedCategory === category ? "" : category

  // Update active state
  document.querySelectorAll(".category-item").forEach((item) => {
    item.classList.toggle("active", item.textContent.includes(category) && selectedCategory)
  })

  // Update dropdown
  document.getElementById("categoryFilter").value = selectedCategory

  applyFilters()
}

function filterByTag(tag) {
  selectedTag = selectedTag === tag ? "" : tag

  // Update active state
  document.querySelectorAll(".tag-item").forEach((item) => {
    item.classList.toggle("active", item.textContent === tag && selectedTag)
  })

  applyFilters()
}

function filterArticles() {
  selectedCategory = document.getElementById("categoryFilter").value
  applyFilters()
}

function applyFilters() {
  const sortBy = document.getElementById("sortFilter").value

  // Filter articles
  filteredArticles = articlesData.filter((article) => {
    if (selectedCategory && article.category !== selectedCategory) return false
    if (selectedTag && !article.tags.includes(selectedTag)) return false
    return true
  })

  // Sort articles
  switch (sortBy) {
    case "oldest":
      filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date))
      break
    case "popular":
      filteredArticles.sort((a, b) => b.views - a.views)
      break
    case "title":
      filteredArticles.sort((a, b) => a.title.localeCompare(b.title))
      break
    default: // newest
      filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  currentPage = 1
  loadArticles()
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim()
      if (query.length >= 2) {
        searchArticles(query)
      } else if (query.length === 0) {
        filteredArticles = [...articlesData]
        currentPage = 1
        loadArticles()
      }
    })
  }
}

function searchArticles(query) {
  const searchTerm = query.toLowerCase()

  filteredArticles = articlesData.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.author.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    )
  })

  currentPage = 1
  loadArticles()
}

// Pagination
function updatePagination() {
  const pagination = document.getElementById("pagination")
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)

  if (totalPages <= 1) {
    pagination.innerHTML = ""
    return
  }

  let paginationHTML = ""

  // Previous button
  paginationHTML += `
    <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      paginationHTML += `
        <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ""}>
          ${i}
        </button>
      `
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      paginationHTML += "<button disabled>...</button>"
    }
  }

  // Next button
  paginationHTML += `
    <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `

  pagination.innerHTML = paginationHTML
}

function changePage(page) {
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  if (page < 1 || page > totalPages) return

  currentPage = page
  loadArticles()

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// View article
function viewArticle(articleId) {
  localStorage.setItem("selectedArticleId", articleId)
  window.location.href = "article-detail.html"
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu")
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"
}

// Cart functions (placeholder)
function openCart() {
  const modal = document.getElementById("cartModal")
  modal.style.display = "block"
  loadCartItems()
}

function closeCart() {
  const modal = document.getElementById("cartModal")
  modal.style.display = "none"
}

function loadCartItems() {
  const container = document.getElementById("cartItems")
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #64748b;">
        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <p>Your cart is empty</p>
      </div>
    `
    return
  }

  // Display cart items (implementation would be similar to other cart implementations)
  container.innerHTML = "<p>Cart items would be displayed here</p>"
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    cartCount.textContent = cart.length
  }
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("cartModal")
  if (event.target === modal) {
    closeCart()
  }
}
