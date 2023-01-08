$(function () {
  function showItem(type) {
    if (type === "signature") {
      $(".div1").show();
      $(".category-center-menu p.signature").show();
    } else {
      $(".div1").hide();
      $(".category-center-menu p.signature").hide();
    }

    if (type === "beverage") {
      $(".div2").show();
      $(".category-center-menu p.beverage").show();
    } else {
      $(".div2").hide();
      $(".category-center-menu p.beverage").hide();
    }

    if (type === "coffee") {
      $(".div3").show();
      $(".category-center-menu p.coffee").show();
    } else {
      $(".div3").hide();
      $(".category-center-menu p.coffee").hide();
    }

    if (type === "cookie") {
      $(".div4").show();
      $(".category-center-menu p.cookie").show();
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
