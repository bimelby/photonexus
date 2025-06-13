// Product detail JavaScript with enhanced features
const allPhotos = [
  {
    id: 1,
    title: "Cosmic Nebula",
    photographer: "Alex Chen",
    price: 299,
    originalPrice: 399,
    category: "space",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    rating: 4.9,
    downloads: 1250,
    tags: ["space", "nebula", "cosmic", "astronomy"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "A stunning view of a cosmic nebula captured in deep space, showcasing vibrant colors and intricate gas formations. This breathtaking image reveals the beauty and complexity of stellar nurseries where new stars are born.",
    specifications: {
      camera: "Canon EOS R5",
      lens: "RF 100-500mm f/4.5-7.1L IS USM",
      settings: "ISO 1600, f/5.6, 30s",
      location: "Atacama Desert, Chile",
    },
    keywords: ["astronomy", "astrophotography", "nebula", "space", "cosmos", "stars", "galaxy", "universe"],
    usage: ["Website headers", "Print materials", "Digital art", "Educational content", "Science publications"],
    qualityOptions: [
      { name: "Standard", resolution: "3000x2000", format: "JPEG", price: 299 },
      { name: "Premium", resolution: "4500x3000", format: "JPEG + RAW", price: 399 },
      { name: "Ultimate", resolution: "6000x4000", format: "JPEG + RAW + PSD", price: 499 },
    ],
  },
  {
    id: 2,
    title: "Urban Nights",
    photographer: "Sarah Kim",
    price: 199,
    originalPrice: 249,
    category: "urban",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop",
    rating: 4.8,
    downloads: 980,
    tags: ["urban", "night", "city", "lights"],
    resolution: "5472x3648",
    format: "JPEG",
    license: "Commercial",
    description:
      "Dynamic urban nightscape featuring illuminated skyscrapers and bustling city life. The interplay of artificial lights creates a mesmerizing tapestry of modern metropolitan energy.",
    specifications: {
      camera: "Sony A7R IV",
      lens: "FE 24-70mm f/2.8 GM",
      settings: "ISO 800, f/8, 1/60s",
      location: "New York City, USA",
    },
    keywords: ["city", "urban", "night", "lights", "skyscrapers", "metropolitan", "architecture", "modern"],
    usage: [
      "Marketing materials",
      "Website backgrounds",
      "Urban planning",
      "Travel content",
      "Architecture portfolios",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "2736x1824", format: "JPEG", price: 199 },
      { name: "Premium", resolution: "4104x2736", format: "JPEG + RAW", price: 299 },
      { name: "Ultimate", resolution: "5472x3648", format: "JPEG + RAW + PSD", price: 399 },
    ],
  },
  {
    id: 3,
    title: "Mountain Serenity",
    photographer: "David Park",
    price: 249,
    originalPrice: 299,
    category: "nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    rating: 4.9,
    downloads: 1450,
    tags: ["mountain", "nature", "landscape", "peaceful"],
    resolution: "7360x4912",
    format: "RAW + JPEG",
    license: "Extended",
    description:
      "Peaceful mountain landscape with pristine snow-capped peaks and serene alpine environment. This image captures the raw beauty and tranquility of untouched wilderness.",
    specifications: {
      camera: "Nikon D850",
      lens: "AF-S NIKKOR 14-24mm f/2.8G ED",
      settings: "ISO 100, f/11, 1/125s",
      location: "Swiss Alps, Switzerland",
    },
    keywords: ["mountain", "landscape", "nature", "snow", "peaks", "wilderness", "alpine", "serenity"],
    usage: [
      "Travel brochures",
      "Nature documentaries",
      "Meditation apps",
      "Environmental campaigns",
      "Outdoor gear marketing",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "3680x2456", format: "JPEG", price: 249 },
      { name: "Premium", resolution: "5520x3684", format: "JPEG + RAW", price: 349 },
      { name: "Ultimate", resolution: "7360x4912", format: "JPEG + RAW + PSD", price: 449 },
    ],
  },
  {
    id: 4,
    title: "Abstract Flow",
    photographer: "Maria Rodriguez",
    price: 179,
    originalPrice: 229,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    rating: 4.7,
    downloads: 756,
    tags: ["abstract", "flow", "colorful", "modern"],
    resolution: "4000x6000",
    format: "JPEG",
    license: "Standard",
    description:
      "Modern abstract composition with flowing forms and vibrant color gradients. Perfect for contemporary design projects requiring a bold, artistic statement.",
    specifications: {
      camera: "Canon EOS 5D Mark IV",
      lens: "EF 100mm f/2.8L Macro IS USM",
      settings: "ISO 400, f/5.6, 1/200s",
      location: "Studio, Barcelona, Spain",
    },
    keywords: ["abstract", "art", "flow", "colorful", "modern", "design", "creative", "contemporary"],
    usage: ["Interior design", "Book covers", "Album artwork", "Fashion", "Digital backgrounds"],
    qualityOptions: [
      { name: "Standard", resolution: "2000x3000", format: "JPEG", price: 179 },
      { name: "Premium", resolution: "3000x4500", format: "JPEG + RAW", price: 279 },
      { name: "Ultimate", resolution: "4000x6000", format: "JPEG + RAW + PSD", price: 379 },
    ],
  },
  {
    id: 5,
    title: "Wildlife Portrait",
    photographer: "John Smith",
    price: 349,
    originalPrice: 449,
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
    rating: 4.9,
    downloads: 892,
    tags: ["wildlife", "animal", "portrait", "nature"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "Intimate wildlife portrait capturing the essence and beauty of nature's creatures. This powerful image conveys the majesty and dignity of wildlife in their natural habitat.",
    specifications: {
      camera: "Nikon Z9",
      lens: "NIKKOR Z 100-400mm f/4.5-5.6 VR S",
      settings: "ISO 800, f/5.6, 1/500s",
      location: "Serengeti National Park, Tanzania",
    },
    keywords: ["wildlife", "animal", "portrait", "nature", "conservation", "mammal", "predator", "safari"],
    usage: [
      "Wildlife magazines",
      "Conservation campaigns",
      "Educational materials",
      "Nature documentaries",
      "Travel brochures",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "3000x2000", format: "JPEG", price: 349 },
      { name: "Premium", resolution: "4500x3000", format: "JPEG + RAW", price: 449 },
      { name: "Ultimate", resolution: "6000x4000", format: "JPEG + RAW + PSD", price: 549 },
    ],
  },
  {
    id: 6,
    title: "Modern Architecture",
    photographer: "Lisa Wang",
    price: 229,
    originalPrice: 279,
    category: "architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    rating: 4.6,
    downloads: 634,
    tags: ["architecture", "modern", "building", "design"],
    resolution: "5184x3456",
    format: "JPEG",
    license: "Commercial",
    description:
      "Contemporary architectural design showcasing innovative structural elements and modern aesthetics. This image highlights the bold lines and reflective surfaces of urban architecture.",
    specifications: {
      camera: "Canon EOS R6",
      lens: "RF 15-35mm f/2.8L IS USM",
      settings: "ISO 200, f/8, 1/250s",
      location: "Shanghai, China",
    },
    keywords: ["architecture", "building", "modern", "design", "urban", "structure", "glass", "contemporary"],
    usage: [
      "Architectural portfolios",
      "Real estate marketing",
      "Design magazines",
      "Corporate brochures",
      "Urban planning",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "2592x1728", format: "JPEG", price: 229 },
      { name: "Premium", resolution: "3888x2592", format: "JPEG + RAW", price: 329 },
      { name: "Ultimate", resolution: "5184x3456", format: "JPEG + RAW + PSD", price: 429 },
    ],
  },
  {
    id: 7,
    title: "Coastal Sunset",
    photographer: "Michael Johnson",
    price: 279,
    originalPrice: 329,
    category: "nature",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    rating: 4.8,
    downloads: 1120,
    tags: ["beach", "sunset", "ocean", "coastal", "nature"],
    resolution: "6720x4480",
    format: "RAW + JPEG",
    license: "Extended",
    description:
      "Breathtaking coastal sunset with golden light reflecting off gentle waves. This serene image captures the perfect moment when day transitions to night at the shoreline.",
    specifications: {
      camera: "Sony A7R V",
      lens: "FE 16-35mm f/2.8 GM",
      settings: "ISO 100, f/11, 1/60s",
      location: "Malibu, California, USA",
    },
    keywords: ["beach", "sunset", "ocean", "coastal", "seascape", "golden hour", "tranquil", "horizon"],
    usage: ["Travel websites", "Resort marketing", "Wellness products", "Meditation apps", "Luxury branding"],
    qualityOptions: [
      { name: "Standard", resolution: "3360x2240", format: "JPEG", price: 279 },
      { name: "Premium", resolution: "5040x3360", format: "JPEG + RAW", price: 379 },
      { name: "Ultimate", resolution: "6720x4480", format: "JPEG + RAW + PSD", price: 479 },
    ],
  },
  {
    id: 8,
    title: "Aerial Cityscape",
    photographer: "Thomas Wright",
    price: 399,
    originalPrice: 499,
    category: "urban",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
    rating: 4.9,
    downloads: 1345,
    tags: ["aerial", "cityscape", "urban", "drone", "skyline"],
    resolution: "8000x5333",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "Stunning aerial view of a major metropolitan skyline captured during blue hour. This dramatic perspective showcases the city's layout, architecture, and urban planning.",
    specifications: {
      camera: "DJI Mavic 3 Pro",
      lens: "Hasselblad 24mm equivalent",
      settings: "ISO 400, f/2.8, 1/60s",
      location: "Chicago, Illinois, USA",
    },
    keywords: ["aerial", "cityscape", "urban", "drone", "skyline", "metropolitan", "birds-eye", "panoramic"],
    usage: ["Real estate", "Urban planning", "Tourism campaigns", "Corporate websites", "Editorial content"],
    qualityOptions: [
      { name: "Standard", resolution: "4000x2667", format: "JPEG", price: 399 },
      { name: "Premium", resolution: "6000x4000", format: "JPEG + RAW", price: 499 },
      { name: "Ultimate", resolution: "8000x5333", format: "JPEG + RAW + PSD", price: 599 },
    ],
  },
  {
    id: 9,
    title: "Minimalist Still Life",
    photographer: "Emma Chen",
    price: 199,
    originalPrice: 249,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=600&fit=crop",
    rating: 4.7,
    downloads: 876,
    tags: ["minimalist", "still life", "abstract", "composition"],
    resolution: "5760x3840",
    format: "RAW + JPEG",
    license: "Standard",
    description:
      "Elegant minimalist still life composition with perfect balance and negative space. This artistic arrangement creates a sense of calm through simplicity and careful placement.",
    specifications: {
      camera: "Fujifilm GFX 100S",
      lens: "GF 80mm f/1.7 R WR",
      settings: "ISO 100, f/5.6, 1/125s",
      location: "Studio, Tokyo, Japan",
    },
    keywords: ["minimalist", "still life", "abstract", "composition", "clean", "simple", "artistic", "negative space"],
    usage: ["Interior design", "Editorial", "Product marketing", "Art galleries", "Design portfolios"],
    qualityOptions: [
      { name: "Standard", resolution: "2880x1920", format: "JPEG", price: 199 },
      { name: "Premium", resolution: "4320x2880", format: "JPEG + RAW", price: 299 },
      { name: "Ultimate", resolution: "5760x3840", format: "JPEG + RAW + PSD", price: 399 },
    ],
  },
  {
    id: 10,
    title: "Macro Dewdrops",
    photographer: "Sophia Lee",
    price: 249,
    originalPrice: 299,
    category: "macro",
    image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?w=800&h=600&fit=crop",
    rating: 4.8,
    downloads: 945,
    tags: ["macro", "dewdrops", "nature", "close-up"],
    resolution: "6016x4016",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "Exquisite macro photography of morning dewdrops on a leaf, capturing nature's perfect geometry. Each droplet acts as a tiny lens, reflecting and refracting the surrounding environment.",
    specifications: {
      camera: "Canon EOS 90D",
      lens: "Canon MP-E 65mm f/2.8 1-5x Macro",
      settings: "ISO 200, f/11, 1/160s",
      location: "Botanical Garden, Singapore",
    },
    keywords: ["macro", "dewdrops", "nature", "close-up", "detail", "water", "reflection", "botanical"],
    usage: [
      "Nature publications",
      "Wellness products",
      "Cosmetics",
      "Environmental campaigns",
      "Scientific illustration",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "3008x2008", format: "JPEG", price: 249 },
      { name: "Premium", resolution: "4512x3012", format: "JPEG + RAW", price: 349 },
      { name: "Ultimate", resolution: "6016x4016", format: "JPEG + RAW + PSD", price: 449 },
    ],
  },
  {
    id: 11,
    title: "Northern Lights",
    photographer: "Erik Nordmann",
    price: 399,
    originalPrice: 499,
    category: "night",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop",
    rating: 4.9,
    downloads: 1560,
    tags: ["aurora", "northern lights", "night", "sky"],
    resolution: "7360x4912",
    format: "RAW + JPEG",
    license: "Extended",
    description:
      "Spectacular display of the Aurora Borealis dancing across the night sky. This breathtaking natural phenomenon creates a mesmerizing light show in vibrant greens and purples.",
    specifications: {
      camera: "Nikon D850",
      lens: "Nikkor 14-24mm f/2.8G ED",
      settings: "ISO 3200, f/2.8, 15s",
      location: "Tromsø, Norway",
    },
    keywords: ["aurora", "northern lights", "night", "sky", "phenomenon", "arctic", "nature", "astronomy"],
    usage: ["Travel marketing", "Scientific publications", "Calendar art", "Luxury tourism", "Educational materials"],
    qualityOptions: [
      { name: "Standard", resolution: "3680x2456", format: "JPEG", price: 399 },
      { name: "Premium", resolution: "5520x3684", format: "JPEG + RAW", price: 499 },
      { name: "Ultimate", resolution: "7360x4912", format: "JPEG + RAW + PSD", price: 599 },
    ],
  },
  {
    id: 12,
    title: "Desert Dunes",
    photographer: "Amir Hassan",
    price: 299,
    originalPrice: 349,
    category: "nature",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
    rating: 4.8,
    downloads: 1230,
    tags: ["desert", "dunes", "landscape", "nature"],
    resolution: "6720x4480",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "Mesmerizing patterns of desert sand dunes sculpted by wind and light. This image captures the ever-changing landscape of the desert with its perfect curves and golden tones.",
    specifications: {
      camera: "Sony A7R IV",
      lens: "FE 24-70mm f/2.8 GM",
      settings: "ISO 100, f/11, 1/250s",
      location: "Sahara Desert, Morocco",
    },
    keywords: ["desert", "dunes", "landscape", "nature", "sand", "arid", "patterns", "minimalist"],
    usage: ["Travel publications", "Environmental campaigns", "Luxury branding", "Interior design", "Fine art prints"],
    qualityOptions: [
      { name: "Standard", resolution: "3360x2240", format: "JPEG", price: 299 },
      { name: "Premium", resolution: "5040x3360", format: "JPEG + RAW", price: 399 },
      { name: "Ultimate", resolution: "6720x4480", format: "JPEG + RAW + PSD", price: 499 },
    ],
  },
  {
    id: 13,
    title: "Vintage Car Detail",
    photographer: "Robert Miller",
    price: 279,
    originalPrice: 329,
    category: "automotive",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop",
    rating: 4.7,
    downloads: 890,
    tags: ["vintage", "car", "automotive", "detail"],
    resolution: "5760x3840",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "Elegant close-up detail of a classic vintage automobile showcasing timeless design and craftsmanship. This image captures the character and history embedded in automotive artistry.",
    specifications: {
      camera: "Canon EOS 5D Mark IV",
      lens: "EF 70-200mm f/2.8L IS III USM",
      settings: "ISO 200, f/4, 1/125s",
      location: "Classic Car Show, Milan, Italy",
    },
    keywords: ["vintage", "car", "automotive", "detail", "classic", "retro", "luxury", "design"],
    usage: [
      "Automotive magazines",
      "Luxury marketing",
      "Editorial features",
      "Restoration businesses",
      "Museum exhibits",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "2880x1920", format: "JPEG", price: 279 },
      { name: "Premium", resolution: "4320x2880", format: "JPEG + RAW", price: 379 },
      { name: "Ultimate", resolution: "5760x3840", format: "JPEG + RAW + PSD", price: 479 },
    ],
  },
  {
    id: 14,
    title: "Underwater Coral Reef",
    photographer: "Marina Santos",
    price: 349,
    originalPrice: 399,
    category: "underwater",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=600&fit=crop",
    rating: 4.8,
    downloads: 1050,
    tags: ["underwater", "coral", "reef", "ocean", "marine"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Extended",
    description:
      "Vibrant underwater scene of a thriving coral reef ecosystem teeming with marine life. This image showcases the incredible biodiversity and colors found beneath the ocean's surface.",
    specifications: {
      camera: "Nikon Z7 II with Ikelite Housing",
      lens: "NIKKOR Z 14-24mm f/2.8 S",
      settings: "ISO 400, f/8, 1/125s",
      location: "Great Barrier Reef, Australia",
    },
    keywords: ["underwater", "coral", "reef", "ocean", "marine", "sea life", "tropical", "conservation"],
    usage: [
      "Marine conservation",
      "Travel publications",
      "Scientific journals",
      "Educational materials",
      "Aquarium displays",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "3000x2000", format: "JPEG", price: 349 },
      { name: "Premium", resolution: "4500x3000", format: "JPEG + RAW", price: 449 },
      { name: "Ultimate", resolution: "6000x4000", format: "JPEG + RAW + PSD", price: 549 },
    ],
  },
  {
    id: 15,
    title: "Geometric Architecture",
    photographer: "Daniel Wong",
    price: 299,
    originalPrice: 349,
    category: "architecture",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=600&fit=crop",
    rating: 4.7,
    downloads: 920,
    tags: ["architecture", "geometric", "modern", "abstract"],
    resolution: "5472x3648",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "Bold geometric patterns in modern architectural design creating a mesmerizing visual rhythm. This image highlights the intersection of mathematics and architecture through precise angles and forms.",
    specifications: {
      camera: "Canon EOS R5",
      lens: "RF 15-35mm f/2.8L IS USM",
      settings: "ISO 100, f/9, 1/200s",
      location: "Singapore",
    },
    keywords: ["architecture", "geometric", "modern", "abstract", "pattern", "structure", "design", "urban"],
    usage: [
      "Architectural publications",
      "Design portfolios",
      "Corporate branding",
      "Tech industry",
      "Academic presentations",
    ],
    qualityOptions: [
      { name: "Standard", resolution: "2736x1824", format: "JPEG", price: 299 },
      { name: "Premium", resolution: "4104x2736", format: "JPEG + RAW", price: 399 },
      { name: "Ultimate", resolution: "5472x3648", format: "JPEG + RAW + PSD", price: 499 },
    ],
  },
  {
    id: 16,
    title: "Misty Forest Path",
    photographer: "Hannah Berg",
    price: 249,
    originalPrice: 299,
    category: "nature",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop",
    rating: 4.8,
    downloads: 1340,
    tags: ["forest", "mist", "path", "nature", "trees"],
    resolution: "6016x4016",
    format: "RAW + JPEG",
    license: "Standard",
    description:
      "Enchanting forest path shrouded in morning mist creating an atmosphere of mystery and tranquility. This image evokes a sense of journey through nature's hidden corridors.",
    specifications: {
      camera: "Fujifilm X-T4",
      lens: "XF 16-55mm f/2.8 R LM WR",
      settings: "ISO 400, f/5.6, 1/60s",
      location: "Black Forest, Germany",
    },
    keywords: ["forest", "mist", "path", "nature", "trees", "woodland", "atmospheric", "journey"],
    usage: ["Book covers", "Nature publications", "Wellness products", "Fantasy themes", "Environmental campaigns"],
    qualityOptions: [
      { name: "Standard", resolution: "3008x2008", format: "JPEG", price: 249 },
      { name: "Premium", resolution: "4512x3012", format: "JPEG + RAW", price: 349 },
      { name: "Ultimate", resolution: "6016x4016", format: "JPEG + RAW + PSD", price: 449 },
    ],
  },
]

