// Constants for DOM elements
const DOM = {
    mobileNav: {
      drawer: document.querySelector(".mobile-nav_drawer"),
      lines: {
        1: document.querySelector(".drawer-line-1"),
        2: document.querySelector(".drawer-line-2"),
        3: document.querySelector(".drawer-line-3")
      },
      navBar: document.querySelector(".mobile-nav_navBar")
    },
    modals: {
      login: {
        modal: document.querySelector(".modal.login-modal"),
        openBtns: {
          main: document.querySelector(".navbar .login-btn"),
          mobile: document.querySelector(".mobile-nav_navBar .login-btn")
        },
        closeBtn: document.querySelector(".login-modal .modal-btn")
      },
      signup: {
        modal: document.querySelector(".modal.signup-modal"),
        openBtns: {
          main: document.querySelector(".navbar .get-started-btn"),
          mobile: document.querySelector(".mobile-nav_navBar .get-started-btn")
        },
        closeBtn: document.querySelector(".signup-modal .modal-btn")
      }
    }
  };
  
  let scrollPosition;
  
  // Utility functions
  const disableScroll = () => {
    scrollPosition = window.pageYOffset;
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add('modal-open');
  };
  
  const enableScroll = () => {
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
  };
  
  const toggleMobileNav = () => {
    DOM.mobileNav.drawer.classList.toggle("mobile-nav_drawer_clicked");
    DOM.mobileNav.lines[1].classList.toggle("drawer-line-1_clicked");
    DOM.mobileNav.lines[2].classList.toggle("drawer-line-2_clicked");
    DOM.mobileNav.lines[3].classList.toggle("drawer-line-3_clicked");
    DOM.mobileNav.navBar.classList.toggle("mobile-nav_navBar_clicked");
  };
  
  const closeMobileNav = () => {
    DOM.mobileNav.drawer.classList.remove("mobile-nav_drawer_clicked");
    DOM.mobileNav.lines[1].classList.remove("drawer-line-1_clicked");
    DOM.mobileNav.lines[2].classList.remove("drawer-line-2_clicked");
    DOM.mobileNav.lines[3].classList.remove("drawer-line-3_clicked");
    DOM.mobileNav.navBar.classList.remove("mobile-nav_navBar_clicked");
  };
  
  const toggleModal = (modalType) => {
    const otherType = modalType === 'login' ? 'signup' : 'login';
    const modal = DOM.modals[modalType].modal;
    const otherModal = DOM.modals[otherType].modal;
  
    modal.classList.toggle("modal_clicked");
    
    if (modal.classList.contains("modal_clicked")) {
      disableScroll();
      modal.setAttribute('aria-hidden', 'false');
      otherModal.classList.remove("modal_clicked");
      otherModal.setAttribute('aria-hidden', 'true');
    } else {
      enableScroll();
      modal.setAttribute('aria-hidden', 'true');
    }
  };
  
  // Event listeners
  DOM.mobileNav.drawer.addEventListener("click", toggleMobileNav);
  
  ['login', 'signup'].forEach(modalType => {
    const { openBtns, closeBtn } = DOM.modals[modalType];
    
    openBtns.main?.addEventListener("click", () => toggleModal(modalType));
    openBtns.mobile?.addEventListener("click", () => {
      toggleModal(modalType);
      closeMobileNav();
    });
    closeBtn?.addEventListener("click", () => toggleModal(modalType));
  });
  
  // Accessibility: Close modal on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (DOM.modals.login.modal.classList.contains("modal_clicked")) {
        toggleModal('login');
      } else if (DOM.modals.signup.modal.classList.contains("modal_clicked")) {
        toggleModal('signup');
      }
    }
  });