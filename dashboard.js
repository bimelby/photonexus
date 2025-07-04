// Dashboard JavaScript with full user functionality
const currentUser = {
  id: 1,
  name: "Mehmed",
  email: "mehmed@example.com",
  role: "user", // user, user
  avatar: "https://i.pinimg.com/736x/f2/fb/ab/f2fbabf45d1a6d97280bb77d22d7ada8.jpg",
  joinDate: "2023-01-15",
  preferences: {
    newsletter: true,
    notifications: true,
    theme: "dark",
  },
}

let currentSection = "overview"
let currentuserTab = "articles"

// Sample data for user management
let articlesData = [
  {
    id: 1,
    title: "Mastering Portrait Photography",
    author: "Sarah Johnson",
    category: "Portrait",
    status: "published",
    date: "2024-01-15",
    views: 2450,
    excerpt: "Learn how to use natural and artificial light to create stunning portrait photographs.",
  },
  {
    id: 2,
    title: "Landscape Photography Tips",
    author: "Michael Chen",
    category: "Landscape",
    status: "draft",
    date: "2024-01-12",
    views: 1890,
    excerpt: "Discover the secrets of timing, composition, and camera settings for breathtaking landscapes.",
  },
]

let productsData = [
  {
    id: 1,
    title: "Cosmic Nebula",
    photographer: "Alex Chen",
    category: "Space",
    price: 299,
    status: "active",
    date: "2024-01-10",
    downloads: 1250,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    title: "Urban Nights",
    photographer: "Sarah Kim",
    category: "Urban",
    price: 199,
    status: "active",
    date: "2024-01-08",
    downloads: 980,
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=100&h=100&fit=crop",
  },
]

let usersData = [
  {
    id: 1,
    name: "Mehmed",
    email: "mehmed@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-01-15",
    purchases: 15,
    totalSpent: 2450,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "active",
    joinDate: "2023-03-20",
    purchases: 8,
    totalSpent: 1200,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "user",
    status: "inactive",
    joinDate: "2023-06-10",
    purchases: 3,
    totalSpent: 450,
  },
]

const transactionsData = [
  {
    id: "TXN001",
    user: "John Doe",
    amount: 598,
    status: "completed",
    date: "2024-01-15",
    items: 2,
    paymentMethod: "Credit Card",
  },
  {
    id: "TXN002",
    user: "Jane Smith",
    amount: 249,
    status: "completed",
    date: "2024-01-12",
    items: 1,
    paymentMethod: "PayPal",
  },
  {
    id: "TXN003",
    user: "Mike Johnson",
    amount: 399,
    status: "pending",
    date: "2024-01-10",
    items: 2,
    paymentMethod: "Credit Card",
  },
]

// Initialize dashboard
document.addEventListener("DOMContentLoaded", () => {
  cleanUpUserData();
  initializeDashboard()
  updateCartCount()

  // Check if user is admin
  if (currentUser.role === "user") {
    document.querySelector(".user-only").style.display = "block"
  }
})

// Initialize dashboard
function initializeDashboard() {
  loadUserProfile()
  loadOverviewData()
  loadRecentActivity()
  showSection("overview")
}

