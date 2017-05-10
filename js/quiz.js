$(document).ready(function(){

//PREQUIZ--------------------------------------------------------
var preAnswers1 = $("#pre1a1div, #pre1a2div, #pre1a3div");
var preAnswers2 = $("#pre2a1div, #pre2a2div");
var preQuiz = $("#preQuizQuestion");
var selected;

function preQuizMove(){
  preQuiz.animate({"margin-left":"-=250px"},400);
  //after 20 seconds, this move back function executes
  setTimeout( function(){
    if(!($(".pre2").is(':checked'))){
      preQuizMoveBack1();
    }
  }, 20000)

};

function preQuizMove2(){
  preQuiz.animate({"margin-left":"-=250px"},400);
}

function preQuizMoveBack1(){
  preQuiz.animate({"margin-left":"+=250px"},0);
  $('.pre1').prop('checked', false); //uncheck question1
};

function preQuizMoveBack2(){
  preQuiz.animate({"margin-left":"+=500px"},0);
  $('.pre1').prop('checked', false); //uncheck question1
  $('.pre2').prop('checked', false); //uncheck question2
};


preAnswers1.click(function (){
  selected = $("input[type=radio][class=pre1]:checked").val();
  if(selected === "all"){
      preQuizMove();
  };
});

preAnswers2.click(function (){
  selected = $("input[type=radio][class=pre2]:checked").val();
  if(selected === "all"){
  preQuizMove2();
  }
  setTimeout( function(){preQuizMoveBack2();}, 20000)
});



//--------------------------------------------------------------------


//FINAL TEST-----------------------------------------------------
var movingDiv = $('#movingTestDiv');
var q1 = $('#q1');
var q2 = $('#q2');
var q3 = $('#q3');
var q4 = $('#q4');
var q5 = $('#q5');

//find width of a div
var widthq1 = q1.width(); //initial 670px
var widthq2 = q2.width();
var widthq3 = q3.width();
var widthq4 = q4.width();
var widthq5 = q5.width();
var onewidth = widthq1+4.25;
var twowidths = widthq2+widthq3+8.5;
var threewidths = widthq2+widthq3+12.75;
var allwidth = widthq2+widthq3+widthq4+widthq5+17;



//QUESTION 1---------------------------------------------------------

//make sure all things are checked-------
$('#q1a1div').click( function(){
  $("#q1a1").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q1a2div').click( function(){
  $("#q1a2").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q1a3div').click( function(){
  $("#q1a3").prop("checked", true); 
  $(this).addClass('whiteBackground');
});

//correct answer q1--------------------------
function q1Tick(){
  $('#q1a1Text').after('<img src="image/check-02.svg" width="21"/>'); //check mark
 };

var divsQuestion1 = $("#q1a1div, #q1a2div, #q1a3div");

//answer and respond q1----------------------------
divsQuestion1.click(function answered1(){
      var selectedQ1 = $("input[type=radio][class=radio]:checked").val();
      if(selectedQ1 === "correct"){
        q1Tick();
        setTimeout( function(){testMove();}, 500);
      } else if (selectedQ1 === "wrong") {
        q1Tick();
        $(this).find(".wrong1").after('<img src="image/check-01.svg" width="17"/>');  //cross mark
        setTimeout( function(){testMove();}, 500);
      }; 
      divsQuestion1.unbind('click'); //remove click function from the targeted divs
      setTimeout( function(){redA2init();}, 500);
});




//QUESTION 2---------------------------------------------------------

//make sure all things are checked-------
$('#q2a1div').click( function(){
  $("#q2a1").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q2a2div').click( function(){
  $("#q2a2").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q2a3div').click( function(){
  $("#q2a3").prop("checked", true); 
  $(this).addClass('whiteBackground');
});

//correct answer q2--------------------------
function q2Tick(){
  $('#q2a2Text').after('<img src="image/check-02.svg" width="21"/>');
 };

var divsQuestion2 = $("#q2a1div, #q2a2div, #q2a3div");

//answer and respond q2----------------------------
divsQuestion2.click(function answered2(){
  var selectedQ2 = $("input[type=radio][class=radio2]:checked").val();
  if(selectedQ2 === "correct"){
    q2Tick();
    setTimeout( function(){testMove2();}, 500);
  } else if (selectedQ2 === "wrong") {
    q2Tick();
    $(this).find(".wrong2").after('<img src="image/check-01.svg" width="17"/>');  
    setTimeout( function(){testMove2();}, 500);
  }; 
  
  divsQuestion2.unbind('click'); //remove click function from the targeted divs
  setTimeout( function(){redA3init();}, 500);
});



//QUESTION 3---------------------------------------------------------

//make sure all things are checked-------
$('#q3a1div').click( function(){
  $("#q3a1").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q3a2div').click( function(){
  $("#q3a2").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q3a3div').click( function(){
  $("#q3a3").prop("checked", true); 
  $(this).addClass('whiteBackground');
});

//correct answer q2--------------------------
function q3Tick(){
  $('#q3a1Text').after('<img src="image/check-02.svg" width="21"/>');
 };

var divsQuestion3 = $("#q3a1div, #q3a2div, #q3a3div");

//answer and respond q2----------------------------
divsQuestion3.click(function answered3(){
  var selectedQ3 = $("input[type=radio][class=radio3]:checked").val();
  if(selectedQ3 === "correct"){
    q3Tick();
    setTimeout( function(){testMove3();}, 500);
  } else if (selectedQ3 === "wrong") {
    q3Tick();
    $(this).find(".wrong3").after('<img src="image/check-01.svg" width="17"/>');  
    setTimeout( function(){testMove3();}, 500);
  }; 
  
  divsQuestion3.unbind('click'); //remove click function from the targeted divs
  setTimeout( function(){redA4init();}, 500);
});



//QUESTION 4---------------------------------------------------------

//make sure all things are checked-------
$('#q4a1div').click( function(){
  $("#q4a1").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q4a2div').click( function(){
  $("#q4a2").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q4a3div').click( function(){
  $("#q4a3").prop("checked", true); 
  $(this).addClass('whiteBackground');
});

//correct answer q2--------------------------
function q4Tick(){
  $('#q4a3Text').after('<img src="image/check-02.svg" width="21"/>');
 };

var divsQuestion4 = $("#q4a1div, #q4a2div, #q4a3div");

//answer and respond q2----------------------------
divsQuestion4.click(function answered4(){
  var selectedQ4 = $("input[type=radio][class=radio4]:checked").val();
  if(selectedQ4 === "correct"){
    q4Tick();
    setTimeout( function(){testMove4();}, 500);
  } else if (selectedQ4 === "wrong") {
    q4Tick();
    $(this).find(".wrong4").after('<img src="image/check-01.svg" width="17"/>');  
    setTimeout( function(){testMove4();}, 500);
  }; 
  
  divsQuestion4.unbind('click'); //remove click function from the targeted divs
  setTimeout( function(){redA5init();}, 500);
});



//QUESTION 5---------------------------------------------------------

//make sure all things are checked-------
$('#q5a1div').click( function(){
  $("#q5a1").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q5a2div').click( function(){
  $("#q5a2").prop("checked", true);
  $(this).addClass('whiteBackground');
});

$('#q5a3div').click( function(){
  $("#q5a3").prop("checked", true); 
  $(this).addClass('whiteBackground');
});

//correct answer q2--------------------------
function q5Tick(){
  $('#q5a2Text').after('<img src="image/check-02.svg" width="21"/>');
 };

var divsQuestion5 = $("#q5a1div, #q5a2div, #q5a3div");

//answer and respond q2----------------------------
divsQuestion5.click(function answered5(){
  var selectedQ5 = $("input[type=radio][class=radio5]:checked").val();
  if(selectedQ5 === "correct"){
    q5Tick();
    setTimeout( function(){badgeAppear();}, 500);
  } else if (selectedQ5 === "wrong") {
    q5Tick();
    $(this).find(".wrong5").after('<img src="image/check-01.svg" width="17"/>');  
    setTimeout( function(){badgeAppear();}, 500);
  }; 
  
  divsQuestion5.unbind('click'); //remove click function from the targeted divs
});




//SCROLL TO NEXT QUESTION---------------------------------------------------------

//moving functions
function testMove(){
  movingDiv.animate({"margin-left":"-=" + (widthq1+4.25)},400);
};

function testMove2(){
  movingDiv.animate({"margin-left":"-=" + (widthq2+4.25)},400);
}

function testMove3(){
  movingDiv.animate({"margin-left":"-=" + (widthq3+4.25)},400);
}

function testMove4(){
  movingDiv.animate({"margin-left":"-=" + (widthq4+4.25)},400);
}

function testMoveBackto1(){
  movingDiv.animate({"margin-left":"+=" + (widthq2+4.25)},400);
};

function testMoveBackto2(){
  movingDiv.animate({"margin-left":"+=" + (widthq3+4.25)},400);
};

function testMoveBackto3(){
  movingDiv.animate({"margin-left":"+=" + (widthq4+4.25)},400);
};

function testMoveBackto4(){
  movingDiv.animate({"margin-left":"+=" + (widthq5+4.25)},400);
};

function resetTo1(){
  movingDiv.animate({"margin-left":"+=" + (allwidth)},400)
};

function moveBackOne(){
  movingDiv.animate({"margin-left":"+=" + onewidth},400);
};

function moveBackTwo(){
  movingDiv.animate({"margin-left":"+=" + twowidths},400);
};

function moveBackThree(){
  movingDiv.animate({"margin-left":"+=" + threewidths},400);
};

function moveOne(){
  movingDiv.animate({"margin-left":"-=" + onewidth},400);
};

function moveTwo(){
  movingDiv.animate({"margin-left":"-=" + twowidths},400);
};

function moveThree(){
  movingDiv.animate({"margin-left":"-=" + threewidths},400);
};

function moveFour(){
  movingDiv.animate({"margin-left":"-=" + allwidth},400);
};



//NUMBER NAV---------------------------------------------------------
var a1 = $('.A1');
var a2 = $('.A2');
var a3 = $('.A3');
var a4 = $('.A4');
var a5 = $('.A5');
var aa = $('#testNumbersNav a');

// for (var i = 0; i < aa.length; i++) {

        a1.click(function (){
          if(a2.hasClass('active')){
            moveBackOne();
          } else if(a3.hasClass('active')){
            moveBackTwo();
          } else if(a4.hasClass('active')){
            moveBackThree();
          } else if(a5.hasClass('active')){
            resetTo1();
          };

          redA1();
        });

        a2.click(function (){
          if(a3.hasClass('active')){
            moveBackOne();
          } else if(a4.hasClass('active')){
            moveBackTwo();
          } else if(a5.hasClass('active')){
            moveBackThree();
          } else if(a1.hasClass('active')){
            moveOne();
          };

          redA2();
        });

        a3.click(function (){
          if(a4.hasClass('active')){
            moveBackOne();
          } else if(a5.hasClass('active')){
            moveBackTwo();
          } else if(a2.hasClass('active')){
            moveOne();
          } else if(a1.hasClass('active')){
            moveTwo();
          };
          
          redA3();
        });

        a4.click(function (){
          if(a5.hasClass('active')){
            moveBackOne();
          } else if(a1.hasClass('active')){
            moveThree();
          } else if(a3.hasClass('active')){
            moveOne();
          } else if(a2.hasClass('active')){
            moveTwo();
          };
          
          redA4();
        });

        a5.click(function (){
          if(a4.hasClass('active')){
            moveOne();
          } else if(a2.hasClass('active')){
            moveThree();
          } else if(a1.hasClass('active')){
            moveFour();
          } else if(a3.hasClass('active')){
            moveTwo();
          };
          
          redA5();
        });




// };


function redA1(){
  a1.addClass('redNumber');
  a1.removeClass('blackNumber');
  a2.removeClass('redNumber');
  a2.addClass('blackNumber');
  a3.removeClass('redNumber');
  a3.addClass('blackNumber');
  a4.removeClass('redNumber');
  a4.addClass('blackNumber');
  a5.removeClass('redNumber');
  a5.addClass('blackNumber');

  a1.addClass('active');
  a1.removeClass('deactive');
  a2.removeClass('active');
  a2.addClass('deactive');
  a3.removeClass('active');
  a3.addClass('deactive');
  a4.removeClass('active');
  a4.addClass('deactive');
  a5.removeClass('active');
  a5.addClass('deactive');
};

function redA2(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.addClass('redNumber');
  a2.removeClass('blackNumber');
  a3.removeClass('redNumber');
  a3.addClass('blackNumber');
  a4.removeClass('redNumber');
  a4.addClass('blackNumber');
  a5.removeClass('redNumber');
  a5.addClass('blackNumber');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.addClass('active');
  a2.removeClass('deactive');
  a3.removeClass('active');
  a3.addClass('deactive');
  a4.removeClass('active');
  a4.addClass('deactive');
  a5.removeClass('active');
  a5.addClass('deactive');
};

function redA3(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.removeClass('redNumber');
  a2.addClass('blackNumber');
  a3.addClass('redNumber');
  a3.removeClass('blackNumber');
  a4.removeClass('redNumber');
  a4.addClass('blackNumber');
  a5.removeClass('redNumber');
  a5.addClass('blackNumber');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.removeClass('active');
  a2.addClass('deactive');
  a3.addClass('active');
  a3.removeClass('deactive');
  a4.removeClass('active');
  a4.addClass('deactive');
  a5.removeClass('active');
  a5.addClass('deactive');
};

function redA4(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.removeClass('redNumber');
  a2.addClass('blackNumber');
  a3.removeClass('redNumber');
  a3.addClass('blackNumber');
  a4.addClass('redNumber');
  a4.removeClass('blackNumber');
  a5.removeClass('redNumber');
  a5.addClass('blackNumber');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.removeClass('active');
  a2.addClass('deactive');
  a3.removeClass('active');
  a3.addClass('deactive');
  a4.addClass('active');
  a4.removeClass('deactive');
  a5.removeClass('active');
  a5.addClass('deactive');
};

function redA5(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.removeClass('redNumber');
  a2.addClass('blackNumber');
  a3.removeClass('redNumber');
  a3.addClass('blackNumber');
  a4.removeClass('redNumber');
  a4.addClass('blackNumber');
  a5.addClass('redNumber');
  a5.removeClass('blackNumber');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.removeClass('active');
  a2.addClass('deactive');
  a3.removeClass('active');
  a3.addClass('deactive');
  a4.removeClass('active');
  a4.addClass('deactive');
  a5.addClass('active');
  a5.removeClass('deactive');
};


function redA2init(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.addClass('redNumber');
  a2.removeClass('grayed');
  // a3.removeClass('redNumber');
  // a3.addClass('blackNumber');
  // a4.removeClass('redNumber');
  // a4.addClass('blackNumber');
  // a5.removeClass('redNumber');
  // a5.addClass('blackNumber');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.addClass('active');
  a2.removeClass('deactive');
  a3.removeClass('active');
  a3.addClass('deactive');
  a4.removeClass('active');
  a4.addClass('deactive');
  a5.removeClass('active');
  a5.addClass('deactive');
};

function redA3init(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.removeClass('redNumber');
  a2.addClass('blackNumber');
  a3.addClass('redNumber');
  a3.removeClass('grayed');
  // a4.removeClass('redNumber');
  // a4.addClass('blackNumber');
  // a5.removeClass('redNumber');
  // a5.addClass('blackNumber');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.removeClass('active');
  a2.addClass('deactive');
  a3.addClass('active');
  a3.removeClass('deactive');
  a4.removeClass('active');
  a4.addClass('deactive');
  a5.removeClass('active');
  a5.addClass('deactive');
};

function redA4init(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.removeClass('redNumber');
  a2.addClass('blackNumber');
  a3.removeClass('redNumber');
  a3.addClass('blackNumber');
  a4.addClass('redNumber');
  a4.removeClass('grayed');
  // a5.removeClass('redNumber');
  // a5.addClass('grayed');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.removeClass('active');
  a2.addClass('deactive');
  a3.removeClass('active');
  a3.addClass('deactive');
  a4.addClass('active');
  a4.removeClass('deactive');
  a5.removeClass('active');
  a5.addClass('deactive');
};

function redA5init(){
  a1.removeClass('redNumber');
  a1.addClass('blackNumber');
  a2.removeClass('redNumber');
  a2.addClass('blackNumber');
  a3.removeClass('redNumber');
  a3.addClass('blackNumber');
  a4.removeClass('redNumber');
  a4.addClass('blackNumber');
  a5.addClass('redNumber');
  a5.removeClass('grayed');

  a1.removeClass('active');
  a1.addClass('deactive');
  a2.removeClass('active');
  a2.addClass('deactive');
  a3.removeClass('active');
  a3.addClass('deactive');
  a4.removeClass('active');
  a4.addClass('deactive');
  a5.addClass('active');
  a5.removeClass('deactive');
};



//BADGE APPEAR-------------------------
function badgeAppear(){
  $('#finalBadge').show(400);
  $('#thetest').hide(400);
};

//RESET--------------------------------
// function resetTest(){
  // $('input[type=radio]').prop('checked', false); //uncheck all
  // resetTo1();
  // $('#finalBadge').hide();
  // $('#thetest').show();
// };

$('.retakeBtn').click(function (){
    location.reload(); //reload the page
});

//--------------------------------------------------------------------
});//end document ready

