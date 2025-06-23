// Enhanced Admin Management JavaScript with Full CRUD Functionality

// Sample data with more comprehensive information
let users = [];
let photos = [];
let articles = [];
let transactions = [];

// Enhanced photos data with more comprehensive information
let photos = [
  // Nature Category (10+ photos)
  {
    id: 1,
    title: "Cosmic Nebula",
    photographer: "Alex Chen",
    category: "space",
    price: 299,
    status: "published",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    description: "A stunning view of a cosmic nebula captured in deep space.",
    tags: ["space", "nebula", "cosmic", "astronomy"],
    downloads: 1250,
    rating: 4.9,
    uploadDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Mountain Serenity",
    photographer: "David Park",
    category: "nature",
    price: 249,
    status: "published",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Peaceful mountain landscape with pristine snow-capped peaks.",
    tags: ["mountain", "nature", "landscape", "peaceful"],
    downloads: 1450,
    rating: 4.9,
    uploadDate: "2024-01-14",
  },
  {
    id: 3,
    title: "Forest Mist",
    photographer: "Hannah Berg",
    category: "nature",
    price: 199,
    status: "published",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop",
    description: "Enchanting forest path shrouded in morning mist.",
    tags: ["forest", "mist", "path", "nature", "trees"],
    downloads: 980,
    rating: 4.8,
    uploadDate: "2024-01-13",
  },
  {
    id: 4,
    title: "Ocean Waves",
    photographer: "Marina Santos",
    category: "nature",
    price: 229,
    status: "published",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    description: "Powerful ocean waves crashing against rocky shores.",
    tags: ["ocean", "waves", "nature", "seascape"],
    downloads: 1120,
    rating: 4.7,
    uploadDate: "2024-01-12",
  },
  {
    id: 5,
    title: "Autumn Forest",
    photographer: "Robert Miller",
    category: "nature",
    price: 189,
    status: "published",
    image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800&h=600&fit=crop",
    description: "Vibrant autumn colors in a dense forest setting.",
    tags: ["autumn", "forest", "nature", "colorful"],
    downloads: 890,
    rating: 4.6,
    uploadDate: "2024-01-11",
  },
  {
    id: 6,
    title: "Desert Sunset",
    photographer: "Amir Hassan",
    category: "nature",
    price: 269,
    status: "published",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
    description: "Breathtaking sunset over vast desert dunes.",
    tags: ["desert", "sunset", "nature", "landscape"],
    downloads: 1340,
    rating: 4.8,
    uploadDate: "2024-01-10",
  },
  {
    id: 7,
    title: "Waterfall Paradise",
    photographer: "Lisa Wang",
    category: "nature",
    price: 299,
    status: "published",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop",
    description: "Majestic waterfall cascading through tropical paradise.",
    tags: ["waterfall", "nature", "tropical", "paradise"],
    downloads: 1560,
    rating: 4.9,
    uploadDate: "2024-01-09",
  },
  {
    id: 8,
    title: "Alpine Lake",
    photographer: "Thomas Wright",
    category: "nature",
    price: 219,
    status: "published",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=801&h=600&fit=crop",
    description: "Crystal clear alpine lake reflecting mountain peaks.",
    tags: ["lake", "alpine", "nature", "reflection"],
    downloads: 1230,
    rating: 4.7,
    uploadDate: "2024-01-08",
  },
  {
    id: 9,
    title: "Sunrise Valley",
    photographer: "Emma Chen",
    category: "nature",
    price: 259,
    status: "published",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=802&h=600&fit=crop",
    description: "Golden sunrise illuminating a peaceful valley.",
    tags: ["sunrise", "valley", "nature", "golden"],
    downloads: 1450,
    rating: 4.8,
    uploadDate: "2024-01-07",
  },
  {
    id: 10,
    title: "Coastal Cliffs",
    photographer: "Michael Johnson",
    category: "nature",
    price: 239,
    status: "published",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    description: "Dramatic coastal cliffs overlooking the ocean.",
    tags: ["coast", "cliffs", "nature", "dramatic"],
    downloads: 1120,
    rating: 4.6,
    uploadDate: "2024-01-06",
  },

  // Urban Category (10+ photos)
  {
    id: 11,
    title: "City Nights",
    photographer: "Sarah Kim",
    category: "urban",
    price: 199,
    status: "published",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop",
    description: "Dynamic urban nightscape with illuminated skyscrapers.",
    tags: ["urban", "night", "city", "lights"],
    downloads: 980,
    rating: 4.8,
    uploadDate: "2024-01-15",
  },
  {
    id: 12,
    title: "Street Art",
    photographer: "Carlos Rodriguez",
    category: "urban",
    price: 179,
    status: "published",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    description: "Vibrant street art on urban building walls.",
    tags: ["street", "art", "urban", "colorful"],
    downloads: 756,
    rating: 4.5,
    uploadDate: "2024-01-14",
  },
  {
    id: 13,
    title: "Metro Rush",
    photographer: "Jennifer Lee",
    category: "urban",
    price: 159,
    status: "published",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    description: "Busy metro station during rush hour.",
    tags: ["metro", "urban", "rush", "transportation"],
    downloads: 634,
    rating: 4.4,
    uploadDate: "2024-01-13",
  },
  {
    id: 14,
    title: "Rooftop View",
    photographer: "Daniel Wong",
    category: "urban",
    price: 219,
    status: "published",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
    description: "Panoramic city view from rooftop perspective.",
    tags: ["rooftop", "urban", "panoramic", "cityscape"],
    downloads: 1120,
    rating: 4.7,
    uploadDate: "2024-01-12",
  },
  {
    id: 15,
    title: "Neon Reflections",
    photographer: "Yuki Tanaka",
    category: "urban",
    price: 189,
    status: "published",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    description: "Neon lights reflecting on wet city streets.",
    tags: ["neon", "urban", "reflections", "night"],
    downloads: 890,
    rating: 4.6,
    uploadDate: "2024-01-11",
  },
  {
    id: 16,
    title: "Urban Architecture",
    photographer: "Lisa Wang",
    category: "urban",
    price: 229,
    status: "published",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Modern architectural design in urban setting.",
    tags: ["architecture", "urban", "modern", "design"],
    downloads: 1050,
    rating: 4.8,
    uploadDate: "2024-01-10",
  },
  {
    id: 17,
    title: "Traffic Flow",
    photographer: "Mark Thompson",
    category: "urban",
    price: 169,
    status: "published",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    description: "Long exposure of traffic flow through city.",
    tags: ["traffic", "urban", "flow", "night"],
    downloads: 720,
    rating: 4.3,
    uploadDate: "2024-01-09",
  },
  {
    id: 18,
    title: "City Reflection",
    photographer: "Anna Kowalski",
    category: "urban",
    price: 199,
    status: "published",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop",
    description: "City skyline reflected in modern building glass.",
    tags: ["reflection", "urban", "skyline", "glass"],
    downloads: 980,
    rating: 4.7,
    uploadDate: "2024-01-08",
  },
  {
    id: 19,
    title: "Urban Sunset",
    photographer: "Roberto Silva",
    category: "urban",
    price: 209,
    status: "published",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    description: "Beautiful sunset over urban landscape.",
    tags: ["sunset", "urban", "landscape", "golden"],
    downloads: 1180,
    rating: 4.8,
    uploadDate: "2024-01-07",
  },
  {
    id: 20,
    title: "Street Photography",
    photographer: "Sophie Martin",
    category: "urban",
    price: 179,
    status: "published",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=801&h=600&fit=crop",
    description: "Candid street photography in urban environment.",
    tags: ["street", "urban", "photography", "candid"],
    downloads: 850,
    rating: 4.5,
    uploadDate: "2024-01-06",
  },

  // Abstract Category (10+ photos)
  {
    id: 21,
    title: "Abstract Flow",
    photographer: "Maria Rodriguez",
    category: "abstract",
    price: 179,
    status: "published",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    description: "Modern abstract composition with flowing forms.",
    tags: ["abstract", "flow", "colorful", "modern"],
    downloads: 756,
    rating: 4.7,
    uploadDate: "2024-01-15",
  },
  {
    id: 22,
    title: "Geometric Patterns",
    photographer: "Alex Petrov",
    category: "abstract",
    price: 159,
    status: "published",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=600&fit=crop",
    description: "Minimalist geometric patterns and shapes.",
    tags: ["geometric", "abstract", "patterns", "minimalist"],
    downloads: 620,
    rating: 4.4,
    uploadDate: "2024-01-14",
  },
  {
    id: 23,
    title: "Color Explosion",
    photographer: "Nina Andersson",
    category: "abstract",
    price: 199,
    status: "published",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop",
    description: "Vibrant color explosion in abstract form.",
    tags: ["color", "abstract", "vibrant", "explosion"],
    downloads: 890,
    rating: 4.6,
    uploadDate: "2024-01-13",
  },
  {
    id: 24,
    title: "Liquid Motion",
    photographer: "James Wilson",
    category: "abstract",
    price: 189,
    status: "published",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    description: "Fluid abstract motion captured in time.",
    tags: ["liquid", "abstract", "motion", "fluid"],
    downloads: 740,
    rating: 4.5,
    uploadDate: "2024-01-12",
  },
  {
    id: 25,
    title: "Digital Art",
    photographer: "Zoe Chang",
    category: "abstract",
    price: 169,
    status: "published",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Contemporary digital abstract artwork.",
    tags: ["digital", "abstract", "art", "contemporary"],
    downloads: 680,
    rating: 4.3,
    uploadDate: "2024-01-11",
  },
  {
    id: 26,
    title: "Texture Study",
    photographer: "Marco Rossi",
    category: "abstract",
    price: 149,
    status: "published",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=801&h=600&fit=crop",
    description: "Abstract texture study with organic forms.",
    tags: ["texture", "abstract", "organic", "study"],
    downloads: 560,
    rating: 4.2,
    uploadDate: "2024-01-10",
  },
  {
    id: 27,
    title: "Light Patterns",
    photographer: "Elena Volkov",
    category: "abstract",
    price: 179,
    status: "published",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=803&h=600&fit=crop",
    description: "Abstract light patterns and reflections.",
    tags: ["light", "abstract", "patterns", "reflections"],
    downloads: 720,
    rating: 4.4,
    uploadDate: "2024-01-09",
  },
  {
    id: 28,
    title: "Smoke Art",
    photographer: "David Kim",
    category: "abstract",
    price: 189,
    status: "published",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=802&h=600&fit=crop",
    description: "Artistic smoke formations in abstract style.",
    tags: ["smoke", "abstract", "art", "formations"],
    downloads: 810,
    rating: 4.6,
    uploadDate: "2024-01-08",
  },
  {
    id: 29,
    title: "Fractal Design",
    photographer: "Sarah Mitchell",
    category: "abstract",
    price: 199,
    status: "published",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=803&h=600&fit=crop",
    description: "Complex fractal design patterns.",
    tags: ["fractal", "abstract", "design", "complex"],
    downloads: 920,
    rating: 4.7,
    uploadDate: "2024-01-07",
  },
  {
    id: 30,
    title: "Abstract Landscape",
    photographer: "Tom Anderson",
    category: "abstract",
    price: 169,
    status: "published",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=804&h=600&fit=crop",
    description: "Landscape interpreted through abstract lens.",
    tags: ["landscape", "abstract", "interpretation", "artistic"],
    downloads: 650,
    rating: 4.3,
    uploadDate: "2024-01-06",
  },
]

