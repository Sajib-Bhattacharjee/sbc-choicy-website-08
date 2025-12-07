/*

   Template Name: Choicy - Digital Marketing Agency HTML Template
   Description: Choicy is a beautifully handcrafted, pixel perfect Digital Marketing Agency HTMLtemplate & designed with great attention to details, flexibility and performance.
   Author: https://themexriver.com/
   Version: 1.0


*/


(function ($) {
"use strict";


/* 
	preloader-function
*/
let preloader = document.querySelector("#preloader");
	window.addEventListener('load', function(){
		preloader.classList.add("preloaded");
		setTimeout(function () {
            preloader.remove();
          },1000);
})


/* 
	mobile-menu-function
*/
if($('.mobile-main-navigation li.dropdown ul').length){
	$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
	$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}
$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});

/* 
	sticky-header-function
*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 300){
	$('.header_sticky').addClass('sticky');
	}
	else{
	$('.header_sticky').removeClass('sticky');
	}
});

/* 
	search-popup-function
*/
$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})

/* 
	services-1-slider-activation
*/
var services1 = new Swiper('.gto_services_1_active', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 5000,
		},
	navigation: {
		nextEl: ".gto_services_1_next",
		prevEl: ".gto_services_1_prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});

/* 
	price-1-slider-activation
*/
let price1 = new Swiper('.chy_price_1_active', {
	loop: true,
	spaceBetween: 0,
	speed: 800,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	autoplay: {
		delay: 5000,
		},
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: ".chy-price-1-pagination",
		clickable: true
		},
	navigation: {
		nextEl: ".chy_price_1_next",
		prevEl: ".chy_price_1_prev",
	},
});


/* 
	project-1-slider-activation
*/
if (jQuery(".chy_project_1_active").length > 0) {
	let swiperrecent = new Swiper('.chy_project_1_active', {
		slidesPerView: 3,
		spaceBetween: 0,
		loop: true,
		centeredSlides: true,
		rtl: false,
		infinite: false,
		grabCursor: true,
		speed: 800,
		autoplay: {
			delay: 5000,
			},
		// If we need pagination
		navigation: {
			nextEl: ".chy_project_1_next",
			prevEl: ".chy_project_1_prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 4,
			},
		}

	});
}	  


/* 
	team-1-slider-activation
*/
let teamslider1 = new Swiper('.chy_team_slider_1_active', {
	loop: true,
	spaceBetween: 0,
	speed: 500,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	autoplay: {
		delay: 5000,
		},
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: ".chy-team-slider-1-pagination",
		clickable: true
	  },

});


/* 
	hero-2-slider-activation
*/
$( window ).on( "load", function() {
	let chyhero2 = new Swiper('.chy_hero_2_active', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		rtl: false,
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 5000,
			},
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: ".chy_hero_2_next",
			prevEl: ".chy_hero_2_prev",
		},
	});
});



/* 
	trusted-2-slider-activation
*/
var trusted2 = new Swiper('.chy_trusted_2_active', {
	loop: true,
	speed: 1000,
	spaceBetween: 15,
	autoplay: {
		delay: 5000,
		},
	pagination: {
		el: ".chy-trusted-2-pagination",
		clickable: true
		},
	
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 2,
		},
	},
});


/* 
	portfolio-2-slider-activation
*/
if (jQuery(".chy_portfolio_2_active").length > 0) {
	let swiperrecent = new Swiper('.chy_portfolio_2_active', {
		// slidesPerView: 3,
		spaceBetween: 0,
		loop: true,
		// centeredSlides: true,
		rtl: false,
		infinite: false,
		grabCursor: true,
		speed: 800,
		autoplay: {
			delay: 5000,
			},
		pagination: {
			el: ".chy-portfolio-2-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 4,
			},
		}

	});
}	  


