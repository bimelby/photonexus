document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  document.getElementById("profileName").textContent = user.name;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profileFullName").value = user.name;
  document.getElementById("profileEmailInput").value = user.email;
  document.getElementById("profileAvatar").src = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`;
  document.getElementById("profileAvatarInput").value = user.avatar || "";
  document.getElementById("profileTheme").value = user.preferences?.theme || "dark";
  // Mini avatar in navbar
  const mini = document.getElementById("profileMini");
  if (mini) mini.src = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`;
});

document.getElementById("profileForm").onsubmit = function(e) {
  e.preventDefault();
  let user = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (!user) return;
  user.name = document.getElementById("profileFullName").value.trim();
  user.email = document.getElementById("profileEmailInput").value.trim();
  user.avatar = document.getElementById("profileAvatarInput").value.trim() || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`;
  user.preferences = user.preferences || {};
  user.preferences.theme = document.getElementById("profileTheme").value;
  localStorage.setItem("currentUser", JSON.stringify(user));
  document.getElementById("profileName").textContent = user.name;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profileAvatar").src = user.avatar;
  showProfileNotification("Profile updated!", "success", () => {
    window.location.href = "home.html";
  });
};

function showProfileNotification(msg, type = "info", callback) {
  const notif = document.createElement("div");
  notif.className = "login-notification " + type;
  notif.textContent = msg;
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.remove();
    if (typeof callback === "function") callback();
  }, 2000);
}