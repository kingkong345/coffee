$(function () {
  function showItem(type) {
    if (type === "signature") {
      $(".div1").show();
      $(".category-center-menu p.signature").show();
      $(".left-bg .bg-item.signature-bg").show();
    } else {
      $(".div1").hide();
      $(".category-center-menu p.signature").hide();
      $(".left-bg .bg-item.signature-bg").hide();
    }
    if (type === "beverage") {
      $(".div2").show();
      $(".category-center-menu p.beverage").show();
      $(".left-bg .bg-item.beverage-bg").show();
    } else {
      $(".div2").hide();
      $(".category-center-menu p.beverage").hide();
      $(".left-bg .bg-item.beverage-bg").hide();
    }

    if (type === "coffee") {
      $(".div3").show();
      $(".category-center-menu p.coffee").show();
      $(".left-bg .bg-item.coffee-bg").show();
    } else {
      $(".div3").hide();
      $(".category-center-menu p.coffee").hide();
      $(".left-bg .bg-item.coffee-bg").hide();
    }

    if (type === "cookie") {
      $(".div4").show();
      $(".category-center-menu p.cookie").show();
      $(".left-bg .bg-item.cookie-bg").show();
    } else {
      $(".div4").hide();
      $(".category-center-menu p.cookie").hide();
      $(".left-bg .bg-item.cookie-bg").hide();
    }
  }

  showItem("signature");
  $("#category button.signature").on("click", function () {
    showItem("signature");
  });

  $("#category button.beverage").on("click", function () {
    showItem("beverage");
  });

  $("#category button.coffee").on("click", function () {
    showItem("coffee");
  });

  $("#category button.cookie").on("click", function () {
    showItem("cookie");
  });
});

$("#category .category-btn .category-btn-list button").click(function () {
  if ($(this).hasClass("active")) {
    $("#category .category-btn .category-btn-list button").removeClass("active");
  } else {
    $("#category .category-btn .category-btn-list button").removeClass("active");
    $(this).addClass("active");
  }
});
