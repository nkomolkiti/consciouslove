

//NAV BAR-----------------------------------
var chapterList = $('.menu');
var exitButton = $('.exitBtn');

chapterList.hide();

$('#selectChapters').click(function(){
	chapterList.slideDown(400);
});

exitButton.click(function(){
	chapterList.slideUp(400);
});

$('#logoImage').append('<img src="image/logowhite.svg" alt="logo" class="left logo" width="80px">');
$('#profileMenu').append('<img src="image/profiletest.jpg" alt="profilc pic">');
$('#selectChapters').append('<div><p class="chaptersBtn buttonText">SELECT CHAPTERS<img src="image/carrot.svg" width="10px" class="carrot"></p></div>');
$('#homepage').append('<p class="buttonText chaptersBtn">ABOUT</p>');

$('#allChapterLinks').append('<div id="chapter1Link"><p class="chapterText">CHAPTER 01</p><h1 class="menuTitle">intention & meaning</h1><p>It is easy to miscommunicate when talking to children. A normal statement or certain reactions might turn into a quiet form of verbal abuse if used incorrectly and repetitively. Flip the cards to learn about the alternatives!</p></div><div id="chapter2Link"><p class="chapterText">CHAPTER 02</p><h1 class="menuTitle">verbal abuse</h1><p>Learn more about verbal abuse: how it can be quiet, repetitive, and unintentional. This chapter includes the description, impacts, and examples for each type of verbal absue.</p></div><div id="chapter3Link"><p class="chapterText">CHAPTER 03</p><h1 class="menuTitle">parenting tips</h1><p>It can be stressful for new parents to take care of children. This chapter includes tips to talking positively, common situations that considered stressful, and how to approach children by age.</p></div>');

$('#homepage').click(function(){
	window.location.href = 'index.html';
  return false;
});

$('#chapter1Link').click(function(){
	window.location.href = 'chapter-1.html';
  return false;
});

$('#chapter2Link').click(function(){
	window.location.href = 'chapter-2.html';
  return false;
});

$('#chapter3Link').click(function(){
	window.location.href = 'chapter-3.html';
  return false;
});

//END NAV BAR-------------------------------

$(document).ready(function(){

//FLIPCARDS ------------------------------
$('.flipButton').click(function() {
    $(this).parent().parent().parent(".flip-container").toggleClass('active');
});
$('.front .flipButton').append('<p>FLIP &#10230;</p>');
$('.back .flipButton').append('<p>&#10229; BACK</p>');


//scroll to top ------------------------------
var scroll_top_duration = 700,
$back_to_top = $('.cd-top');

$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
});

//count percentage on load
// $(function() {
//     function count($this){
//         var current = parseInt($this.html(), 10);
//         $this.html(++current);
//         if(current !== $this.data('count')){
//             setTimeout(function(){count($this)}, 30);
//         }
//     }
//   $(".percentageNumber").each(function() {
//       $(this).data('count', parseInt($(this).html(), 10));
//       $(this).html('0');
//       count($(this));
//   });
// });

//when scroll>count number
var a = 0;
$(window).scroll(function() {

  var oTop = $('#percentageChartdiv').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.percentageNumber').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


//FOOTER ------------------------------
$('footer').append('<div><div class="left"><p class="rights">2017 Degree Project "Conscious Love" all rights reserved.</p></div><div class="right"><p class="rights">Asama Sangiamkittikul and Nisharee "Fah" Komolkiti.</p></div></div>');

});//end document ready

//TYPES of VEBAL ABUSE-------------------

//TOGGLE MINUS/PLUS
var plusIcon = $('.togglePlus');
var minusIcon = $('.toggleMinus');
plusIcon.append('<img src="image/plus.svg" height="12px">');
minusIcon.append('<img src="image/minus.svg" width="12px">');

