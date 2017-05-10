

//CHAPTER 3 BOXES------------------------------------
//NAV-------------------------------
var nav01 = $('.nav1'); //section301
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
var nav011 = $('.nav11'); //section302
var nav022 = $('.nav22');
var nav033 = $('.nav33');
var nav044 = $('.nav44');

var btn302_1N = $('#btn302-1N');
var btn302_2P = $('#btn302-2P');
var btn302_2N = $('#btn302-2N');
var btn302_3P = $('#btn302-3P');
var btn302_3N = $('#btn302-3N');
var btn302_4P = $('#btn302-4P');

var sec302_1 = $('#section302-1');
var sec302_2 = $('#section302-2');
var sec302_3 = $('#section302-3');
var sec302_4 = $('#section302-4');

var backtoSec302_1 = function (){
				sec302_1.addClass('show');
				sec302_1.removeClass('hide');
				sec302_2.addClass('hide');
				sec302_2.removeClass('show');
				nav011.addClass('navRed');
				nav022.removeClass('navRed');
				};

var gotoSec302_2 = function (){
				sec302_1.removeClass('show');
				sec302_1.addClass('hide');
				sec302_2.removeClass('hide');
				sec302_2.addClass('show');
				nav011.removeClass('navRed');
				nav022.addClass('navRed');
				};

var backtoSec302_2 = function (){
				sec302_2.addClass('show');
				sec302_2.removeClass('hide');
				sec302_3.addClass('hide');
				sec302_3.removeClass('show');
				nav022.addClass('navRed');
				nav033.removeClass('navRed');
				};				

var gotoSec302_3 = function (){
				sec302_2.removeClass('show');
				sec302_2.addClass('hide');
				sec302_3.removeClass('hide');
				sec302_3.addClass('show');
				nav022.removeClass('navRed');
				nav033.addClass('navRed');
				};

var backtoSec302_3 = function (){
				sec302_3.addClass('show');
				sec302_3.removeClass('hide');
				sec302_4.addClass('hide');
				sec302_4.removeClass('show');
				nav033.addClass('navRed');
				nav044.removeClass('navRed');
				};	

var gotoSec302_4 = function (){
				sec302_3.removeClass('show');
				sec302_3.addClass('hide');
				sec302_4.removeClass('hide');
				sec302_4.addClass('show');
				nav033.removeClass('navRed');
				nav044.addClass('navRed');
				};

var backtoSec302_4 = function (){
				sec302_4.addClass('show');
				sec302_4.removeClass('hide');
				nav044.addClass('navRed');
				};	

var toSec302_1 = function (){
				sec302_1.addClass('show');
				sec302_1.removeClass('hide');
				sec302_2.addClass('hide');
				sec302_2.removeClass('show');
				sec302_3.addClass('hide');
				sec302_3.removeClass('show');
				sec302_4.addClass('hide');
				sec302_4.removeClass('show');
				nav011.addClass('navRed');
				nav022.removeClass('navRed');
				nav033.removeClass('navRed');
				nav044.removeClass('navRed');
				};

var toSec302_2 = function (){
				sec302_1.removeClass('show');
				sec302_1.addClass('hide');
				sec302_2.removeClass('hide');
				sec302_2.addClass('show');
				sec302_3.addClass('hide');
				sec302_3.removeClass('show');
				sec302_4.addClass('hide');
				sec302_4.removeClass('show');
				nav011.removeClass('navRed');
				nav022.addClass('navRed');
				nav033.removeClass('navRed');
				nav044.removeClass('navRed');
				};

var toSec302_3 = function (){
				sec302_1.removeClass('show');
				sec302_1.addClass('hide');
				sec302_2.addClass('hide');
				sec302_2.removeClass('show');
				sec302_3.removeClass('hide');
				sec302_3.addClass('show');
				sec302_4.addClass('hide');
				sec302_4.removeClass('show');
				nav011.removeClass('navRed');
				nav022.removeClass('navRed');
				nav033.addClass('navRed');
				nav044.removeClass('navRed');
				};

var toSec302_4 = function (){
				sec302_1.removeClass('show');
				sec302_1.addClass('hide');
				sec302_2.addClass('hide');
				sec302_2.removeClass('show');
				sec302_3.addClass('hide');
				sec302_3.removeClass('show');
				sec302_4.removeClass('hide');
				sec302_4.addClass('show');
				nav011.removeClass('navRed');
				nav022.removeClass('navRed');
				nav033.removeClass('navRed');
				nav044.addClass('navRed');
				};


//events
btn302_1N.click(function(){
	gotoSec302_2();
});

btn302_2P.click(function(){
	backtoSec302_1();
});

btn302_2N.click(function(){
	gotoSec302_3();
});

btn302_3P.click(function(){
	backtoSec302_2();
});

btn302_3N.click(function(){
	gotoSec302_4();
});

btn302_4P.click(function(){
	backtoSec302_3();
});

nav011.click(function(){
	toSec302_1();
});

nav022.click(function(){
	toSec302_2();
});

nav033.click(function(){
	toSec302_3();
});

nav044.click(function(){
	toSec302_4();
});