/* 
	price-2-slider-activation
*/
let chyprice2 = new Swiper('.chy_price_2_active', {
	loop: true,
	spaceBetween: 0,
	speed: 500,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	autoplay: {
		delay: 5000,
		},
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: ".chy_price_2_next",
		prevEl: ".chy_price_2_prev",
	},
});


/* 
	testimonial-2-slider-activation
*/
let chytestimonial2 = new Swiper('.chy_testimonial_2_active', {
	loop: true,
	spaceBetween: 0,
	speed: 500,
	rtl: false,
	autoplay: {
		delay: 5000,
	},

	pagination: {
		el: ".chy-testimonial-2-pagination",
		clickable: true
	},
});


/* 
	project-3-slider-activation
*/
var project3 = new Swiper('.chy_project_3_active', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 5000,
		},
	navigation: {
		nextEl: ".chy_project_3_next",
		prevEl: ".chy_project_3_prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},
});


/* 
	testimonial-4-slider-activation
*/
let testimonial4 = new Swiper('.chy_testimonial_4_active', {
	loop: true,
	spaceBetween: 0,
	speed: 500,
	rtl: false,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: ".chy_testimonial_4_next",
		prevEl: ".chy_testimonial_4_prev",
	},
});


/* 
	testimonial-5-slider-activation
*/
let chyt5_thumb = new Swiper('.chy_t5_preview_active', {
	spaceBetween: 30,
	loop: false,
	speed: 1000,
	slidesPerView: 3,
	direction: 'vertical',
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,	
	
	breakpoints: {
		320: {
		slidesPerView: 2,
		direction: 'horizontal',
		},
		576: {
		slidesPerView: 3,
		direction: 'horizontal',
		},
		768: {
		slidesPerView: 3,
		direction: 'horizontal',

		},
		992: {
		slidesPerView: 3,
		direction: 'horizontal',
		},
		1200: {
		slidesPerView: 3,
		direction: 'horizontal',
		},
		1400: {
		slidesPerView: 3,
		direction: 'horizontal',
		},
		1600: {
		slidesPerView: 3,
		direction: 'vertical',
		},

	}
	});

	let chyt5 = new Swiper('.chy_testimonial_5_active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	autoplay: {
		delay: 40000000,
		},
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: chyt5_thumb,
	},
});


/* 
	popup-video-activation
*/
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/* 
	popup-image-activation
*/
$('.popup_img').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true,
	},
});


/* 
	counter-activation
*/
$('.counter').counterUp({
	delay: 10,
	time: 3000
});


/* 
	data-background-activation
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

/* 
	data-width-activation
*/
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})


/* 
	data-background-color-activation
*/
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})


/* 
	scrolling-active-class-add
*/
gsap.registerPlugin(ScrollTrigger);

$(window).on('load',function(){
	const boxes = gsap.utils.toArray('.chy-class-add');
	boxes.forEach(img => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				scrub: 1,
				start: "top 80%",
				end: "bottom bottom",
				toggleClass: "active",
				toggleActions: "play none none reverse",
				once: true,
			}
		});
	});
})



/* 
	trusted-1-animation
*/
gsap.utils.toArray('.chy-trusted-1-wrap').forEach((el, index) => { 
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: el,
	  scrub: 1,
      start: "top 80%",
	  end: "buttom 60%",
      toggleActions: "play none none reverse",
       markers: false
    }
  })
  
  tl1
  .set(el, {transformOrigin: 'center center'})
  .from(el, { background: "#fff", scale: .8 }, {background: "inherit", scale: 1, duration: 1, immediateRender: false})
})


/* 
	slide-up-animation
*/
gsap.utils.toArray(' .asslideupcta').forEach((el, index) => { 
	let tlcta = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "top 70%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1,  y: "+=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
  })
  

  

/* 
	scale-animation
*/
gsap.utils.toArray('.rotatedscal').forEach((el, index) => { 
	let tl3 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl3
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, rotateZ: 45, scale: 0.5, y: "+=100"}, {opacity: 1,  rotateZ: 0, scale: 1, y: 0, duration: 1, immediateRender: false})
  })


