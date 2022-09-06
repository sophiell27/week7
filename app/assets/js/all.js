// const { current } = require("tailwindcss/colors");

// date picker 
// DatePicker
const elem = document.querySelector('input[name="inputDate"]');
if(elem){
const datepicker = new Datepicker(elem, {
  language: 'zh-TW',
  buttonClass: 'dateBtn',
});
// const elem = document.getElementById('foo');
// const rangepicker = new DateRangePicker(elem, {
//   // ...options
// });
}


$(document).ready(function () {


  //swiperOne
  var swiperOne = new Swiper('.swiperOne', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView: "auto",
    loopedSlides: 10,
    autoplay: true,
    autoplay: {
      delay: 100,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
  });

  // swiperTwo 
  var swiperTwo = new Swiper('.swiperTwo', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView: "auto",
    loopedSlides: 10,
    pagination: {
      el: '.studentPagination',
      clickable: true,
      bulletClass: 'studentPaginationBullet',
      bulletActiveClass: 'studentPaginationBullet-active',
    },
    navigation: {
      nextEl: '.studentSwiperPrev',
      prevEl: '.studentSwiperPrev',
    },
    autoplay: true,
    autoplay: {
      delay: 400,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  // swiperThree
  var swiperThree = new Swiper('.swiperThree', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView: "auto",
    loopedSlides: 10,
    pagination: {
      el: '.studentPagination',
      clickable: true,
      bulletClass: 'studentPaginationBullet',
      bulletActiveClass: 'studentPaginationBullet-active',
    },
    navigation: {
      nextEl: '.studentSwiperPrev',
      prevEl: '.studentSwiperPrev',
    },
    autoplay: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });



  // hamburger menu click to slide 
  $(".hamMenu").click(function () {
    $(".dropdownMenu").slideToggle();
  });

  // button active 

  $(".allCourses .btn").click(function () {
console.log("gg")
    $(this).addClass("btnActive");
    $(this).siblings().removeClass("btnActive");
  })

  // progress bar 

  $(".doneBtn1").click(function(){
    $(".doneBtn2").hide();
    $(".progressBtn2").show();
    $(".progressBar1").hide();
    $(".progressBar2").hide();
    $(".doneBtn3").hide();
    $(".progressBtn3").show();
    $(".progressText2").removeClass("text-neo-green").addClass("text-fog-light");
    $(".progressText3").removeClass("text-neo-green").addClass("text-fog-light");

    $(".paymentStepOne").show();
    $(".paymentStepTwo").hide();
    $(".paymentStepThree").hide();
  });

  $(".progressBtn2").click(function(){
    console.log("aa");
    $(this).hide();
    $(".doneBtn2").show();
    $(".progressBar1").show();
    $(".progressText2").removeClass("text-fog-light").addClass("text-neo-green");
    $(".progressText3").removeClass("text-neo-green").addClass("text-fog-light");
    $(".apply").show().parent().parent().siblings().hide();

    $(".paymentStepTwo").show();
    $(".paymentStepOne").hide();
    $(".paymentStepThree").hide();
  });

  $(".doneBtn2").click(function(){
    $(".doneBtn3").hide();
    $(".progressBar2").hide();
    $(".progressBtn3").show();
    $(".progressText2").removeClass("text-fog-light").addClass("text-neo-green");
    $(".progressText3").removeClass("text-neo-green").addClass("text-fog-light");
    $(".payment").show().parent().parent().siblings().hide();

    $(".paymentStepTwo").show();
    $(".paymentStepOne").hide();
    $(".paymentStepThree").hide();
  });

  $(".progressBtn3").click(function(){
    console.log("aa");
    $(this).hide();
    $(".progressBar1").show();
    $(".progressBar2").show();
    $(".progressBtn2").hide();
    $(".doneBtn2").show();
    $(".doneBtn3").show();
    $(".progressText3").removeClass("text-fog-light").addClass("text-neo-green");
    $(".progressText2").removeClass("text-fog-light").addClass("text-neo-green");

    $(".paymentStepThree").show();
    $(".paymentStepOne").hide();
    $(".paymentStepTwo").hide();
  });

  // application process 

   //to step2
  $(".toPayment").click(function(){
    $(".paymentStepTwo").show();
    $(".paymentStepOne").hide();
    $(".paymentStepThree").hide();

    $(".progressBtn2").hide();
    $(".doneBtn2").show();
    $(".progressBar1").show();
    $(".progressText2").removeClass("text-fog-light").addClass("text-neo-green");
    $(".progressText3").removeClass("text-neo-green").addClass("text-fog-light");
  })
       //to step3
  $(".toFinish").click(function(){
    $(".paymentStepThree").show();
    $(".paymentStepOne").hide();
    $(".paymentStepTwo").hide();

    $(".progressBtn2").hide();
    $(".doneBtn2").show();
    $(".progressBtn3").hide();
    $(".doneBtn3").show();
    $(".progressBar1").show();
    $(".progressBar2").show();
    $(".progressText2").removeClass("text-fog-light").addClass("text-neo-green");
    $(".progressText3").removeClass("text-fog-light").addClass("text-neo-green");

  })


  // payment method active 
  $(".method button").click(function () {
    $(this).addClass("btnActive").removeClass("border-white");
    $(this).siblings().removeClass("btnActive");
  })
  

}); 

