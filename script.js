// MOBILE NAV
const mobileNavDrawer = document.querySelector(".mobile-nav_drawer");
const mobileNavLine1 = document.querySelector(".drawer-line-1");
const mobileNavLine2 = document.querySelector(".drawer-line-2");
const mobileNavLine3 = document.querySelector(".drawer-line-3");
const mobileNavBar = document.querySelector(".mobile-nav_navBar");

// LOGIN BUTTONS AND MODAL
const mainLogInBtn = document.querySelector(".navbar .login-btn");
const mobileLogInBtn = document.querySelector(".mobile-nav_navBar .login-btn");
const logInModal = document.querySelector(".modal.login-modal");
const modalCloseBtn = document.querySelector(".modal-btn");

function toggleLoginModal() {
    logInModal.classList.toggle("modal_clicked");
}

function closeMobileNav() {
    mobileNavDrawer.classList.remove("mobile-nav_drawer_clicked");
    mobileNavLine1.classList.remove("drawer-line-1_clicked");
    mobileNavLine2.classList.remove("drawer-line-2_clicked");
    mobileNavLine3.classList.remove("drawer-line-3_clicked");
    mobileNavBar.classList.remove("mobile-nav_navBar_clicked");
}

mobileNavDrawer.addEventListener("click", () => {
    mobileNavDrawer.classList.toggle("mobile-nav_drawer_clicked");
    mobileNavLine1.classList.toggle("drawer-line-1_clicked");
    mobileNavLine2.classList.toggle("drawer-line-2_clicked");
    mobileNavLine3.classList.toggle("drawer-line-3_clicked");
    mobileNavBar.classList.toggle("mobile-nav_navBar_clicked");
});

if (mainLogInBtn) {
    mainLogInBtn.addEventListener("click", toggleLoginModal);
}

if (mobileLogInBtn) {
    mobileLogInBtn.addEventListener("click", () => {
        toggleLoginModal();
        closeMobileNav();
    });
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", toggleLoginModal);
}