// Transaction History JavaScript
let allTransactions = []
let filteredTransactions = []
let currentPage = 1
const transactionsPerPage = 10

// Sample transaction data
const sampleTransactions = [
  {
    id: "TXN20240115001",
    date: "2024-01-15T14:30:00Z",
    status: "completed",
    items: [
      {
        id: 1,
        title: "Cosmic Nebula",
        photographer: "Alex Chen",
        price: 299,
        license: "Standard",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=100&h=100&fit=crop",
      },
      {
        id: 2,
        title: "Urban Nights",
        photographer: "Sarah Kim",
        price: 199,
        license: "Extended",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=100&h=100&fit=crop",
      },
    ],
    subtotal: 498,
    tax: 39.84,
    discount: 0,
    total: 537.84,
    paymentMethod: "Credit Card",
    billingInfo: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, City, State 12345",
    },
  },
  {
    id: "TXN20240112002",
    date: "2024-01-12T09:15:00Z",
    status: "completed",
    items: [
      {
        id: 3,
        title: "Mountain Serenity",
        photographer: "David Park",
        price: 249,
        license: "Standard",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
      },
    ],
    subtotal: 249,
    tax: 19.92,
    discount: 25,
    total: 243.92,
    paymentMethod: "PayPal",
    billingInfo: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, City, State 12345",
    },
  },
  {
    id: "TXN20240110003",
    date: "2024-01-10T16:45:00Z",
    status: "pending",
    items: [
      {
        id: 4,
        title: "Ocean Waves",
        photographer: "Maria Garcia",
        price: 179,
        license: "Editorial",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=100&h=100&fit=crop",
      },
      {
        id: 5,
        title: "Forest Path",
        photographer: "Tom Wilson",
        price: 159,
        license: "Standard",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop",
      },
    ],
    subtotal: 338,
    tax: 27.04,
    discount: 0,
    total: 365.04,
    paymentMethod: "Credit Card",
    billingInfo: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, City, State 12345",
    },
  },
  {
    id: "TXN20240108004",
    date: "2024-01-08T11:20:00Z",
    status: "failed",
    items: [
      {
        id: 6,
        title: "City Lights",
        photographer: "Lisa Chen",
        price: 299,
        license: "Extended",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=100&h=100&fit=crop",
      },
    ],
    subtotal: 299,
    tax: 23.92,
    discount: 0,
    total: 322.92,
    paymentMethod: "Credit Card",
    billingInfo: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, City, State 12345",
    },
  },
  {
    id: "TXN20240105005",
    date: "2024-01-05T13:10:00Z",
    status: "refunded",
    items: [
      {
        id: 7,
        title: "Desert Sunset",
        photographer: "Ahmed Hassan",
        price: 219,
        license: "Standard",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=100&h=100&fit=crop",
      },
    ],
    subtotal: 219,
    tax: 17.52,
    discount: 22,
    total: 214.52,
    paymentMethod: "PayPal",
    billingInfo: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, City, State 12345",
    },
  },
]

// Initialize history page
document.addEventListener("DOMContentLoaded", () => {
  loadTransactionHistory()
  setupFilters()
  updateCartCount()
})

// Load transaction history
function loadTransactionHistory() {
  // Load from localStorage and merge with sample data
  const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || []
  allTransactions = [...storedTransactions, ...sampleTransactions]

  // Remove duplicates based on ID
  allTransactions = allTransactions.filter(
    (transaction, index, self) => index === self.findIndex((t) => t.id === transaction.id),
  )

  // Sort by date (newest first)
  allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date))

  filteredTransactions = [...allTransactions]
  loadStatistics()
  loadTransactionsList()
}

// Load statistics
function loadStatistics() {
  const completedTransactions = allTransactions.filter((t) => t.status === "completed")
  const totalSpent = completedTransactions.reduce((sum, t) => sum + t.total, 0)
  const totalItems = completedTransactions.reduce((sum, t) => sum + t.items.length, 0)
  const avgOrderValue = completedTransactions.length > 0 ? totalSpent / completedTransactions.length : 0

  document.getElementById("totalTransactions").textContent = allTransactions.length
  document.getElementById("totalSpent").textContent = `$${totalSpent.toFixed(2)}`
  document.getElementById("totalItems").textContent = totalItems
  document.getElementById("avgOrderValue").textContent = `$${avgOrderValue.toFixed(2)}`
}

