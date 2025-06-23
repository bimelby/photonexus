document.getElementById("registerForm").onsubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.email === email)) {
    showRegisterNotification("Email already registered!", "error");
    return;
  }
  const newId = users.length ? Math.max(...users.map(u => u.id || 0)) + 1 : 1;
  users.push({ id: newId, name, email, password, avatar: "", preferences: {}, role: "user" });
  localStorage.setItem("users", JSON.stringify(users));
  showRegisterNotification("Registration successful! Please sign in.", "success");
  setTimeout(() => window.location.href = "index.html", 1500);
};

function showRegisterNotification(msg, type = "info") {
  const notif = document.createElement("div");
  notif.className = "login-notification " + type;
  notif.textContent = msg;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2500);
}