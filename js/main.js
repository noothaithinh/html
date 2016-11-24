$(document).ready(function(){

// Mobile actions
	// Search menu
	$('.mobile-search-icon').click(function(){
		$("body").toggleClass('disable-scrolling');
		$('#mobile-searchbox').toggle();
		$('.overlay').toggle();
	})
	$('.sprite-close-button-white').click(function(){
		$("body").toggleClass('disable-scrolling');
		$('#mobile-searchbox').toggle();
		$('.overlay').toggle();
	})
	// Mobile nav
	$('.nav-icon-menu').click(function(){
		$("body").removeClass('disable-scrolling');
		$('#mobile-searchbox').hide();
		$('.overlay').hide();
		$("body").toggleClass('menu-open');
	})
	$('#mobile-nav .bf-mobile-nav-link-list a').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('up');
		$(this).toggleClass('opened');
		$(this).next().children().toggle();
	})
	// Footer accordion
	$('.mz-pagefooter h3').click(function(){
		$(this).toggleClass('close');
		$(this).nextAll('p').slideToggle();
	})

// Listing filters
	$('.cf_list li a').click(function(e){
		e.preventDefault();
		var $checkbox = $(this).find(':checkbox');
		$checkbox.attr('checked', !$checkbox.attr('checked'));
	})

// Product actions
	// Size and button
	$('.size_bl ul li a').click(function(e){
		e.preventDefault();
		$('.size_bl ul li a').removeClass('active');
		$(this).addClass('active');
		$('.hurry').show();
	})
	$('.product_desrip .add_to_bag').hover(
		function(){ 
			if(!$('.size_bl ul li a').hasClass('active')) {
				$(this).html('Please Select A Size');
			}
		},
      	function(){ $(this).html('add to bag')}
      );
	// Bottom accordion
	$('.product_fulldescr h4').click(function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	})
	// SEO tabs
	$('.also_like').click(function(){
		$('.recently_view').removeClass('active');
		$(this).addClass('active');
		$('#recently_view').hide().removeClass('open');
		$('#also_like').fadeIn();
	})
	$('.recently_view').click(function(){
		$('.also_like').removeClass('active');
		$(this).addClass('active');
		$('#also_like').hide();
		$('#recently_view').addClass('open').fadeIn();
	})

// Registration form validate
	$('.sing_in_acc input').blur(function() {
    	if($(this).val() == '') {
    		$('.sign_em').show();
    	} else{
    		$('.sign_em').hide();
    	}
    });
    $('.new_customer input').blur(function() {
    	if($(this).val() == '') {
    		$('.new_cust_em').show();
    	} else{
    		$('.new_cust_em').hide();
    	}
    });

// Product sliders
	// Also like sliders
	$('.also_like_slider').bxSlider({
	    slideWidth: 240,
	    minSlides: 2,
	    maxSlides: 4,
	    slideMargin: 0
	});
	//Recently Viewed Slider
	var rv_slider = $('.recently_view_slider').bxSlider({
	    slideWidth: 240,
	    minSlides: 2,
	    maxSlides: 4,
	    slideMargin: 0
	});
	$('.recently_view_slider a.remove_slide').click(function(e){
		e.preventDefault();
		$(this).parent().remove();
		rv_slider.reloadSlider();
	});
	$('.cat_also_like_slider').bxSlider({
	    slideWidth: 200,
	    minSlides: 2,
	    maxSlides: 4,
	    slideMargin: 0
	});
});



