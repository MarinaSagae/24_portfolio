'use  strict';

// フェードイン画面読み込み
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $('.js-under').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass('is-underShow');
      }
    });
  });
});


// KV 赤帯の下から文字が出てくる
function BgFadeAnime(){
  let delay = 0;
  $('.bgextend').each(function(){ 
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      setTimeout(() =>{
          $(this).addClass('bgLRextend');
          $(this).find('.bgappearTrigger').addClass('bgappear');
      },delay)
      delay += 1500
    }
  }); 
}

$(window).on('load', function(){
  BgFadeAnime();
});


// 白座布団が出てくる
function whiteBox(){
  let delay = 0;
  $('.js-white-under').each(function(){ 
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      setTimeout(() =>{
          $(this).addClass('is-white-underShow');
      },delay)
      delay += 1000
    }
  }); 
}


// 各タイトル
function ScrollBgFadeAnime(){
  $('.js__title').each(function(){ 
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight ){
      $(this).addClass('bgLRextend');
      $(this).find('.ttl__appear').addClass('bgappear');
      $(this).on('animationend',() =>{
        setTimeout(() =>{
          $(this).next('.js__subtitle').addClass('bgLRextend');
          $(this).next('.js__subtitle').find('.ttl__appear').addClass('bgappear');
          $(this).next('.js__subtitle').on('animationend',()=>{
            $(this).parent('.title').find('.border').addClass('is-border')
          })
        },300)
      })
    }
  }); 
}


// 赤帯の下から画像が順番に出てくる
function BgFadeAnime2(){
  let delay = 0;
  $('.bgextend2').each(function(){ 
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      setTimeout(() =>{
          $(this).addClass('bgLRextend2');
          $(this).find('.bgappearTrigger2').addClass('bgappear2');
      },delay)
      delay += 300
    }
  }); 
}

$(window).scroll(function (){
  whiteBox();
  BgFadeAnime2();
  ScrollBgFadeAnime();
});


// スケジュールタイトル
// function ScrollBgFadeAnime2(){
//   $('.js__title3').each(function(){ 
//     // let elemPos = $(this).offset().top - 50;
//     // let scroll = $(window).scrollTop();
//     // let windowHeight = $(window).height();
//     // if (scroll >= elemPos - windowHeight ){
//       $(this).addClass('bgLRextend3');
//       $(this).find('.ttl__appear3').addClass('bgappear3');
//       $(this).on('animationend',() =>{
//         setTimeout(() =>{
//           $(this).next('.js__subtitle3').addClass('bgLRextend3');
//           $(this).next('.js__subtitle3').find('.ttl__appear3').addClass('bgappear3');
//           $(this).next('.js__subtitle3').on('animationend',()=>{
//             //  alert('OK');
//             setTimeout(() =>{
//               $(this).parent('.title').find('.border').addClass('is-border')
//             },800);
//           })
//         },300)
//       })
//     // }else{
//     //   $(this).removeClass('bgLRextend3');
//     // }
//   }); 
// }

// $(window).on('load', function(){
//   setTimeout(() =>{
//     ScrollBgFadeAnime2();
//   },3500);
// });