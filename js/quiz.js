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
      debugger
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



//end PREQUIZ----------------------------------------------------


// //popQuizvar backToQuestionButton = $('#backToQuestionButton');
// var submitButton = $('#submitButtonPrequiz');
//
// //'correct', the badge appears, the question disappears
//  var popQuizCorrect = function(){
//       $('#popQuizBadge').removeClass('hide')
//       $('#popQuizBadge').addClass('show')
//       $('#popQuizQuestion').removeClass('show')
//       $('#popQuizQuestion').addClass('hide')
//   };
//
// //'wrong', text saying wrong appears, the question disappears
//   var popQuizWrong = function(){
//       $('#popQuizInfo').removeClass('hide')
//       $('#popQuizInfo').addClass('show')
//       $('#popQuizQuestion').removeClass('show')
//       $('#popQuizQuestion').addClass('hide')
//   };
//
// //get back to the popQuiz after reading why the question is wrong
//   var backToPopQuiz = function(){
//       $('#popQuizInfo').addClass('hide')
//     $('#popQuizInfo').removeClass('show')
//       $('#popQuizQuestion').removeClass('hide')
//     $('#popQuizQuestion').addClass('show')
//   };
//
//
//
// //events
//
// //NEED HELP ON THIS ONE ;(
// //once click a button, if the checked button's value is "correct" then the image appreas. Or else the wrong text apprears
// submitButton.click(function(){
//   var selected = $("input[type=radio][name=answer]:checked").val();
//   if(selected === "correct"){
//   popQuizCorrect();
//   } else if (selected === "wrong") {
//     popQuizWrong();
//   }
// });
//
//
// //click 'back' to go back to the question
// backToQuestionButton.click(function(){
//   backToPopQuiz();
// });
