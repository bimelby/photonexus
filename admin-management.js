// Admin Management JS - Modern Sidebar CRUD Panel
// Data global
let users = [];
let products = [];
let articles = [];
let transactions = [];

const itemsPerPage = 10;
const state = {
  tab: 'users',
  page: { users: 1, photos: 1, articles: 1, transactions: 1 },
  filter: {},
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  loadAllData();
  renderSidebar();
  renderTab('users');
});

function loadAllData() {
  users = JSON.parse(localStorage.getItem('users') || '[]');
  photos = JSON.parse(localStorage.getItem('products') || '[]');
  articles = JSON.parse(localStorage.getItem('articles') || '[]');
  transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
}
function saveAllData() {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('photos', JSON.stringify(photos));
  localStorage.setItem('articles', JSON.stringify(articles));
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// --- SIDEBAR ---
function renderSidebar() {
  document.querySelectorAll('.sidebar-link').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.sidebar-link').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTab(btn.dataset.tab);
    };
  });
}

// --- TAB RENDER ---
function renderTab(tab) {
  state.tab = tab;
  document.getElementById('adminTitle').innerHTML = {
    users: '<i class="fas fa-users"></i> User Management',
    photos: '<i class="fas fa-images"></i> Photo Management',
    articles: '<i class="fas fa-newspaper"></i> Article Management',
    transactions: '<i class="fas fa-receipt"></i> Transaction Management',
    analytics: '<i class="fas fa-chart-bar"></i> Analytics',
  }[tab];
  renderActions(tab);
  renderContent(tab);
}
function renderActions(tab) {
  const actions = document.getElementById('adminActions');
  actions.innerHTML = '';
  if (tab === 'analytics') return;
  // Add, Export, Import
  const addBtn = document.createElement('button');
  addBtn.className = 'btn btn-primary';
  addBtn.innerHTML = `<i class="fas fa-plus"></i> Add`;
  addBtn.onclick = () => openModalForm(tab, 'add');
  actions.appendChild(addBtn);
  const exportBtn = document.createElement('button');
  exportBtn.className = 'btn btn-secondary';
  exportBtn.innerHTML = `<i class="fas fa-download"></i> Export CSV`;
  exportBtn.onclick = () => exportCSV(tab);
  actions.appendChild(exportBtn);
  const importBtn = document.createElement('button');
  importBtn.className = 'btn btn-secondary';
  importBtn.innerHTML = `<i class="fas fa-upload"></i> Import CSV`;
  importBtn.onclick = () => openImportModal(tab);
  actions.appendChild(importBtn);
}
function renderContent(tab) {
  const content = document.getElementById('adminContent');
  if (tab === 'users') renderUsersTable(content);
  if (tab === 'photos') renderPhotosTable(content);
  if (tab === 'articles') renderArticlesTable(content);
  if (tab === 'transactions') renderTransactionsTable(content);
  if (tab === 'analytics') renderAnalytics(content);
}

// --- USERS CRUD ---
function renderUsersTable(container) {
  let html = `<table class="data-table"><thead><tr>
    <th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Joined</th><th>Actions</th>
  </tr></thead><tbody>`;
  if (users.length === 0) {
    html += `<tr><td colspan="6" style="text-align:center;color:#64748b;">No users found.</td></tr>`;
  } else {
    users.slice((state.page.users-1)*itemsPerPage, state.page.users*itemsPerPage).forEach(u => {
      html += `<tr>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.role}</td>
        <td>${u.status}</td>
        <td>${u.joinDate||'-'}</td>
        <td class="action-buttons">
          <button class="btn btn-secondary" onclick="editUser('${u.id}')"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deleteUser('${u.id}')" ${u.role==='admin'?'disabled title="Cannot delete admin"':''}><i class="fas fa-trash"></i></button>
        </td>
      </tr>`;
    });
  }
  html += `</tbody></table>`;
  container.innerHTML = html;
}
window.editUser = function(id) { openModalForm('users', 'edit', id); }
window.deleteUser = function(id) {
  const user = users.find(u=>u.id==id);
  if (!user) return;
  if (user.role==='admin') return showNotification('Cannot delete admin user','error');
  openConfirmModal('Delete User', `Are you sure you want to delete user <b>${user.name}</b>?`, () => {
    users = users.filter(u=>u.id!=id);
    saveAllData();
    renderContent('users');
    showNotification('User deleted','success');
  });
}

