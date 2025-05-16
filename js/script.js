$(document).ready(function () {

    $('#fullpage').fullpage({
      verticalCentered: true,
      menu: '#menu',
    });


  console.log("JS 연결됨");

  $('nav').mouseenter(function () {
    console.log("nav에 마우스 올라감");
    $('.subMenuWrap').stop().slideDown(500);
  });

  $('nav').mouseleave(function () {
    console.log("nav에서 마우스 나감");
    $('.subMenuWrap').stop().slideUp(500);
  });
});