/* 
	slide-in-left-animation
*/
gsap.utils.toArray('.chy-slideinleft').forEach((el, index) => { 
	let tl3 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl3
	.set(el, {transformOrigin: 'center center'})
	.from(el, { x: "-=100"}, { x:0, duration: 1, immediateRender: false})
  })


/* 
	slide-in-right-animation
*/
gsap.utils.toArray('.chy-slideinright').forEach((el, index) => { 
	let tl4 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl4
	.set(el, {transformOrigin: 'center center'})
	.from(el, { x: "+=100"}, { x:0, duration: 1, immediateRender: false})
  })


/* 
	slide-in-up-animation
*/
gsap.utils.toArray('.chy-slideinup').forEach((el, index) => { 
	let tl4 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 85%",
		end: "buttom 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl4
	.set(el, {transformOrigin: 'center center'})
	.from(el, { y: "+=100"}, { y:0, duration: 1, immediateRender: false})
  })



/* 
	zoom-out-animation
*/
gsap.utils.toArray('.chy-zoomout').forEach((el, index) => { 
	let tl6 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 85%",
		end: "buttom 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl6
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { scale: 1}, { scale: 0, duration: 1, immediateRender: false})
  })


/* 
	zoom-out-2-animation
*/
gsap.utils.toArray('.chy-zoomout2').forEach((el, index) => { 
	let tl6 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 85%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl6
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { scale: 2}, { scale: 1, duration: 1, immediateRender: false})
  })


/* 
	zoom-out-3-animation
*/
gsap.utils.toArray('.chy-zoomout3').forEach((el, index) => { 
	let tl6 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 85%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl6
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { scale: 1.5}, { scale: 1, duration: 1, immediateRender: false})
  })


/* 
	color-change-animation
*/
gsap.utils.toArray('.chyf2cc').forEach((el, index) => { 
	let tl6 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 70%",
		end: "buttom 40%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl6
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { color: "#FF4040"}, { color: "#fff", duration: 1, immediateRender: false})
  })


/* 
	testimonial-1-animation
*/
gsap.utils.toArray('.chyt1cc').forEach((el, index) => { 
	let tl6 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 70%",
		end: "buttom 40%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl6
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { backgroundColor: "#6733E8"}, { backgroundColor: "#EDDFFF", duration: 1, immediateRender: false})
  })


/* 
	rotated-animation
*/
gsap.utils.toArray('.chyroted').forEach((el, index) => { 
	let tl6 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 3,
		start: "top 70%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl6
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { rotateZ: 360, }, { rotateZ: 0, duration: 1, immediateRender: false})
  })



/* 
	clip-path-animation
*/
gsap.utils.toArray('.chyclip').forEach((el, index) => { 
	let tl6 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 2,
		start: "top 80%",
		end: "top 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl6
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { clipPath: "polygon(30% 0, 70% 0, 70% 100%, 30% 100%)" }, { clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)", duration: 1, immediateRender: false})
  })


/* 
	scale-1-animation
*/
gsap.utils.toArray('.chyScl').forEach((el, index) => { 
	let chyScl = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 95%",
		end: "top 70%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	chyScl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { scale: .8 }, { scale: 1, duration: .5, immediateRender: false})
  })


/* 
	about-4-animation
*/
gsap.utils.toArray('.chy-about-4-img .bg-color').forEach((el, index) => { 
	let chyScl = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 95%",
		end: "top 70%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	chyScl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { scale: 1.3 , backgroundColor: "#C8AEFF" }, { backgroundColor: "#F4EFFF", scale: 1, duration: .5, immediateRender: false})
  })


/* 
	project-4-bg-animation
*/
gsap.utils.toArray('.chy-project-4-area .bg-img').forEach((el, index) => { 
	let chyScl = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	chyScl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { xPercent: -100  }, { xPercent: 0, duration: .5, immediateRender: false})
  })