// var tab1title = $('#cssmenu > ul > li:first-child .typesTitle');
var tab1 = $('#cssmenu > ul > li:first-child > a');
var tab1Ul = $('#cssmenu > ul > li:first-child > ul');
var plus1 = $('#cssmenu > ul > li:first-child .togglePlus');
var minus1 = $('#cssmenu > ul > li:first-child .toggleMinus');

// var tab2title = $('#cssmenu > ul > li:nth-child(2) .typesTitle');
var tab2 = $('#cssmenu > ul > li:nth-child(2) > a');
var tab2Ul = $('#cssmenu > ul > li:nth-child(2) > ul');
var plus2 = $('#cssmenu > ul > li:nth-child(2) .togglePlus');
var minus2 = $('#cssmenu > ul > li:nth-child(2) .toggleMinus');

var tab3 = $('#cssmenu > ul > li:nth-child(3) > a');
var tab3Ul = $('#cssmenu > ul > li:nth-child(3) > ul');
var plus3 = $('#cssmenu > ul > li:nth-child(3) .togglePlus');
var minus3 = $('#cssmenu > ul > li:nth-child(3) .toggleMinus');

var tab4 = $('#cssmenu > ul > li:nth-child(4) > a');
var tab4Ul = $('#cssmenu > ul > li:nth-child(4) > ul');
var plus4 = $('#cssmenu > ul > li:nth-child(4) .togglePlus');
var minus4 = $('#cssmenu > ul > li:nth-child(4) .toggleMinus');

var tab5 = $('#cssmenu > ul > li:nth-child(5) > a');
var tab5Ul = $('#cssmenu > ul > li:nth-child(5) > ul');
var plus5 = $('#cssmenu > ul > li:nth-child(5) .togglePlus');
var minus5 = $('#cssmenu > ul > li:nth-child(5) .toggleMinus');

var tab6 = $('#cssmenu > ul > li:nth-child(6) > a');
var tab6Ul = $('#cssmenu > ul > li:nth-child(6) > ul');
var plus6 = $('#cssmenu > ul > li:nth-child(6) .togglePlus');
var minus6 = $('#cssmenu > ul > li:nth-child(6) .toggleMinus');

var tab7 = $('#cssmenu > ul > li:nth-child(7) > a');
var tab7Ul = $('#cssmenu > ul > li:nth-child(7) > ul');
var plus7 = $('#cssmenu > ul > li:nth-child(7) .togglePlus');
var minus7 = $('#cssmenu > ul > li:nth-child(7) .toggleMinus');

var tab8 = $('#cssmenu > ul > li:nth-child(8) > a');
var tab8Ul = $('#cssmenu > ul > li:nth-child(8) > ul');
var plus8 = $('#cssmenu > ul > li:nth-child(8) .togglePlus');
var minus8 = $('#cssmenu > ul > li:nth-child(8) .toggleMinus');

var tab9 = $('#cssmenu > ul > li:nth-child(9) > a');
var tab9Ul = $('#cssmenu > ul > li:nth-child(9) > ul');
var plus9 = $('#cssmenu > ul > li:nth-child(9) .togglePlus');
var minus9 = $('#cssmenu > ul > li:nth-child(9) .toggleMinus');

var tab10 = $('#cssmenu > ul > li:nth-child(10) > a');
var tab10Ul = $('#cssmenu > ul > li:nth-child(10) > ul');
var plus10 = $('#cssmenu > ul > li:nth-child(10) .togglePlus');
var minus10 = $('#cssmenu > ul > li:nth-child(10) .toggleMinus');

var tab11 = $('#cssmenu > ul > li:nth-child(11) > a');
var tab11Ul = $('#cssmenu > ul > li:nth-child(11) > ul');
var plus11 = $('#cssmenu > ul > li:nth-child(11) .togglePlus');
var minus11 = $('#cssmenu > ul > li:nth-child(11) .toggleMinus');

var tab12 = $('#cssmenu > ul > li:last-child > a');
var tab12Ul = $('#cssmenu > ul > li:last-child > ul');
var plus12 = $('#cssmenu > ul > li:last-child .togglePlus');
var minus12 = $('#cssmenu > ul > li:last-child .toggleMinus');

