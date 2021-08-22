/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



});


    // Typing Effect on header

const carouselText = [
    {text: "Data scientist", color: "orange"},
    {text: "Web Developer", color: "orange"},
    {text: "a Friend", color: "orange"}
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



    // Typing Effect on Section


    const carouselText2 = [
      {text: "evaluate", color: "#e67e00"},
      {text: "personalize", color: "#e67e00"},
      {text: "create", color: "#e67e00"},
      {text: "develop", color: "#e67e00"}
    ]
    
    $( document ).ready(async function() {
      carousel2(carouselText2, "#feature-text2")
    });
    
    async function typesentence2(sentence2, eleRef2, delay = 100) {
      const letters = sentence2.split("");
      let i = 0;
      while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef2).append(letters[i]);
        i++
      }
      return;
    }
    
    async function deletesentence2(eleRef2) {
      const sentence2 = $(eleRef2).html();
      const letters = sentence2.split("");
      let i = 0;
      while(letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef2).html(letters.join(""));
      }
    }
    
    async function carousel2(carouselList2, eleRef2) {
        var i = 0;
        while(true) {
          updateFontColor(eleRef2, carouselList2[i].color)
          await typesentence2(carouselList2[i].text, eleRef2);
          await waitForMs(1500);
          await deletesentence2(eleRef2);
          await waitForMs(500);
          i++
          if(i >= carouselList2.length) {i = 0;}
        }
    }
    
    function updateFontColor(eleRef2, color) {
      $(eleRef2).css('color', color);
    }
    
    function waitForMs(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }



    // Project Popup


    function togglePopup1() {
      document.getElementById("popup-1").classList.toggle("active");
    }

    function togglePopup2() {
        document.getElementById("popup-2").classList.toggle("active");
      }

      function togglePopup3() {
        document.getElementById("popup-3").classList.toggle("active");
      }

      function togglePopup4() {
        document.getElementById("popup-4").classList.toggle("active");
      }

      function togglePopup5() {
        document.getElementById("popup-5").classList.toggle("active");
      }

      function togglePopup6() {
        document.getElementById("popup-6").classList.toggle("active");
      }

  



    var canvas = document.getElementById('nokey'),
    can_w = parseInt(canvas.getAttribute('width')),
    can_h = parseInt(canvas.getAttribute('height')),
    ctx = canvas.getContext('2d');
 
 // console.log(typeof can_w);
 
 var ball = {
       x: 0,
       y: 0,
       vx: 0,
       vy: 0,
       r: 0,
       alpha: 1,
       phase: 0
    },
    ball_color = {
        r: 207,
        g: 255,
        b: 4
    },
    R = 2,
    balls = [],
    alpha_f = 0.03,
    alpha_phase = 0,
     
 // Line
    link_line_width = 0.8,
    dis_limit = 260,
    add_mouse_point = true,
    mouse_in = false,
    mouse_ball = {
       x: 0,
       y: 0,
       vx: 0,
       vy: 0,
       r: 0,
       type: 'mouse'
    };
 
 // Random speed
 function getRandomSpeed(pos){
     var  min = -1,
        max = 1;
     switch(pos){
         case 'top':
             return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
             break;
         case 'right':
             return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
             break;
         case 'bottom':
             return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
             break;
         case 'left':
             return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
             break;
         default:
             return;
             break;
     }
 }
 function randomArrayItem(arr){
     return arr[Math.floor(Math.random() * arr.length)];
 }
 function randomNumFrom(min, max){
     return Math.random()*(max - min) + min;
 }
 console.log(randomNumFrom(0, 10));
 // Random Ball
 function getRandomBall(){
     var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
     switch(pos){
         case 'top':
             return {
                 x: randomSidePos(can_w),
                 y: -R,
                 vx: getRandomSpeed('top')[0],
                 vy: getRandomSpeed('top')[1],
                 r: R,
                 alpha: 1,
                 phase: randomNumFrom(0, 10)
             }
             break;
         case 'right':
             return {
                 x: can_w + R,
                 y: randomSidePos(can_h),
                 vx: getRandomSpeed('right')[0],
                 vy: getRandomSpeed('right')[1],
                 r: R,
                 alpha: 1,
                 phase: randomNumFrom(0, 10)
             }
             break;
         case 'bottom':
             return {
                 x: randomSidePos(can_w),
                 y: can_h + R,
                 vx: getRandomSpeed('bottom')[0],
                 vy: getRandomSpeed('bottom')[1],
                 r: R,
                 alpha: 1,
                 phase: randomNumFrom(0, 10)
             }
             break;
         case 'left':
             return {
                 x: -R,
                 y: randomSidePos(can_h),
                 vx: getRandomSpeed('left')[0],
                 vy: getRandomSpeed('left')[1],
                 r: R,
                 alpha: 1,
                 phase: randomNumFrom(0, 10)
             }
             break;
     }
 }
 function randomSidePos(length){
     return Math.ceil(Math.random() * length);
 }
 
 // Draw Ball
 function renderBalls(){
     Array.prototype.forEach.call(balls, function(b){
        if(!b.hasOwnProperty('type')){
            ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
            ctx.beginPath();
            ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill();
        }
     });
 }
 
 // Update balls
 function updateBalls(){
     var new_balls = [];
     Array.prototype.forEach.call(balls, function(b){
         b.x += b.vx;
         b.y += b.vy;
         
         if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
            new_balls.push(b);
         }
         
         // alpha change
         b.phase += alpha_f;
         b.alpha = Math.abs(Math.cos(b.phase));
         // console.log(b.alpha);
     });
     
     balls = new_balls.slice(0);
 }
 
 // loop alpha
 function loopAlphaInf(){
     
 }
 
 // Draw lines
 function renderLines(){
     var fraction, alpha;
     for (var i = 0; i < balls.length; i++) {
         for (var j = i + 1; j < balls.length; j++) {
            
            fraction = getDisOf(balls[i], balls[j]) / dis_limit;
             
            if(fraction < 1){
                alpha = (1 - fraction).toString();
 
                ctx.strokeStyle = 'rgba(150,150,150,'+alpha+')';
                ctx.lineWidth = link_line_width;
                
                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.stroke();
                ctx.closePath();
            }
         }
     }
 }
 
 // calculate distance between two points
 function getDisOf(b1, b2){
     var  delta_x = Math.abs(b1.x - b2.x),
        delta_y = Math.abs(b1.y - b2.y);
     
     return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
 }
 
 // add balls if there a little balls
 function addBallIfy(){
     if(balls.length < 20){
         balls.push(getRandomBall());
     }
 }
 
 // Render
 function render(){
     ctx.clearRect(0, 0, can_w, can_h);
     
     renderBalls();
     
     renderLines();
     
     updateBalls();
     
     addBallIfy();
     
     window.requestAnimationFrame(render);
 }
 
 // Init Balls
 function initBalls(num){
     for(var i = 1; i <= num; i++){
         balls.push({
             x: randomSidePos(can_w),
             y: randomSidePos(can_h),
             vx: getRandomSpeed('top')[0],
             vy: getRandomSpeed('top')[1],
             r: R,
             alpha: 1,
             phase: randomNumFrom(0, 10)
         });
     }
 }
 // Init Canvas
 function initCanvas(){
     canvas.setAttribute('width', window.innerWidth);
     canvas.setAttribute('height', window.innerHeight);
     
     can_w = parseInt(canvas.getAttribute('width'));
     can_h = parseInt(canvas.getAttribute('height'));
 }
 window.addEventListener('resize', function(e){
     console.log('Window Resize...');
     initCanvas();
 });
 
 function goMovie(){
     initCanvas();
     initBalls(30);
     window.requestAnimationFrame(render);
 }
 goMovie();
 
 // Mouse effect
 canvas.addEventListener('mouseenter', function(){
     console.log('mouseenter');
     mouse_in = true;
     balls.push(mouse_ball);
 });
 canvas.addEventListener('mouseleave', function(){
     console.log('mouseleave');
     mouse_in = false;
     var new_balls = [];
     Array.prototype.forEach.call(balls, function(b){
         if(!b.hasOwnProperty('type')){
             new_balls.push(b);
         }
     });
     balls = new_balls.slice(0);
 });
 canvas.addEventListener('mousemove', function(e){
     var e = e || window.event;
     mouse_ball.x = e.pageX;
     mouse_ball.y = e.pageY;
     // console.log(mouse_ball);
 });

 

 // Swiper


 var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


   // Activate submit button when all fields are filled

   $('#name, #email, #message').bind('keyup', function() {
    if(allFilled()) $('#submitButton').removeAttr('disabled');
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}


   // Filter for Projects


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("col-md-6");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)



