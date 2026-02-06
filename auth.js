// Role power levels (higher = more power)
const ROLE_LEVELS = {
  "User": 0,
  "Admin": 1,
  "Manager": 2,
  "Co-Founder": 3,
  "Founder": 4,
  "Co-Owner": 5,
  "Owner": 6
};

// Passwords (users don't need password)
const PASSWORDS = {
  "Admin": "admin123",
  "Manager": "manager123",
  "Co-Founder": "cofounder123",
  "Founder": "founder123",
  "Co-Owner": "coowner123",
  "Owner": "owner123"
};

// Redirect pages
const DASHBOARD = {
  "User": "index.html",
  "Admin": "admin.html",
  "Manager": "manager.html",
  "Co-Founder": "co-founder.html",
  "Founder": "founder.html",
  "Co-Owner": "co-owner.html",
  "Owner": "owner.html"
};

// Login function
function login(role, password) {
  if (role === "User") {
    localStorage.setItem("role", "User");
    window.location.href = DASHBOARD.User;
    return;
  }

  if (PASSWORDS[role] && PASSWORDS[role] === password) {
    localStorage.setItem("role", role);
    window.location.href = DASHBOARD[role];
  } else {
    alert("❌ Wrong password");
  }
}

// Protect pages
function protectPage(minRole) {
  const role = localStorage.getItem("role");

  if (!role || ROLE_LEVELS[role] < ROLE_LEVELS[minRole]) {
    alert("❌ Access denied");
    window.location.href = "login.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("role");
  window.location.href = "login.html";
}
