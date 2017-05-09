

//CHAPTER 3 BOXES------------------------------------
//NAV-------------------------------
var nav01 = $('.nav1');
var nav02 = $('.nav2');
var nav03 = $('.nav3');
var nav04 = $('.nav4');
var nav05 = $('.nav5');
var nav06 = $('.nav6');
var nav07 = $('.nav7');

//section301------------------------
var btn301_1N = $('#btn301-1N');
var btn301_2P = $('#btn301-2P');
var btn301_2N = $('#btn301-2N');
var btn301_3P = $('#btn301-3P');
var btn301_3N = $('#btn301-3N');
var btn301_4P = $('#btn301-4P');
var btn301_4N = $('#btn301-4N');
var btn301_5P = $('#btn301-5P');
var btn301_5N = $('#btn301-5N');
var btn301_6P = $('#btn301-6P');
var btn301_6N = $('#btn301-6N');
var btn301_7P = $('#btn301-7P');
var btn301_7N = $('#btn301-7N');

var sec301_1 = $('#section301-1');
var sec301_2 = $('#section301-2');
var sec301_3 = $('#section301-3');
var sec301_4 = $('#section301-4');
var sec301_5 = $('#section301-5');
var sec301_6 = $('#section301-6');
var sec301_7 = $('#section301-7');

var backtoSec301_1 = function (){
				sec301_1.addClass('show');
				sec301_1.removeClass('hide');
				sec301_2.addClass('hide');
				sec301_2.removeClass('show');
				nav01.addClass('navRed');
				nav02.removeClass('navRed');
				};

var gotoSec301_2 = function (){
				sec301_1.removeClass('show');
				sec301_1.addClass('hide');
				sec301_2.removeClass('hide');
				sec301_2.addClass('show');
				nav01.removeClass('navRed');
				nav02.addClass('navRed');
				};

var backtoSec301_2 = function (){
				sec301_2.addClass('show');
				sec301_2.removeClass('hide');
				sec301_3.addClass('hide');
				sec301_3.removeClass('show');
				nav02.addClass('navRed');
				nav03.removeClass('navRed');
				};				

var gotoSec301_3 = function (){
				sec301_2.removeClass('show');
				sec301_2.addClass('hide');
				sec301_3.removeClass('hide');
				sec301_3.addClass('show');
				nav02.removeClass('navRed');
				nav03.addClass('navRed');
				};

var backtoSec301_3 = function (){
				sec301_3.addClass('show');
				sec301_3.removeClass('hide');
				sec301_4.addClass('hide');
				sec301_4.removeClass('show');
				nav03.addClass('navRed');
				nav04.removeClass('navRed');
				};	

var gotoSec301_4 = function (){
				sec301_3.removeClass('show');
				sec301_3.addClass('hide');
				sec301_4.removeClass('hide');
				sec301_4.addClass('show');
				nav03.removeClass('navRed');
				nav04.addClass('navRed');
				};

var backtoSec301_4 = function (){
				sec301_4.addClass('show');
				sec301_4.removeClass('hide');
				sec301_5.addClass('hide');
				sec301_5.removeClass('show');
				nav04.addClass('navRed');
				nav05.removeClass('navRed');
				};	

var gotoSec301_5 = function (){
				sec301_4.removeClass('show');
				sec301_4.addClass('hide');
				sec301_5.removeClass('hide');
				sec301_5.addClass('show');
				nav04.removeClass('navRed');
				nav05.addClass('navRed');
				};

var backtoSec301_5 = function (){
				sec301_5.addClass('show');
				sec301_5.removeClass('hide');
				sec301_6.addClass('hide');
				sec301_6.removeClass('show');
				nav05.addClass('navRed');
				nav06.removeClass('navRed');
				};	

var gotoSec301_6 = function (){
				sec301_5.removeClass('show');
				sec301_5.addClass('hide');
				sec301_6.removeClass('hide');
				sec301_6.addClass('show');
				nav05.removeClass('navRed');
				nav06.addClass('navRed');
				};

var backtoSec301_6 = function (){
				sec301_6.addClass('show');
				sec301_6.removeClass('hide');
				sec301_7.addClass('hide');
				sec301_7.removeClass('show');
				nav06.addClass('navRed');
				nav07.removeClass('navRed');
				};	

var gotoSec301_7 = function (){
				sec301_6.removeClass('show');
				sec301_6.addClass('hide');
				sec301_7.removeClass('hide');
				sec301_7.addClass('show');
				nav06.removeClass('navRed');
				nav07.addClass('navRed');
				};

var toSec301_1 = function (){
				sec301_1.addClass('show');
				sec301_1.removeClass('hide');
				sec301_2.addClass('hide');
				sec301_2.removeClass('show');
				sec301_3.addClass('hide');
				sec301_3.removeClass('show');
				sec301_4.addClass('hide');
				sec301_4.removeClass('show');
				sec301_5.addClass('hide');
				sec301_5.removeClass('show');
				sec301_6.addClass('hide');
				sec301_6.removeClass('show');
				sec301_7.addClass('hide');
				sec301_7.removeClass('show');
				nav01.addClass('navRed');
				nav02.removeClass('navRed');
				nav03.removeClass('navRed');
				nav04.removeClass('navRed');
				nav05.removeClass('navRed');
				nav06.removeClass('navRed');
				nav07.removeClass('navRed');
				};

