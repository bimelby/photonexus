document.getElementById("loginForm").onsubmit = function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "profile.html";
  } else {
    showLoginNotification("Invalid email or password!", "error");
  }
};

function showLoginNotification(msg, type = "info") {
  const notif = document.createElement("div");
  notif.className = "login-notification " + type;
  notif.textContent = msg;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2500);
}