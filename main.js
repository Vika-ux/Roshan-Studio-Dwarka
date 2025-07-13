
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    };

}




const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

// ---service next sheet---
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
// --------service next sheet end here-------
ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = [
      { id: "count1", target: 75, duration: 2000 },
      { id: "count2", target: 1000, duration: 2500 },
      { id: "count3", target: 1000000, duration: 3000 },
      { id: "count4", target: 850, duration: 2500 }
  ];

  counters.forEach(counter => {
      let startValue = 0;
      const element = document.getElementById(counter.id);
      const increment = counter.target / (counter.duration / 20);

      const updateCounter = () => {
          startValue += increment;
          if (startValue < counter.target) {
              element.textContent = Math.ceil(startValue).toLocaleString();
              requestAnimationFrame(updateCounter);
          } else {
              element.textContent = counter.target.toLocaleString();
          }
      };

      requestAnimationFrame(updateCounter);
  });
});

const swiper = new Swiper(".testemonial-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".service-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});