var toSec301_2 = function (){
				sec301_1.removeClass('show');
				sec301_1.addClass('hide');
				sec301_2.removeClass('hide');
				sec301_2.addClass('show');
				sec301_3.addClass('hide');
				sec301_3.removeClass('show');
				sec301_4.addClass('hide');
				sec301_4.removeClass('show');
				sec301_5.addClass('hide');
				sec301_5.removeClass('show');
				sec301_6.addClass('hide');
				sec301_6.removeClass('show');
				sec301_7.addClass('hide');
				sec301_7.removeClass('show');
				nav01.removeClass('navRed');
				nav02.addClass('navRed');
				nav03.removeClass('navRed');
				nav04.removeClass('navRed');
				nav05.removeClass('navRed');
				nav06.removeClass('navRed');
				nav07.removeClass('navRed');
				};

var toSec301_3 = function (){
				sec301_1.removeClass('show');
				sec301_1.addClass('hide');
				sec301_2.addClass('hide');
				sec301_2.removeClass('show');
				sec301_3.removeClass('hide');
				sec301_3.addClass('show');
				sec301_4.addClass('hide');
				sec301_4.removeClass('show');
				sec301_5.addClass('hide');
				sec301_5.removeClass('show');
				sec301_6.addClass('hide');
				sec301_6.removeClass('show');
				sec301_7.addClass('hide');
				sec301_7.removeClass('show');
				nav01.removeClass('navRed');
				nav02.removeClass('navRed');
				nav03.addClass('navRed');
				nav04.removeClass('navRed');
				nav05.removeClass('navRed');
				nav06.removeClass('navRed');
				nav07.removeClass('navRed');
				};

var toSec301_4 = function (){
				sec301_1.removeClass('show');
				sec301_1.addClass('hide');
				sec301_2.addClass('hide');
				sec301_2.removeClass('show');
				sec301_3.addClass('hide');
				sec301_3.removeClass('show');
				sec301_4.removeClass('hide');
				sec301_4.addClass('show');
				sec301_5.addClass('hide');
				sec301_5.removeClass('show');
				sec301_6.addClass('hide');
				sec301_6.removeClass('show');
				sec301_7.addClass('hide');
				sec301_7.removeClass('show');
				nav01.removeClass('navRed');
				nav02.removeClass('navRed');
				nav03.removeClass('navRed');
				nav04.addClass('navRed');
				nav05.removeClass('navRed');
				nav06.removeClass('navRed');
				nav07.removeClass('navRed');
				};

var toSec301_5 = function (){
				sec301_1.removeClass('show');
				sec301_1.addClass('hide');
				sec301_2.addClass('hide');
				sec301_2.removeClass('show');
				sec301_3.addClass('hide');
				sec301_3.removeClass('show');
				sec301_4.addClass('hide');
				sec301_4.removeClass('show');
				sec301_5.removeClass('hide');
				sec301_5.addClass('show');
				sec301_6.addClass('hide');
				sec301_6.removeClass('show');
				sec301_7.addClass('hide');
				sec301_7.removeClass('show');
				nav01.removeClass('navRed');
				nav02.removeClass('navRed');
				nav03.removeClass('navRed');
				nav04.removeClass('navRed');
				nav05.addClass('navRed');
				nav06.removeClass('navRed');
				nav07.removeClass('navRed');
				};

var toSec301_6 = function (){
				sec301_1.removeClass('show');
				sec301_1.addClass('hide');
				sec301_2.addClass('hide');
				sec301_2.removeClass('show');
				sec301_3.addClass('hide');
				sec301_3.removeClass('show');
				sec301_4.addClass('hide');
				sec301_4.removeClass('show');
				sec301_5.addClass('hide');
				sec301_5.removeClass('show');
				sec301_6.removeClass('hide');
				sec301_6.addClass('show');
				sec301_7.addClass('hide');
				sec301_7.removeClass('show');
				nav01.removeClass('navRed');
				nav02.removeClass('navRed');
				nav03.removeClass('navRed');
				nav04.removeClass('navRed');
				nav05.removeClass('navRed');
				nav06.addClass('navRed');
				nav07.removeClass('navRed');
				};

var toSec301_7 = function (){
				sec301_1.removeClass('show');
				sec301_1.addClass('hide');
				sec301_2.addClass('hide');
				sec301_2.removeClass('show');
				sec301_3.addClass('hide');
				sec301_3.removeClass('show');
				sec301_4.addClass('hide');
				sec301_4.removeClass('show');
				sec301_5.addClass('hide');
				sec301_5.removeClass('show');
				sec301_6.addClass('hide');
				sec301_6.removeClass('show');
				sec301_7.removeClass('hide');
				sec301_7.addClass('show');
				nav01.removeClass('navRed');
				nav02.removeClass('navRed');
				nav03.removeClass('navRed');
				nav04.removeClass('navRed');
				nav05.removeClass('navRed');
				nav06.removeClass('navRed');
				nav07.addClass('navRed');
				};

//events
btn301_1N.click(function(){
	gotoSec301_2();
});

btn301_2P.click(function(){
	backtoSec301_1();
});

btn301_2N.click(function(){
	gotoSec301_3();
});

btn301_3P.click(function(){
	backtoSec301_2();
});

btn301_3N.click(function(){
	gotoSec301_4();
});

btn301_4P.click(function(){
	backtoSec301_3();
});

btn301_4N.click(function(){
	gotoSec301_5();
});

btn301_5P.click(function(){
	backtoSec301_4();
});

btn301_5N.click(function(){
	gotoSec301_6();
});

btn301_6P.click(function(){
	backtoSec301_5();
});

btn301_6N.click(function(){
	gotoSec301_7();
});

btn301_7P.click(function(){
	backtoSec301_6();
});

nav01.click(function(){
	toSec301_1();
});

nav02.click(function(){
	toSec301_2();
});

nav03.click(function(){
	toSec301_3();
});

nav04.click(function(){
	toSec301_4();
});

nav05.click(function(){
	toSec301_5();
});

nav06.click(function(){
	toSec301_6();
});

nav07.click(function(){
	toSec301_7();
});





//section302-----------------------------------------