let currentPhoto = null
let relatedPhotos = []
let zoomLevel = 1
let selectedQuality = 0 // Default to first quality option

// Initialize product detail page
document.addEventListener("DOMContentLoaded", () => {
  loadProductDetail()
  updateCartCount()
})

// Load product detail
function loadProductDetail() {
  const photoId = localStorage.getItem("selectedPhotoId")
  if (!photoId) {
    window.location.href = "catalog.html"
    return
  }

  currentPhoto = allPhotos.find((photo) => photo.id == photoId)
  if (!currentPhoto) {
    window.location.href = "catalog.html"
    return
  }

  // Update breadcrumb
  document.getElementById("breadcrumbCategory").textContent = currentPhoto.category
  document.getElementById("breadcrumbTitle").textContent = currentPhoto.title

  // Load product content
  loadProductContent()
  loadRelatedProducts()
}

// Load product content with enhanced quality options
function loadProductContent() {
  const container = document.getElementById("productContent")

  // Set default selected quality
  selectedQuality = 0
  const currentQualityOption = currentPhoto.qualityOptions[selectedQuality]
  const currentPrice = currentQualityOption.price
  const currentOriginalPrice = currentQualityOption.price * 1.2 // Just for display if needed

  container.innerHTML = `
    <div class="product-layout">
      <!-- Product Image -->
      <div class="product-image-section">
        <div class="main-image-container">
          <img src="${currentPhoto.image}" alt="${currentPhoto.title}" class="main-image" onclick="openZoom()">
          <div class="image-overlay">
            <button class="zoom-btn" onclick="openZoom()">
              <i class="fas fa-search-plus"></i>
              Zoom
            </button>
            <button class="fullscreen-btn" onclick="toggleFullscreen()">
              <i class="fas fa-expand"></i>
            </button>
          </div>
          ${currentPrice < currentOriginalPrice ? '<div class="sale-badge">Sale</div>' : ""}
        </div>
        
        <div class="image-info">
          <div class="image-specs">
            <div class="spec-item">
              <i class="fas fa-expand-arrows-alt"></i>
              <span id="resolution-display">${currentQualityOption.resolution}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-file-image"></i>
              <span id="format-display">${currentQualityOption.format}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-certificate"></i>
              <span>${currentPhoto.license}</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-download"></i>
              <span>${currentPhoto.downloads} downloads</span>
            </div>
          </div>
        </div>

        <!-- Image thumbnails -->
        <div class="image-thumbnails">
          <div class="thumbnail active">
            <img src="${currentPhoto.image}" alt="${currentPhoto.title}" onclick="changeMainImage(this.src)">
          </div>
          <div class="thumbnail">
            <img src="${currentPhoto.image.replace("w=800", "w=801")}" alt="${currentPhoto.title} - View 2" onclick="changeMainImage(this.src)">
          </div>
          <div class="thumbnail">
            <img src="${currentPhoto.image.replace("w=800", "w=802")}" alt="${currentPhoto.title} - Detail" onclick="changeMainImage(this.src)">
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <div class="product-details-section">
        <div class="product-header">
          <div class="product-category">${currentPhoto.category}</div>
          <h1 class="product-title">${currentPhoto.title}</h1>
          <div class="product-photographer">
            <i class="fas fa-camera"></i>
            <span>by ${currentPhoto.photographer}</span>
          </div>
          
          <div class="product-rating">
            <div class="stars">
              ${generateStars(currentPhoto.rating)}
            </div>
            <span class="rating-value">${currentPhoto.rating}</span>
            <span class="rating-count">(${currentPhoto.downloads} reviews)</span>
          </div>
        </div>

        <!-- Quality Options -->
        <div class="quality-options">
          <h3>Select Quality</h3>
          <div class="quality-selector">
            ${currentPhoto.qualityOptions
              .map(
                (option, index) => `
              <div class="quality-option ${index === selectedQuality ? "selected" : ""}" onclick="selectQuality(${index})">
                <div class="quality-name">${option.name}</div>
                <div class="quality-details">
                  <div class="quality-resolution">${option.resolution}</div>
                  <div class="quality-format">${option.format}</div>
                </div>
                <div class="quality-price">$${option.price}</div>
                ${index === selectedQuality ? '<div class="quality-check"><i class="fas fa-check-circle"></i></div>' : ""}
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <div class="product-pricing">
          <div class="price-main" id="price-display">$${currentQualityOption.price}</div>
          ${
            currentQualityOption.price < currentOriginalPrice
              ? `<div class="price-original">$${Math.round(currentOriginalPrice)}</div>
             <div class="price-discount">${Math.round((1 - currentQualityOption.price / currentOriginalPrice) * 100)}% OFF</div>`
              : ""
          }
        </div>

        <div class="product-description">
          <h3>Description</h3>
          <p>${currentPhoto.description}</p>
        </div>

        <div class="product-specifications">
          <h3>Technical Specifications</h3>
          <div class="specs-grid">
            <div class="spec-row">
              <span class="spec-label">Camera:</span>
              <span class="spec-value">${currentPhoto.specifications.camera}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Lens:</span>
              <span class="spec-value">${currentPhoto.specifications.lens}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Settings:</span>
              <span class="spec-value">${currentPhoto.specifications.settings}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Location:</span>
              <span class="spec-value">${currentPhoto.specifications.location}</span>
            </div>
          </div>
        </div>

        <div class="product-keywords">
          <h3>Keywords</h3>
          <div class="keywords-list">
            ${currentPhoto.keywords.map((keyword) => `<span class="keyword-tag">${keyword}</span>`).join("")}
          </div>
        </div>

        <div class="product-usage">
          <h3>Suggested Usage</h3>
          <ul class="usage-list">
            ${currentPhoto.usage.map((use) => `<li>${use}</li>`).join("")}
          </ul>
        </div>

        <div class="product-actions">
          <div class="action-buttons">
            <button class="btn btn-primary btn-large" onclick="addToCart(${currentPhoto.id})">
              <i class="fas fa-shopping-cart"></i>
              Add to Cart - <span id="button-price">$${currentQualityOption.price}</span>
            </button>
            <button class="btn btn-secondary" onclick="addToWishlist(${currentPhoto.id})">
              <i class="fas fa-heart"></i>
              Add to Wishlist
            </button>
            <button class="btn btn-secondary" onclick="previewDownload()">
              <i class="fas fa-eye"></i>
              Preview
            </button>
          </div>
          
          <div class="license-info">
            <h4>License Information</h4>
            <p>This image comes with a ${currentPhoto.license} license, allowing you to use it for commercial and personal projects.</p>
            <a href="#" class="license-link" onclick="showLicenseDetails(); return false;">View full license terms</a>
          </div>
        </div>
      </div>
    </div>
  `
}

// Function to select quality option
function selectQuality(index) {
  selectedQuality = index
  const qualityOption = currentPhoto.qualityOptions[index]

  // Update displayed information
  document.getElementById("resolution-display").textContent = qualityOption.resolution
  document.getElementById("format-display").textContent = qualityOption.format
  document.getElementById("price-display").textContent = `$${qualityOption.price}`
  document.getElementById("button-price").textContent = `$${qualityOption.price}`

  // Update selected class
  const qualityOptions = document.querySelectorAll(".quality-option")
  qualityOptions.forEach((option, i) => {
    if (i === index) {
      option.classList.add("selected")
      if (!option.querySelector(".quality-check")) {
        option.innerHTML += '<div class="quality-check"><i class="fas fa-check-circle"></i></div>'
      }
    } else {
      option.classList.remove("selected")
      const checkIcon = option.querySelector(".quality-check")
      if (checkIcon) {
        checkIcon.remove()
      }
    }
  })

  // Update original price and discount if applicable
  const originalPrice = qualityOption.price * 1.2 // Just for display
  const priceOriginalElement = document.querySelector(".price-original")
  const priceDiscountElement = document.querySelector(".price-discount")

  if (priceOriginalElement && priceDiscountElement) {
    priceOriginalElement.textContent = `$${Math.round(originalPrice)}`
    priceDiscountElement.textContent = `${Math.round((1 - qualityOption.price / originalPrice) * 100)}% OFF`
  }
}

// Function to change main image
function changeMainImage(src) {
  const mainImage = document.querySelector(".main-image")
  mainImage.src = src

  // Update active thumbnail
  const thumbnails = document.querySelectorAll(".thumbnail")
  thumbnails.forEach((thumbnail) => {
    if (thumbnail.querySelector("img").src === src) {
      thumbnail.classList.add("active")
    } else {
      thumbnail.classList.remove("active")
    }
  })
}

// Show license details in a modal
function showLicenseDetails() {
  const modal = document.createElement("div")
  modal.className = "modal"
  modal.style.display = "block"

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 700px;">
      <div class="modal-header">
        <h3><i class="fas fa-certificate"></i> ${currentPhoto.license} License Terms</h3>
        <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
      </div>
      <div class="modal-body" style="padding: 2rem;">
        <h4>What you can do with this image:</h4>
        <ul class="license-list">
          <li>Use in commercial and personal projects</li>
          <li>Use in digital and print media</li>
          <li>Modify and create derivative works</li>
          <li>Use worldwide for the duration of the license</li>
          <li>Use in multiple projects (no limit on impressions)</li>
        </ul>
        
        <h4>Restrictions:</h4>
        <ul class="license-list restrictions">
          <li>Reselling or redistributing the original image</li>
          <li>Using the image in a way that is defamatory or misleading</li>
          <li>Using the image in products for resale where the image is the primary value</li>
          <li>Using the image in relation to sensitive subjects without proper disclaimers</li>
        </ul>
        
        <div class="license-note">
          <p>This license is perpetual and grants you non-exclusive rights to use the image according to the terms above.</p>
          <p>For extended usage rights or specific questions, please contact our licensing team.</p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" onclick="this.closest('.modal').remove()">I Understand</button>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  // Close on outside click
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.remove()
    }
  }
}

// Load related products
function loadRelatedProducts() {
  relatedPhotos = allPhotos
    .filter(
      (photo) =>
        photo.id !== currentPhoto.id &&
        (photo.category === currentPhoto.category || photo.tags.some((tag) => currentPhoto.tags.includes(tag))),
    )
    .slice(0, 4)

  const container = document.getElementById("relatedGrid")

  if (relatedPhotos.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No related photos found</p>
        <button class="btn btn-primary" onclick="window.location.href='catalog.html'">
          Browse All Photos
        </button>
      </div>
    `
    return
  }

  container.innerHTML = relatedPhotos
    .map(
      (photo) => `
    <div class="related-card" onclick="viewPhoto(${photo.id})">
      <img src="${photo.image}" alt="${photo.title}" class="related-image">
      <div class="related-content">
        <h4 class="related-title">${photo.title}</h4>
        <p class="related-photographer">by ${photo.photographer}</p>
        <div class="related-price">$${photo.qualityOptions[0].price}</div>
        <div class="related-rating">
          <i class="fas fa-star"></i>
          <span>${photo.rating}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

// Generate stars for rating
function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  let stars = ""

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>'
  }

  // Half star
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>'
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>'
  }

  return stars
}

// Zoom functionality
function openZoom() {
  const modal = document.getElementById("zoomModal")
  const zoomImage = document.getElementById("zoomImage")

  zoomImage.src = currentPhoto.image
  modal.style.display = "block"
  zoomLevel = 1
  updateZoomImage()
}

function closeZoom() {
  const modal = document.getElementById("zoomModal")
  modal.style.display = "none"
}

function zoomIn() {
  zoomLevel = Math.min(zoomLevel * 1.5, 5)
  updateZoomImage()
}

function zoomOut() {
  zoomLevel = Math.max(zoomLevel / 1.5, 0.5)
  updateZoomImage()
}

function resetZoom() {
  zoomLevel = 1
  updateZoomImage()
}

function updateZoomImage() {
  const zoomImage = document.getElementById("zoomImage")
  zoomImage.style.transform = `scale(${zoomLevel})`
}

// Fullscreen functionality
function toggleFullscreen() {
  const imageContainer = document.querySelector(".main-image-container")

  if (!document.fullscreenElement) {
    imageContainer.requestFullscreen().catch((err) => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`)
    })
  } else {
    document.exitFullscreen()
  }
}

