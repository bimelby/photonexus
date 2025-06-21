// Global Variables
let cart = JSON.parse(localStorage.getItem("cart")) || []
const featuredPhotos = [
  {
    id: 1,
    title: "Cosmic Nebula",
    photographer: "Alex Chen",
    price: 299,
    originalPrice: 399,
    category: "Space",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    rating: 4.9,
    downloads: 1250,
    tags: ["space", "nebula", "cosmic", "astronomy"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
  },
  {
    id: 2,
    title: "Urban Nights",
    photographer: "Sarah Kim",
    price: 199,
    originalPrice: 249,
    category: "City",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
    rating: 4.8,
    downloads: 980,
    tags: ["urban", "night", "city", "lights"],
    resolution: "5472x3648",
    format: "JPEG",
    license: "Commercial",
  },
  {
    id: 3,
    title: "Mountain Serenity",
    photographer: "David Park",
    price: 249,
    originalPrice: 299,
    category: "Nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    rating: 4.9,
    downloads: 1450,
    tags: ["mountain", "nature", "landscape", "peaceful"],
    resolution: "7360x4912",
    format: "RAW + JPEG",
    license: "Extended",
  },
]

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  initParticles()
  loadFeaturedPhotos()
  updateCartCount()

  // Add fade-in animation to elements
  const elements = document.querySelectorAll(".stat-item, .photo-card")
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`
    el.classList.add("fade-in")
  })
})

// Particle Animation
function initParticles() {
  const canvas = document.getElementById("particleCanvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = []
  const particleCount = 100

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 3 + 1
      this.speedX = (Math.random() - 0.5) * 0.5
      this.speedY = (Math.random() - 0.5) * 0.5
      this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 55) + 200}, ${Math.random() * 0.5 + 0.2})`
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      if (this.x > canvas.width) this.x = 0
      if (this.x < 0) this.x = canvas.width
      if (this.y > canvas.height) this.y = 0
      if (this.y < 0) this.y = canvas.height
    }

    draw() {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })

    requestAnimationFrame(animate)
  }

  animate()

  // Resize handler
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

// Load Featured Photos
function loadFeaturedPhotos() {
  const container = document.getElementById("featuredPhotos")
  if (!container) return

  container.innerHTML = ""

  featuredPhotos.forEach((photo) => {
    const photoCard = createPhotoCard(photo)
    container.appendChild(photoCard)
  })
}

// Create Photo Card


// Cart Functions
function addToCart(photoId) {
  const photo = (typeof allPhotos !== "undefined" ? allPhotos : featuredPhotos).find((p) => p.id === photoId)
  if (!photo) return

  const existingItem = cart.find((item) => item.id === photoId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...photo,
      quantity: 1,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  showNotification(`${photo.title} added to cart!`)
}

function removeFromCart(photoId) {
  cart = cart.filter((item) => item.id !== photoId)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  loadCartItems()
}

function updateQuantity(photoId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(photoId)
    return
  }

  const item = cart.find((item) => item.id === photoId)
  if (item) {
    item.quantity = newQuantity
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartCount()
    loadCartItems()
  }
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

// Modal Functions
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
  const totalElement = document.getElementById("cartTotal")

  if (!container) return

  if (cart.length === 0) {
    container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #64748b;">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Your cart is empty</p>
            </div>
        `
    totalElement.textContent = "0.00"
    return
  }

  container.innerHTML = ""

  cart.forEach((item) => {
    const cartItem = document.createElement("div")
    cartItem.style.cssText = `
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-bottom: 1px solid rgba(71, 85, 105, 0.5);
        `

    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
                <h4 style="margin: 0 0 0.25rem 0; color: #f1f5f9;">${item.title}</h4>
                <p style="margin: 0; color: #64748b; font-size: 0.875rem;">by ${item.photographer}</p>
                <p style="margin: 0.25rem 0 0 0; color: #06b6d4; font-weight: 600;">$${item.price}</p>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" style="background: rgba(71, 85, 105, 0.5); border: none; color: #f1f5f9; width: 30px; height: 30px; border-radius: 4px; cursor: pointer;">-</button>
                <span style="color: #f1f5f9; min-width: 20px; text-align: center;">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" style="background: rgba(71, 85, 105, 0.5); border: none; color: #f1f5f9; width: 30px; height: 30px; border-radius: 4px; cursor: pointer;">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 0.5rem;">
                <i class="fas fa-trash"></i>
            </button>
        `

    container.appendChild(cartItem)
  })

  totalElement.textContent = getCartTotal().toFixed(2)
}

// Navigation Functions
function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu")
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"
}

// Utility Functions
function viewPhotoDetail(photoId) {
  localStorage.setItem("selectedPhotoId", photoId)
  window.location.href = "product-detail.html"
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #06b6d4, #3b82f6);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
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
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("cartModal")
  if (event.target === modal) {
    closeCart()
  }
}

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInputs = document.querySelectorAll(".search-box input")
  searchInputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const query = this.value.trim()
        if (query) {
          localStorage.setItem("searchQuery", query)
          window.location.href = "catalog.html"
        }
      }
    })
  })
})
function createPhotoCard(photo) {
  const card = document.createElement("div");
  card.className = "photo-card";
  card.onclick = () => viewPhotoDetail(photo.id);

  card.innerHTML = `
    <div class="photo-image">
      <img src="${photo.image}" alt="${photo.title}" loading="lazy">
      <div class="photo-badge">${photo.category}</div>
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
      <div class="photo-footer">
        <div class="photo-price">$${photo.price}</div>
        <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${photo.id})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
        <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${photo.id})">
          <i class="fas fa-heart"></i>
        </button>
        <button class="like-btn" onclick="event.stopPropagation(); likePhoto(${photo.id})">
          <i class="fas fa-thumbs-up"></i>
        </button>
        <button class="share-btn" onclick="event.stopPropagation(); sharePhoto('${photo.title}','${photo.image}')">
          <i class="fas fa-share"></i>
        </button>
      </div>
    </div>
  `;
  return card;
}

// Wishlist, Like, Share, Rating logic
function toggleWishlist(photoId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")||"[]");
  if(wishlist.includes(photoId)){
    wishlist = wishlist.filter(id=>id!==photoId);
  }else{
    wishlist.push(photoId);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  showNotification("Wishlist updated!");
}
function likePhoto(photoId) {
  let likes = JSON.parse(localStorage.getItem("likes")||"[]");
  if(!likes.includes(photoId)){
    likes.push(photoId);
    localStorage.setItem("likes", JSON.stringify(likes));
    showNotification("You liked this photo!");
  }
}
function sharePhoto(title, image) {
  if(navigator.share){
    navigator.share({title, url: image});
  }else{
    navigator.clipboard.writeText(image);
    showNotification("Photo link copied!");
  }
}