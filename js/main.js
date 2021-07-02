$(document).ready(function() {

  $('.con-5_btn').on('click', () => {
    $('.con-5_modalWrapper').addClass('con-5_modalWrapperActive');
    $('.global').addClass('blur');
  });
  $('.con-5_modalBtn').on('click', () => {
    $('.con-5_modalWrapper').addClass('con-5_modalWrapperClosed').toggleClass('con-5_modalWrapperActive');
    $('.global').removeClass('blur');
  });

  $(".nav > a").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
  });

  $('.btnDropdown').on('click', () => {
    $("body").toggleClass("bodyNoneScroll");
    $('.dropdown').toggleClass('dropdownActive');
		if($('.span-1').hasClass('span-1_active')) {
			$('.span-1').removeClass('span-1_active').addClass('span-1_over');
		} else {
			$('.span-1').addClass('span-1_active').removeClass('span-1_over');
		};
	});
	$('.btnDropdown').on('click', () => {
		if($('.span-2').hasClass('span-2_active')) {
			$('.span-2').removeClass('span-2_active').addClass('span-2_over');
		} else {
			$('.span-2').addClass('span-2_active').removeClass('span-2_over');
		};
	});
	$('.btnDropdown').on('click', () => {
		if($('.span-3').hasClass('span-3_active')) {
			$('.span-3').removeClass('span-3_active').addClass('span-3_over');
		} else {
			$('.span-3').addClass('span-3_active').removeClass('span-3_over');
		};
	});

  if ($(window).width() > 991) {
    $('.dropdown').removeClass('dropdownActive');
  };

  function fontsize() {
    let block = document.querySelector('.con1_content_block1');
    let title = document.querySelector('.con1_title');
    let w = block.offsetWidth;
    title.style.fontSize = w/10 + "px";
    title.style.top = w/38 + "px";
    title.style.left = w/9 + "px";
  }
  window.onload = fontsize;
  window.onresize = fontsize;

  $('.con3_blockContent').on('click', function() {
    $(this).toggleClass('con3_blockContent_active');
    $('.con3_blockContent').not(this).toggleClass('con3_blockContent_hide');
  });

  $('.accordeonItem').on('click', function() {
		$(this).find('.accordeonItemContent').slideToggle(150);
		$(this).find('.accordeonArrow').toggleClass('accordeonArrowActive');
		$('.accordeonItem').not(this).find('.accordeonItemContent').hide(150);
		$('.accordeonItem').not(this).find('.accordeonArrow').removeClass('accordeonArrowActive');
	});
  $(document).mouseup(function (e){
    var accordeonItem = $('.accordeonItem');
    var accordeonContent = $('.accordeonItemContent');
    var accordeonArrow = $('.accordeonArrow');
    if (!accordeonItem.is(e.target) && accordeonItem.has(e.target).length === 0) {
      accordeonContent.hide(150);
      accordeonArrow.removeClass('accordeonArrowActive');
    };
    e.stopPropagation();
  });

  $('.single-item').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 2,
		prevArrow: '<img class="arrowUpMain" src="img/arrow-slider.svg">',
    nextArrow: '<img class="arrowDownMain" src="img/arrow-slider.svg">'
	});

  let tabs = $('.blockPerson');
  tabs.on('click', function(){
    let activeContent = $(this).attr('href');
    // меняется текст
    $('.con-6_personText_active').removeClass('con-6_personText_active');
    $(activeContent).addClass('con-6_personText_active');
    // меняются картинки
    $(this).find('.blockPersonWrapper').addClass('blockPersonWrapper_active');
    $(this).find('.blockPersonMain').addClass('blockPersonMain_active');
    $('.blockPerson').not(this).find('.blockPersonWrapper').removeClass('blockPersonWrapper_active');
    $('.blockPerson').not(this).find('.blockPersonMain').removeClass('blockPersonMain_active');
  });
});