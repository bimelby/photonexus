// Article detail JavaScript
const articlesData = [
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
      
      <h3>Practical Tips</h3>
      <ul>
        <li>Use a reflector to fill in harsh shadows</li>
        <li>Position your subject at a 45-degree angle to the light source</li>
        <li>Pay attention to catchlights in the eyes</li>
        <li>Experiment with different lighting ratios</li>
        <li>Don't be afraid of dramatic shadows</li>
      </ul>
      
      <h3>Equipment Recommendations</h3>
      <p>While you can create great portraits with any camera, certain equipment can help:</p>
      <ul>
        <li>85mm or 135mm lens for flattering perspective</li>
        <li>Reflector for controlling shadows</li>
        <li>External flash or continuous lights</li>
        <li>Light modifier (softbox, umbrella, or diffuser)</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Mastering portrait photography takes time and practice. Focus on understanding light first, then gradually expand your technical knowledge. Remember, the best portrait is one that captures the essence of your subject.</p>
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
      
      <h3>Composition Techniques</h3>
      <p>Apply the rule of thirds, look for leading lines, and use foreground elements to add depth to your images. Don't forget to check your background for distracting elements.</p>
      
      <h3>Post-Processing Tips</h3>
      <p>Enhance the golden hour mood in post-processing by adjusting highlights and shadows, increasing vibrance, and fine-tuning the white balance.</p>
    `,
    category: "Landscape",
    author: "Michael Chen",
    date: "2024-01-12",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
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
      
      <h3>Building Trust</h3>
      <p>Take time to connect with your subjects. A smile and friendly conversation can often lead to more authentic and powerful photographs.</p>
      
      <h3>Technical Considerations</h3>
      <p>Use a longer lens to maintain distance, shoot in burst mode to capture decisive moments, and be ready to act quickly when opportunities arise.</p>
    `,
    category: "Street",
    author: "Elena Rodriguez",
    date: "2024-01-10",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=500&fit=crop",
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
]

let currentArticle = null
let relatedArticles = []

// Initialize article detail page
document.addEventListener("DOMContentLoaded", () => {
  loadArticleDetail()
  updateCartCount()
})

// Load article detail
function loadArticleDetail() {
  const articleId = localStorage.getItem("selectedArticleId")
  if (!articleId) {
    window.location.href = "articles.html"
    return
  }

  currentArticle = articlesData.find((article) => article.id == articleId)
  if (!currentArticle) {
    window.location.href = "articles.html"
    return
  }

  // Update breadcrumb
  document.getElementById("breadcrumbTitle").textContent = currentArticle.title

  // Load article content
  loadArticleContent()
  loadRelatedArticles()

  // Increment view count (in real app, this would be sent to server)
  currentArticle.views += 1
}

// Load article content
function loadArticleContent() {
  const container = document.getElementById("articleContent")

  container.innerHTML = `
    <header class="article-header">
      <div class="article-meta">
        <span class="article-category">${currentArticle.category}</span>
        <span class="article-date">${formatDate(currentArticle.date)}</span>
        <span class="article-reading-time">${currentArticle.readingTime}</span>
        <span class="article-views">${currentArticle.views} views</span>
      </div>
      
      <h1 class="article-title">${currentArticle.title}</h1>
      
      <div class="article-author-info">
        <div class="author-avatar">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="${currentArticle.author}">
        </div>
        <div class="author-details">
          <div class="author-name">by ${currentArticle.author}</div>
          <div class="author-bio">Professional photographer and educator</div>
        </div>
      </div>
      
      <div class="article-image">
        <img src="${currentArticle.image}" alt="${currentArticle.title}">
      </div>
    </header>
    
    <div class="article-body">
      <div class="article-excerpt">
        <p class="lead">${currentArticle.excerpt}</p>
      </div>
      
      <div class="article-content-text">
        ${currentArticle.content}
      </div>
      
      <div class="article-tags">
        <h4>Tags:</h4>
        <div class="tags-list">
          ${currentArticle.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      
      <div class="article-actions">
        <div class="social-share">
          <h4>Share this article:</h4>
          <div class="share-buttons">
            <button class="share-btn twitter" onclick="shareOnTwitter()">
              <i class="fab fa-twitter"></i>
              Twitter
            </button>
            <button class="share-btn facebook" onclick="shareOnFacebook()">
              <i class="fab fa-facebook"></i>
              Facebook
            </button>
            <button class="share-btn linkedin" onclick="shareOnLinkedIn()">
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </button>
            <button class="share-btn copy" onclick="copyLink()">
              <i class="fas fa-link"></i>
              Copy Link
            </button>
          </div>
        </div>
        
        <div class="article-rating">
          <h4>Rate this article:</h4>
          <div class="rating-stars" id="ratingStars">
            ${generateRatingStars()}
          </div>
          <div class="rating-text">Click to rate</div>
        </div>
      </div>
    </div>
  `

  // Add click handlers for rating stars
  setupRatingStars()
}

