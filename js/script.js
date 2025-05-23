$(document).ready(function () {
  /*********** fullpage효과 ***********/
  $("#fullpage").fullpage({
    autoScrolling: true,
    navigation: true,
    verticalCentered: true,
    menu: "#menu",

    afterLoad: function (anchorLink, index) {
      // section5 도달 → 애니메이션 실행
      if (index === 5) {
        $("#section5 .up p").addClass("animate");
      }

      // section1 도달 → section5 애니메이션 초기화
      if (index < 5) {
        const $text = $("#section5 .up p");
        $text.removeClass("animate");
        void $text[0].offsetWidth;
      }
    },
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
    items: 7,
    dots: false,
  });

  /*********** section4 ***********/
  $("#section4 .left li").eq(0).addClass("on");
  $("#section4 .right li").hide();
  $("#section4 .right li").eq(0).show();

  $("#section4 .left li").mouseenter(function () {
    const index = $(this).index();
    $("#section4 .left li").removeClass("on");
    $("#section4 .right li").hide();
    $(this).addClass("on");
    $("#section4 .right li").eq(index).show();
  });

  /*********** section6 figcaption ***********/
  $("#section6 p")
    .mouseenter(function () {
      $("#section6 figcaption").addClass("on");
    })
    .mouseleave(function () {
      $("#section6 figcaption").removeClass("on");
    });

  /*********** 끝 ***********/
});
