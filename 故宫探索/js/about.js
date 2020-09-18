$(function () {
  $(".user").hover(function () {
    $(".login").toggle();
  });
  $(".lang").hover(function () {
    $(".lang_select").toggle();
  });
  $(".search").click(function (e) {
    $(".search_input").show();
    e.stopPropagation();
  });
  $(document).click(function () {
    $(".search_input").hide();
  });
  $(".menu").click(function () {
    $(".big_menu").show();
  });
  $(".big_menu .close_btn").click(function () {
    $(".big_menu").hide();
  });
  $(window).scroll(function () {
    $(".big_menu").css("position", "fixed");
  });
  //中间导航栏
  var $nav_lis = $(".nav_main ul li");
  var $child_items = $(".nav_child .child_item");
  var $sanjiao = $(".nav_main .sanjiao");
  $nav_lis.mouseenter(function () {
    var index = $(this).index();
    if (index > 0) {
      $(this).children(".sanjiao").show();
      $(this).siblings().children(".sanjiao").hide();
      $child_items
        .eq(index - 1)
        .stop()
        .slideDown()
        .siblings()
        .hide();
      var $child_p = $child_items.eq(index - 1).children(".p");
      var child_marginLeft = $(this).offset().left - $child_p.width() / 3;
      $child_p.css("marginLeft", child_marginLeft);
    }
  });
  $nav_lis.mouseleave(function () {
    $sanjiao.hide();
    $child_items.hide();
  });
  $child_items.mouseenter(function () {
    $sanjiao.eq($(this).index()).show();
    $(this).show();
  });
  $child_items.mouseleave(function () {
    $sanjiao.hide();
    $child_items.hide();
  });
});

// 第四模块转盘
