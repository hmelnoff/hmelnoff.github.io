$(document).ready(function () {
	
	$(".top_mnu ul a[href*='#']").mPageScroll2id();

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", closeBtnInside: true, showCloseBtn: true});


//	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
//	$(".top_text p, .section_header").animated("fadeInUp", "fadeOut");
	$(".animation_1").animated("fadeInUp", "fadeOut");
	$(".animation_2, .animation_3").animated("fadeInUp", "fadeOut");
	$(".left .resume_item").animated("fadeInUp", "fadeOut");
	$(".right .resume_item").animated("fadeInUp", "fadeOut");

	function heightDetect() {
	$(".main_head").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	$(".toggle_mnu, .menu_item").click(function () {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu li a").click(function () {
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
		$(".sandwich").toggleClass("active");
		$(".toggle_mnu").removeClass("active");
		$(".top_text").removeClass("h_opacity");
	});

	$(".toggle_mnu").click(function () {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacity");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
			$(".toggle_mnu").removeClass("active");
		} else {
		$(".top_text").addClass("h_opacity");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
		$(".toggle_mnu").addClass("active");
		}
	});

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function () {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a.popup_content").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);
	});

	$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
	
});
//$(window).load(function() {
//	$(".loader_inner").fadeOut();
//	$(".loader").delay(400).fadeOut("slow");
//});
