Splitting();

const mainImg = new Swiper("#main-visual .mask", {
  slidesPerView: 1,
  loop: true,
});

const categoryBox = new Swiper("#category .category-box .swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
});

// const pjSwiper = new Swiper("#projects .mask .banner", {
//   slidesPerView: 1,
//   spaceBetween: 50,
//   centeredSlides: true,
//   // autoplay: {
//   //   delay: 5000,
//   //   disableOnInteraction: false,
//   // },
//   loop: true,
//   loopAdditionalSlides: 1,
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//     },
//     1280: {
//       slidesPerView: 1,
//     },
//   },
//   pagination: {
//     el: ".projects-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: "#projects .btn-next",
//     prevEl: "#projects .btn-prev",
//   },
// });

// const skill = {
//   ui: 90,
//   illust: 95,
//   photoshop: 88,
//   figma: 89,
//   HTML5: 85,
//   css3: 80,
//   js: 70,
// };

// const myMarker = {
//   fontSize: 20,
//   indent: 20,
//   startColor: "#000",
//   endColor: "#00f",
// };
// gsap.defaults({ ease: "power4", duration: 1 });

// const skillTL = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#skills",
//     pin: true,
//     //pinSpacing: false,
//     scrub: 1.5,
//     // markers: myMarker,
//     start: "top top",
//     end: "bottom+=200% top",
//   },
// });
// skillTL.to("path", { strokeDashoffset: 0, duration: 5 }).from(skill, {
//   ui: 0,
//   illust: 0,
//   photoshop: 0,
//   figma: 0,
//   HTML5: 0,
//   css3: 0,
//   js: 0,
//   onUpdate: function () {
//     $("#skills .skill-txt:nth-child(2) .num .txt").text(Math.round(skill.ui));
//     $("#skills .skill-txt:nth-child(3) .num .txt").text(Math.round(skill.illust));
//     $("#skills .skill-txt:nth-child(4) .num .txt").text(Math.round(skill.photoshop));
//     $("#skills .skill-txt:nth-child(5) .num .txt").text(Math.round(skill.figma));
//     $("#skills .skill-txt:nth-child(6) .num .txt").text(Math.round(skill.HTML5));
//     $("#skills .skill-txt:nth-child(7) .num .txt").text(Math.round(skill.css3));
//     $("#skills .skill-txt:nth-child(8) .num .txt").text(Math.round(skill.js));
//   },
// });

const header = $("#header");
const gnb = $("#gnb");
const btnTop = $(".btn-top");

// btnTop.on("click", function () {
//   gsap.to(window, { scrollTo: 0, duration: 1 });
// });

// header.click(function () {
//   $(this).siblings().toggleClass("on");
// });

// const categoryBtn = $("#category .category-btn");

// categoryBtn.on("click", function () {
//   const leftBg = $("#category .left-bg");
//   const rightBg = $("#category category-title");
//   leftBg.show();
//   console.log(leftBg);
// });

$(function () {
  $(".category-btn").on("click", function () {
    $(".div1").toggle("show");
    $(".div2").toggle("show");
    $(".div3").toggle("show");
    $(".div4").toggle("show");
    if ($(".category-item").css("display") == "none") {
      $(".category-item").show();
    } else {
      $(".category-item").hide();
    }
  });
});