//popQuiz----------------------------------------------

//chapter2_1-------------------------------------------
var theBadge1 = $('.theBadge1');
var wrongAnswer1 = $('.wrongPopAnswer1');
var quizSection1 = $('.theQuiz1');
var popQuiz1 = $('#popQuiz2_1');

//fade in on scroll
$(window).scroll(function popQuizFadeIn1() {
    if($(window).scrollTop() > 200) {
        popQuiz1.fadeIn();
    }
});

//make sure all things are checked-------
$('#pop1a1div').click( function(){
  $("#pop1a1").prop("checked", true);
});

$('#pop1a2div').click( function(){
  $("#pop1a2").prop("checked", true);
});

//if get correct
var popQuizCorrect1 = function(){
      theBadge1.fadeIn();
      quizSection1.removeClass('show');
      quizSection1.addClass('hide');
};

//if get wrong
  var popQuizWrong1 = function(){
      wrongAnswer1.fadeIn();
      quizSection1.removeClass('show');
      quizSection1.addClass('hide');
};

//pop quiz disappear
function resetPopQuiz1() {
  popQuiz1.fadeOut().empty();
}

//event correct answer
$('#pop1a2div').click(function(){
  setTimeout( function(){popQuizCorrect1();}, 400);
  setTimeout(resetPopQuiz1, 3400); //disappear funciton
});

