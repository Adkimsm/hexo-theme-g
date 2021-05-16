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

//夜间模式开关
function switchNightMode() {
	var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
	if (night == '0') {
		document.querySelector('link[title="dark"]').disabled = true;
		document.querySelector('link[title="dark"]').disabled = false;
		document.cookie = "night=1;path=/"
		Qmsg.info("夜间模式开启", QMSG_GLOBALS.DEFAULTS);
	} else {
		document.querySelector('link[title="dark"]').disabled = true;
		document.cookie = "night=0;path=/"
		Qmsg.info("夜间模式关闭", QMSG_GLOBALS.DEFAULTS);
	}
}

//自动判断夜间模式
(function () {
	if (document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") == '') {
		if (new Date().getHours() > 22 || new Date().getHours() < 6) {
			document.querySelector('link[title="dark"]').disabled = true;
			document.querySelector('link[title="dark"]').disabled = false;
			document.cookie = "night=1;path=/"
			Qmsg.info("夜间模式开启", QMSG_GLOBALS.DEFAULTS);
		} else {
			document.cookie = "night=0;path=/"
		}
	} else {
		var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
		if (night == '0') {
			document.querySelector('link[title="dark"]').disabled = true;
		} else if (night == '1') {
			document.querySelector('link[title="dark"]').disabled = true;
			document.querySelector('link[title="dark"]').disabled = false;
			Qmsg.info("夜间模式开启", QMSG_GLOBALS.DEFAULTS);
		}
	}
})();


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

console.info(" %c Powered by Hexo ", 'color:#fadfa3;background:#030307;padding:5px 0;');
console.info(" %c made with ❤ by youranreus & Adkinsm ", 'color: #fadfa3; background: #030307; padding:5px 0;')