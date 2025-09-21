const loginBtn = document.getElementById("loginBtn");
const overlay = document.getElementById("overlay");

loginBtn.addEventListener("click", (e) => {
  overlay.style.display = "flex";
  e.stopPropagation();
});

document.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.querySelector(".popup").addEventListener("click", (e) => {
  e.stopPropagation();
});
