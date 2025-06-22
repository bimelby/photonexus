// Catalog specific JavaScript
// license: "Commercial"
// Catalog specific JavaScript
const allPhotos = [
  {
    id:   1,
    title: "Cosmic Nebula",
    photographer: "Alex Chen",
    price: 34,
    originalPrice: 53,
    category: "space",
    image: "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg",
    rating: 4.9,
    downloads: 1250,
    tags: ["space", "nebula", "cosmic", "astronomy"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description:
      "A stunning view of a cosmic nebula captured in deep space, showcasing vibrant colors and intricate gas formations.",
  },
  {
    id: 2,
    title: "Urban Nights",
    photographer: "Sarah Kim",
    price: 11,
    originalPrice: 23,
    category: "urban",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    rating: 4.8,
    downloads: 980,
    tags: ["urban", "night", "city", "lights"],
    resolution: "5472x3648",
    format: "JPEG",
    license: "Commercial",
    description: "Dynamic urban nightscape featuring illuminated skyscrapers and bustling city life.",
  },
  {
    id: 3,
    title: "Mountain Serenity",
    photographer: "David Park",
    price: 24,
    originalPrice: 29,
    category: "nature",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    rating: 4.9,
    downloads: 1450,
    tags: ["mountain", "nature", "landscape", "peaceful"],
    resolution: "7360x4912",
    format: "RAW + JPEG",
    license: "Extended",
    description: "Peaceful mountain landscape with pristine snow-capped peaks and serene alpine environment.",
  },
  {
    id: 4,
    title: "Abstract Flow",
    photographer: "Maria Rodriguez",
    price: 17,
    originalPrice: 22,
    category: "abstract",
    image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    rating: 4.7,
    downloads: 756,
    tags: ["abstract", "flow", "colorful", "modern"],
    resolution: "4000x6000",
    format: "JPEG",
    license: "Standard",
    description: "Modern abstract composition with flowing forms and vibrant color gradients.",
  },
  {
    id: 5,
    title: "Wildlife Portrait",
    photographer: "John Smith",
    price: 34,
    originalPrice: 44,
    category: "wildlife",
    image: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
    rating: 4.9,
    downloads: 892,
    tags: ["wildlife", "animal", "portrait", "nature"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "Intimate wildlife portrait capturing the essence and beauty of nature's creatures.",
  },
  {
    id: 6,
    title: "Modern Architecture",
    photographer: "Lisa Wang",
    price: 22,
    originalPrice: 27,
    category: "architecture",
    image: "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg",
    rating: 4.6,
    downloads: 634,
    tags: ["architecture", "modern", "building", "design"],
    resolution: "5184x3456",
    format: "JPEG",
    license: "Commercial",
    description: "Contemporary architectural design showcasing innovative structural elements and modern aesthetics.",
  },
  {
    id: 7,
    title: "Forest Morning",
    photographer: "Anna Woods",
    price: 18,
    originalPrice: 23,
    category: "nature",
    image: "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg",
    rating: 4.7,
    downloads: 820,
    tags: ["forest", "nature", "morning", "mist"],
    resolution: "6000x4000",
    format: "JPEG",
    license: "Commercial",
    description: "A misty morning in the forest with sunlight streaming through the trees.",
  },
  {
    id: 8,
    title: "City Reflections",
    photographer: "Brian Lee",
    price: 21,
    originalPrice: 26,
    category: "urban",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    rating: 4.6,
    downloads: 700,
    tags: ["city", "urban", "reflection", "night"],
    resolution: "5472x3648",
    format: "JPEG",
    license: "Commercial",
    description: "City lights reflecting on wet streets after a rainstorm.",
  },
  {
    id: 9,
    title: "Golden Portrait",
    photographer: "Emily Carter",
    price: 19,
    originalPrice: 24,
    category: "portrait",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    rating: 4.8,
    downloads: 950,
    tags: ["portrait", "golden", "woman", "studio"],
    resolution: "4000x6000",
    format: "RAW + JPEG",
    license: "Standard",
    description: "A golden hour portrait with soft natural lighting.",
  },
  {
    id: 10,
    title: "Color Splash",
    photographer: "Carlos Rivera",
    price: 17,
    originalPrice: 22,
    category: "abstract",
    image: "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg",
    rating: 4.5,
    downloads: 600,
    tags: ["abstract", "color", "splash", "modern"],
    resolution: "4000x6000",
    format: "JPEG",
    license: "Standard",
    description: "Vivid abstract art with splashes of color and dynamic movement.",
  },
  
  {
    id: 11,
    title: "Glass Towers",
    photographer: "Sophie Turner",
    price: 23,
    originalPrice: 28,
    category: "architecture",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
    rating: 4.7,
    downloads: 810,
    tags: ["architecture", "glass", "towers", "modern"],
    resolution: "5184x3456",
    format: "JPEG",
    license: "Commercial",
    description: "Modern glass towers reflecting the city skyline.",
  },
  {
    id: 12,
    title: "Lion's Gaze",
    photographer: "Tom Walker",
    price: 35,
    originalPrice: 45,
    category: "wildlife",
    image: "https://images.pexels.com/photos/8521836/pexels-photo-8521836.jpeg",
    rating: 4.9,
    downloads: 920,
    tags: ["wildlife", "lion", "animal", "nature"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A powerful lion staring directly into the camera.",
  },
  {
    id: 13,
    title: "Stellar Dreams",
    photographer: "Nina Patel",
    price: 32,
    originalPrice: 37,
    category: "space",
    image: "https://images.pexels.com/photos/32617588/pexels-photo-32617588.jpeg",
    rating: 4.8,
    downloads: 1100,
    tags: ["space", "stars", "galaxy", "night"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A dreamy view of the Milky Way and distant galaxies.",
  },
  // Nature
{
  id: 14,
  title: "Sunset Valley",
  photographer: "Ainsyah Rose",
  price: 20,
  originalPrice: 25,
  category: "nature",
  image: "https://images.pexels.com/photos/966731/pexels-photo-966731.jpeg",
  rating: 4.8,
  downloads: 900,
  tags: ["nature", "sunset", "valley", "landscape"],
  resolution: "6000x4000",
  format: "JPEG",
  license: "Commercial",
  description: "A breathtaking sunset over a lush green valley.",
},
// Urban
{
  id: 15,
  title: "Metro Rush",
  photographer: "abdulllah Adams",
  price: 21,
  originalPrice: 26,
  category: "urban",
  image: "https://images.pexels.com/photos/27721890/pexels-photo-27721890.jpeg",
  rating: 4.7,
  downloads: 750,
  tags: ["urban", "metro", "city", "rush"],
  resolution: "5472x3648",
  format: "JPEG",
  license: "Commercial",
  description: "A busy metro station in the heart of the city.",
},
// Portrait
{
  id: 16,
  title: "Blue Mood",
  photographer: "Rachel Lee",
  price: 18,
  originalPrice: 23,
  category: "portrait",
  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop",
  rating: 4.6,
  downloads: 800,
  tags: ["portrait", "blue", "mood", "studio"],
  resolution: "4000x6000",
  format: "RAW + JPEG",
  license: "Standard",
  description: "A moody portrait with blue tones and dramatic lighting.",
},
// Abstract
{
  id: 17,
  title: "Geometric Dreams",
  photographer: "Samir Patel",
  price: 16,
  originalPrice: 21,
  category: "abstract",
  image: "https://images.pexels.com/photos/32605106/pexels-photo-32605106.jpeg",
  rating: 4.5,
  downloads: 650,
  tags: ["abstract", "geometric", "modern", "art"],
  resolution: "4000x6000",
  format: "JPEG",
  license: "Standard",
  description: "Abstract geometric shapes in a modern composition.",
},
// Architecture
{
  id: 18,
  title: "Classic Columns",
  photographer: "Victor Hugo",
  price: 240,
  originalPrice: 290,
  category: "architecture",
  image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop",
  rating: 4.8,
  downloads: 830,
  tags: ["architecture", "classic", "columns", "building"],
  resolution: "5184x3456",
  format: "JPEG",
  license: "Commercial",
  description: "Classic architectural columns in a historic building.",
},
// Wildlife
{
  id: 19,
  title: "Eagle Flight",
  photographer: "Linda Fox",
  price: 370,
  originalPrice: 470,
  category: "wildlife",
  image: "https://images.pexels.com/photos/3250638/pexels-photo-3250638.jpeg",
  rating: 4.9,
  downloads: 980,
  tags: ["wildlife", "eagle", "flight", "nature"],
  resolution: "6000x4000",
  format: "RAW + JPEG",
  license: "Commercial",
  description: "A majestic eagle soaring above the mountains.",
},

{
  id: 20,
  title: "Sunset Valley",
  photographer: "Olivia Green",
  price: 205,
  originalPrice: 255,
  category: "nature",
  image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop",
  rating: 4.8,
  downloads: 900,
  tags: ["nature", "sunset", "valley", "landscape"],
  resolution: "6000x4000",
  format: "JPEG",
  license: "Commercial",
  description: "A breathtaking sunset over a lush green valley.",
},
// Urban
{
  id: 21,
  title: "Metro Rush",
  photographer: "Adam Smits",
  price: 215,
  originalPrice: 265,
  category: "urban",
  image: "https://images.pexels.com/photos/106773/pexels-photo-106773.jpeg",
  rating: 4.7,
  downloads: 750,
  tags: ["urban", "metro", "city", "rush"],
  resolution: "5472x3648",
  format: "JPEG",
  license: "Commercial",
  description: "A busy metro station in the heart of the city.",
},
// Portrait
{
  id: 22,
  title: "Blue Mood",
  photographer: "Rachel Lee",
  price: 185,
  originalPrice: 235,
  category: "portrait",
  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop",
  rating: 4.6,
  downloads: 800,
  tags: ["portrait", "blue", "mood", "studio"],
  resolution: "4000x6000",
  format: "RAW + JPEG",
  license: "Standard",
  description: "A moody portrait with blue tones and dramatic lighting.",
},
// Abstract
{
  id: 23,
  title: "Geometric Dreams",
  photographer: " Mehmed Abdullah ",
  price: 160,
  originalPrice: 210,
  category: "abstract",
  image: "https://images.pexels.com/photos/32585528/pexels-photo-32585528.jpeg",
  rating: 4.5,
  downloads: 650,
  tags: ["abstract", "geometric", "modern", "art"],
  resolution: "4000x6000",
  format: "JPEG",
  license: "Standard",
  description: "Abstract geometric shapes in a modern composition.",
},
// Architecture
{
  id: 24,
  title: "Classic Columns",
  photographer: "Victor Hugo",
  price: 240,
  originalPrice: 290,
  category: "architecture",
  image: "https://images.pexels.com/photos/32570545/pexels-photo-32570545.jpeg",
  rating: 4.8,
  downloads: 830,
  tags: ["architecture", "classic", "columns", "building"],
  resolution: "5184x3456",
  format: "JPEG",
  license: "Commercial",
  description: "Classic architectural columns in a historic building.",
},
// Wildlife
{
  id: 25,
  title: "Eagle Flight",
  photographer: "Zainab Khan",
  price: 370,
  originalPrice: 470,
  category: "wildlife",
  image: "https://images.pexels.com/photos/635503/pexels-photo-635503.jpeg",
  rating: 4.9,
  downloads: 980,
  tags: ["wildlife", "eagle", "flight", "nature"],
  resolution: "6000x4000",
  format: "RAW + JPEG",
  license: "Commercial",
  description: "A majestic eagle soaring above the mountains.",
},
// ...existing code...
 {
    id: 26,
    title: "Urban Geometry",
    photographer: "Megan Fox",
    price: 215,
    originalPrice: 265,
    category: "urban",
    image: "https://images.pexels.com/photos/32599895/pexels-photo-32599895.jpeg",
    rating: 4.7,
    downloads: 850,
    tags: ["urban", "geometry", "architecture", "shapes"],
    resolution: "5472x3648",
    format: "JPEG",
    license: "Commercial",
    description: "Geometric patterns in a modern cityscape.",
},
{
    id: 27,
    title: "Wildlife in Motion",
    photographer: "Chris Evans",
    price: 299,
    originalPrice: 349,
    category: "wildlife",
    image: "https://images.pexels.com/photos/9021202/pexels-photo-9021202.jpeg",
    rating: 4.8,
    downloads: 990,
    tags: ["wildlife", "motion", "animal", "nature"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A wild animal captured mid-motion in its natural habitat.",
},
{
    id: 28,
    title: "Portrait in Blue",
    photographer: "Linda Brown",
    price: 210,
    originalPrice: 260,
    category: "portrait",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop",
    rating: 4.7,
    downloads: 870,
    tags: ["portrait", "blue", "studio", "woman"],
    resolution: "4000x6000",
    format: "RAW + JPEG",
    license: "Standard",
    description: "A creative portrait with blue tones and dramatic lighting.",
},
{
    id: 29,
    title: "Abstract Neon",
    photographer: "Oscar Wilde",
    price: 180,
    originalPrice: 230,
    category: "abstract",
    image: "https://images.pexels.com/photos/32619713/pexels-photo-32619713.jpeg",
    rating: 4.6,
    downloads: 720,
    tags: ["abstract", "neon", "colorful", "modern"],
    resolution: "4000x6000",
    format: "JPEG",
    license: "Standard",
    description: "Neon lights create an abstract, colorful composition.",
},
{
    id: 30,
    title: "Nature's Mirror",
    photographer: "Paul Green",
    price: 260,
    originalPrice: 310,
    category: "nature",
    image: "https://images.pexels.com/photos/32618693/pexels-photo-32618693.jpeg",
    rating: 4.8,
    downloads: 1200,
    tags: ["nature", "mirror", "lake", "reflection"],
    resolution: "3009x4213",
    format: "RAW + JPEG",
    license: "Extended",
    description: "A calm lake reflecting the surrounding mountains and sky.",
},
{
    id: 31,
    title: "Space Odyssey",
    photographer: "Neil Armstrong",
    price: 340,
    originalPrice: 390,
    category: "space",
    image: "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg",
    rating: 4.9,
    downloads: 1300,
    tags: ["space", "odyssey", "stars", "galaxy"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A breathtaking view of a distant galaxy.",
},
{
    id: 32,
    title: "Urban Alley",
    photographer: "Sam Lee",
    price: 195,
    originalPrice: 245,
    category: "urban",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop",
    rating: 4.5,
    downloads: 650,
    tags: ["urban", "alley", "night", "city"],
    resolution: "5472x3648",
    format: "JPEG",
    license: "Commercial",
    description: "A moody urban alley illuminated by neon lights.",
},
{
    id: 33,
    title: "Golden Forest",
    photographer: "Anna Woods",
    price: 205,
    originalPrice: 255,
    category: "nature",
    image: "https://images.pexels.com/photos/1114896/pexels-photo-1114896.jpeg",
    rating: 4.7,
    downloads: 900,
    tags: ["forest", "nature", "golden", "trees"],
    resolution: "6000x4000",
    format: "JPEG",
    license: "Commercial",
    description: "Golden sunlight streaming through a dense forest.",
},
{
    id: 34,
    title: "Architectural Lines",
    photographer: "Lisa Wang",
    price: 240,
    originalPrice: 290,
    category: "architecture",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
    rating: 4.8,
    downloads: 830,
    tags: ["architecture", "lines", "modern", "building"],
    resolution: "5184x3456",
    format: "JPEG",
    license: "Commercial",
    description: "Clean architectural lines in a modern building.",
},
{
    id: 35,
    title: "Wildlife Encounter",
    photographer: "John Smith",
    price: 355,
    originalPrice: 405,
    category: "wildlife",
    image: "https://images.pexels.com/photos/32614795/pexels-photo-32614795.jpeg",
    rating: 4.9,
    downloads: 950,
    tags: ["wildlife", "encounter", "animal", "nature"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A close encounter with a wild animal in its habitat.",
},
{
    id: 36,
    title: "Portrait of Grace",
    photographer: "Emily Carter",
    price: 225,
    originalPrice: 275,
    category: "portrait",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    rating: 4.8,
    downloads: 980,
    tags: ["portrait", "grace", "woman", "studio"],
    resolution: "4000x6000",
    format: "RAW + JPEG",
    license: "Standard",
    description: "A graceful portrait with soft lighting.",
},
{
    id: 37,
    title: "Abstract Dreams",
    photographer: "Maria Rodriguez",
    price: 751,
    originalPrice: 905,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
    rating: 4.7,
    downloads: 780,
    tags: ["abstract", "dreams", "colorful", "modern"],
    resolution: "4000x6000",
    format: "JPEG",
    license: "Standard",
    description: "Dreamy abstract art with vibrant colors.",
},
{
    id: 38,
    title: "Stellar Night",
    photographer: "Nina Patel",
    price: 330,
    originalPrice: 380,
    category: "space",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    rating: 4.8,
    downloads: 1150,
    tags: ["space", "night", "stars", "galaxy"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A star-filled night sky in deep space.",
},
{
    id: 39,
    title: "Urban Reflections",
    photographer: "Brian Lee",
    price: 220,
    originalPrice: 270,
    category: "urban",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
    rating: 4.6,
    downloads: 780,
    tags: ["urban", "reflections", "city", "night"],
    resolution: "5472x3648",
    format: "JPEG",
    license: "Commercial",
    description: "Reflections of city lights on wet pavement.",
},
{
    id: 40,
    title: "Wildlife Majesty",
    photographer: "Tom Walker",
    price: 365,
    originalPrice: 415,
    category: "wildlife",
    image: "https://images.pexels.com/photos/31980554/pexels-photo-31980554.jpeg",
    rating: 4.9,
    downloads: 970,
    tags: ["wildlife", "majesty", "animal", "nature"],
    resolution: "6000x4000",
    format: "RAW + JPEG",
    license: "Commercial",
    description: "A majestic animal in the wild.",
},
{
    id: 41,
    title: "Portrait in Gold",
    photographer: "Linda Brown",
    price: 1000,
    originalPrice: 2300,
    category: "portrait",
    image: "https://images.pexels.com/photos/8684565/pexels-photo-8684565.jpeg",
    rating: 4.7,
    downloads: 890,
    tags: ["portrait", "gold", "studio", "woman"],
    resolution: "4000x6000",
    format: "RAW + JPEG",
    license: "Standard",
    description: "A portrait with golden hues and elegant pose.",
},
{
    id: 42,
    title: "Abstract Motion",
    photographer: "Oscar breisha",
    price: 185,
    originalPrice: 235,
    category: "abstract",
    image: "https://images.pexels.com/photos/32607807/pexels-photo-32607807.jpeg",
    rating: 4.6,
    downloads: 740,
    tags: ["abstract", "motion", "colorful", "modern"],
    resolution: "4000x6000",
    format: "JPEG",
    license: "Standard",
    description: "Motion blur creates a dynamic abstract composition.",
  },

// ...existing code...
...Array.from({length: 1000000}, (_, i) => {
  const id = 43 + i;
  const categories = [
    "nature", "urban", "portrait", "abstract", "architecture", "wildlife", "space"
  ];
  const cat = categories[i % categories.length];
  // Gunakan picsum.photos untuk placeholder image yang pasti tampil
  // Setiap kategori diberi query berbeda agar variasi
  const picsumSeed = `${cat}-${id}`;
  return {
    id,
    title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Photo #${id}`,
    photographer: `Photographer ${id}`,
    price: 10 + (i % 15) * 10,
    originalPrice: 37 + (i % 70) * 100,
    category: cat,
    image: `https://picsum.photos/seed/${picsumSeed}/600/400`,
    rating: +(4.5 + ((i % 3) * 0.5)).toFixed(1),
    downloads: 500 + (i * 7) % 1000,
    tags: [cat, "stock", "photo", `tag${i}`],
    resolution: "15360x8640",
    format: i % 2 === 0 ? "RAW + JPEG" : "JPEG",
    license: i % 3 === 0 ? "Commercial" : "Standard",
    description: `A beautiful ${cat} stock photo number ${id}.`
  }
}),
// ...existing code...

//
// ... lanjutkan dengan pola serupa untuk setiap kategori ...
]

let filteredPhotos = [...allPhotos]
let currentPage = 1
const photosPerPage = 6
let viewMode = "grid"

// Declare missing functions
//function updateCartCount() {
  // Placeholder for updateCartCount logic
  //console.log("Updating cart count...")
//}

function viewPhotoDetail(photoId) {
  // Placeholder for viewPhotoDetail logic
  console.log(`Viewing photo detail for ID: ${photoId}`)
}

// Initialize catalog page
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
  loadPhotos()
  setupSearch()

  // Check for search query from localStorage
  const searchQuery = localStorage.getItem("searchQuery")
  if (searchQuery) {
    document.getElementById("searchInput").value = searchQuery
    searchPhotos(searchQuery)
    localStorage.removeItem("searchQuery")
  }
})

// Load and display photos
function loadPhotos() {
  const container = document.getElementById("photosContainer")
  const resultsCount = document.getElementById("resultsCount")

  if (!container) return

  // Calculate pagination
  const startIndex = (currentPage - 1) * photosPerPage
  const endIndex = startIndex + photosPerPage
  const photosToShow = filteredPhotos.slice(startIndex, endIndex)

  // Update results count
  resultsCount.textContent = `${startIndex + 1}-${Math.min(endIndex, filteredPhotos.length)} of ${filteredPhotos.length}`

  // Clear container
  container.innerHTML = ""
  container.className = `photos-container ${viewMode}-view`

  if (photosToShow.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No photos found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `
    return
  }

  // Create photo cards
  photosToShow.forEach((photo) => {
    const card = createCatalogPhotoCard(photo)
    container.appendChild(card)
  })

  // Update pagination
  updatePagination()
}

// Create photo card for catalog
function createCatalogPhotoCard(photo) {
  const card = document.createElement("div")
  card.className = `photo-card ${viewMode === "list" ? "list-view" : ""}`
  card.onclick = () => viewPhotoDetail(photo.id)

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
      : ""

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
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); previewPhoto(${photo.id})">
            Preview
          </button>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${photo.id})">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `

  return card
}

// Filter functions
function applyFilters() {
  const category = document.getElementById("categoryFilter").value
  const sortBy = document.getElementById("sortFilter").value
  const priceMin = Number.parseInt(document.getElementById("priceRangeMin").value)
  const priceMax = Number.parseInt(document.getElementById("priceRangeMax").value)

  // Filter by category
  filteredPhotos = allPhotos.filter((photo) => {
    if (category && photo.category !== category) return false
    if (photo.price < priceMin || photo.price > priceMax) return false
    return true
  })

  // Sort photos
  switch (sortBy) {
    case "newest":
      filteredPhotos.sort((a, b) => b.id - a.id)
      break
    case "price-low":
      filteredPhotos.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredPhotos.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredPhotos.sort((a, b) => b.rating - a.rating)
      break
    default: // popular
      filteredPhotos.sort((a, b) => b.downloads - a.downloads)
  }

  currentPage = 1
  loadPhotos()
}

function clearFilters() {
  document.getElementById("categoryFilter").value = ""
  document.getElementById("sortFilter").value = "popular"
  document.getElementById("priceRangeMin").value = 10
  document.getElementById("priceRangeMax").value = 1000
  updatePriceRange()

  filteredPhotos = [...allPhotos]
  currentPage = 1
  loadPhotos()
}

function updatePriceRange() {
  const minSlider = document.getElementById("priceRangeMin")
  const maxSlider = document.getElementById("priceRangeMax")
  const minDisplay = document.getElementById("priceMin")
  const maxDisplay = document.getElementById("priceMax")

  let min = Number.parseInt(minSlider.value)
  let max = Number.parseInt(maxSlider.value)

  if (min > max) {
    ;[min, max] = [max, min]
    minSlider.value = min
    maxSlider.value = max
  }

  minDisplay.textContent = min
  maxDisplay.textContent = max
}

// View mode functions
function setViewMode(mode) {
  viewMode = mode

  document.getElementById("gridView").classList.toggle("active", mode === "grid")
  document.getElementById("listView").classList.toggle("active", mode === "list")

  loadPhotos()
}

// Pagination
function updatePagination() {
  const pagination = document.getElementById("pagination")
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)

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
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)
  if (page < 1 || page > totalPages) return

  currentPage = page
  loadPhotos()

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim()
      if (query.length >= 2) {
        searchPhotos(query)
      } else if (query.length === 0) {
        filteredPhotos = [...allPhotos]
        currentPage = 1
        loadPhotos()
      }
    })
  }
}

function searchPhotos(query) {
  const searchTerm = query.toLowerCase()

  filteredPhotos = allPhotos.filter((photo) => {
    return (
      photo.title.toLowerCase().includes(searchTerm) ||
      photo.photographer.toLowerCase().includes(searchTerm) ||
      photo.category.toLowerCase().includes(searchTerm) ||
      photo.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    )
  })

  currentPage = 1
  loadPhotos()
}

function viewPhotoDetail(photoId) {
  localStorage.setItem("selectedPhotoId", photoId)
  window.location.href = "product-detail.html"
}
// Update mini profile avatar in navbar on every page
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
// Preview function
function previewPhoto(photoId) {
  const photo = allPhotos.find((p) => p.id === photoId)
  if (!photo) return

  // Create preview modal
  const modal = document.createElement("div")
  modal.className = "modal"
  modal.style.display = "block"

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 800px;">
      <div class="modal-header">
        <h3><i class="fas fa-eye"></i> Photo Preview</h3>
        <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
      </div>
      <div class="modal-body" style="padding: 0;">
        <img src="${photo.image}" alt="${photo.title}" style="width: 100%; height: 400px; object-fit: cover;">
        <div style="padding: 1.5rem;">
          <h3 style="color: #f1f5f9; margin-bottom: 0.5rem;">${photo.title}</h3>
          <p style="color: #64748b; margin-bottom: 1rem;">by ${photo.photographer}</p>
          <p style="color: #cbd5e1; margin-bottom: 1rem;">${photo.description}</p>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem;">
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
              <strong style="color: #06b6d4;">Downloads:</strong>
              <span style="color: #cbd5e1;">${photo.downloads}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div style="font-size: 1.5rem; font-weight: bold; color: #06b6d4;">$${photo.price}</div>
        <button class="btn btn-primary" onclick="addToCart(${photo.id}); this.closest('.modal').remove();">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
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
