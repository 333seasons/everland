$(document).ready(function(){

  setInterval(function(){

    $('div.slide ul').animate({
      left: "-1920px"
    }, 1000, function(){
      $('div.slide ul').append($('div.slide ul li').eq(0));
      $('div.slide ul').css({left : 0});
    });

  },3000);
});


// swiper//
const swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼 요소명
    prevEl: '.swiper-button-prev', // 이전 버튼 요소명
  },
  // loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // autoplay: { // 자동슬라이드
  //   delay: 3000,
  //   disableOnInteraction:true,
  // }

});



//   swiper //
const swiper = new Swiper('.swiper', { // 프레임의 요소명
  direction: 'horizontal', // 스와이프의 방향
  loop: true, // 순환 여부
  // pagination: {
  //   el: '.swiper-pagination', // 페이지 메뉴의 요소명
  //   // type: 'fraction', // 페이지 버튼대신 슬라이드(숫자) 번호
  // },

  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼 요소명
    prevEl: '.swiper-button-prev', // 이전 버튼 요소명
  },

  spaceBetween: 0, // 패널 사이의 간격을 50px로 설정
  grabCursor : true, // 스와이프 시 마우스 포인터 모양 변경
  slidesPerView: 'auto', // css에 지정한 슬라이드 크기를 반영
  centeredSlides: true, // 슬라이더 패널을 항상 가운데로 반환
  speed: 1000, // 슬라이더 이동 속도 지정
  effect: 'coverflow', // 이펙트 효과
  coverflowEffect : {
    rotate: -30, // 회전각도
    stretch: -100, // 슬라이드 간의 당김 정도
    depth: 400, // 원근감 지정
    modifier: 1, // 중첩 정도 지정
    slideShadows: false // 슬라이드 그림자 생성
  },
  
  autoplay: { // 자동슬라이드
    delay: 1000,
    disableOnInteraction:true,
  }
});

const btnStart = document.querySelector('li.btnStart');
const btnStop = document.querySelector('li.btnStop');
console.log(btnStart,btnStop);

btnStart.addEventListener('click',function(){
  swiper.autoplay.start();
});
btnStop.addEventListener('click',function(){
  swiper.autoplay.stop();
});


// const swiper2 = new Swiper('.party', { // 프레임의 요소명
//   autoplay: true,
//   loop: true,
//   spaceBetween: 30,
//   slidesPerView: 5,
// });