// Product actions
function addToCart(photoId) {
  const photo = allPhotos.find((p) => p.id === photoId)
  if (!photo) return

  // Get the selected quality option
  const qualityOption = photo.qualityOptions[selectedQuality]

  const cart = JSON.parse(localStorage.getItem("cart")) || []

  // Create a cart item with the selected quality
  const cartItem = {
    id: photo.id,
    title: photo.title,
    photographer: photo.photographer,
    price: qualityOption.price,
    image: photo.image,
    quantity: 1,
    quality: qualityOption.name,
    resolution: qualityOption.resolution,
    format: qualityOption.format,
  }

  // Check if this exact item (same id AND quality) already exists
  const existingItemIndex = cart.findIndex((item) => item.id === photo.id && item.quality === qualityOption.name)

  if (existingItemIndex >= 0) {
    // Update quantity if same item with same quality exists
    cart[existingItemIndex].quantity += 1
  } else {
    // Add new item
    cart.push(cartItem)
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  showNotification(`${photo.title} (${qualityOption.name}) added to cart!`, "success")
}

function addToWishlist(photoId) {
  const photo = allPhotos.find((p) => p.id === photoId)
  if (!photo) return

  // Get the selected quality option
  const qualityOption = photo.qualityOptions[selectedQuality]

  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

  // Create a wishlist item with the selected quality
  const wishlistItem = {
    id: photo.id,
    title: photo.title,
    photographer: photo.photographer,
    price: qualityOption.price,
    image: photo.image,
    quality: qualityOption.name,
    resolution: qualityOption.resolution,
    format: qualityOption.format,
  }

  // Check if this exact item (same id AND quality) already exists
  const existingItemIndex = wishlist.findIndex((item) => item.id === photo.id && item.quality === qualityOption.name)

  if (existingItemIndex >= 0) {
    showNotification("Item already in wishlist", "info")
    return
  }

  wishlist.push(wishlistItem)
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
  showNotification(`${photo.title} (${qualityOption.name}) added to wishlist!`, "success")
}

function previewDownload() {
  showNotification("Preview download started", "info")

  // Simulate preview download
  setTimeout(() => {
    const link = document.createElement("a")
    link.href = currentPhoto.image
    link.download = `${currentPhoto.title}_preview.jpg`
    link.click()
    showNotification("Preview downloaded successfully!", "success")
  }, 1000)
}

function viewPhoto(photoId) {
  localStorage.setItem("selectedPhotoId", photoId)
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
    document.getElementById("cartTotal").textContent = "0.00"
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
        <p style="margin: 0.25rem 0 0 0; color: #06b6d4; font-size: 0.75rem;">${item.quality} (${item.resolution})</p>
        <p style="margin: 0.25rem 0 0 0; color: #06b6d4; font-weight: 600;">$${item.price}</p>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <button onclick="updateQuantity(${item.id}, '${item.quality}', ${item.quantity - 1})" style="background: rgba(71, 85, 105, 0.5); border: none; color: #f1f5f9; width: 30px; height: 30px; border-radius: 4px; cursor: pointer;">-</button>
        <span style="color: #f1f5f9; min-width: 20px; text-align: center;">${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, '${item.quality}', ${item.quantity + 1})" style="background: rgba(71, 85, 105, 0.5); border: none; color: #f1f5f9; width: 30px; height: 30px; border-radius: 4px; cursor: pointer;">+</button>
      </div>
      <button onclick="removeFromCart(${item.id}, '${item.quality}')" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 0.5rem;">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `,
    )
    .join("")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  document.getElementById("cartTotal").textContent = total.toFixed(2)
}

function updateQuantity(photoId, quality, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(photoId, quality)
    return
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const itemIndex = cart.findIndex((item) => item.id === photoId && item.quality === quality)

  if (itemIndex >= 0) {
    cart[itemIndex].quantity = newQuantity
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartCount()
    loadCartItems()
  }
}

function removeFromCart(photoId, quality) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart = cart.filter((item) => !(item.id === photoId && item.quality === quality))
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  loadCartItems()
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

// Utility functions
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
  const zoomModal = document.getElementById("zoomModal")
  const cartModal = document.getElementById("cartModal")

  if (event.target === zoomModal) {
    closeZoom()
  }
  if (event.target === cartModal) {
    closeCart()
  }
}

// Keyboard navigation for zoom
document.addEventListener("keydown", (event) => {
  if (document.getElementById("zoomModal").style.display === "block") {
    switch (event.key) {
      case "Escape":
        closeZoom()
        break
      case "+":
      case "=":
        zoomIn()
        break
      case "-":
        zoomOut()
        break
      case "0":
        resetZoom()
        break
    }
  }
})
