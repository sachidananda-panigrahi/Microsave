// JavaScript Document
var page_height = $(window).height();
var head_height = $(".header").height();
var cont_height = $(".mainWrap").height();
var foot_height = $(".footer").height();
var tot_height = parseInt(head_height) + parseInt(cont_height) + parseInt(foot_height);

function loop() {
    $('#pointer1,#pointer2,#pointer3,#pointer4,#pointer5')
        .animate({marginTop:10}, 1000)
        .animate({marginTop:0}, 1000, loop);

}












/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20130721 */
(function (e) {
    "use strict";
    e.fn.cycle.transitions.tileSlide = e.fn.cycle.transitions.tileBlind = {before:function (t, i, n, s) {
        t.API.stackSlides(i, n, s), e(i).show(), t.container.css("overflow", "hidden"), t.tileDelay = t.tileDelay || "tileSlide" == t.fx ? 100 : 125, t.tileCount = t.tileCount || 7, t.tileVertical = t.tileVertical !== !1, t.container.data("cycleTileInitialized") || (t.container.on("cycle-destroyed", e.proxy(this.onDestroy, t.API)), t.container.data("cycleTileInitialized", !0))
    }, transition:function (t, i, n, s, o) {
        function r(e) {
            p.eq(e).animate(I, {duration:t.speed, easing:t.easing, complete:function () {
                (s ? v - 1 === e : 0 === e) && t._tileAniCallback()
            }}), setTimeout(function () {
                (s ? v - 1 !== e : 0 !== e) && r(s ? e + 1 : e - 1)
            }, t.tileDelay)
        }

        t.slides.not(i).not(n).hide();
        var c, l, a, d, u, p = e(), f = e(i), y = e(n), v = t.tileCount, h = t.tileVertical, g = t.container.height(), m = t.container.width();
        h ? (l = Math.floor(m / v), d = m - l * (v - 1), a = u = g) : (l = d = m, a = Math.floor(g / v), u = g - a * (v - 1)), t.container.find(".cycle-tiles-container").remove();
        var I, A = {left:0, top:0, overflow:"hidden", position:"absolute", margin:0, padding:0};
        I = h ? "tileSlide" == t.fx ? {top:g} : {width:0} : "tileSlide" == t.fx ? {left:m} : {height:0};
        var S = e('<div class="cycle-tiles-container"></div>');
        S.css({zIndex:f.css("z-index"), overflow:"visible", position:"absolute", top:0, left:0, direction:"ltr"}), S.insertBefore(n);
        for (var x = 0; v > x; x++)c = e("<div></div>").css(A).css({width:v - 1 === x ? d : l, height:v - 1 === x ? u : a, marginLeft:h ? x * l : 0, marginTop:h ? 0 : x * a}).append(f.clone().css({position:"relative", maxWidth:"none", width:f.width(), margin:0, padding:0, marginLeft:h ? -(x * l) : 0, marginTop:h ? 0 : -(x * a)})), p = p.add(c);
        S.append(p), f.hide(), y.show().css("opacity", 1), r(s ? 0 : v - 1), t._tileAniCallback = function () {
            y.show(), f.hide(), S.remove(), o()
        }
    }, stopTransition:function (e) {
        e.container.find("*").stop(!0, !0), e._tileAniCallback && e._tileAniCallback()
    }, onDestroy:function () {
        var e = this.opts();
        e.container.find(".cycle-tiles-container").remove()
    }}
})(jQuery);


