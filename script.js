$(document).ready(function () {
    $("#autoWidth").lightSlider({
      adaptiveHeight: true,
      auto: false,   /* "auto"kalau mau otomatis slider */
      item: 1,
      slideMargin: 0,
      loop: true,
    });
});
  
  const navbarHome = document.querySelector(".navbarHome");
  
  window.addEventListener("scroll", () => {
    const post = window.scrollY > 100;
  
    navbarHome.classList.toggle("scroll", post);
});
  