// Setup filters
function setupFilters() {
  // Date range filter
  const dateFromInput = document.getElementById("dateFrom")
  const dateToInput = document.getElementById("dateTo")

  // Set default date range (last 30 days)
  const today = new Date()
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)

  dateToInput.value = today.toISOString().split("T")[0]
  dateFromInput.value = thirtyDaysAgo.toISOString().split("T")[0]

  // Add event listeners
  document.getElementById("statusFilter").addEventListener("change", applyFilters)
  document.getElementById("paymentFilter").addEventListener("change", applyFilters)
  dateFromInput.addEventListener("change", applyFilters)
  dateToInput.addEventListener("change", applyFilters)
  document.getElementById("searchInput").addEventListener("input", applyFilters)
}

// Apply filters
function applyFilters() {
  const statusFilter = document.getElementById("statusFilter").value
  const paymentFilter = document.getElementById("paymentFilter").value
  const dateFrom = document.getElementById("dateFrom").value
  const dateTo = document.getElementById("dateTo").value
  const searchQuery = document.getElementById("searchInput").value.toLowerCase()

  filteredTransactions = allTransactions.filter((transaction) => {
    // Status filter
    if (statusFilter && transaction.status !== statusFilter) return false

    // Payment method filter
    if (paymentFilter && transaction.paymentMethod !== paymentFilter) return false

    // Date range filter
    const transactionDate = new Date(transaction.date).toISOString().split("T")[0]
    if (dateFrom && transactionDate < dateFrom) return false
    if (dateTo && transactionDate > dateTo) return false

    // Search filter
    if (searchQuery) {
      const searchableText = `
        ${transaction.id}
        ${transaction.items.map((item) => `${item.title} ${item.photographer}`).join(" ")}
        ${transaction.paymentMethod}
        ${transaction.status}
      `.toLowerCase()

      if (!searchableText.includes(searchQuery)) return false
    }

    return true
  })

  currentPage = 1
  loadTransactionsList()
}

// Clear filters
function clearFilters() {
  document.getElementById("statusFilter").value = ""
  document.getElementById("paymentFilter").value = ""
  document.getElementById("dateFrom").value = ""
  document.getElementById("dateTo").value = ""
  document.getElementById("searchInput").value = ""

  filteredTransactions = [...allTransactions]
  currentPage = 1
  loadTransactionsList()
}

