Splitting();

const mainImg = new Swiper("#main-visual .mask", {
  slidesPerView: 1,
  loop: true,
});

const categoryBox = new Swiper("#category .category-box .swiper", {
  slidesPerView: 3,
  spaceBetween: 50,

  breakpoints: {
    270: {
      spaceBetween: 10,
    },
    1280: {
      spaceBetween: 20,
    },
  },
});

$(".count-num").each(function () {
  const $this = $(this),
    countTo = $this.attr("data-count");

  $({
    countNum: $this.text(),
  }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      },
    }
  );
});

/**
 * menu 조작 이벤트 Start
 */
const header = $("#header");
const gnb = $("#gnb");
const btnTop = $(".btn-top");
const depth01 = $("#gnb .depth01");
const depth02 = $("#gnb .depth02");
const btnAll = $("#header .btn-all");

gnb.mouseenter(function () {
  if (!$(this).hasClass("mobile")) {
    $(this).addClass("on");
  }
});
gnb.mouseleave(function () {
  if (!$(this).hasClass("mobile")) {
    $(this).removeClass("on");
  }
});

depth01.on("click", function (e) {
  e.preventDefault();
  const depth02 = $(this).next();
  const siblings = $(this).parent().siblings().find(".depth02");
  const siblingsDepth01 = $(this).parent().siblings().find(".depth01");
  $(this).toggleClass("on");
  siblingsDepth01.removeClass("on");
  siblings.stop().slideUp();
  depth02.stop().slideToggle();
});

btnAll.on("click", function (e) {
  e.preventDefault();
  gnb.toggleClass("on");
  $(this).toggleClass("on");
  depth02.stop().delay(250).slideUp();
  $("#main").toggleClass("blur");
});

$(function () {
  function checkWidth() {
    if (window.innerWidth >= 1280) {
      gnb.removeClass("mobile");
      depth02.css("display", "");
    } else {
      gnb.addClass("mobile");
    }
  }

  $(window).resize(function () {
    checkWidth();
  });

  checkWidth();
});

/**
 *
 */
$(function () {
  var lastScrollTop = 0,
    delta = 15;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && lastScrollTop > 0) {
      $("#header").css("top", "-100px");
    } else {
      $("#header").css("top", "0px");
    }
    lastScrollTop = st;
  });
});

$(document).ready(function ($) {
  const popup = $(".popup");
  const popupClose = $(".popup01 .btn-close");
  const onedayPopup = $(".popup01 .btn-oneday");

  //최초 레이어팝업 노출
  if (!$.cookie("testCookie")) {
    popupShow();
  }

  //레이어팝업 닫기 버튼 클릭
  popupClose.on("click", function () {
    layerPopupHide(0);
  });

  //레이어팝업 오늘 하루 보지 않기 버튼 클릭
  onedayPopup.on("click", function () {
    layerPopupHide(1);
  });

  //레이어팝업 노출
  function popupShow() {
    popup.show();
  }
  //레이어팝업 비노출
  function layerPopupHide(state) {
    popup.hide();
    if (state === 1) {
      if ($.cookie("testCookie") == undefined) {
        $.cookie("testCookie", "Y", { expires: 1, path: "/" });
      }
    }
  }
});
btnTop.on("click", function () {
  gsap.to(window, { scrollTo: 0, duration: 1 });
});
