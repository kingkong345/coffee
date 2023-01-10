$(function () {
  function showItem(type) {
    $("#category .category-btn .category-btn-list button").removeClass("active");
    $("#category .left-bg .bg-item").removeClass("is-active");
    $(".left-bg .bg-item").css("z-index", 0);

    if (type === "signature") {
      $(".div1").show();
      $(".category-center-menu p.signature").show();
      $(".left-bg .bg-item.cookie-bg").css("z-index", 1);
      $(".left-bg .bg-item.signature-bg").addClass("is-active").css("z-index", 2);
      $(".category-btn button.signature").addClass("active");
    } else {
      $(".div1").hide();
      $(".category-center-menu p.signature").hide();
    }
    if (type === "beverage") {
      $(".div2").show();
      $(".category-center-menu p.beverage").show();
      $(".left-bg .bg-item.signature-bg").css("z-index", 1);
      $(".left-bg .bg-item.beverage-bg").addClass("is-active").css("z-index", 2);
      $(".category-btn button.beverage").addClass("active");
    } else {
      $(".div2").hide();
      $(".category-center-menu p.beverage").hide();
    }

    if (type === "coffee") {
      $(".div3").show();
      $(".category-center-menu p.coffee").show();
      $(".left-bg .bg-item.beverage-bg").css("z-index", 1);
      $(".left-bg .bg-item.coffee-bg").addClass("is-active").css("z-index", 2);
      $(".category-btn button.coffee").addClass("active");
    } else {
      $(".div3").hide();
      $(".category-center-menu p.coffee").hide();
    }

    if (type === "cookie") {
      $(".div4").show();
      $(".category-center-menu p.cookie").show();
      $(".left-bg .bg-item.coffee-bg").css("z-index", 1);
      $(".left-bg .bg-item.cookie-bg").addClass("is-active").css("z-index", 2);
      $(".category-btn button.cookie").addClass("active");
    } else {
      $(".div4").hide();
      $(".category-center-menu p.cookie").hide();
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
