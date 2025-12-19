const menuIcon = document.getElementById("icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener ("click", () => {
    menuList.classList.toggle("hidden");
});