// JavaScript Document
function checkform_add(form){
    var name1 = $("#name1").val();
    var tel = $("#tel").val();
    if (name1 =='' || tel =='') {
        alert('请填写姓名和联系电话!');
        return false;
    }

    var reg1 = /^[\u4E00-\u9FA5]{2,20}$/;
    var reg2= /^[A-Za-z]+$/;
    if(!reg1.test(name1) && !reg2.test(name1)){
        alert("请填写正确的姓名");
        return false;
    }

    if(!(/1(3|4|5|6|7|8|9)\d{9}$/.test(tel))){
        alert("不是完整的11位手机号或者正确的手机号前七位");
        return false;
    }
}

$(function(){
	$('header .menu ul li').hover(function(){
		$(this).find('.ul').slideDown()
	},function(){
		$(this).find('.ul').stop().slideUp()
	})
	$('.menu-btn').click(function(event){
		if( $('.menu-box').is(':hidden') ){
			$('.menu-btn').addClass('active');
			$('.menu-box').fadeIn();
			$("body").on("touchmove",function(event){
				event.preventDefault
			}, false)
		}else{
			$('.menu-btn').removeClass('active');
			$('.menu-box').fadeOut();
			$("body").off("touchmove")
		}
		event.stopPropagation()
	})
	$('.menu-box .menu ul li span b').click(function(){
		if( $(this).parents('li').next('.ul').is(':hidden') ){
			$(this).parents('li').next('.ul').show();
			$(this).html('-')
		}else{
			$(this).parents('li').next('.ul').hide();
			$(this).html('+')
		}
	})
	$('.menu-box .menu').click(function(event){
		$('.menu-box').show();
		event.stopPropagation()
	})
	$(window).click(function(){
		$('.menu-box').fadeOut();
		$('.menu-btn').removeClass('active');
		$('.menu-box .menu .ul').hide();
		$('.menu-box .menu ul li span b').html('+');
		$("body").off("touchmove")
	})
}) 


$(function(){
	$('#tabBar .clickbtn').click(function(){
		if( $('#tabBar .navigation').hasClass('active') ){
			$('#tabBar').removeClass('active');
			$('#tabBar .clickbtn').removeClass('active').addClass('on');
			$('#tabBar .navigation').removeClass('active');
		}else{
			$('#tabBar').addClass('active');
			$('#tabBar .clickbtn').addClass('active').removeClass('on');
			$('#tabBar .navigation').addClass('active');
		}
	})
})


$(function(){
	var bannerswiper = new Swiper('.banner .swiper-container', {
	    speed:500,
	    autoplay : 5000,
	    autoplayDisableOnInteraction : false,
	    pagination : '.banner .swiper-pagination',
	    paginationClickable :true,
	})
})

$(function(){
	$('.maximg img').css({"max-width":"100%"});
	function imgs (){
		var pmW = $(window).width();
		if ( pmW <= 991 ){
			$('body').removeClass('hover')
		}else{
			$('body').addClass('hover')
		}
	}
	imgs();	
	$(window).resize(function(){
		imgs()
	})
})

$(function(){
$('.banner .box .search .biaoti ul li').each(function(z){
$('.banner .box .search .biaoti ul li').eq(z).click(function(){
$('.banner .box .search .biaoti ul li').removeClass('active');
$('.banner .box .search .biaoti ul li').eq(z).addClass('active');
$('.banner .box .search .formbox form').hide();
$('.banner .box .search .formbox form').eq(z).show();
})
})
}) 