// Load transactions list
function loadTransactionsList() {
  const container = document.getElementById("transactionsList")
  const resultsInfo = document.getElementById("resultsInfo")

  // Update results info
  resultsInfo.textContent = `Showing ${filteredTransactions.length} transaction${filteredTransactions.length !== 1 ? "s" : ""}`

  if (filteredTransactions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-receipt"></i>
        <h3>No transactions found</h3>
        <p>Try adjusting your filters or search terms</p>
        <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
      </div>
    `
    return
  }

  // Pagination
  const startIndex = (currentPage - 1) * transactionsPerPage
  const endIndex = startIndex + transactionsPerPage
  const transactionsToShow = filteredTransactions.slice(startIndex, endIndex)

  // Render transactions
  container.innerHTML = transactionsToShow.map((transaction) => createTransactionCard(transaction)).join("")

  // Update pagination
  updatePagination()
}

// Create transaction card
function createTransactionCard(transaction) {
  const formattedDate = formatDate(transaction.date)
  const itemsPreview = transaction.items.slice(0, 3)
  const remainingItems = transaction.items.length - 3

  return `
    <div class="transaction-card" onclick="viewTransactionDetails('${transaction.id}')">
      <div class="transaction-header">
        <div>
          <div class="transaction-id">${transaction.id}</div>
          <div class="transaction-date">${formattedDate}</div>
        </div>
        <div class="transaction-status ${transaction.status}">${transaction.status}</div>
      </div>
      
      <div class="transaction-items">
        ${itemsPreview.map((item) => `<img src="${item.image}" alt="${item.title}" class="item-thumbnail">`).join("")}
        ${remainingItems > 0 ? `<div class="items-count">+${remainingItems} more</div>` : ""}
      </div>
      
      <div class="transaction-details">
        <div class="detail-item">
          <div class="detail-label">Items</div>
          <div class="detail-value">${transaction.items.length}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Payment</div>
          <div class="detail-value">${transaction.paymentMethod}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Subtotal</div>
          <div class="detail-value">$${transaction.subtotal.toFixed(2)}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Total</div>
          <div class="detail-value transaction-total">$${transaction.total.toFixed(2)}</div>
        </div>
      </div>
      
      <div class="transaction-actions" onclick="event.stopPropagation()">
        <button class="action-btn primary" onclick="viewTransactionDetails('${transaction.id}')">
          <i class="fas fa-eye"></i>
          View Details
        </button>
        ${transaction.status === "completed" ? `<button class="action-btn secondary" onclick="downloadReceipt('${transaction.id}')"><i class="fas fa-download"></i>Receipt</button>` : ""}
        ${transaction.status === "completed" ? `<button class="action-btn secondary" onclick="reorderTransaction('${transaction.id}')"><i class="fas fa-redo"></i>Reorder</button>` : ""}
        ${transaction.status === "pending" ? `<button class="action-btn secondary" onclick="cancelTransaction('${transaction.id}')"><i class="fas fa-times"></i>Cancel</button>` : ""}
      </div>
    </div>
  `
}

// Update pagination
function updatePagination() {
  const pagination = document.getElementById("pagination")
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage)

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

// Change page
function changePage(page) {
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage)
  if (page < 1 || page > totalPages) return

  currentPage = page
  loadTransactionsList()

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// View transaction details
function viewTransactionDetails(transactionId) {
  const transaction = allTransactions.find((t) => t.id === transactionId)
  if (!transaction) return

  const modal = document.getElementById("transactionModal")
  const modalContent = document.getElementById("modalTransactionContent")

  modalContent.innerHTML = `
    <div class="modal-transaction-header">
      <div class="modal-transaction-id">${transaction.id}</div>
      <div class="transaction-status ${transaction.status}">${transaction.status}</div>
    </div>
    
    <div class="transaction-info-grid">
      <div class="info-section">
        <h4>Transaction Details</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Date:</span>
            <span class="info-value">${formatDate(transaction.date)}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Payment Method:</span>
            <span class="info-value">${transaction.paymentMethod}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Status:</span>
            <span class="info-value">${transaction.status}</span>
          </div>
        </div>
      </div>
      
      <div class="info-section">
        <h4>Billing Information</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Name:</span>
            <span class="info-value">${transaction.billingInfo.name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Email:</span>
            <span class="info-value">${transaction.billingInfo.email}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Address:</span>
            <span class="info-value">${transaction.billingInfo.address}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="transaction-items-section">
      <h4>Items Purchased</h4>
      <div class="transaction-items-grid">
        ${transaction.items
          .map(
            (item) => `
          <div class="item-card">
            <img src="${item.image}" alt="${item.title}" class="item-image">
            <div class="item-info">
              <div class="item-title">${item.title}</div>
              <div class="item-photographer">by ${item.photographer}</div>
              <div class="item-license">${item.license} License</div>
            </div>
            <div class="item-price">$${item.price.toFixed(2)}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
    
    <div class="transaction-summary">
      <h4>Order Summary</h4>
      <div class="summary-row">
        <span class="summary-label">Subtotal:</span>
        <span class="summary-value">$${transaction.subtotal.toFixed(2)}</span>
      </div>
      ${
        transaction.discount > 0
          ? `
        <div class="summary-row">
          <span class="summary-label">Discount:</span>
          <span class="summary-value">-$${transaction.discount.toFixed(2)}</span>
        </div>
      `
          : ""
      }
      <div class="summary-row">
        <span class="summary-label">Tax:</span>
        <span class="summary-value">$${transaction.tax.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Total:</span>
        <span class="summary-value">$${transaction.total.toFixed(2)}</span>
      </div>
    </div>
  `

  modal.style.display = "block"
}

// Close transaction modal
function closeTransactionModal() {
  document.getElementById("transactionModal").style.display = "none"
}

// Download receipt
function downloadReceipt(transactionId) {
  const transaction = allTransactions.find((t) => t.id === transactionId)
  if (!transaction) return

  // Generate receipt content
  const receiptContent = `
    PHOTONEXUS RECEIPT
    ==================
    
    Transaction ID: ${transaction.id}
    Date: ${formatDate(transaction.date)}
    Status: ${transaction.status}
    
    BILLING INFORMATION
    -------------------
    Name: ${transaction.billingInfo.name}
    Email: ${transaction.billingInfo.email}
    Address: ${transaction.billingInfo.address}
    
    ITEMS PURCHASED
    ---------------
    ${transaction.items
      .map((item) => `${item.title} by ${item.photographer} - ${item.license} License: $${item.price.toFixed(2)}`)
      .join("\n")}
    
    ORDER SUMMARY
    -------------
    Subtotal: $${transaction.subtotal.toFixed(2)}
    ${transaction.discount > 0 ? `Discount: -$${transaction.discount.toFixed(2)}\n` : ""}Tax: $${transaction.tax.toFixed(2)}
    Total: $${transaction.total.toFixed(2)}
    
    Payment Method: ${transaction.paymentMethod}
    
    Thank you for your purchase!
    PhotoNexus - Premium Stock Photography
  `

  // Create and download file
  const blob = new Blob([receiptContent], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `receipt-${transaction.id}.txt`
  link.click()
  URL.revokeObjectURL(url)

  showNotification("Receipt downloaded successfully!", "success")
}

// Reorder transaction
function reorderTransaction(transactionId) {
  const transaction = allTransactions.find((t) => t.id === transactionId)
  if (!transaction) return

  // Add items to cart
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  transaction.items.forEach((item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...item, quantity: 1 })
    }
  })

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()

  showNotification(`${transaction.items.length} item(s) added to cart!`, "success")
}

// Cancel transaction
function cancelTransaction(transactionId) {
  if (!confirm("Are you sure you want to cancel this transaction?")) return

  const transactionIndex = allTransactions.findIndex((t) => t.id === transactionId)
  if (transactionIndex >= 0) {
    allTransactions[transactionIndex].status = "cancelled"

    // Update localStorage
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || []
    const storedIndex = storedTransactions.findIndex((t) => t.id === transactionId)
    if (storedIndex >= 0) {
      storedTransactions[storedIndex].status = "cancelled"
      localStorage.setItem("transactions", JSON.stringify(storedTransactions))
    }

    // Refresh display
    applyFilters()
    showNotification("Transaction cancelled successfully!", "success")
  }
}

// Export functions
function exportToCSV() {
  const csvContent = [
    ["Transaction ID", "Date", "Status", "Items", "Payment Method", "Subtotal", "Tax", "Discount", "Total"].join(","),
    ...filteredTransactions.map((t) =>
      [
        t.id,
        formatDate(t.date),
        t.status,
        t.items.length,
        t.paymentMethod,
        t.subtotal.toFixed(2),
        t.tax.toFixed(2),
        t.discount.toFixed(2),
        t.total.toFixed(2),
      ].join(","),
    ),
  ].join("\n")

  downloadFile(csvContent, "transactions.csv", "text/csv")
  showNotification("Transactions exported to CSV!", "success")
}

function exportToPDF() {
  // In a real application, you would use a PDF library like jsPDF
  showNotification("PDF export functionality would be implemented here", "info")
}

function exportToJSON() {
  const jsonContent = JSON.stringify(filteredTransactions, null, 2)
  downloadFile(jsonContent, "transactions.json", "application/json")
  showNotification("Transactions exported to JSON!", "success")
}

// Download file helper
function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
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
    hour: "2-digit",
    minute: "2-digit",
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
  const transactionModal = document.getElementById("transactionModal")
  const cartModal = document.getElementById("cartModal")

  if (event.target === transactionModal) {
    closeTransactionModal()
  }
  if (event.target === cartModal) {
    closeCart()
  }
}