function toggleOpen1(){
	// tab1title.addClass('typesTitleRed');
	plus1.addClass('hide');
	plus1.removeClass('show');
	minus1.removeClass('hide');
	minus1.addClass('show');
};

function toggleClose1(){
	// tab1title.removeClass('typesTitleRed');
	plus1.addClass('show');
	plus1.removeClass('hide');
	minus1.addClass('hide');
	minus1.removeClass('show');
};

function toggleOpen2(){
	// tab2title.addClass('typesTitleRed');
	plus2.addClass('hide');
	plus2.removeClass('show');
	minus2.removeClass('hide');
	minus2.addClass('show');
};

function toggleClose2(){
	// tab2title.removeClass('typesTitleRed');
	plus2.addClass('show');
	plus2.removeClass('hide');
	minus2.addClass('hide');
	minus2.removeClass('show');
};

function toggleOpen3(){
	plus3.addClass('hide');
	plus3.removeClass('show');
	minus3.removeClass('hide');
	minus3.addClass('show');
};

function toggleClose3(){
	plus3.addClass('show');
	plus3.removeClass('hide');
	minus3.addClass('hide');
	minus3.removeClass('show');
};

function toggleOpen4(){
	plus4.addClass('hide');
	plus4.removeClass('show');
	minus4.removeClass('hide');
	minus4.addClass('show');
};

function toggleClose4(){
	plus4.addClass('show');
	plus4.removeClass('hide');
	minus4.addClass('hide');
	minus4.removeClass('show');
};

function toggleOpen5(){
	plus5.addClass('hide');
	plus5.removeClass('show');
	minus5.removeClass('hide');
	minus5.addClass('show');
};

function toggleClose5(){
	plus5.addClass('show');
	plus5.removeClass('hide');
	minus5.addClass('hide');
	minus5.removeClass('show');
};

function toggleOpen6(){
	plus6.addClass('hide');
	plus6.removeClass('show');
	minus6.removeClass('hide');
	minus6.addClass('show');
};

function toggleClose6(){
	plus6.addClass('show');
	plus6.removeClass('hide');
	minus6.addClass('hide');
	minus6.removeClass('show');
};

function toggleOpen7(){
	plus7.addClass('hide');
	plus7.removeClass('show');
	minus7.removeClass('hide');
	minus7.addClass('show');
};

function toggleClose7(){
	plus7.addClass('show');
	plus7.removeClass('hide');
	minus7.addClass('hide');
	minus7.removeClass('show');
};

function toggleOpen8(){
	plus8.addClass('hide');
	plus8.removeClass('show');
	minus8.removeClass('hide');
	minus8.addClass('show');
};

function toggleClose8(){
	plus8.addClass('show');
	plus8.removeClass('hide');
	minus8.addClass('hide');
	minus8.removeClass('show');
};

function toggleOpen9(){
	plus9.addClass('hide');
	plus9.removeClass('show');
	minus9.removeClass('hide');
	minus9.addClass('show');
};

function toggleClose9(){
	plus9.addClass('show');
	plus9.removeClass('hide');
	minus9.addClass('hide');
	minus9.removeClass('show');
};

function toggleOpen10(){
	plus10.addClass('hide');
	plus10.removeClass('show');
	minus10.removeClass('hide');
	minus10.addClass('show');
};

function toggleClose10(){
	plus10.addClass('show');
	plus10.removeClass('hide');
	minus10.addClass('hide');
	minus10.removeClass('show');
};

function toggleOpen11(){
	plus11.addClass('hide');
	plus11.removeClass('show');
	minus11.removeClass('hide');
	minus11.addClass('show');
};

function toggleClose11(){
	plus11.addClass('show');
	plus11.removeClass('hide');
	minus11.addClass('hide');
	minus11.removeClass('show');
};

