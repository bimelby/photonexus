// Success page JavaScript
document.addEventListener("DOMContentLoaded", () => {
  loadTransactionDetails()
  updateCartCount()
})

// Load transaction details
function loadTransactionDetails() {
  const transaction = JSON.parse(localStorage.getItem("lastTransaction"))

  if (!transaction) {
    window.location.href = "index.html"
    return
  }

  // Display transaction details
  const detailsContainer = document.getElementById("transactionDetails")
  detailsContainer.innerHTML = `
    <div class="transaction-header">
      <div class="transaction-id">Transaction ID: ${transaction.id}</div>
      <div class="transaction-date">${new Date(transaction.date).toLocaleDateString()}</div>
    </div>
    
    <div class="transaction-summary">
      <div class="summary-item">
        <div class="summary-label">Items Purchased</div>
        <div class="summary-value">${transaction.items.length}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">Subtotal</div>
        <div class="summary-value">$${transaction.subtotal.toFixed(2)}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">Tax</div>
        <div class="summary-value">$${transaction.tax.toFixed(2)}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">Total Paid</div>
        <div class="summary-value total">$${transaction.total.toFixed(2)}</div>
      </div>
    </div>
  `

  // Display download items
  const downloadContainer = document.getElementById("downloadItems")
  downloadContainer.innerHTML = ""

  transaction.items.forEach((item) => {
    const downloadItem = document.createElement("div")
    downloadItem.className = "download-item"

    downloadItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="download-image">
      <div class="download-info">
        <div class="download-title">${item.title}</div>
        <div class="download-details">${item.resolution} • ${item.format}</div>
        <div class="download-license">${item.license} License</div>
      </div>
      <button class="download-btn" onclick="downloadPhoto(${item.id}, '${item.title}')">
        <i class="fas fa-download"></i>
        Download
      </button>
    `

    downloadContainer.appendChild(downloadItem)
  })
}

// Download individual photo
function downloadPhoto(photoId, title) {
  // Simulate download
  showNotification(`Downloading ${title}...`, "info")

  // In a real application, this would trigger an actual download
  setTimeout(() => {
    showNotification(`${title} downloaded successfully!`, "success")
  }, 2000)
}

// Download all photos
function downloadAll() {
  const transaction = JSON.parse(localStorage.getItem("lastTransaction"))

  if (!transaction) return

  showNotification(`Downloading ${transaction.items.length} photos...`, "info")

  // Simulate download
  setTimeout(() => {
    showNotification("All photos downloaded successfully!", "success")
  }, 3000)
}

// Show notification
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

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

// Update cart count
function updateCartCount() {
  // Placeholder for cart count update logic
  console.log("Cart count updated")
}
