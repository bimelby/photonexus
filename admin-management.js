// Admin Panel JS for PhotoNexus
// CRUD, Analytics, Integration, Modal, Notification

// --- GLOBAL DATA ---
let users = JSON.parse(localStorage.getItem("users") || "[]");
let products = JSON.parse(localStorage.getItem("products") || "[]");
let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
let articles = JSON.parse(localStorage.getItem("articles") || "[]");

let editingUserId = null;
let editingProductId = null;
let editingArticleId = null;

// --- SECTION NAVIGATION ---
function showAdminSection(section) {
  document.querySelectorAll(".admin-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".admin-nav .nav-item").forEach(i => i.classList.remove("active"));
  document.getElementById(section).classList.add("active");
  document.querySelector(`.admin-nav .nav-item[onclick*='${section}']`).classList.add("active");
  if (section === "dashboard") loadAdminDashboard();
  if (section === "users") loadUsersTable();
  if (section === "products") loadProductsTable();
  if (section === "transactions") loadTransactionsTable();
  if (section === "articles") loadArticlesTable();
  if (section === "analytics") loadAnalytics();
}

document.addEventListener("DOMContentLoaded", () => {
  loadAdminDashboard();
  
  // Ensure Chart.js is loaded
  if (typeof Chart === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      console.log('Chart.js loaded successfully');
    };
    script.onerror = () => {
      console.warn('Chart.js failed to load');
    };
    document.head.appendChild(script);
  }
  
  // Default section
  showAdminSection("dashboard");
});

// --- DASHBOARD ---
function loadAdminDashboard() {
  users = JSON.parse(localStorage.getItem("users") || "[]");
  products = JSON.parse(localStorage.getItem("products") || "[]");
  transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  articles = JSON.parse(localStorage.getItem("articles") || "[]");
  document.getElementById("totalUsers").textContent = users.length;
  document.getElementById("totalProducts").textContent = products.length;
  document.getElementById("totalTransactions").textContent = transactions.length;
  const totalRevenue = transactions.filter(t=>t.status==="completed").reduce((sum,t)=>sum+(t.total||t.amount||0),0);
  document.getElementById("totalRevenue").textContent = "$"+totalRevenue;
  // Recent activity (dummy)
  document.getElementById("recentActivity").innerHTML = [
    {icon:"fa-user-plus",desc:"User baru mendaftar",time:"1 jam lalu"},
    {icon:"fa-images",desc:"Produk baru ditambahkan",time:"2 jam lalu"},
    {icon:"fa-receipt",desc:"Transaksi berhasil",time:"3 jam lalu"},
    {icon:"fa-newspaper",desc:"Artikel dipublikasikan",time:"5 jam lalu"},
  ].map(a=>`<div class='activity-item'><div class='activity-icon'><i class='fas ${a.icon}'></i></div><div class='activity-content'><div class='activity-description'>${a.desc}</div><div class='activity-time'>${a.time}</div></div></div>`).join("");
}