$(document).ready(function () {




//	Responsive layout, resizing the items
    // $('#foo4').carouFredSel({
    // 	responsive: true,
    // 	width: '100%',
    // 	scroll: 2,
    // 	items: {
    // 		width: 200,
    // 	//	height: '30%',	//	optionally resize item-height
    // 		visible: {
    // 			min: 2,
    // 			max: 6
    // 		}
    // 	}
    // });

//	Announce ================
// function tick2(){
// 		$('#ticker_02 li:first').slideUp( function () { $(this).appendTo($('#ticker_02')).slideDown(); });
// 	}
// 	setInterval(function(){ tick2 () }, 3000);



    loop();
    $('#pointer1,#pointer2,#pointer3,#pointer4,#pointer5').hover(function () {
//        alert(this.id+"  In mouse enter...");
        $(this).clearQueue();
        $(this).stop();
    });
    $('#pointer1,#pointer2,#pointer3,#pointer4,#pointer5').mouseleave(function () {
        loop();
    });

    /*loop();*/


    /*===================
     Active class
     =====================*/

    $(".logorightnav ul li").click(function () {

        if (($(".logorightnav ul li").hasClass("active"))) {
            $(".logorightnav ul li").removeClass("active");
        }
        if (!($(this).hasClass("active"))) {
            $(this).addClass("active");

        }
        else {

            $(this).removeClass("active");
        }


    });


    $("#myAccordion li").click(function () {

        if (!($(this).children(".acc").hasClass("show"))) {
            $(this).children(".acc").removeClass("hide");
            $(this).children(".acc").addClass("show");

        }
        else {
            $(this).children(".acc").removeClass("show");
            $(this).children(".acc").addClass("hide");
        }


    });

    $("#checkPrime").keypress(function () {
        var primeNumber = $(this).val();
        $("#todo").append("<li>" + "</li>")
    });

    /*=======================================================
     Header Shrink With Animation
     =========================================================*/

    $(document).on("scroll", function () {

        var offset = $(".header").offset();

        if (offset.top >= 150) {

            $(".shrinkHeaderParent").addClass("cbp-af-header-shrink");
        }
        else if (offset.top <= 100) {
            $(".shrinkHeaderParent").removeClass("cbp-af-header-shrink");
        }
    });


// scroll top ===============
    $(".backto-top").click(function () {
        $("html, body").animate({ scrollTop:0 }, 1000);
    });

// Tool Tip =================
    $("#pointer1,#pointer2,#pointer3,#pointer4,#pointer5").popover({trigger:'hover', placement:'top', html:"true", content:""});


//Cufon.replace('h2,h4,input, button, select, textarea');

// More less
//$("#more").click(function(){
//
//	$("#more").addClass("display-none");
//	$("#more").removeClass("display-block");
//	$("#more").removeClass("visible-tablet");	
//	$("#less").addClass("display-block");
//	$("#less").removeClass("display-none");		
//	$(".established").css({'display':'block'});
//	
//
//});
//$("#less").click(function(){
//
//	$("#less").addClass("display-none");
//	$("#less").removeClass("display-block");
//	$("#more").addClass("display-block");
//	$("#more").addClass("visible-tablet");
//	$(".established").css({'display':'none'});
//	
//
//});

    var width = $(window).width();
    var cycle_pager_width = $(".cycle-pager").width();
    cycle_pager_width = (cycle_pager_width / 4) - 25;
    $(".cycle-pager1 span").css({ 'margin-left':cycle_pager_width });

    if ((width <= 979 )) {

        $(".shrinkHeaderParent").removeClass("cbp-af-header");
        $(".shrinkHeaderChild").removeClass("cbp-af-inner");
        $(".mainWrap").css({"padding-top":"0px" });
    }


    $(window).resize(function () {
        var width = $(window).width();

        var cycle_pager_width = $(".cycle-pager").width();
        cycle_pager_width = (cycle_pager_width / 4) - 25;
        $(".cycle-pager1 span").css({ 'margin-left':cycle_pager_width });

        if ((width <= 979 )) {

            $(".shrinkHeaderParent").removeClass("cbp-af-header");
            $(".shrinkHeaderChild").removeClass("cbp-af-inner");
            $(".mainWrap").css({"padding-top":"0px" });
        }

        else {

            $(".shrinkHeaderParent").addClass("cbp-af-header");
            $(".shrinkHeaderChild").addClass("cbp-af-inner");
            $(".mainWrap").css({"padding-top":"150px" });
        }
    });

//	})
//
////Slider=================================================================================
//			$(document).ready(function(){
//				
//				//$("#slider").mouseover(function(){
////					
////					$(".left-arrow").css({'visibility':'visible'}); 
////					$(".right-arrow").css({'visibility':'visible'});
////					
////					
////					});
////					
////					$("#slider").mouseout(function(){
////					
////					$(".left-arrow").css({'visibility':'hidden'}); 
////					$(".right-arrow").css({'visibility':'hidden'});
////					
////					
////					});
//				
//				var image_height = $("#slider img").height();
//				$("#slider").css({"min-height": image_height});
//
//				$(window).resize(function() {
//
//						var image_height = $("#slider img").height();
//						$("#slider").css({"min-height": image_height});
//
//
//				})
//				$('.right-arrow').click(function(){
//					time= 0;
//					window.clearInterval(myTimer);
//					rotateImage_right();
//					
//					});
//					$('.left-arrow').click(function(){
//					time= 0;
//					window.clearInterval(myTimer);
//					rotateImage_left();
//					
//					});
//				
//				
//				function rotateImage(){
//			  var $active = $('#slider .imgactive');
//			  var $next = ($('#slider .imgactive').next().length > 0) ? $('#slider .imgactive').next() : $('#slider img:first');
//			  $active.effect('fade', 1000, function(){
//				 $active.hide();
//				 
//				$active.removeClass('imgactive');
//				$next.fadeIn().addClass('imgactive');
//				
//			  });
//			}
//			
//			var ticker = rotateImage;
//			var myTimer = window.setInterval(ticker, 4000);
//			
//			
//			
//			function rotateImage_right(){
//			  var $active = $('#slider .imgactive');
//			  var $next = ($('#slider .imgactive').next().length > 0) ? $('#slider .imgactive').next() : $('#slider img:first');
//			  $active.effect('clip', 1000, function(){
//				 $active.hide();
//				 
//				$active.removeClass('imgactive');
//				$next.fadeIn().addClass('imgactive');
//				
//				
//				myTimer = window.setInterval(ticker, 4000);
//				
//			  });
//			}
//			function rotateImage_left(){
//			  var $active = $('#slider .imgactive');
//			  var $prev = ($('#slider .imgactive').prev().length > 0) ? $('#slider .imgactive').prev() : $('#slider img:last');
//			  $active.effect('clip', 1000, function(){
//				 $active.hide();
//				 
//				$active.removeClass('imgactive');
//				$prev.fadeIn().addClass('imgactive');
//				
//				
//				myTimer = window.setInterval(ticker, 4000);
//				
//			  });
//			}



    if (tot_height < page_height) {
        var margin_height = parseInt(page_height) - parseInt(tot_height);
        var margin_height = parseInt(cont_height) + parseInt(margin_height) - 30;
        $(".mainWrap").css({"min-height":margin_height});
    }

    /*===========TABS=======*/
    $(function() {

        var $tabs = $('#tabs').tabs();

        $(".ui-tabs-panel").each(function(i){

            var totalSize = $(".ui-tabs-panel").size() - 1;

            if (i != totalSize) {
                next = i + 2;
                $(this).append("<a href='#' class='next-tab mover' rel='" + next + "'>Next </a>");
            }

            if (i != 0) {
                prev = i;
                $(this).append("<a href='#' class='prev-tab mover' rel='" + prev + "'>Prev</a>");
            }

        });

        $('.next-tab, .prev-tab').click(function() {
            $tabs.tabs('select', $(this).attr("rel"));
            return false;
        });


    });

    /* ==========================================
     Custom slider Plugin
     =============================================*/
function websSlider(){
    return{
        timeOut: 3,         //in second
        sliderHeight: 100,  //In Percentage
        sliderWidth: 100
    }

    var imageCount = $('.mySlider img').length;
    $(".websSliderOuter").css({"height":page_height});
    for(var i=0; i<imageCount; i++)
    {
        var link= "link";
        link= link+i;
        $("#sliderPaginate ul").append("<li><a class='roundBtn' id='link' href='javascript:void(0)' rel=''></a></li>");
        $("#link").attr('id',link);


    }
    i=0;
    $(".mySlider img").each(function(){

        link= "link";
        link= link+i;
        $(this).addClass(link);
        i++;
    });
    $("#sliderPaginate li:first-child").addClass("active");
    function mySlider() {
        var $active = $('.mySlider img.active');
        var $next = ($('.mySlider img.active').next().length > 0) ? $('.mySlider img.active').next() : $('.mySlider img:first');
        var $activePn= $("#sliderPaginate li.active");
        var $nextPn = ($('#sliderPaginate li.active').next().length > 0) ? $('#sliderPaginate li.active').next() : $('#sliderPaginate li:first');
        $activePn.removeClass('active');
        $active.removeClass('active');
        $nextPn.addClass('active');
        $next.addClass('active');

    }
    function rotatePrev() {
        var $active = $('.mySlider img.active');
        var $prev = ($('.mySlider img.active').prev().length > 0) ? $('.mySlider img.active').prev() : $('.mySlider img:last');
        var $activePn= $("#sliderPaginate li.active");
        var $prevPn = ($('#sliderPaginate li.active').prev().length > 0) ? $('#sliderPaginate li.active').prev() : $('#sliderPaginate li:last');
        $activePn.removeClass('active');
        $active.removeClass('active');
        $prevPn.addClass('active');
        $prev.addClass('active');
    }
    var ticker = mySlider;
    var myTimer = window.setInterval(ticker, 4000);
    $('.arrowBoxContainer .next').click(function () {
        window.clearInterval(myTimer);
        mySlider();
        myTimer = window.setInterval(ticker, 4000);

    });
    $('.arrowBoxContainer .prev').click(function () {
        window.clearInterval(myTimer);
        rotatePrev();
        myTimer = window.setInterval(ticker, 4000);

    });
    $("#sliderPaginate li a").on("click", function(){
        $("#sliderPaginate li").removeClass("active");
        $(this).parent().addClass("active");
        window.clearInterval(myTimer);
        var getId= $(this).attr("id");
        $(".mySlider img").removeClass("active");
        $("."+getId).addClass("active");
        myTimer = window.setInterval(ticker, 4000);

    });
    $(".mySliderOuter").hover(function(){
            $(".arrowBoxContainer a").show()
        },
        function(){
            $(".arrowBoxContainer a").hide()
        })

}





});
			