/* 
	project-4-animation
*/
gsap.utils.toArray('.chy-project-4-area .bg-color').forEach((el, index) => { 
	let chyScl = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	chyScl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { xPercent: 100  }, { xPercent: 0, duration: .5, immediateRender: false})
  })



/* 
	solution-4-animation
*/
gsap.utils.toArray('.chy-solution-4-img .bg-color').forEach((el, index) => { 
	let chyScl = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 95%",
		end: "top 70%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	chyScl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { scale: 1.3 , backgroundColor: "#C8AEFF" }, { backgroundColor: "#F4EFFF", scale: 1, duration: .5, immediateRender: false})
  })



/* 
	cta-5-animation
*/
gsap.utils.toArray('.chy-cta-5-area').forEach((el, index) => { 
	let chyScl = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 95%",
		end: "top 70%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	chyScl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { scale:0  }, { scale:1 , duration: .5, immediateRender: false})
  })



/* 
	footer-4-animation
*/
gsap.utils.toArray('.chy-footer-4-il-img').forEach((el, index) => { 
	let chyScl = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 2,
		start: "top 80%",
		end: "top 70%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	chyScl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, { xPercent: -100  }, { xPercent:0 , duration: 1, immediateRender: false})
  })




/* 
	offcanvas-animation
*/
var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")

var menuBar = gsap.timeline();

menuBar.to('.chy-menu-btn-1 ' , .5, {
	background: "#6F9EDE"
}, 'start')

menuBar.reverse();

var menubgline = gsap.timeline({ paused: true });

menubgline.to('.fullpage-menu' , {
	duration: 0,
	display: "block",
	ease: 'Expo.easeInOut'
});
menubgline.to('.menu-bg span' , {
	duration: .5,
	width: "100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.menu-logo' , {
	x: 0,
	opacity: 1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.mobile-main-navigation , .mobile-search-bar' , {
	opacity: 1,
	y: 0,
	ease: 'Expo.easeInOut'
});

menubgline.to('.fullpage-menu-gellary .item' , {
	duration: 0,
	opacity: 1,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

menubgline.to('.full-page-socail-link li' , {
	opacity: 1,
	y: 1,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.fullpage-menu-close' , {
	duration: 0,
	x: 0,
	rotate: 0,
	opacity: 1,
	ease: 'Expo.easeInOut'
});


menubgline.reverse();

menuToggle.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	menubgline.reversed(!menubgline.reversed());
});

menuToggle2.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	menubgline.reversed(!menubgline.reversed());
});



/* 
	section-title-1-animation
*/
$(window).on('load',function(){
	var st = $(".chy-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
	  el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
	  });
	  gsap.set(el, { perspective: 400 });
	
	
	  if( $(el).hasClass('chy-split-in-right') ){
		gsap.set(el.split.chars, {
		  opacity: 1,
		  color:'#A249ED',
		  x: "50",
		  ease: "Back.easeOut",
		});
	  }
	  if( $(el).hasClass('chy-split-in-right-2') ){
		gsap.set(el.split.chars, {
		  opacity: 1,
		  color:'#ee4619',
		  x: "50",
		  ease: "Back.easeOut",
		});
	  }
	
	  el.anim = gsap.to(el.split.chars, {
		scrollTrigger: {
		  trigger: el,
		  start: "top 90%",
		},
		x: "0",
		y: "0",
		rotateX: "0",
		color: 'inherit',
		webkitTextStroke: "0px white",
		scale: 1,
		opacity: 1,
		duration: 1, 
		stagger: 0.02,
	  });
	});
})