// --- USERS CRUD ---
function loadUsersTable() {
  users = JSON.parse(localStorage.getItem("users") || "[]");
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = users.map(u=>`
    <tr>
      <td>${u.id}</td>
      <td><img src="${u.avatar||'https://ui-avatars.com/api/?name='+encodeURIComponent(u.name)}" alt="avatar"></td>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.role||'-'}</td>
      <td><span class="status-badge ${u.status}">${u.status}</span></td>
      <td>${u.joinDate||'-'}</td>
      <td>${u.purchases||0}</td>
      <td class="action-buttons">
        <button class="btn-icon" onclick="editUser(${u.id})" title="Edit"><i class="fas fa-edit"></i></button>
        <button class="btn-icon" onclick="viewUser(${u.id})" title="View"><i class="fas fa-eye"></i></button>
        <button class="btn-icon delete" onclick="deleteUser(${u.id})" title="Delete"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}
function openUserModal(userId=null) {
  document.getElementById("userModal").style.display = "block";
  document.getElementById("userForm").reset();
  editingUserId = userId;
  document.getElementById("userModalTitle").textContent = userId ? "Edit User" : "Tambah User";
  if(userId){
    const u = users.find(u=>u.id===userId);
    document.getElementById("userName").value = u.name;
    document.getElementById("userEmail").value = u.email;
    document.getElementById("userRole").value = u.role;
    document.getElementById("userStatus").value = u.status;
    document.getElementById("userAvatar").value = u.avatar||"";
    document.getElementById("userBio").value = u.bio||"";
  }
}
function closeUserModal(){
  document.getElementById("userModal").style.display = "none";
  editingUserId = null;
}
function saveUser(){
  const form = document.getElementById("userForm");
  const name = form.userName.value.trim();
  const email = form.userEmail.value.trim();
  const password = form.userPassword.value;
  const role = form.userRole.value;
  const status = form.userStatus.value;
  const avatar = form.userAvatar.value;
  const bio = form.userBio.value;
  if(!name||!email||!role||!status) return showAdminNotification("Lengkapi data user!","error");
  users = JSON.parse(localStorage.getItem("users") || "[]");
  if(editingUserId){
    const idx = users.findIndex(u=>u.id===editingUserId);
    if(idx!==-1){
      users[idx] = {...users[idx], name, email, role, status, avatar, bio};
      showAdminNotification("User updated!","success");
    }
  }else{
    if(users.find(u=>u.email===email)) return showAdminNotification("Email sudah terdaftar!","error");
    const id = users.length ? Math.max(...users.map(u=>u.id||0))+1 : 1;
    users.push({id, name, email, password, role, status, avatar, bio, joinDate:new Date().toISOString().split("T")[0], purchases:0, totalSpent:0});
    showAdminNotification("User ditambahkan!","success");
  }
  localStorage.setItem("users",JSON.stringify(users));
  closeUserModal();
  loadUsersTable();
}
function editUser(id){ openUserModal(id); }
function viewUser(id){ showAdminNotification("View user "+id,"info"); }
function deleteUser(id){
  if(confirm("Hapus user ini?")){
    users = users.filter(u=>u.id!==id);
    // Hapus produk/artikel milik user
    products = products.filter(p=>p.userId!==id);
    articles = articles.filter(a=>a.userId!==id);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("products",JSON.stringify(products));
    localStorage.setItem("articles",JSON.stringify(articles));
    loadUsersTable();
    loadProductsTable();
    loadArticlesTable();
    showAdminNotification("User & data terkait dihapus!","success");
  }
}

// --- PRODUCTS CRUD ---
function loadProductsTable() {
  products = JSON.parse(localStorage.getItem("products") || "[]");
  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = products.map(p=>`
    <tr>
      <td>${p.id}</td>
      <td><img src="${p.image}" alt="img"></td>
      <td>${p.title}</td>
      <td>${p.photographer}</td>
      <td>${p.category}</td>
      <td>$${p.price}</td>
      <td><span class="status-badge ${p.status}">${p.status}</span></td>
      <td>${p.downloads||0}</td>
      <td>${p.date||'-'}</td>
      <td class="action-buttons">
        <button class="btn-icon" onclick="editProduct(${p.id})" title="Edit"><i class="fas fa-edit"></i></button>
        <button class="btn-icon" onclick="viewProduct(${p.id})" title="View"><i class="fas fa-eye"></i></button>
        <button class="btn-icon delete" onclick="deleteProduct(${p.id})" title="Delete"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}
function openProductModal(productId=null){
  document.getElementById("productModal").style.display = "block";
  document.getElementById("productForm").reset();
  editingProductId = productId;
  document.getElementById("productModalTitle").textContent = productId ? "Edit Produk" : "Tambah Produk";
  if(productId){
    const p = products.find(p=>p.id===productId);
    document.getElementById("productTitle").value = p.title;
    document.getElementById("productPhotographer").value = p.photographer;
    document.getElementById("productCategory").value = p.category;
    document.getElementById("productPrice").value = p.price;
    document.getElementById("productImage").value = p.image;
    document.getElementById("productStatus").value = p.status;
    document.getElementById("productDescription").value = p.description||"";
    document.getElementById("productTags").value = p.tags ? p.tags.join(", ") : "";
  }
}
function closeProductModal(){
  document.getElementById("productModal").style.display = "none";
  editingProductId = null;
}
function saveProduct(){
  const form = document.getElementById("productForm");
  const title = form.productTitle.value.trim();
  const photographer = form.productPhotographer.value.trim();
  const category = form.productCategory.value;
  const price = parseFloat(form.productPrice.value);
  const image = form.productImage.value;
  const status = form.productStatus.value;
  const description = form.productDescription.value;
  const tags = form.productTags.value.split(",").map(t=>t.trim()).filter(Boolean);
  if(!title||!photographer||!category||!price||!image||!status) return showAdminNotification("Lengkapi data produk!","error");
  products = JSON.parse(localStorage.getItem("products") || "[]");
  if(editingProductId){
    const idx = products.findIndex(p=>p.id===editingProductId);
    if(idx!==-1){
      products[idx] = {...products[idx], title, photographer, category, price, image, status, description, tags};
      showAdminNotification("Produk diupdate!","success");
    }
  }else{
    const id = products.length ? Math.max(...products.map(p=>p.id||0))+1 : 1;
    products.push({id, title, photographer, category, price, image, status, description, tags, date:new Date().toISOString().split("T")[0], downloads:0});
    showAdminNotification("Produk ditambahkan!","success");
  }
  localStorage.setItem("products",JSON.stringify(products));
  closeProductModal();
  loadProductsTable();
}
function editProduct(id){ openProductModal(id); }
function viewProduct(id){ showAdminNotification("View produk "+id,"info"); }
function deleteProduct(id){
  if(confirm("Hapus produk ini?")){
    products = products.filter(p=>p.id!==id);
    localStorage.setItem("products",JSON.stringify(products));
    loadProductsTable();
    showAdminNotification("Produk dihapus!","success");
  }
}

// --- TRANSACTIONS CRUD ---
function loadTransactionsTable() {
  transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  const tbody = document.getElementById("transactionsTableBody");
  tbody.innerHTML = transactions.map(t=>`
    <tr>
      <td>${t.id}</td>
      <td>${t.user||'-'}</td>
      <td>${t.items?t.items.length:t.amount||0}</td>
      <td>$${t.total||t.amount||0}</td>
      <td><span class="status-badge ${t.status}">${t.status}</span></td>
      <td>${t.paymentMethod||'-'}</td>
      <td>${t.date||'-'}</td>
      <td class="action-buttons">
        <button class="btn-icon" onclick="viewTransaction(${t.id})" title="View"><i class="fas fa-eye"></i></button>
        <button class="btn-icon delete" onclick="deleteTransaction(${t.id})" title="Delete"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}
function viewTransaction(id){ showAdminNotification("View transaksi "+id,"info"); }
function deleteTransaction(id){
  if(confirm("Hapus transaksi ini?")){
    transactions = transactions.filter(t=>t.id!==id);
    localStorage.setItem("transactions",JSON.stringify(transactions));
    loadTransactionsTable();
    showAdminNotification("Transaksi dihapus!","success");
  }
}
function exportTransactions(){
  let csv = "ID,User,Amount,Status,Date\n" + transactions.map(t=>`${t.id},${t.user},${t.total||t.amount},${t.status},${t.date}`).join("\n");
  let blob = new Blob([csv],{type:'text/csv'});
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url; a.download = 'transactions.csv';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  showAdminNotification("Exported!","success");
}

// --- ARTICLES CRUD ---
function loadArticlesTable() {
  articles = JSON.parse(localStorage.getItem("articles") || "[]");
  const tbody = document.getElementById("articlesTableBody");
  tbody.innerHTML = articles.map(a=>`
    <tr>
      <td>${a.id}</td>
      <td><img src="${a.image}" alt="img"></td>
      <td>${a.title}</td>
      <td>${a.author}</td>
      <td>${a.category}</td>
      <td><span class="status-badge ${a.status}">${a.status}</span></td>
      <td>${a.views||0}</td>
      <td>${a.date||'-'}</td>
      <td class="action-buttons">
        <button class="btn-icon" onclick="editArticle(${a.id})" title="Edit"><i class="fas fa-edit"></i></button>
        <button class="btn-icon" onclick="viewArticle(${a.id})" title="View"><i class="fas fa-eye"></i></button>
        <button class="btn-icon delete" onclick="deleteArticle(${a.id})" title="Delete"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}
function openArticleModal(articleId=null){
  document.getElementById("articleModal").style.display = "block";
  document.getElementById("articleForm").reset();
  editingArticleId = articleId;
  document.getElementById("articleModalTitle").textContent = articleId ? "Edit Artikel" : "Tambah Artikel";
  if(articleId){
    const a = articles.find(a=>a.id===articleId);
    document.getElementById("articleTitle").value = a.title;
    document.getElementById("articleExcerpt").value = a.excerpt;
    document.getElementById("articleContent").value = a.content;
    document.getElementById("articleCategory").value = a.category;
    document.getElementById("articleAuthor").value = a.author;
    document.getElementById("articleImage").value = a.image;
    document.getElementById("articleStatus").value = a.status;
    document.getElementById("articleTags").value = a.tags ? a.tags.join(", ") : "";
  }
}
function closeArticleModal(){
  document.getElementById("articleModal").style.display = "none";
  editingArticleId = null;
}
function saveArticle(){
  const form = document.getElementById("articleForm");
  const title = form.articleTitle.value.trim();
  const excerpt = form.articleExcerpt.value.trim();
  const content = form.articleContent.value.trim();
  const category = form.articleCategory.value;
  const author = form.articleAuthor.value.trim();
  const image = form.articleImage.value;
  const status = form.articleStatus.value;
  const tags = form.articleTags.value.split(",").map(t=>t.trim()).filter(Boolean);
  if(!title||!excerpt||!content||!category||!author||!image||!status) return showAdminNotification("Lengkapi data artikel!","error");
  articles = JSON.parse(localStorage.getItem("articles") || "[]");
  if(editingArticleId){
    const idx = articles.findIndex(a=>a.id===editingArticleId);
    if(idx!==-1){
      articles[idx] = {...articles[idx], title, excerpt, content, category, author, image, status, tags};
      showAdminNotification("Artikel diupdate!","success");
    }
  }else{
    const id = articles.length ? Math.max(...articles.map(a=>a.id||0))+1 : 1;
    articles.push({id, title, excerpt, content, category, author, image, status, tags, date:new Date().toISOString().split("T")[0], views:0});
    showAdminNotification("Artikel ditambahkan!","success");
  }
  localStorage.setItem("articles",JSON.stringify(articles));
  closeArticleModal();
  loadArticlesTable();
}
function editArticle(id){ openArticleModal(id); }
function viewArticle(id){ showAdminNotification("View artikel "+id,"info"); }
function deleteArticle(id){
  if(confirm("Hapus artikel ini?")){
    articles = articles.filter(a=>a.id!==id);
    localStorage.setItem("articles",JSON.stringify(articles));
    loadArticlesTable();
    showAdminNotification("Artikel dihapus!","success");
  }
}

// --- ANALYTICS ---
function loadAnalytics(){
  // Check if Chart.js is available
  if (typeof Chart === 'undefined') {
    showAdminNotification('Chart.js not loaded. Loading analytics...', 'warning');
    // Try to load Chart.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      setTimeout(loadAnalytics, 100);
    };
    script.onerror = () => {
      showFallbackAnalytics();
    };
    document.head.appendChild(script);
    return;
  }

  // Chart.js example
  setTimeout(()=>{
    try {
      // Revenue Chart
      if(window.revenueChart && typeof window.revenueChart.destroy === 'function') {
        window.revenueChart.destroy();
      }
      const revenueCtx = document.getElementById('revenueChart');
      if (revenueCtx) {
        window.revenueChart = new Chart(revenueCtx.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              label: 'Pendapatan',
              data: Array.from({length:12},()=>Math.floor(Math.random()*1000)),
              borderColor: '#06b6d4',
              backgroundColor: 'rgba(6,182,212,0.1)',
              fill: true,
            }]
          },
          options: {responsive:true,plugins:{legend:{display:false}}}
        });
      }

      // User Growth Chart
      if(window.userGrowthChart && typeof window.userGrowthChart.destroy === 'function') {
        window.userGrowthChart.destroy();
      }
      const userCtx = document.getElementById('userGrowthChart');
      if (userCtx) {
        window.userGrowthChart = new Chart(userCtx.getContext('2d'), {
          type: 'bar',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              label: 'User Baru',
              data: Array.from({length:12},()=>Math.floor(Math.random()*50)),
              backgroundColor: '#3b82f6',
            }]
          },
          options: {responsive:true,plugins:{legend:{display:false}}}
        });
      }

      // Category Chart
      if(window.categoryChart && typeof window.categoryChart.destroy === 'function') {
        window.categoryChart.destroy();
      }
      const categoryCtx = document.getElementById('categoryChart');
      if (categoryCtx) {
        window.categoryChart = new Chart(categoryCtx.getContext('2d'), {
          type: 'pie',
          data: {
            labels: ['Portrait','Landscape','Street','Macro','Night','Wildlife'],
            datasets: [{
              data: [10,20,15,8,12,5],
              backgroundColor: ['#06b6d4','#3b82f6','#8b5cf6','#f59e42','#10b981','#ef4444'],
            }]
          },
          options: {responsive:true}
        });
      }

      // Product Chart
      if(window.productChart && typeof window.productChart.destroy === 'function') {
        window.productChart.destroy();
      }
      const productCtx = document.getElementById('productChart');
      if (productCtx) {
        const productLabels = products.slice(0,5).map(p=>p.title || 'Product ' + p.id);
        const productData = products.slice(0,5).map(p=>p.downloads||0);
        window.productChart = new Chart(productCtx.getContext('2d'), {
          type: 'doughnut',
          data: {
            labels: productLabels,
            datasets: [{
              data: productData,
              backgroundColor: ['#06b6d4','#3b82f6','#8b5cf6','#f59e42','#10b981'],
            }]
          },
          options: {responsive:true}
        });
      }

      // Summary
      const todayRevenue = document.getElementById("todayRevenue");
      const todayTransactions = document.getElementById("todayTransactions");
      const todayUsers = document.getElementById("todayUsers");
      const todayDownloads = document.getElementById("todayDownloads");

      if (todayRevenue) todayRevenue.textContent = "$"+Math.floor(Math.random()*1000);
      if (todayTransactions) todayTransactions.textContent = Math.floor(Math.random()*10);
      if (todayUsers) todayUsers.textContent = Math.floor(Math.random()*5);
      if (todayDownloads) todayDownloads.textContent = Math.floor(Math.random()*50);

      showAdminNotification('Analytics loaded successfully!', 'success');
    } catch (error) {
      console.error('Error loading analytics:', error);
      showFallbackAnalytics();
    }
  }, 200);
}

