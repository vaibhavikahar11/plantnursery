


let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header-3");
let scrollTop = document.querySelector(".scroll-top");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 250) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (window.scrollY > 250) {
    scrollTop.style.display = "initial";
  } else {
    scrollTop.style.display = "none";
  }
};

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});

let countDate = new Date("april 17, 2024 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();

  gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
  countDown();
}, 1000);


// shop now code
document.getElementById('shop-now-btn').addEventListener('click', function() {
    alert('Thank you for shopping with us!');
  });




//   THAPA TECHNICAL FULL CODE


// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll(".p-btn");
// const p_img_elem = document.querySelectorAll(".img-overlay");

// p_btns.addEventListener("click", (e) => {
//   const p_btn_clicked = e.target;
//   console.log(p_btn_clicked);

//   p_btn.forEach((curElem) =>
//     curElem.classList.remove("p-btn-active"));


//   p_btn_clicked.classList.add("p-btn-active");
//   const btn_num = p_btn_clicked.dataset.btnNum;
//   console.log("btn_num");

//   const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

//   p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
//   img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"))
// });

 
// const portfolioSec = document.querySelector(".section-portfolio");
// const contactSec = document.querySelector(".section-contact");


// document.querySelector(".portfolio-link").addEventListener("click", () => {
//   portfolioSec.scrollIntoView({ behavior: "smooth" });
// });