// --- PHOTOS CRUD ---
function renderPhotosTable(container) {
  let html = `<table class="data-table"><thead><tr>
    <th>Photo</th><th>Title</th><th>Photographer</th><th>Category</th><th>Price</th><th>Status</th><th>Actions</th>
  </tr></thead><tbody>`;
  if (photos.length === 0) {
    html += `<tr><td colspan="7" style="text-align:center;color:#64748b;">No photos found.</td></tr>`;
  } else {
    photos.slice((state.page.photos-1)*itemsPerPage, state.page.photos*itemsPerPage).forEach(p => {
      html += `<tr>
        <td><img src="${p.image}" alt="${p.title}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;"></td>
        <td>${p.title}</td>
        <td>${p.photographer}</td>
        <td>${p.category}</td>
        <td>$${p.price}</td>
        <td>${p.status||'-'}</td>
        <td class="action-buttons">
          <button class="btn btn-secondary" onclick="editPhoto('${p.id}')"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deletePhoto('${p.id}')"><i class="fas fa-trash"></i></button>
        </td>
      </tr>`;
    });
  }
  html += `</tbody></table>`;
  container.innerHTML = html;
}
window.editPhoto = function(id) { openModalForm('photos', 'edit', id); }
window.deletePhoto = function(id) {
  openConfirmModal('Delete Photo', 'Are you sure you want to delete this photo?', () => {
    photos = photos.filter(p=>p.id!=id);
    saveAllData();
    renderContent('photos');
    showNotification('Photo deleted','success');
  });
}

// --- ARTICLES CRUD ---
function renderArticlesTable(container) {
  let html = `<table class="data-table"><thead><tr>
    <th>Title</th><th>Author</th><th>Category</th><th>Status</th><th>Actions</th>
  </tr></thead><tbody>`;
  if (articles.length === 0) {
    html += `<tr><td colspan="5" style="text-align:center;color:#64748b;">No articles found.</td></tr>`;
  } else {
    articles.slice((state.page.articles-1)*itemsPerPage, state.page.articles*itemsPerPage).forEach(a => {
      html += `<tr>
        <td>${a.title}</td>
        <td>${a.author}</td>
        <td>${a.category}</td>
        <td>${a.status||'-'}</td>
        <td class="action-buttons">
          <button class="btn btn-secondary" onclick="editArticle('${a.id}')"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deleteArticle('${a.id}')"><i class="fas fa-trash"></i></button>
        </td>
      </tr>`;
    });
  }
  html += `</tbody></table>`;
  container.innerHTML = html;
}
window.editArticle = function(id) { openModalForm('articles', 'edit', id); }
window.deleteArticle = function(id) {
  openConfirmModal('Delete Article', 'Are you sure you want to delete this article?', () => {
    articles = articles.filter(a=>a.id!=id);
    saveAllData();
    renderContent('articles');
    showNotification('Article deleted','success');
  });
}

// --- TRANSACTIONS CRUD ---
function renderTransactionsTable(container) {
  let html = `<table class="data-table"><thead><tr>
    <th>ID</th><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th><th>Actions</th>
  </tr></thead><tbody>`;
  if (transactions.length === 0) {
    html += `<tr><td colspan="6" style="text-align:center;color:#64748b;">No transactions found.</td></tr>`;
  } else {
    transactions.slice((state.page.transactions-1)*itemsPerPage, state.page.transactions*itemsPerPage).forEach(t => {
      html += `<tr>
        <td>${t.id}</td>
        <td>${t.customerName||'-'}</td>
        <td>$${t.amount||0}</td>
        <td>${t.status||'-'}</td>
        <td>${t.date||'-'}</td>
        <td class="action-buttons">
          <button class="btn btn-secondary" onclick="editTransaction('${t.id}')"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deleteTransaction('${t.id}')"><i class="fas fa-trash"></i></button>
        </td>
      </tr>`;
    });
  }
  html += `</tbody></table>`;
  container.innerHTML = html;
}
window.editTransaction = function(id) { openModalForm('transactions', 'edit', id); }
window.deleteTransaction = function(id) {
  openConfirmModal('Delete Transaction', 'Are you sure you want to delete this transaction?', () => {
    transactions = transactions.filter(t=>t.id!=id);
    saveAllData();
    renderContent('transactions');
    showNotification('Transaction deleted','success');
  });
}

