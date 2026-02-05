
const ROLE_LEVELS={Owner:6,"Co-Owner":5,Founder:4,"Co-Founder":3,Manager:2,Admin:1,User:0};
const PASSWORDS={Owner:"owner123","Co-Owner":"coowner123",Founder:"founder123","Co-Founder":"cofounder123",Manager:"manager123",Admin:"admin123",User:"user123"};
function login(r,p){if(PASSWORDS[r]===p){localStorage.setItem("role",r);location.href=r==="User"?"index.html":r.toLowerCase().replace(" ","-")+".html";}else alert("Wrong password");}
function protectPage(min){let r=localStorage.getItem("role");if(!r||ROLE_LEVELS[r]<ROLE_LEVELS[min])location.href="login.html";}
function logout(){localStorage.removeItem("role");location.href="login.html";}