// Enhanced articles data
let articles = [
  {
    id: 1,
    title: "The Future of Photography: AI and Machine Learning",
    author: "Dr. Sarah Johnson",
    category: "technology",
    status: "published",
    publishDate: "2024-01-20",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the photography industry and what it means for photographers.",
    content:
      "Artificial intelligence and machine learning are transforming the photography landscape in unprecedented ways. From automated editing to intelligent composition suggestions, AI is becoming an indispensable tool for both amateur and professional photographers...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    readTime: 8,
    views: 2450,
    likes: 189,
  },
  {
    id: 2,
    title: "Mastering Long Exposure Photography",
    author: "Michael Chen",
    category: "tutorials",
    status: "published",
    publishDate: "2024-01-18",
    excerpt: "A comprehensive guide to creating stunning long exposure photographs that capture motion and time.",
    content:
      "Long exposure photography is a technique that allows photographers to capture the passage of time in a single frame. By using longer shutter speeds, we can create ethereal effects with moving water, clouds, and light trails...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    readTime: 12,
    views: 3120,
    likes: 267,
  },
  {
    id: 3,
    title: "Street Photography Ethics: A Modern Perspective",
    author: "Elena Rodriguez",
    category: "photography",
    status: "published",
    publishDate: "2024-01-16",
    excerpt: "Discussing the ethical considerations and best practices for street photography in today's digital age.",
    content:
      "Street photography has always walked a fine line between artistic expression and personal privacy. In our interconnected world, where images can be shared instantly across global platforms, photographers must navigate complex ethical considerations while pursuing their craft...",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
    readTime: 10,
    views: 1890,
    likes: 156,
  },
  {
    id: 4,
    title: "Drone Photography: Legal Guidelines and Best Practices",
    author: "Captain James Wilson",
    category: "tutorials",
    status: "published",
    publishDate: "2024-01-14",
    excerpt:
      "Everything you need to know about drone photography regulations and how to capture stunning aerial shots safely.",
    content:
      "Drone photography has opened up entirely new perspectives for photographers, allowing us to capture breathtaking aerial views that were once only possible from helicopters or planes. However, with this new technology comes responsibility...",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
    readTime: 15,
    views: 2780,
    likes: 234,
  },
  {
    id: 5,
    title: "The Art of Minimalist Photography",
    author: "Yuki Tanaka",
    category: "photography",
    status: "published",
    publishDate: "2024-01-12",
    excerpt: "Discover how less can be more in photography through the principles of minimalist composition.",
    content:
      "Minimalist photography is about stripping away the unnecessary to reveal the essential. It's a style that emphasizes simplicity, negative space, and clean compositions to create powerful visual impact...",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",
    readTime: 7,
    views: 1650,
    likes: 198,
  },
  {
    id: 6,
    title: "Color Theory in Digital Photography",
    author: "Dr. Maria Santos",
    category: "tutorials",
    status: "published",
    publishDate: "2024-01-10",
    excerpt: "Understanding color relationships and how to use them effectively in your photography compositions.",
    content:
      "Color is one of the most powerful tools in a photographer's arsenal. Understanding color theory can dramatically improve your compositions and help you create more emotionally engaging images...",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop",
    readTime: 11,
    views: 2340,
    likes: 287,
  },
  {
    id: 7,
    title: "Night Photography: Capturing the Dark",
    author: "Alex Petrov",
    category: "tutorials",
    status: "published",
    publishDate: "2024-01-08",
    excerpt: "Master the techniques for shooting in low light conditions and creating stunning nighttime images.",
    content:
      "Night photography presents unique challenges and opportunities. From astrophotography to urban night scenes, shooting in darkness requires different techniques and equipment considerations...",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=400&fit=crop",
    readTime: 13,
    views: 3450,
    likes: 412,
  },
  {
    id: 8,
    title: "Portrait Photography: Connecting with Your Subject",
    author: "Isabella Garcia",
    category: "photography",
    status: "published",
    publishDate: "2024-01-06",
    excerpt: "Learn how to create compelling portraits that capture not just appearance, but personality and emotion.",
    content:
      "Great portrait photography goes beyond technical perfection. It's about creating a connection with your subject and capturing their essence in a single frame...",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=400&fit=crop",
    readTime: 9,
    views: 2890,
    likes: 356,
  },
  {
    id: 9,
    title: "Macro Photography: Exploring the Miniature World",
    author: "Dr. Robert Kim",
    category: "tutorials",
    status: "published",
    publishDate: "2024-01-04",
    excerpt:
      "Dive into the fascinating world of macro photography and discover techniques for capturing incredible detail.",
    content:
      "Macro photography opens up a world invisible to the naked eye. From the intricate patterns on butterfly wings to the delicate structure of flower petals, macro photography reveals beauty in the smallest details...",
    image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?w=800&h=400&fit=crop",
    readTime: 14,
    views: 1980,
    likes: 245,
  },
  {
    id: 10,
    title: "The Business of Photography: Building Your Brand",
    author: "Jennifer Lee",
    category: "business",
    status: "published",
    publishDate: "2024-01-02",
    excerpt: "Essential strategies for photographers looking to build a successful business and establish their brand.",
    content:
      "In today's competitive photography market, technical skills alone aren't enough. Building a successful photography business requires strategic thinking, brand development, and strong marketing skills...",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=400&fit=crop",
    readTime: 16,
    views: 4120,
    likes: 523,
  },
  {
    id: 11,
    title: "Wildlife Photography: Patience and Preparation",
    author: "David Thompson",
    category: "photography",
    status: "published",
    publishDate: "2023-12-30",
    excerpt: "Learn the essential skills and mindset needed for successful wildlife photography in natural habitats.",
    content:
      "Wildlife photography is one of the most challenging and rewarding genres of photography. It requires patience, preparation, and respect for the natural world...",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=400&fit=crop",
    readTime: 12,
    views: 2650,
    likes: 298,
  },
  {
    id: 12,
    title: "Post-Processing Workflow: From RAW to Final Image",
    author: "Sophie Martin",
    category: "tutorials",
    status: "published",
    publishDate: "2023-12-28",
    excerpt:
      "Develop an efficient post-processing workflow that enhances your images while maintaining a natural look.",
    content:
      "Post-processing is where good photographs become great. Having an efficient workflow not only saves time but ensures consistency across your body of work...",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
    readTime: 18,
    views: 3780,
    likes: 445,
  },
]

