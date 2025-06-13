// Checkout specific JavaScript
const orderData = {
  items: [],
  subtotal: 0,
  discount: 0,
  tax: 0,
  total: 0,
  promoCode: null,
}

const promoCodes = {
  SAVE10: { type: "percentage", value: 10, description: "10% off" },
  WELCOME20: { type: "percentage", value: 20, description: "20% off for new customers" },
  PHOTO50: { type: "fixed", value: 50, description: "$50 off" },
}

// Initialize checkout page
document.addEventListener("DOMContentLoaded", () => {
  loadOrderItems()
  setupPaymentMethods()
  setupFormValidation()
  updateCartCount()
})

// Load order items from cart
function loadOrderItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const orderItemsContainer = document.getElementById("orderItems")

  if (cart.length === 0) {
    window.location.href = "catalog.html"
    return
  }

  orderData.items = cart

  // Display items
  orderItemsContainer.innerHTML = ""
  cart.forEach((item) => {
    const orderItem = document.createElement("div")
    orderItem.className = "order-item"

    orderItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="item-image">
      <div class="item-details">
        <div class="item-title">${item.title}</div>
        <div class="item-photographer">by ${item.photographer}</div>
        <div class="item-license">${item.license} License</div>
      </div>
      <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
    `

    orderItemsContainer.appendChild(orderItem)
  })

  calculateTotals()
}

// Calculate order totals
function calculateTotals() {
  orderData.subtotal = orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Apply discount
  if (orderData.promoCode) {
    const promo = promoCodes[orderData.promoCode]
    if (promo.type === "percentage") {
      orderData.discount = orderData.subtotal * (promo.value / 100)
    } else {
      orderData.discount = Math.min(promo.value, orderData.subtotal)
    }
  }

  // Calculate tax (8%)
  const taxableAmount = orderData.subtotal - orderData.discount
  orderData.tax = taxableAmount * 0.08

  // Calculate total
  orderData.total = orderData.subtotal - orderData.discount + orderData.tax

  // Update display
  document.getElementById("subtotal").textContent = `$${orderData.subtotal.toFixed(2)}`
  document.getElementById("tax").textContent = `$${orderData.tax.toFixed(2)}`
  document.getElementById("total").textContent = `$${orderData.total.toFixed(2)}`

  const discountRow = document.getElementById("discountRow")
  if (orderData.discount > 0) {
    document.getElementById("discount").textContent = `-$${orderData.discount.toFixed(2)}`
    discountRow.style.display = "flex"
  } else {
    discountRow.style.display = "none"
  }
}

// Setup payment methods
function setupPaymentMethods() {
  const paymentMethods = document.querySelectorAll(".payment-method")
  const paymentForms = document.querySelectorAll(".payment-form")

  paymentMethods.forEach((method) => {
    method.addEventListener("click", () => {
      // Remove active class from all methods
      paymentMethods.forEach((m) => m.classList.remove("active"))
      paymentForms.forEach((f) => f.classList.remove("active"))

      // Add active class to selected method
      method.classList.add("active")

      // Show corresponding form
      const methodType = method.dataset.method
      document.getElementById(`${methodType}Payment`).classList.add("active")
    })
  })
}

// Setup form validation
function setupFormValidation() {
  // Card number formatting
  const cardNumberInput = document.getElementById("cardNumber")
  if (cardNumberInput) {
    cardNumberInput.addEventListener("input", (e) => {
      const value = e.target.value.replace(/\s/g, "").replace(/[^0-9]/gi, "")
      const formattedValue = value.match(/.{1,4}/g)?.join(" ") || value
      e.target.value = formattedValue
    })
  }

  // Expiry date formatting
  const expiryInput = document.getElementById("expiryDate")
  if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "")
      if (value.length >= 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4)
      }
      e.target.value = value
    })
  }

  // CVV validation
  const cvvInput = document.getElementById("cvv")
  if (cvvInput) {
    cvvInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "")
    })
  }

  // Real-time validation
  const requiredFields = document.querySelectorAll("input[required], select[required]")
  requiredFields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field))
    field.addEventListener("input", () => {
      if (field.classList.contains("error")) {
        validateField(field)
      }
    })
  })
}

// Validate individual field
function validateField(field) {
  const value = field.value.trim()
  let isValid = true

  // Remove existing error
  field.classList.remove("error")

  // Check if required field is empty
  if (field.hasAttribute("required") && !value) {
    isValid = false
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      isValid = false
    }
  }

  // Card number validation
  if (field.id === "cardNumber" && value) {
    const cardNumber = value.replace(/\s/g, "")
    if (cardNumber.length < 13 || cardNumber.length > 19) {
      isValid = false
    }
  }

  // Expiry date validation
  if (field.id === "expiryDate" && value) {
    const [month, year] = value.split("/")
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() % 100
    const currentMonth = currentDate.getMonth() + 1

    if (
      !month ||
      !year ||
      Number.parseInt(month) < 1 ||
      Number.parseInt(month) > 12 ||
      Number.parseInt(year) < currentYear ||
      (Number.parseInt(year) === currentYear && Number.parseInt(month) < currentMonth)
    ) {
      isValid = false
    }
  }

  // CVV validation
  if (field.id === "cvv" && value) {
    if (value.length < 3 || value.length > 4) {
      isValid = false
    }
  }

  if (!isValid) {
    field.classList.add("error")
  }

  return isValid
}

// Apply promo code
function applyPromoCode() {
  const promoInput = document.getElementById("promoCode")
  const code = promoInput.value.trim().toUpperCase()

  if (!code) {
    showNotification("Please enter a promo code", "error")
    return
  }

  if (promoCodes[code]) {
    orderData.promoCode = code
    calculateTotals()
    promoInput.value = ""
    promoInput.disabled = true
    showNotification(`Promo code applied: ${promoCodes[code].description}`, "success")
  } else {
    showNotification("Invalid promo code", "error")
  }
}

// Process payment
function processPayment() {
  // Validate form
  const form = document.getElementById("checkoutForm")
  const requiredFields = form.querySelectorAll("input[required], select[required]")
  const termsCheckbox = document.getElementById("termsAccept")
  const licenseCheckbox = document.getElementById("licenseAccept")

  let isValid = true

  // Validate all required fields
  requiredFields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false
    }
  })

  // Check payment method specific fields
  const activePaymentMethod = document.querySelector(".payment-method.active").dataset.method
  if (activePaymentMethod === "card") {
    const cardFields = ["cardNumber", "expiryDate", "cvv", "cardName"]
    cardFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId)
      if (!validateField(field)) {
        isValid = false
      }
    })
  }

  // Check checkboxes
  if (!termsCheckbox.checked || !licenseCheckbox.checked) {
    showNotification("Please accept the terms and license agreement", "error")
    isValid = false
  }

  if (!isValid) {
    showNotification("Please correct the errors in the form", "error")
    return
  }

  // Show processing modal
  document.getElementById("processingModal").style.display = "block"

  // Simulate payment processing
  setTimeout(() => {
    // Create transaction record
    const transaction = {
      id: "TXN" + Date.now(),
      date: new Date().toISOString(),
      items: orderData.items,
      subtotal: orderData.subtotal,
      discount: orderData.discount,
      tax: orderData.tax,
      total: orderData.total,
      paymentMethod: activePaymentMethod,
      status: "completed",
      billingInfo: {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipCode: document.getElementById("zipCode").value,
        country: document.getElementById("country").value,
      },
    }

    // Save transaction to localStorage
    const transactions = JSON.parse(localStorage.getItem("transactions")) || []
    transactions.push(transaction)
    localStorage.setItem("transactions", JSON.stringify(transactions))

    // Clear cart
    localStorage.removeItem("cart")

    // Hide processing modal
    document.getElementById("processingModal").style.display = "none"

    // Redirect to success page
    localStorage.setItem("lastTransaction", JSON.stringify(transaction))
    window.location.href = "payment-success.html"
  }, 3000) // 3 second delay to simulate processing
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

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 5000)
}

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartCountElement = document.getElementById("cartCount")
  cartCountElement.textContent = cart.length
}
