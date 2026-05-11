// TOOGLE PROJECTS EXPANDED CARDS
function toggleExpandCard(clickedCard) {
  const projectCard = document.querySelectorAll(
    ".projects-accordion-cards .card"
  );
  projectCard.forEach((card) => {
    if (card === clickedCard) {
      clickedCard.classList.toggle("expanded");
    } else {
      card.classList.remove("expanded");
    }
  });
}
//------------------------------------------
//------------------------------------------

// industry logos swiper of mobility and customer expereince cards (more than one card !!)
function updateFades(swiper) {
  const wrapper = swiper.el.closest(".industry-swiper-container");
  const leftMask = wrapper.querySelector(".fade-left");
  const rightMask = wrapper.querySelector(".fade-right");

  // Show/hide masks based on position
  leftMask.classList.toggle("fade-hidden", swiper.isBeginning);
  rightMask.classList.toggle("fade-hidden", swiper.isEnd);
}
//create swiper for each card
document.querySelectorAll(".industry-swiper").forEach((el, index) => {
  const swiper = new Swiper(el, {
    slidesPerView: 3.7,
    spaceBetween: 8,
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    on: {
      init() {
        updateFades(this);
      },
      slideChange() {
        updateFades(this);
      },
      reachBeginning() {
        updateFades(this);
      },
      reachEnd() {
        updateFades(this);
      },
    },
  });
});
//------------------------------------------
//------------------------------------------
// side pane menu list
const menuItem = document.querySelectorAll(".menu-list .item > a ");
const subMenuItem = document.querySelectorAll(".sub-menu .sub-item a");

const subMenuArrow = document.querySelectorAll(".sub-menu-arrow");
const subMenuTitle = document.querySelector("#sub-menu-title");
const subMenu = document.querySelectorAll(".sub-menu");

const itemContent = document.querySelectorAll(".side-pane-content div");

menuItem.forEach((e) => {
  e.addEventListener("click", () => {
    menuItem.forEach((item) => {
      item.classList.remove("selected");
    });

    e.classList.add("selected");

    // ---- Handle submenus -------
    const currantSubmenu = e.nextElementSibling;
    const currantArrow = e.querySelector(".sub-menu-arrow");
    if (e.parentElement.classList.contains("has-sub")) {
      // Close other submenus
      subMenu.forEach((sm, i) => {
        if (sm !== currantSubmenu) {
          sm.classList.add("hidden");
        }
      });
      subMenuArrow.forEach((arr) => {
        if (arr !== currantArrow) {
          arr.classList.remove("flip-img");
        }
      });
      // Toggle current submenu
      currantSubmenu.classList.toggle("hidden");
      currantArrow.classList.toggle("flip-img");
    } else {
      // If normal item clicked, close all submenus
      subMenu.forEach((sm) => {
        sm.classList.add("hidden");
        subMenuItem.forEach((item) => {
          item.classList.remove("selected");
        });
      });
      subMenuArrow.forEach((arr) => {
        arr.classList.remove("flip-img");
      });
      // hide others contents
      hideContent(e);
    }
  });
});

subMenuItem.forEach((e) => {
  e.addEventListener("click", () => {
    subMenuItem.forEach((item) => {
      item.classList.remove("selected");
    });
    e.classList.add("selected");
    hideContent(e);
  });
});

// hide others content
function hideContent(e) {
  if (!(e.dataset.item === "all")) {
    itemContent.forEach((c) => {
      c.classList.add("hidden");
    });
    const currentContent = document.getElementById(e.dataset.item);
    currentContent.classList.remove("hidden");
  }
  if (e.dataset.item === "all") {
    itemContent.forEach((c) => {
      c.classList.remove("hidden");
    });
  }
}
// ---------------------------------------------
// ---------------------------------------------
// -------
