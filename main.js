// const navBarPos = document.querySelector("navbar");
// let navScroll = window.scrollY;

// window.onscroll = () => {
//   let currentScrollPos = window.scrollY;
//   if (navScroll > currentScrollPos) {
//     navBarPos.style.top = "0";
//   } else {
//     navBarPos.style.top = "-200px";
//   }
//   navScroll = currentScrollPos;
// };

let lasScroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY < lasScroll) {
    navbarr.style.top = 0;
  } else {
    navbarr.style.top = "-60px";
  }

  lasScroll = window.scrollX;
});