// Load related articles
function loadRelatedArticles() {
  relatedArticles = articlesData
    .filter(
      (article) =>
        article.id !== currentArticle.id &&
        (article.category === currentArticle.category || article.tags.some((tag) => currentArticle.tags.includes(tag))),
    )
    .slice(0, 3)

  const container = document.getElementById("relatedGrid")

  if (relatedArticles.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No related articles found</p>
        <button class="btn btn-primary" onclick="window.location.href='articles.html'">
          Browse All Articles
        </button>
      </div>
    `
    return
  }

  container.innerHTML = relatedArticles
    .map(
      (article) => `
    <div class="related-card" onclick="viewArticle(${article.id})">
      <img src="${article.image}" alt="${article.title}" class="related-image">
      <div class="related-content">
        <div class="related-category">${article.category}</div>
        <h4 class="related-title">${article.title}</h4>
        <p class="related-excerpt">${article.excerpt}</p>
        <div class="related-meta">
          <span class="related-author">by ${article.author}</span>
          <span class="related-date">${formatDate(article.date)}</span>
        </div>
        <div class="related-stats">
          <span class="related-views">${article.views} views</span>
          <span class="related-reading-time">${article.readingTime}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

// Generate rating stars
function generateRatingStars() {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="far fa-star" data-rating="${i}" onclick="rateArticle(${i})"></i>`
  }
  return stars
}

// Setup rating stars
function setupRatingStars() {
  const stars = document.querySelectorAll("#ratingStars i")

  stars.forEach((star, index) => {
    star.addEventListener("mouseenter", () => {
      highlightStars(index + 1)
    })

    star.addEventListener("mouseleave", () => {
      resetStars()
    })
  })
}

// Highlight stars on hover
function highlightStars(rating) {
  const stars = document.querySelectorAll("#ratingStars i")
  stars.forEach((star, index) => {
    if (index < rating) {
      star.className = "fas fa-star"
      star.style.color = "#fbbf24"
    } else {
      star.className = "far fa-star"
      star.style.color = "#64748b"
    }
  })
}

// Reset stars
function resetStars() {
  const stars = document.querySelectorAll("#ratingStars i")
  stars.forEach((star) => {
    star.className = "far fa-star"
    star.style.color = "#64748b"
  })
}

// Rate article
function rateArticle(rating) {
  // In a real app, this would send the rating to the server
  localStorage.setItem(`article_${currentArticle.id}_rating`, rating)

  // Update UI
  const stars = document.querySelectorAll("#ratingStars i")
  stars.forEach((star, index) => {
    if (index < rating) {
      star.className = "fas fa-star"
      star.style.color = "#fbbf24"
    } else {
      star.className = "far fa-star"
      star.style.color = "#64748b"
    }
  })

  document.querySelector(".rating-text").textContent = `You rated this article ${rating} star${rating > 1 ? "s" : ""}`

  showNotification(`Thank you for rating this article ${rating} star${rating > 1 ? "s" : ""}!`, "success")
}

// Social sharing functions
function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`Check out this article: ${currentArticle.title}`)
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank")
}

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
}

function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(currentArticle.title)
  const summary = encodeURIComponent(currentArticle.excerpt)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, "_blank")
}

function copyLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      showNotification("Link copied to clipboard!", "success")
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = window.location.href
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      showNotification("Link copied to clipboard!", "success")
    })
}

// Navigation functions
function viewArticle(articleId) {
  localStorage.setItem("selectedArticleId", articleId)
  window.location.reload()
}

// Cart functions
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

  container.innerHTML = cart
    .map(
      (item) => `
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
  `,
    )
    .join("")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  document.getElementById("cartTotal").textContent = total.toFixed(2)
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  loadCartItems()
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    cartCount.textContent = cart.length
  }
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

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
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
  `
  notification.textContent = message

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

// Close modal when clicking outside
window.onclick = (event) => {
  const cartModal = document.getElementById("cartModal")

  if (event.target === cartModal) {
    closeCart()
  }
}

// Smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
    e.preventDefault()
    const targetId = e.target.getAttribute("href").substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
})

// Reading progress indicator
function updateReadingProgress() {
  const article = document.querySelector(".article-body")
  if (!article) return

  const articleTop = article.offsetTop
  const articleHeight = article.offsetHeight
  const windowHeight = window.innerHeight
  const scrollTop = window.pageYOffset

  const progress = Math.min(100, Math.max(0, ((scrollTop - articleTop + windowHeight) / articleHeight) * 100))

  // Update progress bar if it exists
  const progressBar = document.getElementById("readingProgress")
  if (progressBar) {
    progressBar.style.width = `${progress}%`
  }
}

// Add scroll listener for reading progress
window.addEventListener("scroll", updateReadingProgress)

// Initialize reading progress on load
window.addEventListener("load", updateReadingProgress)
