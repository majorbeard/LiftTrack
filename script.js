// MOBILE NAV
const mobileNavDrawer = document.querySelector(".mobile-nav_drawer");
const mobileNavLine1 = document.querySelector(".drawer-line-1");
const mobileNavLine2 = document.querySelector(".drawer-line-2");
const mobileNavLine3 = document.querySelector(".drawer-line-3");
const mobileNavBar = document.querySelector(".mobile-nav_navBar");

mobileNavDrawer.addEventListener("click", () => {
    mobileNavDrawer.classList.toggle("mobile-nav_drawer_clicked");
    mobileNavLine1.classList.toggle("drawer-line-1_clicked");
    mobileNavLine2.classList.toggle("drawer-line-2_clicked");
    mobileNavLine3.classList.toggle("drawer-line-3_clicked");
    mobileNavBar.classList.toggle("mobile-nav_navBar_clicked");
});