// Enhanced transactions data
let transactions = [
  {
    id: "TXN-2024-001",
    customerId: 3,
    customerName: "Mike Chen",
    customerEmail: "mike.chen@example.com",
    items: [
      { id: 1, title: "Cosmic Nebula", price: 299, quality: "Premium" },
      { id: 2, title: "Mountain Serenity", price: 249, quality: "Standard" },
    ],
    amount: 548.0,
    status: "completed",
    paymentMethod: "Credit Card",
    date: "2024-01-20",
    type: "purchase",
  },
  {
    id: "TXN-2024-002",
    customerId: 2,
    customerName: "Sarah Johnson",
    customerEmail: "sarah.j@example.com",
    items: [{ id: 11, title: "City Nights", price: 199, quality: "Ultimate" }],
    amount: 199.0,
    status: "completed",
    paymentMethod: "PayPal",
    date: "2024-01-19",
    type: "purchase",
  },
  {
    id: "TXN-2024-003",
    customerId: 4,
    customerName: "Emily Davis",
    customerEmail: "emily.davis@example.com",
    items: [
      { id: 21, title: "Abstract Flow", price: 179, quality: "Standard" },
      { id: 22, title: "Geometric Patterns", price: 159, quality: "Standard" },
    ],
    amount: 338.0,
    status: "pending",
    paymentMethod: "Bank Transfer",
    date: "2024-01-18",
    type: "purchase",
  },
  {
    id: "TXN-2024-004",
    customerId: 5,
    customerName: "David Wilson",
    customerEmail: "david.w@example.com",
    items: [{ id: 3, title: "Forest Mist", price: 199, quality: "Premium" }],
    amount: 199.0,
    status: "failed",
    paymentMethod: "Credit Card",
    date: "2024-01-17",
    type: "purchase",
  },
  {
    id: "TXN-2024-005",
    customerId: 3,
    customerName: "Mike Chen",
    customerEmail: "mike.chen@example.com",
    items: [{ id: 1, title: "Cosmic Nebula", price: 299, quality: "Premium" }],
    amount: 299.0,
    status: "refunded",
    paymentMethod: "Credit Card",
    date: "2024-01-16",
    type: "refund",
  },
]

// Current pagination and filtering state
const currentPage = {
  users: 1,
  photos: 1,
  articles: 1,
  transactions: 1,
}

const itemsPerPage = 10
const currentFilters = {
  users: { search: "", role: "", status: "" },
  photos: { search: "", category: "", status: "" },
  articles: { search: "", category: "", status: "" },
  transactions: { search: "", status: "", type: "", dateFrom: "", dateTo: "" },
}

// Initialize admin management
document.addEventListener("DOMContentLoaded", () => {
  loadUsers();
  loadPhotos();
  loadArticles();
  loadTransactions();
  updateCartCount && updateCartCount();
  updateStats && updateStats();
  switchTab('users'); // default tab
})

// Tab switching functionality
function switchTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll('.admin-tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const tabContent = document.getElementById(`${tabName}-tab`);
  if (tabContent) tabContent.classList.add('active');
  const tabBtn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
  if (tabBtn) tabBtn.classList.add('active');
  // Render tab content
  if (tabName === 'users') renderUsersTab();
  if (tabName === 'photos') renderPhotosTab();
  if (tabName === 'articles') renderArticlesTab();
  if (tabName === 'transactions') renderTransactionsTab();
  if (tabName === 'analytics') renderAnalyticsTab();
}

// Render Users Tab
function renderUsersTab() {
  const tab = document.getElementById('users-tab')
  tab.innerHTML = `
    <div class="panel-header">
      <h2><i class="fas fa-users"></i> User Management</h2>
      <div class="panel-actions">
        <button class="btn btn-primary" onclick="openAddUserModal()"><i class="fas fa-plus"></i> Add New User</button>
        <button class="btn btn-secondary" onclick="exportUsers()"><i class="fas fa-download"></i> Export Users</button>
      </div>
    </div>
    <div class="search-filter-bar">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search users..." id="userSearch" oninput="loadUsersTable()">
      </div>
      <div class="filter-options">
        <select id="userRoleFilter" onchange="loadUsersTable()">
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="photographer">Photographer</option>
          <option value="customer">Customer</option>
        </select>
        <select id="userStatusFilter" onchange="loadUsersTable()">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>
    </div>
    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="selectAllUsers" onchange="toggleSelectAllUsers()"></th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Last Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="usersTableBody"></tbody>
      </table>
    </div>
    <div class="pagination">
      <button class="pagination-btn" onclick="previousPage('users')"><i class="fas fa-chevron-left"></i></button>
      <span class="pagination-info" id="usersPagination">Page 1</span>
      <button class="pagination-btn" onclick="nextPage('users')"><i class="fas fa-chevron-right"></i></button>
    </div>
  `
  loadUsersTable()
}

// Render Photos Tab
function renderPhotosTab() {
  loadPhotos();
  const tab = document.getElementById('photos-tab')
  tab.innerHTML = `
    <div class="panel-header">
      <h2><i class="fas fa-images"></i> Photo Management</h2>
      <div class="panel-actions">
        <button class="btn btn-primary" onclick="openAddPhotoModal()"><i class="fas fa-plus"></i> Add New Photo</button>
        <button class="btn btn-secondary" onclick="bulkUpload()"><i class="fas fa-upload"></i> Bulk Upload</button>
      </div>
    </div>
    <div class="search-filter-bar">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search photos..." id="photoSearch" oninput="filterPhotos()">
      </div>
      <div class="filter-options">
        <select id="photoCategoryFilter" onchange="filterPhotos()">
          <option value="">All Categories</option>
          <option value="nature">Nature</option>
          <option value="urban">Urban</option>
          <option value="space">Space</option>
          <option value="abstract">Abstract</option>
          <option value="wildlife">Wildlife</option>
          <option value="architecture">Architecture</option>
        </select>
        <select id="photoStatusFilter" onchange="filterPhotos()">
          <option value="">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="pending">Pending Review</option>
        </select>
      </div>
    </div>
    <div class="photo-grid" id="photoGrid"></div>
    <div class="pagination">
      <button class="pagination-btn" onclick="previousPage('photos')"><i class="fas fa-chevron-left"></i></button>
      <span class="pagination-info" id="photosPagination">Page 1</span>
      <button class="pagination-btn" onclick="nextPage('photos')"><i class="fas fa-chevron-right"></i></button>
    </div>
  `
  loadPhotosGrid()
}

// Render Articles Tab
function renderArticlesTab() {
  loadArticles();
  const tab = document.getElementById('articles-tab')
  tab.innerHTML = `
    <div class="panel-header">
      <h2><i class="fas fa-newspaper"></i> Article Management</h2>
      <div class="panel-actions">
        <button class="btn btn-primary" onclick="openAddArticleModal()"><i class="fas fa-plus"></i> Create Article</button>
        <button class="btn btn-secondary" onclick="exportArticles()"><i class="fas fa-download"></i> Export Articles</button>
      </div>
    </div>
    <div class="search-filter-bar">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search articles..." id="articleSearch" oninput="filterArticles()">
      </div>
      <div class="filter-options">
        <select id="articleCategoryFilter" onchange="filterArticles()">
          <option value="">All Categories</option>
          <option value="photography">Photography</option>
          <option value="technology">Technology</option>
          <option value="tutorials">Tutorials</option>
          <option value="news">News</option>
        </select>
        <select id="articleStatusFilter" onchange="filterArticles()">
          <option value="">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="scheduled">Scheduled</option>
        </select>
      </div>
    </div>
    <div class="articles-list" id="articlesList"></div>
    <div class="pagination">
      <button class="pagination-btn" onclick="previousPage('articles')"><i class="fas fa-chevron-left"></i></button>
      <span class="pagination-info" id="articlesPagination">Page 1</span>
      <button class="pagination-btn" onclick="nextPage('articles')"><i class="fas fa-chevron-right"></i></button>
    </div>
  `
  loadArticlesList()
}

