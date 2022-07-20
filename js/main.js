var swiper = new Swiper(".banner", {
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      }, 
    delay:1000,
    navigation: {
      nextEl: ".banner .swiper-button-next",
      prevEl: ".banner .swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
});


var swiper2 = new Swiper(".p_swiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 25,
  loop: true,
  loopFillGroupWithBlank: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    nextEl: ".p_next",
    prevEl: ".p_prev"
  }
});

var swiper2 = new Swiper(".c_swiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 25,
  loop: true,
  loopFillGroupWithBlank: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    nextEl: ".c_next",
    prevEl: ".c_prev"
  }
});

/*
$(document).on('mouseover', 'nav > ul', function (){
  $('.sub').stop().slideDown(200);
  $('.sub_shadow').stop().slideDown(200);
  });
$(document).on('mouseover', 'nav > ul', function (){
  if (!$(this).hasClass('nav > ul')) {
  $('.sub').stop().slideUp(200);
  $('.sub_shadow').stop().slideUp(200);
}});
*/


  //서브메뉴 부분이 슬라이드 다운
  $('nav > ul > li').mouseenter(function(){
    console.log("마우스 올림!!");
      $('.sub').stop().slideDown(400);
      $('.sub_shadow').stop().slideDown(300);
    });
  $('nav > ul').mouseleave(function(){
      $('.sub').stop().slideUp(300);
      $('.sub_shadow').stop().slideUp(200);
    });