function toggleOpen12(){
	plus12.addClass('hide');
	plus12.removeClass('show');
	minus12.removeClass('hide');
	minus12.addClass('show');
};

function toggleClose12(){
	plus12.addClass('show');
	plus12.removeClass('hide');
	minus12.addClass('hide');
	minus12.removeClass('show');
};



tab1.click(function(){
	if(!tab1Ul.is(':visible')){
		toggleOpen1();
		toggleClose2();
		toggleClose3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose1();
	}
});

tab2.click(function(){
	if(!tab2Ul.is(':visible')){
		toggleClose1();
		toggleOpen2();
		toggleClose3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose2();
	}
});

tab3.click(function(){
	if(!tab3Ul.is(':visible')){
		toggleClose1();
		toggleClose2();
		toggleOpen3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose3();
	}
});

tab4.click(function(){
	if(!tab4Ul.is(':visible')){
		toggleClose1();
		toggleClose2();
		toggleOpen4();
		toggleClose3();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose4();
	}
});

tab5.click(function(){
	if(!tab5Ul.is(':visible')){
		toggleClose1();
		toggleClose2();
		toggleOpen5();
		toggleClose4();
		toggleClose3();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose5();
	}
});

tab6.click(function(){
	if(!tab6Ul.is(':visible')){
		toggleOpen6();
		toggleClose1();
		toggleClose2();
		toggleClose4();
		toggleClose5();
		toggleClose3();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose6();
	}
});

tab7.click(function(){
	if(!tab7Ul.is(':visible')){
		toggleOpen7();
		toggleClose1();
		toggleClose2();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose3();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose7();
	}
});

tab8.click(function(){
	if(!tab8Ul.is(':visible')){
		toggleOpen8();
		toggleClose1();
		toggleClose2();
		toggleClose3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose9();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose8();
	}
});

tab9.click(function(){
	if(!tab9Ul.is(':visible')){
		toggleOpen9();
		toggleClose1();
		toggleClose2();
		toggleClose3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose10();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose9();
	}
});

tab10.click(function(){
	if(!tab10Ul.is(':visible')){
		toggleOpen10();
		toggleClose1();
		toggleClose2();
		toggleClose3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose11();
		toggleClose12();
	} else {
		toggleClose10();
	}
});

tab11.click(function(){
	if(!tab11Ul.is(':visible')){
		toggleOpen11();
		toggleClose1();
		toggleClose2();
		toggleClose3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose12();
	} else {
		toggleClose11();
	}
});

tab12.click(function(){
	if(!tab12Ul.is(':visible')){
		toggleOpen12();
		toggleClose1();
		toggleClose2();
		toggleClose3();
		toggleClose4();
		toggleClose5();
		toggleClose6();
		toggleClose7();
		toggleClose8();
		toggleClose9();
		toggleClose10();
		toggleClose11();
	} else {
		toggleClose12();
	}
});



//TOGGLE TEXT
$("#cssmenu").addClass("js").before('<a id="nav-toggle" href="#"><span></span></a>');
$("#nav-toggle").click(function(){
  $("#cssmenu").slideToggle(500);
  this.classList.toggle( "active" );
});
$(window).resize(function(){
  if(window.innerWidth > 800) {
    $("#cssmenu").removeAttr("style");
  }
});

( function( $ ) {
$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active'); //toggle open

  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active'); //close the one on click
    checkElement.slideUp('normal');

  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal'); //the other that is opened gets closed
    checkElement.slideDown('normal'); //open the one clicked
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;
  }
});
});
} )( jQuery );
//END TYPES OF VERBAL ABUSE-------------------------------------

//REFERNCE-------------------------------------
// $('#reference').click( function(){
// 	$('#popupRef').addClass('show');
// 	$('#popupRef').removeClass('hide');
// });

// $('.exitRefBtn').click( function(){
// 	$('#popupRef').removeClass('show');
// 	$('#popupRef').addClass('hide');
// });