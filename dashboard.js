// Dashboard JavaScript with full admin functionality
const currentUser = {
  id: 1,
  name: "Mehmed",
  email: "mehmed@example.com",
  role: "admin", // admin, user
  avatar: "https://i.pinimg.com/736x/f2/fb/ab/f2fbabf45d1a6d97280bb77d22d7ada8.jpg",
  joinDate: "2023-01-15",
  preferences: {
    newsletter: true,
    notifications: true,
    theme: "dark",
  },
}

let currentSection = "overview"
let currentAdminTab = "articles"

// Sample data for admin management
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
    role: "admin",
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
  initializeDashboard()
  updateCartCount()

  // Check if user is admin
  if (currentUser.role === "admin") {
    document.querySelector(".admin-only").style.display = "block"
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
  document.getElementById("userName").textContent = currentUser.name
  document.getElementById("userEmail").textContent = currentUser.email
  document.getElementById("userAvatar").src = currentUser.avatar

  // Load profile form
  document.getElementById("firstName").value = currentUser.name.split(" ")[0]
  document.getElementById("lastName").value = currentUser.name.split(" ")[1] || ""
  document.getElementById("email").value = currentUser.email
  document.getElementById("newsletter").checked = currentUser.preferences.newsletter
  document.getElementById("notifications").checked = currentUser.preferences.notifications
  document.getElementById("theme").value = currentUser.preferences.theme
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
    case "admin":
      loadAdminData()
      break
  }
}

// Load purchases
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
            <div class="purchase-total">$${transaction.total.toFixed(2)}</div>
            <div class="purchase-status ${transaction.status}">${transaction.status}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="viewPurchaseDetails('${transaction.id}')">
            View Details
          </button>
        </div>
      `,
        )
        .join("")}
    </div>
  `
}

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
          <div class="wishlist-content">
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
function loadAdminData() {
  showAdminTab("articles")
}

function showAdminTab(tabName) {
  // Hide all tabs
  document.querySelectorAll(".admin-tab").forEach((tab) => {
    tab.classList.remove("active")
  })

  // Remove active class from tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Show selected tab
  document.getElementById(`${tabName}-tab`).classList.add("active")
  document.querySelector(`[onclick="showAdminTab('${tabName}')"]`).classList.add("active")

  currentAdminTab = tabName

  // Load tab-specific data
  switch (tabName) {
    case "articles":
      loadArticlesTable()
      break
    case "products":
      loadProductsTable()
      break
    case "users":
      loadUsersTable()
      break
    case "transactions":
      loadTransactionsTable()
      break
  }
}

// Load articles table
function loadArticlesTable() {
  const container = document.getElementById("articlesTable")

  container.innerHTML = `
    <table class="admin-data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Status</th>
          <th>Views</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${articlesData
          .map(
            (article) => `
          <tr>
            <td>${article.id}</td>
            <td>${article.title}</td>
            <td>${article.author}</td>
            <td><span class="category-badge">${article.category}</span></td>
            <td><span class="status-badge ${article.status}">${article.status}</span></td>
            <td>${article.views}</td>
            <td>${formatDate(article.date)}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" onclick="editArticle(${article.id})" title="Edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="viewArticle(${article.id})" title="View">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon delete" onclick="deleteArticle(${article.id})" title="Delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `
}

// Load products table
function loadProductsTable() {
  const container = document.getElementById("productsTable")

  container.innerHTML = `
    <table class="admin-data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Photographer</th>
          <th>Category</th>
          <th>Price</th>
          <th>Downloads</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${productsData
          .map(
            (product) => `
          <tr>
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="${product.title}" class="table-thumbnail"></td>
            <td>${product.title}</td>
            <td>${product.photographer}</td>
            <td><span class="category-badge">${product.category}</span></td>
            <td>$${product.price}</td>
            <td>${product.downloads}</td>
            <td><span class="status-badge ${product.status}">${product.status}</span></td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" onclick="editProduct(${product.id})" title="Edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="viewProduct(${product.id})" title="View">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon delete" onclick="deleteProduct(${product.id})" title="Delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `
}

// Load users table
function loadUsersTable() {
  const container = document.getElementById("usersTable")

  container.innerHTML = `
    <table class="admin-data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Join Date</th>
          <th>Purchases</th>
          <th>Total Spent</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${usersData
          .map(
            (user) => `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="role-badge ${user.role}">${user.role}</span></td>
            <td><span class="status-badge ${user.status}">${user.status}</span></td>
            <td>${formatDate(user.joinDate)}</td>
            <td>${user.purchases}</td>
            <td>$${user.totalSpent}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" onclick="editUser(${user.id})" title="Edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" onclick="viewUser(${user.id})" title="View">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon delete" onclick="deleteUser(${user.id})" title="Delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `
}

// Load transactions table
function loadTransactionsTable() {
  const container = document.getElementById("transactionsTable")

  container.innerHTML = `
    <table class="admin-data-table">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>User</th>
          <th>Amount</th>
          <th>Items</th>
          <th>Payment Method</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${transactionsData
          .map(
            (transaction) => `
          <tr>
            <td>${transaction.id}</td>
            <td>${transaction.user}</td>
            <td>$${transaction.amount}</td>
            <td>${transaction.items}</td>
            <td>${transaction.paymentMethod}</td>
            <td><span class="status-badge ${transaction.status}">${transaction.status}</span></td>
            <td>${formatDate(transaction.date)}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" onclick="viewTransaction('${transaction.id}')" title="View">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" onclick="refundTransaction('${transaction.id}')" title="Refund">
                  <i class="fas fa-undo"></i>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `
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

  const articleData = {
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    category: formData.get("category"),
    author: formData.get("author"),
    image: formData.get("image"),
    tags: formData
      .get("tags")
      .split(",")
      .map((tag) => tag.trim()),
    date: new Date().toISOString().split("T")[0],
    views: 0,
    status: "published",
  }

  if (articleId) {
    // Update existing article
    const index = articlesData.findIndex((a) => a.id == articleId)
    articlesData[index] = { ...articlesData[index], ...articleData }
    showNotification("Article updated successfully!", "success")
  } else {
    // Add new article
    articleData.id = Math.max(...articlesData.map((a) => a.id)) + 1
    articlesData.push(articleData)
    showNotification("Article added successfully!", "success")
  }

  closeArticleModal()
  loadArticlesTable()
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

  if (editingProductId) {
    // Edit mode
    const idx = productsData.findIndex(p => p.id === editingProductId);
    productsData[idx] = {
      ...productsData[idx],
      title,
      photographer,
      category,
      price,
      image,
      status
    };
    showNotification("Product updated successfully!", "success");
    editingProductId = null;
  } else {
    // Add mode
    const newProduct = {
      id: productsData.length ? Math.max(...productsData.map(p => p.id)) + 1 : 1,
      title,
      photographer,
      category,
      price,
      image,
      status,
      date: new Date().toISOString().split("T")[0],
      downloads: 0,
    };
    productsData.push(newProduct);
    showNotification("Product added successfully!", "success");
  }

  document.getElementById("addProductModal").style.display = "none";
  loadProductsTable();
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
  e.preventDefault()

  // Update user data
  currentUser.name = `${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`
  currentUser.email = document.getElementById("email").value
  currentUser.preferences.newsletter = document.getElementById("newsletter").checked
  currentUser.preferences.notifications = document.getElementById("notifications").checked
  currentUser.preferences.theme = document.getElementById("theme").value

  // Update display
  loadUserProfile()

  showNotification("Profile updated successfully!", "success")
})

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
