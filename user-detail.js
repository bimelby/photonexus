// Ambil ID user dari URL
function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Contoh: ambil data user dari localStorage atau array JS
function getUsers() {
    // Coba ambil dari localStorage
    const users = JSON.parse(localStorage.getItem('users'));
    if (users && Array.isArray(users)) return users;
    // Fallback: array dummy
    return [
        {
            id: '2',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            name: 'habibaty bima',
            email: 'habibaty@mail.com',
            role: 'photographer',
            status: 'INACTIVE',
            joinDate: '-',
            totalPurchase: 0
        }
    ];
}

function renderUserDetail(user) {
    const card = document.getElementById('user-detail-card');
    if (!user) {
        card.innerHTML = '<div class="not-found">User tidak ditemukan.</div>';
        return;
    }
    card.innerHTML = `
        <div class="user-avatar-detail">
            <img src="${user.avatar}" alt="Avatar">
            <div class="role-badge"><i class="fas fa-user-tag"></i> ${user.role}</div>
        </div>
        <div class="user-info-detail">
            <h2>${user.name}</h2>
            <span class="status ${user.status.toLowerCase()}"><i class="fas fa-${user.status.toLowerCase()==='active'?'check-circle':'times-circle'}"></i> ${user.status}</span>
            <div class="info-row"><span class="info-icon"><i class="fas fa-envelope"></i></span><p><strong>Email:</strong> ${user.email}</p></div>
            <div class="info-row"><span class="info-icon"><i class="fas fa-user-tag"></i></span><p><strong>Role:</strong> ${user.role}</p></div>
            <div class="info-row"><span class="info-icon"><i class="fas fa-calendar-alt"></i></span><p><strong>Tanggal Bergabung:</strong> ${user.joinDate}</p></div>
            <div class="info-row"><span class="info-icon"><i class="fas fa-shopping-cart"></i></span><p><strong>Total Pembelian:</strong> ${user.totalPurchase}</p></div>
        </div>
    `;
}

// Main
const userId = getUserIdFromUrl();
const users = getUsers();
const user = users.find(u => String(u.id) === String(userId));
renderUserDetail(user); 