// Load user profile
function loadUserProfile() {
  // Ambil user dari localStorage
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (!user) return;

  document.getElementById("userName").textContent = user.name;
  document.getElementById("userEmail").textContent = user.email;
  document.getElementById("userAvatar").src =
    user.avatar && user.avatar.trim() !== ""
      ? user.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}`;

  // Jika ada form profil di dashboard, isi juga
  if (document.getElementById("firstName")) {
    const nameParts = user.name.split(" ");
    document.getElementById("firstName").value = nameParts[0] || "";
    document.getElementById("lastName").value = nameParts.slice(1).join(" ") || "";
  }
  if (document.getElementById("email")) {
    document.getElementById("email").value = user.email;
  }
  if (document.getElementById("profileAvatarInput")) {
    document.getElementById("profileAvatarInput").value = user.avatar || "";
  }
  if (document.getElementById("theme")) {
    document.getElementById("theme").value = user.preferences?.theme || "dark";
  }
}

// Load overview data
function loadOverviewData() {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || []
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

  const completedTransactions = transactions.filter((t) => t.status === "completed")
  const totalPhotos = completedTransactions.reduce((sum, t) => sum + t.items.length, 0)
  const totalSpent = completedTransactions.reduce((sum, t) => sum + t.total, 0)
  const totalDownloads = totalPhotos * 2 // Assume 2 downloads per photo

  document.getElementById("totalPhotosOwned").textContent = totalPhotos
  document.getElementById("totalDownloads").textContent = totalDownloads
  document.getElementById("totalSpent").textContent = `$${totalSpent.toFixed(2)}`
  document.getElementById("wishlistCount").textContent = wishlist.length
}

// Load recent activity
function loadRecentActivity() {
  const activities = [
    {
      type: "purchase",
      description: "Purchased 2 photos",
      time: "2 hours ago",
      icon: "fas fa-shopping-bag",
    },
    {
      type: "download",
      description: "Downloaded 'Cosmic Nebula'",
      time: "1 day ago",
      icon: "fas fa-download",
    },
    {
      type: "wishlist",
      description: "Added 'Mountain Serenity' to wishlist",
      time: "3 days ago",
      icon: "fas fa-heart",
    },
    {
      type: "profile",
      description: "Updated profile information",
      time: "1 week ago",
      icon: "fas fa-user-edit",
    },
  ]

  const container = document.getElementById("recentActivity")
  container.innerHTML = activities
    .map(
      (activity) => `
    <div class="activity-item">
      <div class="activity-icon">
        <i class="${activity.icon}"></i>
      </div>
      <div class="activity-content">
        <div class="activity-description">${activity.description}</div>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `,
    )
    .join("")
}

// Show section
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll(".dashboard-section").forEach((section) => {
    section.classList.remove("active")
  })

  // Remove active class from nav items
  document.querySelectorAll(".dashboard-nav .nav-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Show selected section
  document.getElementById(sectionName).classList.add("active")
  document.querySelector(`[onclick="showSection('${sectionName}')"]`).classList.add("active")

  currentSection = sectionName

  // Load section-specific data
  switch (sectionName) {
    case "purchases":
      loadPurchases()
      break
    case "wishlist":
      loadWishlist()
      break
    case "downloads":
      loadDownloads()
      break
    case "user":
      loadUserData()
      break
  }
}

// Load purchases
// ...existing code...

function loadPurchases() {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || []
  const container = document.getElementById("purchasesContent")

  if (transactions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-shopping-bag"></i>
        <h3>No purchases yet</h3>
        <p>Start browsing our photo catalog to make your first purchase</p>
        <button class="btn btn-primary" onclick="window.location.href='catalog.html'">
          Browse Photos
        </button>
      </div>
    `
    return
  }

  container.innerHTML = `
    <div class="purchases-grid">
      ${transactions
        .map(
          (transaction) => `
        <div class="purchase-card">
          <div class="purchase-header">
            <div class="purchase-id">${transaction.id}</div>
            <div class="purchase-date">${formatDate(transaction.date)}</div>
          </div>
          <div class="purchase-items">
            ${transaction.items
              .slice(0, 3)
              .map(
                (item) => `
              <img src="${item.image}" alt="${item.title}" class="purchase-thumbnail">
            `,
              )
              .join("")}
            ${transaction.items.length > 3 ? `<div class="more-items">+${transaction.items.length - 3}</div>` : ""}
          </div>
          <div class="purchase-info">
            <div class="purchase-total"><span>Total:</span> <strong>$${transaction.total.toFixed(2)}</strong></div>
            <div class="purchase-status ${transaction.status}">${transaction.status}</div>
          </div>
          <button class="btn btn-primary btn-block" onclick="viewPurchaseDetails('${transaction.id}')">
            View Details
          </button>
        </div>
      `,
        )
        .join("")}
    </div>
  `
}
// ...existing code...