// Render Transactions Tab
function renderTransactionsTab() {
  loadTransactions();
  const tab = document.getElementById('transactions-tab')
  tab.innerHTML = `
    <div class="panel-header">
      <h2><i class="fas fa-receipt"></i> Transaction Management</h2>
      <div class="panel-actions">
        <button class="btn btn-secondary" onclick="exportTransactions()"><i class="fas fa-download"></i> Export Transactions</button>
        <button class="btn btn-secondary" onclick="generateReport()"><i class="fas fa-chart-line"></i> Generate Report</button>
      </div>
    </div>
    <div class="search-filter-bar">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search transactions..." id="transactionSearch" oninput="filterTransactions()">
      </div>
      <div class="filter-options">
        <select id="transactionStatusFilter" onchange="filterTransactions()">
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
          <option value="refunded">Refunded</option>
        </select>
        <select id="transactionTypeFilter" onchange="filterTransactions()">
          <option value="">All Types</option>
          <option value="purchase">Purchase</option>
          <option value="subscription">Subscription</option>
          <option value="refund">Refund</option>
        </select>
        <input type="date" id="transactionDateFrom" onchange="filterTransactions()">
        <input type="date" id="transactionDateTo" onchange="filterTransactions()">
      </div>
    </div>
    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="transactionsTableBody"></tbody>
      </table>
    </div>
    <div class="pagination">
      <button class="pagination-btn" onclick="previousPage('transactions')"><i class="fas fa-chevron-left"></i></button>
      <span class="pagination-info" id="transactionsPagination">Page 1</span>
      <button class="pagination-btn" onclick="nextPage('transactions')"><i class="fas fa-chevron-right"></i></button>
    </div>
  `
  loadTransactionsTable()
}

// Render Analytics Tab
function renderAnalyticsTab() {
  const tab = document.getElementById('analytics-tab')
  tab.innerHTML = `
    <div class="panel-header">
      <h2><i class="fas fa-chart-bar"></i> Analytics Dashboard</h2>
      <div class="panel-actions">
        <select id="analyticsTimeRange" onchange="updateAnalytics()">
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
          <option value="1y">Last Year</option>
        </select>
        <button class="btn btn-secondary" onclick="exportAnalytics()"><i class="fas fa-download"></i> Export Report</button>
      </div>
    </div>
    <div class="analytics-grid">
      <div class="analytics-card">
        <div class="analytics-header">
          <h3>Revenue Overview</h3>
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="analytics-chart" id="revenueChart"><canvas id="revenueCanvas"></canvas></div>
      </div>
      <div class="analytics-card">
        <div class="analytics-header">
          <h3>User Growth</h3>
          <i class="fas fa-users"></i>
        </div>
        <div class="analytics-chart" id="userGrowthChart"><canvas id="userGrowthCanvas"></canvas></div>
      </div>
      <div class="analytics-card">
        <div class="analytics-header">
          <h3>Popular Categories</h3>
          <i class="fas fa-chart-pie"></i>
        </div>
        <div class="analytics-chart" id="categoriesChart"><canvas id="categoriesCanvas"></canvas></div>
      </div>
      <div class="analytics-card">
        <div class="analytics-header">
          <h3>Download Trends</h3>
          <i class="fas fa-download"></i>
        </div>
        <div class="analytics-chart" id="downloadsChart"><canvas id="downloadsCanvas"></canvas></div>
      </div>
    </div>
    <div class="analytics-summary">
      <div class="summary-card">
        <div class="summary-icon"><i class="fas fa-trending-up"></i></div>
        <div class="summary-content">
          <h4>Total Revenue</h4>
          <div class="summary-value">$0</div>
          <div class="summary-change positive">+0% from last month</div>
        </div>
      </div>
      <div class="summary-card">
        <div class="summary-icon"><i class="fas fa-download"></i></div>
        <div class="summary-content">
          <h4>Total Downloads</h4>
          <div class="summary-value">0</div>
          <div class="summary-change positive">+0% from last month</div>
        </div>
      </div>
      <div class="summary-card">
        <div class="summary-icon"><i class="fas fa-user-plus"></i></div>
        <div class="summary-content">
          <h4>New Users</h4>
          <div class="summary-value">0</div>
          <div class="summary-change positive">+0% from last month</div>
        </div>
      </div>
      <div class="summary-card">
        <div class="summary-icon"><i class="fas fa-star"></i></div>
        <div class="summary-content">
          <h4>Avg. Rating</h4>
          <div class="summary-value">0</div>
          <div class="summary-change positive">+0 from last month</div>
        </div>
      </div>
    </div>
  `
  // Analytics chart rendering logic here (if needed)
}

// Update statistics
function updateStats() {
  document.getElementById("totalUsers").textContent = users.length.toLocaleString()
  document.getElementById("totalPhotos").textContent = photos.length
  document.getElementById("totalArticles").textContent = articles.length

  const totalRevenue = transactions.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.amount, 0)
  document.getElementById("totalRevenue").textContent = `$${totalRevenue.toLocaleString()}`
}