//wrong answer
$('#pop1a1div').click(function(){
  setTimeout( function(){popQuizWrong1();}, 400);
  setTimeout(resetPopQuiz21, 6000); //disappear funciton
}); 




//chapter2_2 favoritism-------------------------------------------
var theBadge2 = $('.theBadge2');
var wrongAnswer2 = $('.wrongPopAnswer2');
var quizSection2 = $('.theQuiz2');
var popQuiz2 = $('#popQuiz2_2');

//fade in on scroll
$(window).scroll(function popQuizFadeIn2() {
    if($(window).scrollTop() > 1400) {
        popQuiz2.fadeIn();
    }
});

//make sure all things are checked-------
$('#pop2a1div').click( function(){
  $("#pop2a1").prop("checked", true);
});

$('#pop2a2div').click( function(){
  $("#pop2a2").prop("checked", true);
});

//if get correct
var popQuizCorrect2 = function(){
      theBadge2.fadeIn();
      quizSection2.removeClass('show');
      quizSection2.addClass('hide');
};

//if get wrong
  var popQuizWrong2 = function(){
      wrongAnswer2.fadeIn();
      quizSection2.removeClass('show');
      quizSection2.addClass('hide');
};

//pop quiz disappear
function resetPopQuiz2() {
  popQuiz2.fadeOut().empty();
}