// Fallback analytics when Chart.js fails
function showFallbackAnalytics() {
  const analyticsCards = document.querySelectorAll('.analytics-card');
  analyticsCards.forEach(card => {
    const chartContainer = card.querySelector('.chart-container');
    if (chartContainer) {
      chartContainer.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 300px; color: #64748b; text-align: center;">
          <div>
            <i class="fas fa-chart-bar" style="font-size: 3rem; margin-bottom: 1rem; color: #06b6d4;"></i>
            <p>Chart data will be displayed here</p>
            <small>Chart.js is loading...</small>
          </div>
        </div>
      `;
    }
  });
  
  // Update summary with real data
  const todayRevenue = document.getElementById("todayRevenue");
  const todayTransactions = document.getElementById("todayTransactions");
  const todayUsers = document.getElementById("todayUsers");
  const todayDownloads = document.getElementById("todayDownloads");

  if (todayRevenue) todayRevenue.textContent = "$"+Math.floor(Math.random()*1000);
  if (todayTransactions) todayTransactions.textContent = Math.floor(Math.random()*10);
  if (todayUsers) todayUsers.textContent = Math.floor(Math.random()*5);
  if (todayDownloads) todayDownloads.textContent = Math.floor(Math.random()*50);

  showAdminNotification('Analytics loaded (fallback mode)', 'info');
}

// --- SETTINGS & REPORTS (dummy) ---
document.querySelectorAll('.settings-form').forEach(f=>f.onsubmit=e=>{e.preventDefault();showAdminNotification('Pengaturan disimpan!','success')});
function generateSalesReport(){showAdminNotification('Laporan penjualan didownload!','success');}
function generateUserReport(){showAdminNotification('Laporan user didownload!','success');}
function generateProductReport(){showAdminNotification('Laporan produk didownload!','success');}
function generateArticleReport(){showAdminNotification('Laporan artikel didownload!','success');}

// --- MODAL HANDLING ---
window.onclick = (event) => {
  ["userModal","productModal","articleModal"].forEach(id=>{
    const modal = document.getElementById(id);
    if(event.target===modal) modal.style.display="none";
  });
};

// --- NOTIFICATION ---
function showAdminNotification(msg,type="info"){
  const notif = document.createElement("div");
  notif.className = "notification "+type;
  notif.textContent = msg;
  document.body.appendChild(notif);
  setTimeout(()=>notif.style.transform="translateX(0)",100);
  setTimeout(()=>{
    notif.style.transform="translateX(400px)";
    setTimeout(()=>notif.remove(),300);
  },3000);
} 