// User Management Functions
function loadUsersTable() {
  const tbody = document.getElementById("usersTableBody")
  const filteredUsers = filterUsers()
  const startIndex = (currentPage.users - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const pageUsers = filteredUsers.slice(startIndex, endIndex)

  if (pageUsers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><i class="fas fa-users"></i><h3>No users found</h3><p>Try adjusting your filters or add a new user.</p></div></td></tr>`;
    updatePagination("users", filteredUsers.length);
    return;
  }

  tbody.innerHTML = pageUsers
    .map(
      (user) => `
    <tr>
      <td>
        <input type="checkbox" class="user-checkbox" value="${user.id}">
      </td>
      <td>
        <div class="user-info">
          <div class="user-avatar">${user.avatar}</div>
          <div class="user-details">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
          </div>
        </div>
      </td>
      <td>${user.email}</td>
      <td><span class="role-badge ${user.role}">${user.role}</span></td>
      <td><span class="status-badge ${user.status}">${user.status}</span></td>
      <td>${formatDate(user.joinDate)}</td>
      <td>${formatDate(user.lastActive)}</td>
      <td>
        <div class="action-buttons">
          <button class="action-btn view" onclick="viewUser(${user.id})" title="View">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn edit" onclick="editUser(${user.id})" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn delete" onclick="deleteUser(${user.id})" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `,
    )
    .join("")

  updatePagination("users", filteredUsers.length)
}

function filterUsers() {
  const search = document.getElementById("userSearch")?.value || "";
  const role = document.getElementById("userRoleFilter")?.value || "";
  const status = document.getElementById("userStatusFilter")?.value || "";
  currentFilters.users = { search, role, status };
  return users.filter((user) => {
    const matchesSearch =
      !search ||
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = !role || user.role === role;
    const matchesStatus = !status || user.status === status;
    return matchesSearch && matchesRole && matchesStatus;
  });
}

function toggleSelectAllUsers() {
  const selectAll = document.getElementById("selectAllUsers")
  const checkboxes = document.querySelectorAll(".user-checkbox")

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}

// Helper: Modal dinamis
function showModal(content) {
  const container = document.getElementById('modalContainer');
  container.innerHTML = `<div class="modal" style="display:block;">${content}</div>`;
  const modal = container.querySelector('.modal');
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };
}
function closeModal() {
  document.getElementById('modalContainer').innerHTML = '';
}

// USERS CRUD MODAL
function openAddUserModal() {
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-user-plus"></i> Add New User</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="addUserForm" class="modal-body" onsubmit="addUser(event)">
        <div class="form-group"><label>Name</label><input type="text" id="userName" required></div>
        <div class="form-group"><label>Email</label><input type="email" id="userEmail" required></div>
        <div class="form-group"><label>Role</label><select id="userRole" required><option value="admin">Admin</option><option value="photographer">Photographer</option><option value="customer">Customer</option></select></div>
        <div class="form-group"><label>Status</label><select id="userStatus" required><option value="active">Active</option><option value="inactive">Inactive</option><option value="suspended">Suspended</option></select></div>
        <div class="form-group"><label>Bio</label><textarea id="userBio"></textarea></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Add User</button></div>
      </form>
    </div>
  `);
}
function openEditUserModal(userId) {
  const user = users.find(u => u.id === userId);
  if (!user) return;
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-user-edit"></i> Edit User</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="editUserForm" class="modal-body" onsubmit="updateUser(event,${userId})">
        <div class="form-group"><label>Name</label><input type="text" id="userName" value="${user.name}" required></div>
        <div class="form-group"><label>Email</label><input type="email" id="userEmail" value="${user.email}" required></div>
        <div class="form-group"><label>Role</label><select id="userRole" required><option value="admin"${user.role==='admin'?' selected':''}>Admin</option><option value="photographer"${user.role==='photographer'?' selected':''}>Photographer</option><option value="customer"${user.role==='customer'?' selected':''}>Customer</option></select></div>
        <div class="form-group"><label>Status</label><select id="userStatus" required><option value="active"${user.status==='active'?' selected':''}>Active</option><option value="inactive"${user.status==='inactive'?' selected':''}>Inactive</option><option value="suspended"${user.status==='suspended'?' selected':''}>Suspended</option></select></div>
        <div class="form-group"><label>Bio</label><textarea id="userBio">${user.bio||''}</textarea></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Update User</button></div>
      </form>
    </div>
  `);
}
function openDeleteUserModal(userId) {
  showModal(`
    <div class="modal-content">
      <div class="modal-header"><h3><i class="fas fa-trash"></i> Delete User</h3></div>
      <div class="modal-body"><p>Are you sure you want to delete this user?</p></div>
      <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="deleteUser(${userId},true)">Delete</button></div>
    </div>
  `);
}
// Override CRUD button actions
function editUser(userId) { openEditUserModal(userId); }
function deleteUser(userId, confirmed) {
  if (!confirmed) { openDeleteUserModal(userId); return; }
  users = users.filter(u => u.id !== userId);
  saveUsers();
  closeModal();
  loadUsersTable();
  updateStats();
  showNotification('User deleted successfully!','success');
}
// Save/load users to localStorage
function saveUsers() { localStorage.setItem('users', JSON.stringify(users)); }
function loadUsers() {
  let stored = localStorage.getItem('users');
  users = stored ? JSON.parse(stored) : [];
}
// Patch: load users from storage on init
loadUsers();
// Patch: after add/edit
function addUser(event) {
  event.preventDefault();
  const newUser = {
    id: users.length ? Math.max(...users.map(u=>u.id))+1 : 1,
    name: document.getElementById('userName').value,
    email: document.getElementById('userEmail').value,
    role: document.getElementById('userRole').value,
    status: document.getElementById('userStatus').value,
    joinDate: new Date().toISOString().split('T')[0],
    lastActive: new Date().toISOString().split('T')[0],
    avatar: document.getElementById('userName').value.split(' ').map(n=>n[0]).join('').toUpperCase(),
    bio: document.getElementById('userBio').value || '',
    totalPurchases: 0,
    totalSpent: 0,
  };
  users.push(newUser);
  saveUsers();
  closeModal();
  loadUsersTable();
  updateStats();
  showNotification('User added successfully!','success');
}
function updateUser(event, userId) {
  event.preventDefault();
  const idx = users.findIndex(u=>u.id===userId);
  if(idx===-1) return;
  users[idx] = {
    ...users[idx],
    name: document.getElementById('userName').value,
    email: document.getElementById('userEmail').value,
    role: document.getElementById('userRole').value,
    status: document.getElementById('userStatus').value,
    bio: document.getElementById('userBio').value || '',
    avatar: document.getElementById('userName').value.split(' ').map(n=>n[0]).join('').toUpperCase(),
  };
  saveUsers();
  closeModal();
  loadUsersTable();
  showNotification('User updated successfully!','success');
}

// Photo Management Functions
function loadPhotosGrid() {
  const grid = document.getElementById("photoGrid");
  const filteredPhotos = filterPhotos();
  const startIndex = (currentPage.photos - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pagePhotos = filteredPhotos.slice(startIndex, endIndex);

  if (pagePhotos.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-images"></i><h3>No photos found</h3><p>Try adjusting your filters or add a new photo.</p></div>`;
    updatePagination("photos", filteredPhotos.length);
    return;
  }

  grid.innerHTML = pagePhotos
    .map(
      (photo) => `
    <div class="photo-card">
      <div class="photo-card-overlay">
        <button class="action-btn view" onclick="viewPhoto(${photo.id})" title="View">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn edit" onclick="editPhoto(${photo.id})" title="Edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn delete" onclick="deletePhoto(${photo.id})" title="Delete">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <img src="${photo.image}" alt="${photo.title}" class="photo-card-image">
      <div class="photo-card-content">
        <h3 class="photo-card-title">${photo.title}</h3>
        <p class="photo-card-photographer">by ${photo.photographer}</p>
        <div class="photo-card-meta">
          <span class="photo-card-category">${photo.category}</span>
          <span class="photo-card-price">$${photo.price}</span>
        </div>
        <div class="photo-card-actions">
          <button class="btn btn-primary btn-sm" onclick="viewPhoto(${photo.id})">
            <i class="fas fa-eye"></i>
            View
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  updatePagination("photos", filteredPhotos.length);
}

function filterPhotos() {
  const search = document.getElementById("photoSearch")?.value || ""
  const category = document.getElementById("photoCategoryFilter")?.value || ""
  const status = document.getElementById("photoStatusFilter")?.value || ""

  currentFilters.photos = { search, category, status }

  return photos.filter((photo) => {
    const matchesSearch =
      !search ||
      photo.title.toLowerCase().includes(search.toLowerCase()) ||
      photo.photographer.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !category || photo.category === category
    const matchesStatus = !status || photo.status === status

    return matchesSearch && matchesCategory && matchesStatus
  })
}

// PHOTOS CRUD MODAL
function openAddPhotoModal() {
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-image"></i> Add New Photo</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="addPhotoForm" class="modal-body" onsubmit="addPhoto(event)">
        <div class="form-group"><label>Title</label><input type="text" id="photoTitle" required></div>
        <div class="form-group"><label>Photographer</label><input type="text" id="photoPhotographer" required></div>
        <div class="form-group"><label>Category</label><input type="text" id="photoCategory" required></div>
        <div class="form-group"><label>Price</label><input type="number" id="photoPrice" required></div>
        <div class="form-group"><label>Description</label><textarea id="photoDescription"></textarea></div>
        <div class="form-group"><label>Tags (comma separated)</label><input type="text" id="photoTags"></div>
        <div class="form-group"><label>Image URL</label><input type="text" id="photoImage" required></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Add Photo</button></div>
      </form>
    </div>
  `);
}
function openEditPhotoModal(photoId) {
  const photo = photos.find(p => p.id === photoId);
  if (!photo) return;
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-image"></i> Edit Photo</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="editPhotoForm" class="modal-body" onsubmit="updatePhoto(event,${photoId})">
        <div class="form-group"><label>Title</label><input type="text" id="photoTitle" value="${photo.title}" required></div>
        <div class="form-group"><label>Photographer</label><input type="text" id="photoPhotographer" value="${photo.photographer}" required></div>
        <div class="form-group"><label>Category</label><input type="text" id="photoCategory" value="${photo.category}" required></div>
        <div class="form-group"><label>Price</label><input type="number" id="photoPrice" value="${photo.price}" required></div>
        <div class="form-group"><label>Description</label><textarea id="photoDescription">${photo.description||''}</textarea></div>
        <div class="form-group"><label>Tags (comma separated)</label><input type="text" id="photoTags" value="${photo.tags ? photo.tags.join(', ') : ''}"></div>
        <div class="form-group"><label>Image URL</label><input type="text" id="photoImage" value="${photo.image}" required></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Update Photo</button></div>
      </form>
    </div>
  `);
}
function openDeletePhotoModal(photoId) {
  showModal(`
    <div class="modal-content">
      <div class="modal-header"><h3><i class="fas fa-trash"></i> Delete Photo</h3></div>
      <div class="modal-body"><p>Are you sure you want to delete this photo?</p></div>
      <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="deletePhoto(${photoId},true)">Delete</button></div>
    </div>
  `);
}
function editPhoto(photoId) { openEditPhotoModal(photoId); }
function deletePhoto(photoId, confirmed) {
  if (!confirmed) { openDeletePhotoModal(photoId); return; }
  photos = photos.filter(p => p.id !== photoId);
  savePhotos();
  closeModal();
  loadPhotosGrid();
  updateStats();
  showNotification('Photo deleted successfully!','success');
}
function savePhotos() { localStorage.setItem('photos', JSON.stringify(photos)); }
function loadPhotos() {
  let stored = localStorage.getItem('photos');
  photos = stored ? JSON.parse(stored) : [];
}

function addPhoto(event) {
  event.preventDefault();
  const newPhoto = {
    id: photos.length ? Math.max(...photos.map(p=>p.id))+1 : 1,
    title: document.getElementById('photoTitle').value,
    photographer: document.getElementById('photoPhotographer').value,
    category: document.getElementById('photoCategory').value,
    price: Number.parseFloat(document.getElementById('photoPrice').value),
    status: 'published',
    image: document.getElementById('photoImage').value,
    description: document.getElementById('photoDescription').value,
    tags: document.getElementById('photoTags').value.split(',').map(tag=>tag.trim()),
    downloads: 0,
    rating: 0,
    uploadDate: new Date().toISOString().split('T')[0],
  };
  photos.push(newPhoto);
  savePhotos();
  closeModal();
  loadPhotosGrid();
  updateStats();
  showNotification('Photo added successfully!','success');
}
function updatePhoto(event, photoId) {
  event.preventDefault();
  const idx = photos.findIndex(p=>p.id===photoId);
  if(idx===-1) return;
  photos[idx] = {
    ...photos[idx],
    title: document.getElementById('photoTitle').value,
    photographer: document.getElementById('photoPhotographer').value,
    category: document.getElementById('photoCategory').value,
    price: Number.parseFloat(document.getElementById('photoPrice').value),
    description: document.getElementById('photoDescription').value,
    tags: document.getElementById('photoTags').value.split(',').map(tag=>tag.trim()),
    image: document.getElementById('photoImage').value,
  };
  savePhotos();
  closeModal();
  loadPhotosGrid();
  showNotification('Photo updated successfully!','success');
}

// Article Management Functions
function loadArticlesList() {
  const container = document.getElementById("articlesList");
  const filteredArticles = filterArticles();
  const startIndex = (currentPage.articles - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageArticles = filteredArticles.slice(startIndex, endIndex);

  if (pageArticles.length === 0) {
    container.innerHTML = `<div class="empty-state"><i class="fas fa-newspaper"></i><h3>No articles found</h3><p>Try adjusting your filters or create a new article.</p></div>`;
    updatePagination("articles", filteredArticles.length);
    return;
  }

  container.innerHTML = pageArticles
    .map(
      (article) => `
    <div class="article-card">
      <img src="${article.image}" alt="${article.title}" class="article-card-image">
      <div class="article-card-content">
        <h3 class="article-card-title">${article.title}</h3>
        <p class="article-card-excerpt">${article.excerpt}</p>
        <div class="article-card-meta">
          <span class="article-card-author">by ${article.author}</span>
          <span class="article-card-date">${formatDate(article.publishDate)}</span>
          <span class="article-card-category">${article.category}</span>
          <span class="status-badge ${article.status}">${article.status}</span>
        </div>
      </div>
      <div class="article-card-actions">
        <button class="action-btn view" onclick="viewArticle(${article.id})" title="View">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn edit" onclick="editArticle(${article.id})" title="Edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn delete" onclick="deleteArticle(${article.id})" title="Delete">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `,
    )
    .join("");

  updatePagination("articles", filteredArticles.length);
}