// --- ANALYTICS ---
function renderAnalytics(container) {
  const totalRevenue = transactions.filter(t=>t.status==='completed').reduce((sum,t)=>sum+(t.amount||0),0);
  const totalUsers = users.length;
  const totalPhotos = photos.length;
  const totalArticles = articles.length;
  container.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:2rem;">
      <div class="summary-card"><h3>Total Users</h3><div class="summary-value">${totalUsers}</div></div>
      <div class="summary-card"><h3>Total Photos</h3><div class="summary-value">${totalPhotos}</div></div>
      <div class="summary-card"><h3>Total Articles</h3><div class="summary-value">${totalArticles}</div></div>
      <div class="summary-card"><h3>Revenue</h3><div class="summary-value">$${totalRevenue}</div></div>
    </div>
  `;
}

// --- MODAL, NOTIF, CSV ---
function openModalForm(tab, mode, id) {
  let modal = document.createElement('div');
  modal.className = 'modal';
  let formHtml = '';
  let isEdit = mode === 'edit';
  let data = null;
  if (isEdit) {
    if (tab === 'users') data = users.find(u => u.id == id);
    if (tab === 'photos') data = photos.find(p => p.id == id);
    if (tab === 'articles') data = articles.find(a => a.id == id);
    if (tab === 'transactions') data = transactions.find(t => t.id == id);
    if (!data) return;
  }
  if (tab === 'users') {
    formHtml = `
      <form id="userForm">
        <div class="form-group"><label>Name</label><input type="text" id="userName" value="${isEdit ? data.name : ''}" required></div>
        <div class="form-group"><label>Email</label><input type="email" id="userEmail" value="${isEdit ? data.email : ''}" required></div>
        <div class="form-group"><label>Role</label><select id="userRole" required>
          <option value="admin"${isEdit && data.role==='admin'?' selected':''}>admin</option>
          <option value="photographer"${isEdit && data.role==='photographer'?' selected':''}>photographer</option>
          <option value="customer"${isEdit && data.role==='customer'?' selected':''}>customer</option>
        </select></div>
        <div class="form-group"><label>Status</label><select id="userStatus" required>
          <option value="active"${isEdit && data.status==='active'?' selected':''}>active</option>
          <option value="inactive"${isEdit && data.status==='inactive'?' selected':''}>inactive</option>
        </select></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Update' : 'Add'}</button>
        </div>
      </form>
    `;
  }
  if (tab === 'photos') {
    formHtml = `
      <form id="photoForm">
        <div class="form-group"><label>Title</label><input type="text" id="photoTitle" value="${isEdit ? data.title : ''}" required></div>
        <div class="form-group"><label>Photographer</label><input type="text" id="photoPhotographer" value="${isEdit ? data.photographer : ''}" required></div>
        <div class="form-group"><label>Category</label><input type="text" id="photoCategory" value="${isEdit ? data.category : ''}" required></div>
        <div class="form-group"><label>Price</label><input type="number" id="photoPrice" value="${isEdit ? data.price : ''}" required></div>
        <div class="form-group"><label>Status</label><select id="photoStatus" required>
          <option value="published"${isEdit && data.status==='published'?' selected':''}>published</option>
          <option value="draft"${isEdit && data.status==='draft'?' selected':''}>draft</option>
        </select></div>
        <div class="form-group"><label>Image URL</label><input type="text" id="photoImage" value="${isEdit ? data.image : ''}" required></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Update' : 'Add'}</button>
        </div>
      </form>
    `;
  }
  if (tab === 'articles') {
    formHtml = `
      <form id="articleForm">
        <div class="form-group"><label>Title</label><input type="text" id="articleTitle" value="${isEdit ? data.title : ''}" required></div>
        <div class="form-group"><label>Author</label><input type="text" id="articleAuthor" value="${isEdit ? data.author : ''}" required></div>
        <div class="form-group"><label>Category</label><input type="text" id="articleCategory" value="${isEdit ? data.category : ''}" required></div>
        <div class="form-group"><label>Status</label><select id="articleStatus" required>
          <option value="published"${isEdit && data.status==='published'?' selected':''}>published</option>
          <option value="draft"${isEdit && data.status==='draft'?' selected':''}>draft</option>
        </select></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Update' : 'Add'}</button>
        </div>
      </form>
    `;
  }
  if (tab === 'transactions') {
    formHtml = `
      <form id="transactionForm">
        <div class="form-group"><label>Customer Name</label><input type="text" id="transactionCustomerName" value="${isEdit ? data.customerName : ''}" required></div>
        <div class="form-group"><label>Amount</label><input type="number" id="transactionAmount" value="${isEdit ? data.amount : ''}" required></div>
        <div class="form-group"><label>Status</label><select id="transactionStatus" required>
          <option value="completed"${isEdit && data.status==='completed'?' selected':''}>completed</option>
          <option value="pending"${isEdit && data.status==='pending'?' selected':''}>pending</option>
        </select></div>
        <div class="form-group"><label>Date</label><input type="date" id="transactionDate" value="${isEdit ? data.date : ''}" required></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Update' : 'Add'}</button>
        </div>
      </form>
    `;
  }
  modal.innerHTML = `<div class="modal-header"><h2>${isEdit ? 'Edit' : 'Add'} ${tab.charAt(0).toUpperCase()+tab.slice(1,tab.length-1)}</h2><button class="close-btn" onclick="closeModal()">&times;</button></div><div class="modal-body">${formHtml}</div>`;
  document.getElementById('modalContainer').innerHTML = '';
  document.getElementById('modalContainer').appendChild(modal);
  // Form submit handler
  if (tab === 'users') document.getElementById('userForm').onsubmit = e => handleUserForm(e, isEdit, id);
  if (tab === 'photos') document.getElementById('photoForm').onsubmit = e => handlePhotoForm(e, isEdit, id);
  if (tab === 'articles') document.getElementById('articleForm').onsubmit = e => handleArticleForm(e, isEdit, id);
  if (tab === 'transactions') document.getElementById('transactionForm').onsubmit = e => handleTransactionForm(e, isEdit, id);
}
function closeModal() {
  document.getElementById('modalContainer').innerHTML = '';
}
// --- FORM HANDLERS ---
function handleUserForm(e, isEdit, id) {
  e.preventDefault();
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const role = document.getElementById('userRole').value;
  const status = document.getElementById('userStatus').value;
  if (!name || !email) return showNotification('Name and Email required','error');
  if (!isEdit && users.find(u => u.email === email)) return showNotification('Email already exists','error');
  if (isEdit) {
    const idx = users.findIndex(u => u.id == id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], name, email, role, status };
    }
    showNotification('User updated','success');
  } else {
    const newId = users.length ? Math.max(...users.map(u=>parseInt(u.id)||0))+1 : 1;
    users.push({ id: newId, name, email, role, status, joinDate: new Date().toISOString().split('T')[0] });
    showNotification('User added','success');
  }
  saveAllData();
  closeModal();
  renderContent('users');
}
function handlePhotoForm(e, isEdit, id) {
  e.preventDefault();
  const title = document.getElementById('photoTitle').value.trim();
  const photographer = document.getElementById('photoPhotographer').value.trim();
  const category = document.getElementById('photoCategory').value.trim();
  const price = parseFloat(document.getElementById('photoPrice').value);
  const status = document.getElementById('photoStatus').value;
  const image = document.getElementById('photoImage').value.trim();
  if (!title || !photographer || !category || !image) return showNotification('All fields required','error');
  if (isEdit) {
    const idx = photos.findIndex(p => p.id == id);
    if (idx !== -1) {
      photos[idx] = { ...photos[idx], title, photographer, category, price, status, image };
    }
    showNotification('Photo updated','success');
  } else {
    const newId = photos.length ? Math.max(...photos.map(p=>parseInt(p.id)||0))+1 : 1;
    photos.push({ id: newId, title, photographer, category, price, status, image });
    showNotification('Photo added','success');
  }
  saveAllData();
  closeModal();
  renderContent('photos');
}
function handleArticleForm(e, isEdit, id) {
  e.preventDefault();
  const title = document.getElementById('articleTitle').value.trim();
  const author = document.getElementById('articleAuthor').value.trim();
  const category = document.getElementById('articleCategory').value.trim();
  const status = document.getElementById('articleStatus').value;
  if (!title || !author || !category) return showNotification('All fields required','error');
  if (isEdit) {
    const idx = articles.findIndex(a => a.id == id);
    if (idx !== -1) {
      articles[idx] = { ...articles[idx], title, author, category, status };
    }
    showNotification('Article updated','success');
  } else {
    const newId = articles.length ? Math.max(...articles.map(a=>parseInt(a.id)||0))+1 : 1;
    articles.push({ id: newId, title, author, category, status });
    showNotification('Article added','success');
  }
  saveAllData();
  closeModal();
  renderContent('articles');
}
function handleTransactionForm(e, isEdit, id) {
  e.preventDefault();
  const customerName = document.getElementById('transactionCustomerName').value.trim();
  const amount = parseFloat(document.getElementById('transactionAmount').value);
  const status = document.getElementById('transactionStatus').value;
  const date = document.getElementById('transactionDate').value;
  if (!customerName || !amount || !date) return showNotification('All fields required','error');
  if (isEdit) {
    const idx = transactions.findIndex(t => t.id == id);
    if (idx !== -1) {
      transactions[idx] = { ...transactions[idx], customerName, amount, status, date };
    }
    showNotification('Transaction updated','success');
  } else {
    const newId = transactions.length ? Math.max(...transactions.map(t=>parseInt(t.id)||0))+1 : 1;
    transactions.push({ id: newId, customerName, amount, status, date });
    showNotification('Transaction added','success');
  }
  saveAllData();
  closeModal();
  renderContent('transactions');
}
function openConfirmModal(title, message, onConfirm) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `<div class="modal-header"><h2>${title}</h2><button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button></div>
    <div class="modal-body">${message}</div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button><button class="btn btn-danger" id="confirmBtn">Delete</button></div>`;
  document.getElementById('modalContainer').innerHTML = '';
  document.getElementById('modalContainer').appendChild(modal);
  modal.querySelector('#confirmBtn').onclick = () => { onConfirm(); modal.remove(); };
}
function openImportModal(tab) {
  // ... Implementasi modal import CSV ...
  showNotification('Import CSV for '+tab+' (not implemented in this snippet)','info');
}
function exportCSV(tab) {
  let data = [];
  if (tab==='users') data = users;
  if (tab==='photos') data = photos;
  if (tab==='articles') data = articles;
  if (tab==='transactions') data = transactions;
  if (!data.length) return showNotification('No data to export','error');
  const csv = toCSV(data);
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${tab}-export.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showNotification('Exported CSV','success');
}
function toCSV(data) {
  if (!data.length) return '';
  const keys = Object.keys(data[0]);
  const rows = [keys.join(',')];
  data.forEach(obj => {
    rows.push(keys.map(k => '"'+String(obj[k]||'').replace(/"/g,'""')+'"').join(','));
  });
  return rows.join('\n');
}
function showNotification(msg, type='info') {
  const notif = document.createElement('div');
  notif.className = 'notification'+(type==='error'?' error':'');
  notif.textContent = msg;
  document.getElementById('notificationContainer').appendChild(notif);
  setTimeout(()=>notif.remove(), 2500);
}

// Agar fungsi CRUD bisa dipanggil dari HTML/modal
window.openModalForm = openModalForm;
window.closeModal = closeModal;
window.handleUserForm = handleUserForm;
window.handlePhotoForm = handlePhotoForm;
window.handleArticleForm = handleArticleForm;
window.handleTransactionForm = handleTransactionForm;
window.openConfirmModal = openConfirmModal;
window.openImportModal = openImportModal;
window.exportCSV = exportCSV;
window.showNotification = showNotification;