//event correct answer
$('#pop2a1div').click(function(){
  setTimeout( function(){popQuizCorrect2();}, 400);
  setTimeout(resetPopQuiz2, 3400); //disappear funciton
});

//wrong answer
$('#pop2a2div').click(function(){
  setTimeout( function(){popQuizWrong2();}, 400);
  setTimeout(resetPopQuiz2, 6000); //disappear funciton
}); 




//chapter3_1-------------------------------------------
var theBadge3 = $('.theBadge3');
var wrongAnswer3 = $('.wrongPopAnswer3');
var quizSection3 = $('.theQuiz3');
var popQuiz3 = $('#popQuiz3_1');

//fade in on scroll
$(window).scroll(function popQuizFadeIn3() {
    if($(window).scrollTop() > 1280) {
        popQuiz3.fadeIn();
    }
});

//make sure all things are checked-------
$('#pop3a1div').click( function(){
  $("#pop3a1").prop("checked", true);
});

$('#pop3a2div').click( function(){
  $("#pop3a2").prop("checked", true);
});

//if get correct
var popQuizCorrect3 = function(){
      theBadge3.fadeIn();
      quizSection3.removeClass('show');
      quizSection3.addClass('hide');
};

//if get wrong
  var popQuizWrong3 = function(){
      wrongAnswer3.fadeIn();
      quizSection3.removeClass('show');
      quizSection3.addClass('hide');
};

//pop quiz disappear
function resetPopQuiz3() {
  popQuiz3.fadeOut().empty();
}

//event right answer
$('#pop3a1div').click(function(){
  setTimeout( function(){popQuizCorrect3();}, 400);
  setTimeout(resetPopQuiz3, 3400); //disappear funciton
});

//wrong answer
$('#pop3a2div').click(function(){
  setTimeout( function(){popQuizWrong3();}, 400);
  setTimeout(resetPopQuiz3, 6500); //disappear funciton
}); 




//--------------------------------------------------------------------