function filterArticles() {
  const search = document.getElementById("articleSearch")?.value || ""
  const category = document.getElementById("articleCategoryFilter")?.value || ""
  const status = document.getElementById("articleStatusFilter")?.value || ""

  currentFilters.articles = { search, category, status }

  return articles.filter((article) => {
    const matchesSearch =
      !search ||
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.author.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !category || article.category === category
    const matchesStatus = !status || article.status === status

    return matchesSearch && matchesCategory && matchesStatus
  })
}

// ARTICLES CRUD MODAL
function openAddArticleModal() {
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-newspaper"></i> Add New Article</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="addArticleForm" class="modal-body" onsubmit="addArticle(event)">
        <div class="form-group"><label>Title</label><input type="text" id="articleTitle" required></div>
        <div class="form-group"><label>Author</label><input type="text" id="articleAuthor" required></div>
        <div class="form-group"><label>Category</label><input type="text" id="articleCategory" required></div>
        <div class="form-group"><label>Status</label><select id="articleStatus" required><option value="published">Published</option><option value="draft">Draft</option><option value="scheduled">Scheduled</option></select></div>
        <div class="form-group"><label>Excerpt</label><textarea id="articleExcerpt"></textarea></div>
        <div class="form-group"><label>Content</label><textarea id="articleContent"></textarea></div>
        <div class="form-group"><label>Image URL</label><input type="text" id="articleImage" required></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Add Article</button></div>
      </form>
    </div>
  `);
}
function openEditArticleModal(articleId) {
  const article = articles.find(a => a.id === articleId);
  if (!article) return;
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-newspaper"></i> Edit Article</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="editArticleForm" class="modal-body" onsubmit="updateArticle(event,${articleId})">
        <div class="form-group"><label>Title</label><input type="text" id="articleTitle" value="${article.title}" required></div>
        <div class="form-group"><label>Author</label><input type="text" id="articleAuthor" value="${article.author}" required></div>
        <div class="form-group"><label>Category</label><input type="text" id="articleCategory" value="${article.category}" required></div>
        <div class="form-group"><label>Status</label><select id="articleStatus" required><option value="published"${article.status==='published'?' selected':''}>Published</option><option value="draft"${article.status==='draft'?' selected':''}>Draft</option><option value="scheduled"${article.status==='scheduled'?' selected':''}>Scheduled</option></select></div>
        <div class="form-group"><label>Excerpt</label><textarea id="articleExcerpt">${article.excerpt||''}</textarea></div>
        <div class="form-group"><label>Content</label><textarea id="articleContent">${article.content||''}</textarea></div>
        <div class="form-group"><label>Image URL</label><input type="text" id="articleImage" value="${article.image}" required></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Update Article</button></div>
      </form>
    </div>
  `);
}
function openDeleteArticleModal(articleId) {
  showModal(`
    <div class="modal-content">
      <div class="modal-header"><h3><i class="fas fa-trash"></i> Delete Article</h3></div>
      <div class="modal-body"><p>Are you sure you want to delete this article?</p></div>
      <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="deleteArticle(${articleId},true)">Delete</button></div>
    </div>
  `);
}
function editArticle(articleId) { openEditArticleModal(articleId); }
function deleteArticle(articleId, confirmed) {
  if (!confirmed) { openDeleteArticleModal(articleId); return; }
  articles = articles.filter(a => a.id !== articleId);
  saveArticles();
  closeModal();
  loadArticlesList();
  updateStats();
  showNotification('Article deleted successfully!','success');
}
function saveArticles() { localStorage.setItem('articles', JSON.stringify(articles)); }
function loadArticles() {
  let stored = localStorage.getItem('articles');
  articles = stored ? JSON.parse(stored) : [];
}

function addArticle(event) {
  event.preventDefault();
  const newArticle = {
    id: articles.length ? Math.max(...articles.map(a=>a.id))+1 : 1,
    title: document.getElementById('articleTitle').value,
    author: document.getElementById('articleAuthor').value,
    category: document.getElementById('articleCategory').value,
    status: document.getElementById('articleStatus').value,
    publishDate: new Date().toISOString().split('T')[0],
    excerpt: document.getElementById('articleExcerpt').value,
    content: document.getElementById('articleContent').value,
    image: document.getElementById('articleImage').value,
    readTime: Math.ceil(document.getElementById('articleContent').value.split(' ').length / 200),
    views: 0,
    likes: 0,
  };
  articles.push(newArticle);
  saveArticles();
  closeModal();
  loadArticlesList();
  updateStats();
  showNotification('Article added successfully!','success');
}
function updateArticle(event, articleId) {
  event.preventDefault();
  const idx = articles.findIndex(a=>a.id===articleId);
  if(idx===-1) return;
  articles[idx] = {
    ...articles[idx],
    title: document.getElementById('articleTitle').value,
    author: document.getElementById('articleAuthor').value,
    category: document.getElementById('articleCategory').value,
    status: document.getElementById('articleStatus').value,
    excerpt: document.getElementById('articleExcerpt').value,
    content: document.getElementById('articleContent').value,
    image: document.getElementById('articleImage').value,
    readTime: Math.ceil(document.getElementById('articleContent').value.split(' ').length / 200),
  };
  saveArticles();
  closeModal();
  loadArticlesList();
  showNotification('Article updated successfully!','success');
}

