$(document).ready(function () {
  /*********** fullpage효과 ***********/
  function initFullpage() {
    $("#fullpage").fullpage({
      autoScrolling: true,
      navigation: true,
      verticalCentered: true,
      menu: "#menu",

      afterLoad: function (anchorLink, index) {
        const winWidth = $(window).width(); // 현재 브라우저 너비

        if (winWidth > 980) {
          // ✅ 여기 안에서만 애니메이션 실행!
          if (index === 5) {
            $("#section5 .up p").addClass("animate");
          }

          if (index < 5) {
            const $text = $("#section5 .up p");
            $text.removeClass("animate");
            void $text[0].offsetWidth;
          }
        }
      },
    });
  }

  function toggleFullpage() {
    const winWidth = $(window).width();

    if (winWidth > 1024) {
      if (!$("#fullpage").hasClass("fullpage-enabled")) {
        $("#fullpage").addClass("fullpage-enabled");
        initFullpage(); // ✅ jQuery 방식 초기화
      }
    } else {
      if ($("#fullpage").hasClass("fullpage-enabled")) {
        // ✅ jQuery 방식 destroy
        $.fn.fullpage.destroy("all");
        $("#fullpage").removeClass("fullpage-enabled");
      }
    }
  }

  $(window).on("load resize", function () {
    toggleFullpage();
  });

  /*********** 마우스, nav ***********/
  function handleResponsiveUI() {
    const winWidth = $(window).width();

    if (winWidth > 980) {
      // ✅ 데스크탑 환경

      // === 커서 효과 활성화 ===
      const $cursor = $(".cursor-effect");
      $cursor.show(); // 혹시 숨겨졌던 경우 보이게

      // 기존 이벤트 제거 (중복 방지)
      $(window).off(".cursor");
      $("a").off(".cursor");

      $(window).on("mousemove.cursor", function (e) {
        $cursor.css({
          top: e.clientY + "px",
          left: e.clientX + "px",
        });
      });

      $("a").on("mouseenter.cursor", function () {
        $cursor.css({
          transform: "translate(-50%, -50%) scale(0.5)",
          transition: "transform 0.2s ease",
        });
      });

      $("a").on("mouseleave.cursor", function () {
        $cursor.css({
          transform: "translate(-50%, -50%) scale(1)",
          transition: "transform 0.2s ease",
        });
      });

      // === 메뉴 hover 이벤트 활성화 ===
      $("nav").off(".menu"); // 중복 방지
      $("nav").on("mouseenter.menu", function () {
        $(".subMenuWrap").stop().slideDown(500);
      });
      $("nav").on("mouseleave.menu", function () {
        $(".subMenuWrap").stop().slideUp(500);
      });

      // 화면 크기 변경 시 항상 footer 상태 초기화
      $("footer .infolist h3").off("click");
      $("footer .infolist ul")
        .stop()
        .removeClass("on")
        .removeAttr("style"); // jQuery로 적용된 모든 스타일 제거
      $("footer .infolist h3").removeClass("on");

    } else {
      // === 커서 효과 제거 ===
      $(".cursor-effect").hide();
      $(window).off(".cursor");
      $("a").off(".cursor");

      // === 메뉴 hover 제거 ===
      $("nav").off(".menu");
      $(".subMenuWrap").hide();

      // footer
      $("footer .infolist h3").on("click", function (e) {
        // 터치/클릭 영역 확장을 위해 전체 h3 영역에서 클릭 감지
        e.preventDefault();

        const $targetUl = $(this).siblings("ul");
        const isOpen = $targetUl.hasClass("on");

        // 전체 초기화
        $("footer .infolist ul").stop().slideUp(300).removeClass("on");
        $("footer .infolist h3").removeClass("on");

        if (!isOpen) {
          // 열기
          $targetUl.stop().slideDown(300).addClass("on");
          $(this).addClass("on"); // 아이콘 전환용
        }
      });

    }
  }

  // ✅ 페이지 로드 & 리사이즈 시 실행
  $(window).on("load resize", handleResponsiveUI);

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
