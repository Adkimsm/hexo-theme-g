/**
 * @file X.js
 * @author youranreus
 */

//移动端Hover补偿
var mobileHover = function () {
	$('*').on('touchstart', function () {
		$(this).trigger('hover');
	}).on('touchend', function () {
		$(this).trigger('hover');
	});
};

//pjax 刷新
$(document).pjax('a:not(a[target="_blank"], a[no-pjax])', {
	container: '#pjax-container',
	fragment: '#pjax-container',
	timeout: 8000
}).on('pjax:send', function () {
	pjax_send();
}).on('pjax:complete', function () {
	pjax_complete();
}).on('pjax:click', function () {
	pjax_click();
});

function pjax_click() {
	//结束aplayer进程
	if (typeof aplayers !== 'undefined') {
		for (var i = 0; i < aplayers.length; i++) {
			try {
				aplayers[i].destroy()
			} catch (e) {}
		}
	}
}

function pjax_send() {
	$("#M").addClass("opacity-disappear");
	NProgress.start();
}

function pjax_complete() {
	//Prism重启
	if (typeof Prism !== 'undefined') {
		Prism.highlightAll(true, null);
	}
	//Meting重启
	var isFunction = false;
	try {
		isFunction = typeof (eval('loadMeting')) == "function";
	} catch (e) {}
	if (isFunction) {
		loadMeting();
	} else {}

	//显示主页面
	$("#M").addClass("opacity-show");
	PreFancybox();
	imageinfo();
	collapse_toggle();
	NProgress.done();
}

function PreFancybox(){
	$("#post img").each(function(){
				$(this).wrap(function(){
					if($(this).is(".bq"))
					{
						 return '';
					}
					if($(this).is("#feedme-content img"))
					{
						return '';
					}
				return '<a data-fancybox="gallery" no-pjax data-type="image" href="' + $(this).attr("src") + '" class="light-link"></a>';
		 });
	});
}

function imageinfo(){
	$("#post img").each(function(){
				$(this).wrap(function(){
					if($(this).is(".bq"))
					{
						 return '';
					}
					if($(this).is("#feedme-content img"))
					{
						return '';
					}
					$(this).addClass("lazyload");
					$(this).attr('data-original',$(this).attr("src"));
					this.onerror=function(){$(this).attr('src','/IMG/loading.gif');};
					$(this).after('<span class="imageinfo">'+ $(this).attr("alt") +'</span>');
		 });
	});
}
function show_site_runtime(bdate) {
	window.setTimeout("show_site_runtime('" + bdate + "')", 1000);
	X = new Date(bdate);
	Y = new Date();
	T = (Y.getTime() - X.getTime());
	i = 24 * 60 * 60 * 1000;
	d = T / i;
	D = Math.floor(d);
	h = (d - D) * 24;
	H = Math.floor(h);
	m = (h - H) * 60;
	M = Math.floor(m);
	s = (m - M) * 60
	S = Math.floor(s);
	site_runtime.innerHTML = D + "<span>天</span>" + H + "<span>小时</span>" + M + "<span>分</span>" + S + "<span>秒</span>"
}

//赞赏按钮
function feedme_show() {
	if ($("#feedme-content").css("display") == 'none') {
		$("#feedme-content").slideDown();
	} else {
		$("#feedme-content").slideUp();
	}
}

//侧栏菜单开关
function sideMenu_toggle() {
	$("#sliderbar").toggleClass("move_left");
	$("#sliderbar").toggleClass("move_right");
	$("#sliderbar-cover").toggle();
	$("#m_search").toggle();
	$("#pjax-container").toggleClass("main_display");
	if ($("#sliderbar-toc").hasClass("move_left")) {
		toc_toggle();
	}
}

//侧栏目录开关
function toc_toggle() {
	$("#sliderbar-toc").toggleClass("move_left");
	$("#sliderbar-toc").toggleClass("move_right");
	$('#m_search').removeClass('m_search_c');
	$("#sliderbar-toc-cover").toggle();
}

//折叠框开关
function collapse_toggle() {
	$('.collapse-title').click(function () {
		if ($(this).next().css("display") == 'none') {
			$(this).next().slideDown();
		} else {
			$(this).next().slideUp();
		}
	})
}

function gototop() {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
}


//侧栏内容开关
function show_slide_content(id) {

	var rotate = {
		"-webkit-transition": " .3s ease all",
		"-moz-transition": ".3s ease all",
		"-ms-transition": ".3s ease all",
		"-o-transition": ".3s ease all",
		transition: ".3s ease all",
		"-webkit-transform": " rotate(180deg)",
		"-moz-transform": " rotate(180deg)",
		"-ms-transform": "rotate(180deg)",
		"-o-transform": "rotate(180deg)",
		transform: "rotate(180deg)"
	};

	var rotate2 = {
		"-webkit-transition": " .3s ease all",
		"-moz-transition": ".3s ease all",
		"-ms-transition": ".3s ease all",
		"-o-transition": ".3s ease all",
		transition: ".3s ease all",
		"-webkit-transform": " rotate(0deg)",
		"-moz-transform": " rotate(0deg)",
		"-ms-transform": "rotate(0deg)",
		"-o-transform": "rotate(0deg)",
		transform: "rotate(0deg)"
	};

	if ($("#Sliderbar-content-" + id).css("display") == 'none') {
		$("#Sliderbar-content-" + id).slideDown();
		$("#Sliderbar-content-" + id).prev().find('i').css(rotate);
	} else {
		$("#Sliderbar-content-" + id).slideUp();
		$("#Sliderbar-content-" + id).prev().find('i').css(rotate2);
	}
}