// Transaction Management Functions
function loadTransactionsTable() {
  const tbody = document.getElementById("transactionsTableBody");
  const filteredTransactions = filterTransactions();
  const startIndex = (currentPage.transactions - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageTransactions = filteredTransactions.slice(startIndex, endIndex);

  if (pageTransactions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><i class="fas fa-receipt"></i><h3>No transactions found</h3><p>Try adjusting your filters or check again later.</p></div></td></tr>`;
    updatePagination("transactions", filteredTransactions.length);
    return;
  }

  tbody.innerHTML = pageTransactions
    .map(
      (transaction) => `
    <tr>
      <td>
        <code style="background: rgba(6, 182, 212, 0.1); color: #06b6d4; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">
          ${transaction.id}
        </code>
      </td>
      <td>
        <div>
          <div style="font-weight: 600; color: #f1f5f9;">${transaction.customerName}</div>
          <div style="font-size: 0.75rem; color: #64748b;">${transaction.customerEmail}</div>
        </div>
      </td>
      <td>
        <div style="max-width: 200px;">
          ${transaction.items
            .map(
              (item) => `
            <div style="font-size: 0.75rem; color: #cbd5e1; margin-bottom: 0.25rem;">
              ${item.title} (${item.quality}) - $${item.price}
            </div>
          `,
            )
            .join("")}
        </div>
      </td>
      <td>
        <span style="font-weight: 700; color: #10b981; font-size: 1.1rem;">
          $${(transaction.amount || transaction.total || 0).toFixed(2)}
        </span>
      </td>
      <td><span class="status-badge ${transaction.status}">${transaction.status}</span></td>
      <td>${transaction.paymentMethod}</td>
      <td>${formatDate(transaction.date)}</td>
      <td>
        <div class="action-buttons">
          <button class="action-btn view" onclick="viewTransaction('${transaction.id}')" title="View">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn edit" onclick="editTransaction('${transaction.id}')" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          ${
            transaction.status === "completed"
              ? `
            <button class="action-btn" onclick="refundTransaction('${transaction.id}')" title="Refund" style="background: rgba(239, 68, 68, 0.5);">
              <i class="fas fa-undo"></i>
            </button>
          `
              : ""
          }
        </div>
      </td>
    </tr>
  `,
    )
    .join("");

  updatePagination("transactions", filteredTransactions.length);
}

function filterTransactions() {
  const search = document.getElementById("transactionSearch")?.value || ""
  const status = document.getElementById("transactionStatusFilter")?.value || ""
  const type = document.getElementById("transactionTypeFilter")?.value || ""
  const dateFrom = document.getElementById("transactionDateFrom")?.value || ""
  const dateTo = document.getElementById("transactionDateTo")?.value || ""

  currentFilters.transactions = { search, status, type, dateFrom, dateTo }

  return transactions.filter((transaction) => {
    const matchesSearch =
      !search ||
      transaction.id.toLowerCase().includes(search.toLowerCase()) ||
      transaction.customerName.toLowerCase().includes(search.toLowerCase()) ||
      transaction.customerEmail.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = !status || transaction.status === status
    const matchesType = !type || transaction.type === type
    const matchesDateFrom = !dateFrom || transaction.date >= dateFrom
    const matchesDateTo = !dateTo || transaction.date <= dateTo

    return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo
  })
}

function viewTransaction(transactionId) {
  const transaction = transactions.find((t) => t.id === transactionId)
  if (!transaction) return

  const modal = document.createElement("div")
  modal.className = "modal"
  modal.style.display = "block"

  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-receipt"></i> Transaction Details</h3>
        <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
      </div>
      <div class="modal-body">
        <div style="display: grid; gap: 2rem;">
          <div>
            <h4>Transaction Information</h4>
            <div style="display: grid; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px;">
              <div><strong>Transaction ID:</strong> <code style="background: rgba(6, 182, 212, 0.1); color: #06b6d4; padding: 0.25rem 0.5rem; border-radius: 4px;">${transaction.id}</code></div>
              <div><strong>Date:</strong> ${formatDate(transaction.date)}</div>
              <div><strong>Status:</strong> <span class="status-badge ${transaction.status}">${transaction.status}</span></div>
              <div><strong>Type:</strong> ${transaction.type}</div>
              <div><strong>Payment Method:</strong> ${transaction.paymentMethod}</div>
              <div><strong>Total Amount:</strong> <span style="font-weight: 700; color: #10b981; font-size: 1.2rem;">$${(transaction.amount || transaction.total || 0).toFixed(2)}</span></div>
            </div>
          </div>
          
          <div>
            <h4>Customer Information</h4>
            <div style="display: grid; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px;">
              <div><strong>Name:</strong> ${transaction.customerName}</div>
              <div><strong>Email:</strong> ${transaction.customerEmail}</div>
              <div><strong>Customer ID:</strong> ${transaction.customerId}</div>
            </div>
          </div>
          
          <div>
            <h4>Items Purchased</h4>
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px;">
              ${transaction.items
                .map(
                  (item) => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid rgba(71, 85, 105, 0.3);">
                  <div>
                    <div style="font-weight: 600; color: #f1f5f9;">${item.title}</div>
                    <div style="font-size: 0.875rem; color: #94a3b8;">Quality: ${item.quality}</div>
                  </div>
                  <div style="font-weight: 700; color: #10b981;">$${item.price}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
        ${
          transaction.status === "completed"
            ? `
          <button class="btn btn-danger" onclick="refundTransaction('${transaction.id}'); this.closest('.modal').remove();">
            <i class="fas fa-undo"></i>
            Process Refund
          </button>
        `
            : ""
        }
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

function editTransaction(transactionId) {
  const transaction = transactions.find((t) => t.id === transactionId)
  if (!transaction) return

  const modal = document.createElement("div")
  modal.className = "modal"
  modal.style.display = "block"

  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-edit"></i> Edit Transaction</h3>
        <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
      </div>
      <div class="modal-body">
        <form id="editTransactionForm" onsubmit="updateTransaction(event, '${transaction.id}')">
          <div class="form-group">
            <label>Transaction ID</label>
            <input type="text" value="${transaction.id}" disabled style="background: rgba(71, 85, 105, 0.3);">
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label for="editTransactionStatus">Status</label>
              <select id="editTransactionStatus" required>
                <option value="pending" ${transaction.status === "pending" ? "selected" : ""}>Pending</option>
                <option value="completed" ${transaction.status === "completed" ? "selected" : ""}>Completed</option>
                <option value="failed" ${transaction.status === "failed" ? "selected" : ""}>Failed</option>
                <option value="refunded" ${transaction.status === "refunded" ? "selected" : ""}>Refunded</option>
              </select>
            </div>
            <div class="form-group">
              <label for="editTransactionPayment">Payment Method</label>
              <select id="editTransactionPayment" required>
                <option value="Credit Card" ${transaction.paymentMethod === "Credit Card" ? "selected" : ""}>Credit Card</option>
                <option value="PayPal" ${transaction.paymentMethod === "PayPal" ? "selected" : ""}>PayPal</option>
                <option value="Bank Transfer" ${transaction.paymentMethod === "Bank Transfer" ? "selected" : ""}>Bank Transfer</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Customer</label>
            <input type="text" value="${transaction.customerName} (${transaction.customerEmail})" disabled style="background: rgba(71, 85, 105, 0.3);">
          </div>
          <div class="form-group">
            <label>Total Amount</label>
            <input type="text" value="$${(transaction.amount || transaction.total || 0).toFixed(2)}" disabled style="background: rgba(71, 85, 105, 0.3);">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
        <button type="submit" form="editTransactionForm" class="btn btn-primary">Update Transaction</button>
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

function updateTransaction(event, transactionId) {
  event.preventDefault()

  const transactionIndex = transactions.findIndex((t) => t.id === transactionId)
  if (transactionIndex === -1) return

  transactions[transactionIndex] = {
    ...transactions[transactionIndex],
    status: document.getElementById("editTransactionStatus").value,
    paymentMethod: document.getElementById("editTransactionPayment").value,
  }

  event.target.closest(".modal").remove()
  loadTransactionsTable()
  showNotification("Transaction updated successfully!", "success")
}

function refundTransaction(transactionId) {
  if (confirm("Are you sure you want to process a refund for this transaction? This action cannot be undone.")) {
    const transactionIndex = transactions.findIndex((t) => t.id === transactionId)
    if (transactionIndex === -1) return

    transactions[transactionIndex].status = "refunded"
    transactions[transactionIndex].type = "refund"

    loadTransactionsTable()
    showNotification("Refund processed successfully!", "success")
  }
}

function exportTransactions() {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    "Transaction ID,Customer,Email,Amount,Status,Payment Method,Date,Type\n" +
    transactions
      .map(
        (transaction) =>
          `"${transaction.id}","${transaction.customerName}","${transaction.customerEmail}",${transaction.amount},${transaction.status},"${transaction.paymentMethod}",${transaction.date},${transaction.type}`,
      )
      .join("\n")

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "transactions_export.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  showNotification("Transactions exported successfully!", "success")
}

function generateReport() {
  const modal = document.createElement("div")
  modal.className = "modal"
  modal.style.display = "block"

  const totalTransactions = transactions.length
  const completedTransactions = transactions.filter((t) => t.status === "completed").length
  const totalRevenue = transactions.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.amount, 0)
  const averageTransaction = totalRevenue / completedTransactions || 0

  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-chart-line"></i> Transaction Report</h3>
        <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
      </div>
      <div class="modal-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
          <div class="summary-card">
            <div class="summary-icon">
              <i class="fas fa-receipt"></i>
            </div>
            <div class="summary-content">
              <h4>Total Transactions</h4>
              <div class="summary-value">${totalTransactions}</div>
            </div>
          </div>
          <div class="summary-card">
            <div class="summary-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <div class="summary-content">
              <h4>Completed</h4>
              <div class="summary-value">${completedTransactions}</div>
            </div>
          </div>
          <div class="summary-card">
            <div class="summary-icon">
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div class="summary-content">
              <h4>Total Revenue</h4>
              <div class="summary-value">$${totalRevenue.toFixed(2)}</div>
            </div>
          </div>
          <div class="summary-card">
            <div class="summary-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <div class="summary-content">
              <h4>Average Transaction</h4>
              <div class="summary-value">$${averageTransaction.toFixed(2)}</div>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 2rem;">
          <h4>Status Breakdown</h4>
          <div style="display: grid; gap: 1rem;">
            ${["completed", "pending", "failed", "refunded"]
              .map((status) => {
                const count = transactions.filter((t) => t.status === status).length
                const percentage = ((count / totalTransactions) * 100).toFixed(1)
                return `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(15, 23, 42, 0.6); border-radius: 8px;">
                  <span class="status-badge ${status}">${status}</span>
                  <span>${count} (${percentage}%)</span>
                </div>
              `
              })
              .join("")}
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
        <button class="btn btn-primary" onclick="exportTransactions(); this.closest('.modal').remove();">
          <i class="fas fa-download"></i>
          Export Data
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

// Analytics Functions
function loadAnalytics() {
  // This would typically load real analytics data
  // For demo purposes, we'll show placeholder charts
  showNotification("Analytics dashboard loaded", "info")
}

function updateAnalytics() {
  const timeRange = document.getElementById("analyticsTimeRange").value
  showNotification(`Analytics updated for ${timeRange}`, "info")
}

function exportAnalytics() {
  showNotification("Analytics report exported successfully!", "success")
}

// Pagination Functions
function updatePagination(type, totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const currentPageNum = currentPage[type]

  const paginationElement = document.getElementById(`${type}Pagination`)
  if (paginationElement) {
    paginationElement.textContent = `Page ${currentPageNum} of ${totalPages}`
  }

  // Update pagination buttons
  const prevBtn = document.querySelector(`[onclick="previousPage('${type}')"]`)
  const nextBtn = document.querySelector(`[onclick="nextPage('${type}')"]`)

  if (prevBtn) prevBtn.disabled = currentPageNum <= 1
  if (nextBtn) nextBtn.disabled = currentPageNum >= totalPages
}

function previousPage(type) {
  if (currentPage[type] > 1) {
    currentPage[type]--
    switch (type) {
      case "users":
        loadUsersTable()
        break
      case "photos":
        loadPhotosGrid()
        break
      case "articles":
        loadArticlesList()
        break
      case "transactions":
        loadTransactionsTable()
        break
    }
  }
}

// ...existing code...
function nextPage(type) {
  const totalItems = type === 'users' ? filterUsers().length :
                   type === 'photos' ? filterPhotos().length :
                   type === 'articles' ? filterArticles().length :
                   filterTransactions().length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (currentPage[type] < totalPages) {
    currentPage[type]++;
    switch(type) {
      case 'users':
        loadUsersTable();
        break;
      case 'photos':
        loadPhotosGrid();
        break;
      case 'articles':
        loadArticlesList();
        break;
      case 'transactions':
        loadTransactionsTable();
        break;
    }
  }
}
// ...existing code...

function renderNavbar() {
  const nav = document.getElementById('adminNavbar');
  if (!nav) return;
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  let navHtml = `
    <a href="home.html" class="nav-link">Home</a>
    <a href="admin-management.html" class="nav-link ">Admin Panel</a>
    <div class="nav-dropdown"> ...Browse... </div>
    <div class="nav-dropdown"> ...Resources... </div>
    <div class="nav-dropdown"> ...Account... </div>
  `;
  if (user.role === "admin") {
    navHtml += `<a href="admin-management.html" class="nav-link">Admin Panel</a>`;
  }
  nav.innerHTML = navHtml;
}
document.addEventListener("DOMContentLoaded", renderNavbar);

// TRANSACTIONS CRUD MODAL
function openAddTransactionModal() {
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-receipt"></i> Add New Transaction</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="addTransactionForm" class="modal-body" onsubmit="addTransaction(event)">
        <div class="form-group"><label>Customer Name</label><input type="text" id="transactionCustomerName" required></div>
        <div class="form-group"><label>Customer Email</label><input type="email" id="transactionCustomerEmail" required></div>
        <div class="form-group"><label>Amount</label><input type="number" id="transactionAmount" required></div>
        <div class="form-group"><label>Status</label><select id="transactionStatus" required><option value="completed">Completed</option><option value="pending">Pending</option><option value="failed">Failed</option><option value="refunded">Refunded</option></select></div>
        <div class="form-group"><label>Payment Method</label><input type="text" id="transactionPaymentMethod" required></div>
        <div class="form-group"><label>Date</label><input type="date" id="transactionDate" required></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Add Transaction</button></div>
      </form>
    </div>
  `);
}
function openEditTransactionModal(transactionId) {
  const transaction = transactions.find(t => t.id === transactionId);
  if (!transaction) return;
  showModal(`
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-receipt"></i> Edit Transaction</h3>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <form id="editTransactionForm" class="modal-body" onsubmit="updateTransaction(event,'${transactionId}')">
        <div class="form-group"><label>Customer Name</label><input type="text" id="transactionCustomerName" value="${transaction.customerName}" required></div>
        <div class="form-group"><label>Customer Email</label><input type="email" id="transactionCustomerEmail" value="${transaction.customerEmail}" required></div>
        <div class="form-group"><label>Amount</label><input type="number" id="transactionAmount" value="${transaction.amount}" required></div>
        <div class="form-group"><label>Status</label><select id="transactionStatus" required><option value="completed"${transaction.status==='completed'?' selected':''}>Completed</option><option value="pending"${transaction.status==='pending'?' selected':''}>Pending</option><option value="failed"${transaction.status==='failed'?' selected':''}>Failed</option><option value="refunded"${transaction.status==='refunded'?' selected':''}>Refunded</option></select></div>
        <div class="form-group"><label>Payment Method</label><input type="text" id="transactionPaymentMethod" value="${transaction.paymentMethod}" required></div>
        <div class="form-group"><label>Date</label><input type="date" id="transactionDate" value="${transaction.date}" required></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button><button type="submit" class="btn btn-primary">Update Transaction</button></div>
      </form>
    </div>
  `);
}
function openDeleteTransactionModal(transactionId) {
  showModal(`
    <div class="modal-content">
      <div class="modal-header"><h3><i class="fas fa-trash"></i> Delete Transaction</h3></div>
      <div class="modal-body"><p>Are you sure you want to delete this transaction?</p></div>
      <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="deleteTransaction('${transactionId}',true)">Delete</button></div>
    </div>
  `);
}
function editTransaction(transactionId) { openEditTransactionModal(transactionId); }
function deleteTransaction(transactionId, confirmed) {
  if (!confirmed) { openDeleteTransactionModal(transactionId); return; }
  transactions = transactions.filter(t => t.id !== transactionId);
  saveTransactions();
  closeModal();
  loadTransactionsTable();
  updateStats();
  showNotification('Transaction deleted successfully!','success');
}
function saveTransactions() { localStorage.setItem('transactions', JSON.stringify(transactions)); }
function loadTransactionsStorage() {
  // Ambil dari localStorage, assign ke let transactions
  let stored = localStorage.getItem('transactions');
  if (stored) {
    transactions = JSON.parse(stored);
  }
}
loadTransactionsStorage();
function addTransaction(event) {
  event.preventDefault();
  const newTransaction = {
    id: 'TXN-' + Date.now(),
    customerName: document.getElementById('transactionCustomerName').value,
    customerEmail: document.getElementById('transactionCustomerEmail').value,
    amount: Number.parseFloat(document.getElementById('transactionAmount').value),
    status: document.getElementById('transactionStatus').value,
    paymentMethod: document.getElementById('transactionPaymentMethod').value,
    date: document.getElementById('transactionDate').value,
    items: [],
    type: 'purchase',
  };
  transactions.push(newTransaction);
  saveTransactions();
  closeModal();
  loadTransactionsTable();
  updateStats();
  showNotification('Transaction added successfully!','success');
}
function updateTransaction(event, transactionId) {
  event.preventDefault();
  const idx = transactions.findIndex(t=>t.id===transactionId);
  if(idx===-1) return;
  transactions[idx] = {
    ...transactions[idx],
    customerName: document.getElementById('transactionCustomerName').value,
    customerEmail: document.getElementById('transactionCustomerEmail').value,
    amount: Number.parseFloat(document.getElementById('transactionAmount').value),
    status: document.getElementById('transactionStatus').value,
    paymentMethod: document.getElementById('transactionPaymentMethod').value,
    date: document.getElementById('transactionDate').value,
  };
  saveTransactions();
  closeModal();
  loadTransactionsTable();
  showNotification('Transaction updated successfully!','success');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function loadTransactions() {
  let stored = localStorage.getItem('transactions');
  transactions = stored ? JSON.parse(stored) : [];
}
