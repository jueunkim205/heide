$(document).ready(function () {
  /*********** fullpage효과 ***********/
  $("#fullpage").fullpage({
    verticalCentered: true,
    menu: "#menu",
  });

  /*********** 마우스 ***********/
  const $cursor = $(".cursor-effect");

  // 마우스 따라다니는 기본 동작
  $(window).on("mousemove", function (e) {
    $cursor.css({
      top: e.clientY + "px",
      left: e.clientX + "px",
    });
  });

  // 🔽 a 태그에 마우스 올라갔을 때 커서 작아지기
  $("a").on("mouseenter", function () {
    $cursor.css({
      transform: "translate(-50%, -50%) scale(0.5)", // 크기 줄이기
      transition: "transform 0.2s ease", // 부드럽게
    });
  });

  // 🔼 a 태그에서 마우스 나갔을 때 다시 원래 크기로
  $("a").on("mouseleave", function () {
    $cursor.css({
      transform: "translate(-50%, -50%) scale(1)",
      transition: "transform 0.2s ease",
    });
  });

  /*********** header ***********/
  $("nav").mouseenter(function () {
    $(".subMenuWrap").stop().slideDown(500);
  });

  $("nav").mouseleave(function () {
    $(".subMenuWrap").stop().slideUp(500);
  });

  /*********** section2 owl slide ***********/
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoWidth: true,
    items: 10,
    dots: false,
  });

  /*********** section2 owl slide ***********/
  $('#section4 .left li').eq(0).addClass('on');;
  $('#section4 .right li').eq(0).show();

  $('#section4 .left li').mouseenter(function(){
    const index = $(this).index();
    $('#section4 .left li').removeClass('on');
    $('#section4 .right li').hide();
    $(this).addClass('on')
    $('#section4 .right li').eq(index).show();
  })
});