/* 
	section-title-2-animation
*/
$(window).on('load',function(){
	var st = $(".chy-split-text-2");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
	  el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
	  });
	  gsap.set(el, { perspective: 400 });
	
	
	  if( $(el).hasClass('chy-split-in-hero-1') ){
		gsap.set(el.split.chars, {
		  opacity: 1,
		  color:'#a249ed',
		  x: "100",
		  ease: "Back.easeOut",
		});
	  }
	  
	  el.anim = gsap.to(el.split.chars, {
		scrollTrigger: {
		  trigger: el,
		  start: "top 90%",
		},
		x: "0",
		y: "0",
		rotateX: "0",
		color: 'inherit',
		webkitTextStroke: "0px white",
		scale: 1,
		opacity: 1,
		duration: 1, 
		stagger: 0.02,
		delay:1,
	  });
	});
})


/* 
	section-title-3-animation
*/
$(window).on('load',function(){
	var st = $(".chy-split-text-4");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
	  el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
	  });
	  gsap.set(el, { perspective: 400 });
	
	
	  if( $(el).hasClass('chy-split-in-hero-4') ){
		gsap.set(el.split.chars, {
		  opacity: 1,
		  color:'#a249ed',
		  x: "100",
		  ease: "Back.easeOut",
		});
	  }
	  
	  el.anim = gsap.to(el.split.chars, {
		scrollTrigger: {
		  trigger: el,
		  start: "top 90%",
		},
		x: "0",
		y: "0",
		rotateX: "0",
		color: 'inherit',
		webkitTextStroke: "0px white",
		scale: 1,
		opacity: 1,
		duration: 1, 
		stagger: 0.02,
		delay:1,
	  });
	});
})


/* 
	price-1-shape
*/
let xSetter = gsap.quickSetter(".chy_price_1_next", "x", "px") //apply it to the #id element's x property and append a "px" unit
let ySetter = gsap.quickSetter(".chy_price_1_next", "y", "px") //apply it to the #id element's x property and append a "px" unit

window.addEventListener("mousemove", e => {  
	xSetter(e.x)
	ySetter(e.y)
});


/* 
	knob-activation
*/
if (typeof ($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
		var $this = $(this),
			knobVal = $this.attr('data-rel');

		$this.knob({
			'draw': function () {
				$(this.i).val(this.cv + '%')
			}
		});

		$this.appear(function () {
			$({
				value: 0
			}).animate({
				value: knobVal
			}, {
				duration: 2000,
				easing: 'swing',
				step: function () {
					$this.val(Math.ceil(this.value)).trigger('change');
				}
			});
		}, {
			accX: 0,
			accY: -150
		});
	});
}


/* 
	nice-selector-activation
*/
$('.nice-select select').niceSelect();


/* 
	js-marquee-1-activation
*/  
$('.js-marquee-wrapper').marquee({
	speed: 100,
	gap: 30,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
	startVisible:true,
  })

/* 
	js-marquee-2-activation
*/    
$('.js-marquee-wrapper2').marquee({
	speed: 100,
	gap: 30,
	delayBeforeStart: 0,
	direction: 'right',
	duplicated: true,
	pauseOnHover: true,
	startVisible:true,
})


/* 
	price-card-1-hover-active-class
*/  
$(".chy-price-card-1-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("chy-price-card-1-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });


/* 
	testimonial-3-hover-active-class
*/  
$(".chy-testimonial-3-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("chy-testimonial-3-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });


/* 
	price-item-3-hover-active-class
*/  
$(".chy-price-3-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("chy-price-3-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });


/* 
	services-4-hover-active-class
*/  
$(".chy-services-4-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("chy-services-4-item  active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });


/* 
	mouse-move-animation
*/  
document.addEventListener("mousemove" , parallax);
function parallax(e){

	document.querySelectorAll(".object").forEach(function(move){

		var moving_value = move.getAttribute("data-value");
		var x = (e.clientX * moving_value) /250;
		var y = (e.clientY * moving_value) /250;

		move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
	})

}



/* 
	tilt-activation
*/  
$('.tilt_scale').tilt({
    glare: true,
    maxGlare: .5
})


/* 
	back-to-top-function
*/  
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* 
	wow-activation
*/ 
new WOW().init();


})(jQuery);