// Load wishlist
function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const allPhotos = (window.productsData || window.featuredPhotos || []);
  const wishlistPhotos = wishlist.map(id => allPhotos.find(p => p.id === id)).filter(Boolean);
  const container = document.getElementById("wishlistContent")

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-heart"></i>
        <h3>Your wishlist is empty</h3>
        <p>Save photos you love to your wishlist for easy access later</p>
        <button class="btn btn-primary" onclick="window.location.href='catalog.html'">
          Browse Photos
        </button>
      </div>
    `
    return
  }

  container.innerHTML = `
    <div class="wishlist-grid">
      ${wishlist
        .map(
          (item) => `
        <div class="wishlist-card">
          <img src="${item.image}" alt="${item.title}" class="wishlist-image">
          <div class="wishlist-info">
            <h4 class="wishlist-title">${item.title}</h4>
            <p class="wishlist-photographer">by ${item.photographer}</p>
            <div class="wishlist-price">$${item.price}</div>
            <div class="wishlist-actions">
              <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">
                Add to Cart
              </button>
              <button class="btn btn-secondary btn-sm" onclick="removeFromWishlist(${item.id})">
                Remove
              </button>
            </div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `
}

// Load downloads
function loadDownloads() {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || []
  const completedTransactions = transactions.filter((t) => t.status === "completed")
  const allItems = completedTransactions.flatMap((t) => t.items)
  const container = document.getElementById("downloadsContent")

  if (allItems.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-download"></i>
        <h3>No downloads available</h3>
        <p>Purchase photos to access your downloads</p>
        <button class="btn btn-primary" onclick="window.location.href='catalog.html'">
          Browse Photos
        </button>
      </div>
    `
    return
  }

  container.innerHTML = `
    <div class="downloads-grid">
      ${allItems
        .map(
          (item) => `
        <div class="download-card">
          <img src="${item.image}" alt="${item.title}" class="download-image">
          <div class="download-content">
            <h4 class="download-title">${item.title}</h4>
            <p class="download-photographer">by ${item.photographer}</p>
            <div class="download-info">
              <span class="download-resolution">${item.resolution || "6000x4000"}</span>
              <span class="download-format">${item.format || "JPEG"}</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="downloadFile('${item.id}', '${item.title}')">
              <i class="fas fa-download"></i>
              Download
            </button>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `
}

// Admin functions
function loadUserData() {
  showUserTab("articles")
}

function showUserTab(tabName) {
  document.querySelectorAll('.user-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`${tabName}-tab`).classList.add('active');
  document.querySelector(`[onclick="showUserTab('${tabName}')"]`).classList.add('active');
  if (tabName === 'articles') loadArticlesTableUserPanel();
  if (tabName === 'photos') loadPhotosTableUserPanel();
  if (tabName === 'transactions') loadTransactionsTableUserPanel();
}

// Helper: Load and save data from localStorage
function getArticlesData() {
  return JSON.parse(localStorage.getItem("articles")) || [];
}
function setArticlesData(data) {
  localStorage.setItem("articles", JSON.stringify(data));
}
function getPhotosData() {
  return JSON.parse(localStorage.getItem("products")) || [];
}
function setPhotosData(data) {
  localStorage.setItem("products", JSON.stringify(data));
}
function getTransactionsData() {
  return JSON.parse(localStorage.getItem("transactions")) || [];
}
function setTransactionsData(data) {
  localStorage.setItem("transactions", JSON.stringify(data));
}

// Helper: Clean up old data (tanpa userId) dari localStorage
function cleanUpUserData() {
  // Bersihkan artikel tanpa userId
  let articles = getArticlesData();
  const filteredArticles = articles.filter(a => a.userId);
  if (filteredArticles.length !== articles.length) {
    setArticlesData(filteredArticles);
  }
  // Bersihkan foto tanpa userId
  let photos = getPhotosData();
  const filteredPhotos = photos.filter(p => p.userId);
  if (filteredPhotos.length !== photos.length) {
    setPhotosData(filteredPhotos);
  }
}

// --- ARTICLES ---
function loadArticlesTableUserPanel() {
  const container = document.getElementById('articles-tab');
  let articles = getArticlesData();
  const currentUser = getCurrentUser();
  // Filter hanya artikel milik user login dan yang punya userId
  articles = articles.filter(article => article.userId === currentUser?.id);
  container.innerHTML = `
    <div class="tab-header">
      <h3>Articles Management</h3>
      <button class="btn btn-primary" onclick="openArticleModalUserPanel()">
        <i class="fas fa-plus"></i> Add Article
      </button>
    </div>
    <div class="user-table">
      <table class="user-data-table user-table-compact">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${articles.length === 0 ? `<tr><td colspan='7' style='text-align:center;color:#64748b;'>No articles found.</td></tr>` :
            articles.map(article => `
            <tr>
              <td>${article.id}</td>
              <td class="truncate">${article.title}</td>
              <td class="truncate">${article.author}</td>
              <td><span class="category-badge">${article.category}</span></td>
              <td><span class="status-badge ${article.status}">${article.status}</span></td>
              <td>${formatDate(article.date)}</td>
              <td>
                <div class="action-buttons">
                  <button class="btn-icon" onclick="editArticleUserPanel(${article.id})" title="Edit"><i class="fas fa-edit"></i></button>
                  <button class="btn-icon" onclick="viewArticleUserPanel(${article.id})" title="View"><i class="fas fa-eye"></i></button>
                  <button class="btn-icon delete" onclick="deleteArticleUserPanel(${article.id})" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function openArticleModalUserPanel(articleId = null) {
  const modal = document.getElementById("articleModal")
  const form = document.getElementById("articleForm")
  const title = document.getElementById("articleModalTitle")

  if (articleId) {
    const article = getArticlesData().find((a) => a.id === articleId)
    title.textContent = "Edit Article"

    // Populate form with article data
    document.getElementById("articleTitle").value = article.title
    document.getElementById("articleExcerpt").value = article.excerpt
    document.getElementById("articleContent").value = article.content || ""
    document.getElementById("articleCategory").value = article.category
    document.getElementById("articleAuthor").value = article.author
    document.getElementById("articleImage").value = article.image || ""
    document.getElementById("articleTags").value = article.tags ? article.tags.join(", ") : ""

    form.dataset.articleId = articleId
  } else {
    title.textContent = "Add Article"
    form.reset()
    delete form.dataset.articleId
  }

  modal.style.display = "block"
}
function editArticleUserPanel(articleId) {
  openArticleModalUserPanel(articleId);
}
function viewArticleUserPanel(articleId) {
  localStorage.setItem("selectedArticleId", articleId);
  window.open("article-detail.html", "_blank");
}
function deleteArticleUserPanel(articleId) {
  const currentUser = getCurrentUser();
  if (confirm("Are you sure you want to delete this article?")) {
    let articles = getArticlesData();
    articles = articles.filter(a => !(a.id === articleId && a.userId === currentUser?.id));
    setArticlesData(articles);
    loadArticlesTableUserPanel();
    showNotification("Article deleted successfully!", "success");
  }
}

// --- PHOTOS ---
function loadPhotosTableUserPanel() {
  const container = document.getElementById('photos-tab');
  let photos = getPhotosData();
  const currentUser = getCurrentUser();
  // Filter hanya foto milik user login dan yang punya userId
  photos = photos.filter(photo => photo.userId === currentUser?.id);
  container.innerHTML = `
    <div class="tab-header">
      <h3>Photos Management</h3>
      <button class="btn btn-primary" onclick="openPhotoModalUserPanel()">
        <i class="fas fa-plus"></i> Add Photo
      </button>
    </div>
    <div class="user-table">
      <table class="user-data-table user-table-compact">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Photographer</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${photos.length === 0 ? `<tr><td colspan='8' style='text-align:center;color:#64748b;'>No photos found.</td></tr>` :
            photos.map(photo => `
            <tr>
              <td>${photo.id}</td>
              <td><img src="${photo.image}" alt="${photo.title}" class="table-thumbnail compact-thumb"></td>
              <td class="truncate">${photo.title}</td>
              <td class="truncate">${photo.photographer}</td>
              <td><span class="category-badge">${photo.category}</span></td>
              <td>$${photo.price}</td>
              <td><span class="status-badge ${photo.status}">${photo.status}</span></td>
              <td>
                <div class="action-buttons">
                  <button class="btn-icon" onclick="editPhotoUserPanel(${photo.id})" title="Edit"><i class="fas fa-edit"></i></button>
                  <button class="btn-icon" onclick="viewPhotoUserPanel(${photo.id})" title="View"><i class="fas fa-eye"></i></button>
                  <button class="btn-icon delete" onclick="deletePhotoUserPanel(${photo.id})" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}
function openPhotoModalUserPanel(photoId = null) {
  document.getElementById("addProductModal").style.display = "block";
  document.getElementById("addProductForm").reset();
  editingProductId = photoId;

  if (photoId) {
    const product = getPhotosData().find(p => p.id === photoId);
    document.getElementById("productTitle").value = product.title;
    document.getElementById("productPhotographer").value = product.photographer;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productImage").value = product.image;
    document.getElementById("productStatus").value = product.status;
  }
}
function editPhotoUserPanel(photoId) {
  openPhotoModalUserPanel(photoId);
}
function viewPhotoUserPanel(photoId) {
  localStorage.setItem("selectedPhotoId", photoId);
  window.open("product-detail.html", "_blank");
}
function deletePhotoUserPanel(photoId) {
  const currentUser = getCurrentUser();
  if (confirm("Are you sure you want to delete this photo?")) {
    let photos = getPhotosData();
    photos = photos.filter(p => !(p.id === photoId && p.userId === currentUser?.id));
    setPhotosData(photos);
    loadPhotosTableUserPanel();
    showNotification("Photo deleted successfully!", "success");
  }
}

// --- TRANSACTIONS ---
function loadTransactionsTableUserPanel() {
  const container = document.getElementById('transactions-tab');
  let transactions = getTransactionsData();
  const currentUser = getCurrentUser();
  // Filter hanya transaksi milik user login
  const userTransactions = transactions.filter(tx => tx.user === (currentUser?.name || ""));
  container.innerHTML = `
    <div class="tab-header">
      <h3>Transactions Info</h3>
    </div>
    <div class="user-table">
      <table class="user-data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${userTransactions.length === 0 ? `<tr><td colspan='6' style='text-align:center;color:#64748b;'>No transactions found.</td></tr>` :
            userTransactions.map(tx => `
            <tr>
              <td>${tx.id}</td>
              <td>${tx.user || '-'}</td>
              <td>${tx.amount || (tx.items ? tx.items.length : 0)}</td>
              <td><span class="status-badge ${tx.status}">${tx.status}</span></td>
              <td>${formatDate(tx.date)}</td>
              <td>
                <div class="action-buttons">
                  <button class="btn-icon" onclick="viewTransactionUserPanel('${tx.id}')" title="View"><i class="fas fa-eye"></i></button>
                  <button class="btn-icon delete" onclick="deleteTransactionUserPanel('${tx.id}')" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}
function viewTransactionUserPanel(transactionId) {
  showNotification(`View transaction ${transactionId}`, "info");
}
function deleteTransactionUserPanel(transactionId) {
  if (confirm("Are you sure you want to delete this transaction?")) {
    let transactions = getTransactionsData();
    transactions = transactions.filter(t => t.id !== transactionId);
    setTransactionsData(transactions);
    loadTransactionsTableUserPanel();
    showNotification("Transaction deleted successfully!", "success");
  }
}

// Article management functions
function openArticleModal(articleId = null) {
  const modal = document.getElementById("articleModal")
  const form = document.getElementById("articleForm")
  const title = document.getElementById("articleModalTitle")

  if (articleId) {
    const article = articlesData.find((a) => a.id === articleId)
    title.textContent = "Edit Article"

    // Populate form with article data
    document.getElementById("articleTitle").value = article.title
    document.getElementById("articleExcerpt").value = article.excerpt
    document.getElementById("articleContent").value = article.content || ""
    document.getElementById("articleCategory").value = article.category
    document.getElementById("articleAuthor").value = article.author
    document.getElementById("articleImage").value = article.image || ""
    document.getElementById("articleTags").value = article.tags ? article.tags.join(", ") : ""

    form.dataset.articleId = articleId
  } else {
    title.textContent = "Add Article"
    form.reset()
    delete form.dataset.articleId
  }

  modal.style.display = "block"
}

function closeArticleModal() {
  document.getElementById("articleModal").style.display = "none"
}

function saveArticle() {
  const form = document.getElementById("articleForm")
  const formData = new FormData(form)
  const articleId = form.dataset.articleId
  let articles = getArticlesData();
  const currentUser = getCurrentUser();
  const articleData = {
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    category: formData.get("category"),
    author: formData.get("author"),
    image: formData.get("image"),
    tags: formData.get("tags").split(",").map((tag) => tag.trim()),
    date: new Date().toISOString().split("T")[0],
    views: 0,
    status: "published",
    userId: currentUser?.id,
  }
  if (articleId) {
    // Update existing article (hanya jika milik user login)
    const index = articles.findIndex((a) => a.id == articleId && a.userId === currentUser?.id)
    if (index !== -1) {
      articles[index] = { ...articles[index], ...articleData, userId: currentUser?.id }
      showNotification("Article updated successfully!", "success")
    }
  } else {
    // Add new article
    articleData.id = articles.length ? Math.max(...articles.map((a) => a.id)) + 1 : 1
    articles.push(articleData)
    showNotification("Article added successfully!", "success")
  }
  setArticlesData(articles);
  closeArticleModal()
  loadArticlesTableUserPanel()
}

function editArticle(articleId) {
  openArticleModal(articleId)
}

function viewArticle(articleId) {
  localStorage.setItem("selectedArticleId", articleId)
  window.open("article-detail.html", "_blank")
}

function deleteArticle(articleId) {
  if (confirm("Are you sure you want to delete this article?")) {
    articlesData = articlesData.filter((a) => a.id !== articleId)
    loadArticlesTable()
    showNotification("Article deleted successfully!", "success")
  }
}

// Product management functions

function openProductModal(productId = null) {
  document.getElementById("addProductModal").style.display = "block";
  document.getElementById("addProductForm").reset();
  editingProductId = productId;

  if (productId) {
    const product = productsData.find(p => p.id === productId);
    document.getElementById("productTitle").value = product.title;
    document.getElementById("productPhotographer").value = product.photographer;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productImage").value = product.image;
    document.getElementById("productStatus").value = product.status;
  }
}
function addProduct(event) {
  event.preventDefault();
  const title = document.getElementById("productTitle").value;
  const photographer = document.getElementById("productPhotographer").value;
  const category = document.getElementById("productCategory").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  const image = document.getElementById("productImage").value;
  const status = document.getElementById("productStatus").value;
  let products = getPhotosData();
  const currentUser = getCurrentUser();
  if (editingProductId) {
    // Edit mode (hanya jika milik user login)
    const idx = products.findIndex(p => p.id === editingProductId && p.userId === currentUser?.id);
    if (idx !== -1) {
      products[idx] = {
        ...products[idx],
        title,
        photographer,
        category,
        price,
        image,
        status,
        userId: currentUser?.id,
      };
      showNotification("Product updated successfully!", "success");
      editingProductId = null;
    }
  } else {
    // Add mode
    const newProduct = {
      id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
      title,
      photographer,
      category,
      price,
      image,
      status,
      date: new Date().toISOString().split("T")[0],
      downloads: 0,
      userId: currentUser?.id,
    };
    products.push(newProduct);
    showNotification("Product added successfully!", "success");
  }
  setPhotosData(products);
  document.getElementById("addProductModal").style.display = "none";
  loadPhotosTableUserPanel();
}
function editProduct(productId) {
  openProductModal(productId);
}
function viewProduct(productId) {
  localStorage.setItem("selectedPhotoId", productId)
  window.open("product-detail.html", "_blank")
}

function deleteProduct(productId) {
  if (confirm("Are you sure you want to delete this product?")) {
    productsData = productsData.filter((p) => p.id !== productId)
    loadProductsTable()
    showNotification("Product deleted successfully!", "success")
  }
}

// User management functions
function addUser(event) {
  event.preventDefault()
  const name = document.getElementById("addUserName").value
  const email = document.getElementById("addUserEmail").value
  const role = document.getElementById("userRole").value
  const status = document.getElementById("userStatus").value


  const newUser = {
    id: usersData.length ? Math.max(...usersData.map(u => u.id)) + 1 : 1,
    name,
    email,
    role,
    status,
    joinDate: new Date().toISOString().split("T")[0],
    purchases: 0,
    totalSpent: 0,
  }
  usersData.push(newUser)
  document.getElementById("addUserModal").style.display = "none"
  loadUsersTable()
  showNotification("User added successfully!", "success")
}
function openUserModal() {
  document.getElementById("addUserModal").style.display = "block";
  document.getElementById("addUserForm").reset();
}
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
function editUser(userId) {
  showNotification(`Edit user ${userId}`, "info")
}

function viewUser(userId) {
  showNotification(`View user ${userId}`, "info")
}

function deleteUser(userId) {
  if (confirm("Are you sure you want to delete this user?")) {
    usersData = usersData.filter((u) => u.id !== userId)
    loadUsersTable()
    showNotification("User deleted successfully!", "success")
  }
}

// Transaction management functions
function viewTransaction(transactionId) {
  showNotification(`View transaction ${transactionId}`, "info")
}

function refundTransaction(transactionId) {
  if (confirm("Are you sure you want to refund this transaction?")) {
    const transaction = transactionsData.find((t) => t.id === transactionId)
    transaction.status = "refunded"
    loadTransactionsTable()
    showNotification("Transaction refunded successfully!", "success")
  }
}

function exportTransactions() {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    "ID,User,Amount,Items,Payment Method,Status,Date\n" +
    transactionsData
      .map((t) => `${t.id},${t.user},${t.amount},${t.items},${t.paymentMethod},${t.status},${t.date}`)
      .join("\n")

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "transactions.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  showNotification("Transactions exported successfully!", "success")
}

// Profile functions
function resetForm() {
  loadUserProfile()
  showNotification("Form reset to original values", "info")
}

// Handle profile form submission
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Ambil user dari localStorage
  let user = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (!user) return;

  // Update data user
  user.name = `${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`.trim();
  user.email = document.getElementById("email").value;
  user.avatar = document.getElementById("profileAvatarInput")?.value.trim() || user.avatar || "";
  user.preferences = user.preferences || {};
  user.preferences.newsletter = document.getElementById("newsletter")?.checked ?? user.preferences.newsletter;
  user.preferences.notifications = document.getElementById("notifications")?.checked ?? user.preferences.notifications;
  user.preferences.theme = document.getElementById("theme")?.value || user.preferences.theme || "dark";

  // Simpan ke localStorage
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Update tampilan sidebar
  loadUserProfile();

  showNotification("Profile updated successfully!", "success");
});

// Utility functions
function viewPurchaseDetails(transactionId) {
  window.location.href = `history.html#${transactionId}`
}

function removeFromWishlist(itemId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
  wishlist = wishlist.filter((item) => item.id !== itemId)
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
  loadWishlist()
  loadOverviewData()
  showNotification("Item removed from wishlist", "success")
}

function downloadFile(itemId, title) {
  showNotification(`Downloading ${title}...`, "info")

  // Simulate download
  setTimeout(() => {
    showNotification(`${title} downloaded successfully!`, "success")
  }, 2000)
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
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

// Close modal when clicking outside
window.onclick = (event) => {
  const articleModal = document.getElementById("articleModal")
  const cartModal = document.getElementById("cartModal")

  if (event.target === articleModal) {
    closeArticleModal()
  }
  if (event.target === cartModal) {
    closeCart()
  }
}

// Helper: Get current user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
}