//section303-----------------------------------------
var nav0111 = $('.nav111'); //section303
var nav0222 = $('.nav222');
var nav0333 = $('.nav333');
var nav0444 = $('.nav444');

var btn303_1N = $('#btn303-1N');
var btn303_2P = $('#btn303-2P');
var btn303_2N = $('#btn303-2N');
var btn303_3P = $('#btn303-3P');
var btn303_3N = $('#btn303-3N');
var btn303_4P = $('#btn303-4P');

var sec303_1 = $('#section303-1');
var sec303_2 = $('#section303-2');
var sec303_3 = $('#section303-3');
var sec303_4 = $('#section303-4');

var backtoSec303_1 = function (){
				sec303_1.addClass('show');
				sec303_1.removeClass('hide');
				sec303_2.addClass('hide');
				sec303_2.removeClass('show');
				nav0111.addClass('navRed');
				nav0222.removeClass('navRed');
				};

var gotoSec303_2 = function (){
				sec303_1.removeClass('show');
				sec303_1.addClass('hide');
				sec303_2.removeClass('hide');
				sec303_2.addClass('show');
				nav0111.removeClass('navRed');
				nav0222.addClass('navRed');
				};

var backtoSec303_2 = function (){
				sec303_2.addClass('show');
				sec303_2.removeClass('hide');
				sec303_3.addClass('hide');
				sec303_3.removeClass('show');
				nav0222.addClass('navRed');
				nav0333.removeClass('navRed');
				};				

var gotoSec303_3 = function (){
				sec303_2.removeClass('show');
				sec303_2.addClass('hide');
				sec303_3.removeClass('hide');
				sec303_3.addClass('show');
				nav0222.removeClass('navRed');
				nav0333.addClass('navRed');
				};

var backtoSec303_3 = function (){
				sec303_3.addClass('show');
				sec303_3.removeClass('hide');
				sec303_4.addClass('hide');
				sec303_4.removeClass('show');
				nav0333.addClass('navRed');
				nav0444.removeClass('navRed');
				};	

var gotoSec303_4 = function (){
				sec303_3.removeClass('show');
				sec303_3.addClass('hide');
				sec303_4.removeClass('hide');
				sec303_4.addClass('show');
				nav0333.removeClass('navRed');
				nav0444.addClass('navRed');
				};

var backtoSec303_4 = function (){
				sec303_4.addClass('show');
				sec303_4.removeClass('hide');
				nav0444.addClass('navRed');
				};	

var toSec303_1 = function (){
				sec303_1.addClass('show');
				sec303_1.removeClass('hide');
				sec303_2.addClass('hide');
				sec303_2.removeClass('show');
				sec303_3.addClass('hide');
				sec303_3.removeClass('show');
				sec303_4.addClass('hide');
				sec303_4.removeClass('show');
				nav0111.addClass('navRed');
				nav0222.removeClass('navRed');
				nav0333.removeClass('navRed');
				nav0444.removeClass('navRed');
				};

var toSec303_2 = function (){
				sec303_1.removeClass('show');
				sec303_1.addClass('hide');
				sec303_2.removeClass('hide');
				sec303_2.addClass('show');
				sec303_3.addClass('hide');
				sec303_3.removeClass('show');
				sec303_4.addClass('hide');
				sec303_4.removeClass('show');
				nav0111.removeClass('navRed');
				nav0222.addClass('navRed');
				nav0333.removeClass('navRed');
				nav0444.removeClass('navRed');
				};

var toSec303_3 = function (){
				sec303_1.removeClass('show');
				sec303_1.addClass('hide');
				sec303_2.addClass('hide');
				sec303_2.removeClass('show');
				sec303_3.removeClass('hide');
				sec303_3.addClass('show');
				sec303_4.addClass('hide');
				sec303_4.removeClass('show');
				nav0111.removeClass('navRed');
				nav0222.removeClass('navRed');
				nav0333.addClass('navRed');
				nav0444.removeClass('navRed');
				};

var toSec303_4 = function (){
				sec303_1.removeClass('show');
				sec303_1.addClass('hide');
				sec303_2.addClass('hide');
				sec303_2.removeClass('show');
				sec303_3.addClass('hide');
				sec303_3.removeClass('show');
				sec303_4.removeClass('hide');
				sec303_4.addClass('show');
				nav0111.removeClass('navRed');
				nav0222.removeClass('navRed');
				nav0333.removeClass('navRed');
				nav0444.addClass('navRed');
				};


//events
btn303_1N.click(function(){
	gotoSec303_2();
});

btn303_2P.click(function(){
	backtoSec303_1();
});

btn303_2N.click(function(){
	gotoSec303_3();
});

btn303_3P.click(function(){
	backtoSec303_2();
});

btn303_3N.click(function(){
	gotoSec303_4();
});

btn303_4P.click(function(){
	backtoSec303_3();
});

nav0111.click(function(){
	toSec303_1();
});

nav0222.click(function(){
	toSec303_2();
});

nav0333.click(function(){
	toSec303_3();
});

nav0444.click(function(){
	toSec303_4();
});



