function popFunction() {
  var newWin = window.open('http://www.caseywhitcher.com/projects/familiarfaces/popup.html', 'example', 'width=450,height=350');
}

function getRandomItems(fullArray, items) {
  var randomArray = [];
  var indexes = [];
  var fullArrayLength = fullArray.length;

  while (randomArray.length < items) {
    i = Math.floor(Math.random() * fullArrayLength);
    if (indexes.indexOf(i) == -1) {
      indexes[indexes.length] = i;
      randomArray[randomArray.length] = fullArray[i];
    }
  }
  return randomArray;
}

var fullArray = [{
    name: 'Abraham Lincoln',
    src: 'abrahaml01.jpg'
  },
  {
    name: 'Al Yankovik',
    src: 'ally01.jpg'
  },
  {
    name: 'Barak Obama',
    src: 'barako01.jpg'
  },
  {
    name: 'Ben Affleck',
    src: 'bena01.jpg'
  },
  {
    name: 'Ben Franklin',
    src: 'benf01.jpg'
  },
  {
    name: 'Beyonce Knowles',
    src: 'beyoncek01.jpg'
  },
  {
    name: 'Brad Pitt',
    src: 'bradp01.jpg'
  },
  {
    name: 'Captain Kangaroo',
    src: 'captaink01.jpg'
  },
  {
    name: 'Donald Trump',
    src: 'donaldt01.jpg'
  },
  {
    name: 'Drew Barrymore',
    src: 'drewb01.jpg'
  },
  {
    name: 'Elvis Presly',
    src: 'elvisp01.jpg'
  },
  {
    name: 'George Clooney',
    src: 'georgec01.jpg'
  },
  {
    name: 'Hillary Clinton',
    src: 'hillaryc01.jpg'
  },
  {
    name: 'John F. Kennedy',
    src: 'johnk01.jpg'
  },
  {
    name: 'Johnny Carson',
    src: 'johnnyc01.jpg'
  },
  {
    name: 'Julia Roberts',
    src: 'juliar01.jpg'
  },
  {
    name: 'Katy Perry',
    src: 'katyp01.jpg'
  },
  {
    name: 'Marilyn Monroe',
    src: 'marilynm01.jpg'
  },
  {
    name: 'Meryl Streep',
    src: "meryls01.jpg"
  },
  {
    name: 'Michael Jackson',
    src: 'michaelj01.jpg'
  },
  {
    name: 'Michael Jordan',
    src: "mj01.jpg"
  },
  {
    name: 'Mr. Rogers',
    src: 'mrrogers01.jpg'
  },
  {
    name: 'Neil Degrasse Tyson',
    src: 'neildegrasset01.jpg'
  },
  {
    name: 'Oprah Winfrey',
    src: "oprahw01.jpg"
  },
  {
    name: 'Princess Dianna',
    src: "princessd01.jpg"
  },
  {
    name: 'Steve Urkle',
    src: 'steveu01.jpg'
  },
  {
    name: 'Steven Hawking',
    src: 'stevenh01.jpg'
  },
  {
    name: 'Taylor Swift',
    src: "taylors01.jpg"
  },
  {
    name: 'Tom Cruise',
    src: "tomc01.jpg"
  },
  {
    name: 'Tom Hanks',
    src: "tomh01.jpg"
  },
  {
    name: 'Will Ferrell',
    src: 'willf01.jpg'
  },
  {
    name: 'Will Smith',
    src: "wills01.jpg"
  }
];

var questionNumber = 1;
var currentRight = 0;
var currentWrong = 0;
var $question = $(".js-question");
var $answers = $(".js-multiple-choice");
var currentSortQty = 4;
var $questionCount = $('.js-questionCountStatus');
var $tryagain = $('.js-tryagain');

var fullList = fullArray.map(function(element) {
  return `<li><img class="listshot" src="http://www.caseywhitcher.com/caseywhitcher/projects/familiarfaces/images/${element.src}" >
</li>`
}).join('');

function showList() {
  $(".js-displayFullList").html(`<ul>${fullList}</ul>`);
}

// var smallArray = fullArray[Math.floor(Math.random() * Math.floor(max))];  **TEST FOR OPPERTUNTIY

function shufflePage() {

  currentAnswers = (getRandomItems(fullArray, currentSortQty));

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  currentAnswerDisplay =
    `
  <!-- <ul class="answerList">
    <li input type="text" role="button" tabindex="0" id="answer01" aria-pressed="false">
      <img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[0].src}" alt="${currentAnswers[0].name}" class="headshot">
    </li>
    <li type="text" role="button" tabindex="0" id="answer02" aria-pressed="false">
      <img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[1].src}" alt="${currentAnswers[1].name}" class="headshot">
    </li>
    <li type="text" role="button" tabindex="0" id="answer03" aria-pressed="false">
      <img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[2].src}" alt="${currentAnswers[2].name}" class="headshot">
    </li>
    <li type="text" role="button" tabindex="0" id="answer04" aria-pressed="false">
      <img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[3].src}" alt="${currentAnswers[3].name}" class="headshot">
    </li>
  </ul>-->
<form>
<button type="button" class="hasBG">
<img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[0].src}" alt="${currentAnswers[0].name}" class="headshot" />
</button>
<button type="button" class="hasBG">
<img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[1].src}" alt="${currentAnswers[1].name}" class="headshot" />
</button>
<button type="button" class="hasBG">
<img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[2].src}" alt="${currentAnswers[2].name}" class="headshot" />
</button>
<button type="button" class="hasBG">
<img src="http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[3].src}" alt="${currentAnswers[3].name}" class="headshot" />
</button>
</form>
`



  var currentCorrect = currentAnswers[getRandomInt(currentSortQty)].name

  currentQuestion = `Who is ${currentCorrect}?`;

  $questionCount.html(`Question ${questionNumber} of 10`)
  $question.html(currentQuestion);
  $answers.html(currentAnswerDisplay);

  //mouse click--------------------------------------

  function displayCorrect() {
    $(".rightOrWrong").text("CORRECT!");
    $(".rightOrWrong").removeClass("rightOrWrongWrong").addClass("rightOrWrongRight");
  }

  function displayWrong() {
    // console.log(currentCorrect);
    // http://caseywhitcher.com/projects/familiarfaces/images/${currentAnswers[3].src}" alt="${currentAnswers[3].name
    $(".rightOrWrong").html(`OUCH, WRONG!<br><span class="rightAnswer">Next time, this is</span><Br><span class="rightAnswerName">${currentCorrect}</span><br><img src="http://caseywhitcher.com/projects/familiarfaces/images/thumbs/${currentCorrect}.jpg">`)
    $(".rightOrWrong").removeClass("rightOrWrongRight").addClass("rightOrWrongWrong");
  }

  $(".js-multiple-choice").find("img").on("click", function() {
    if ($(this).prop('alt') === currentCorrect) {
      currentRight++;
      questionNumber++;
      $(".js-score-right").text(`Correct: ${currentRight}`);
      if ((currentRight + currentWrong) >= 10) {
        $question.html('');
        $(".rightOrWrong").html("");
        displayScore();
      } else {
        displayCorrect();
        shufflePage();
      }

    } else {
      currentWrong++;
      questionNumber++;
      $(".js-score-wrong").text(`Wrong: ${currentWrong}`);
      if ((currentRight + currentWrong) >= 10) {
        $question.html('');
        $(".rightOrWrong").html("");
        displayScore();
      } else {
        displayWrong();
        shufflePage();
      }
    };
  });

  //space and enter click ------------------------------------------

  $(".js-multiple-choice").find("button").on("keyup", function(e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
      if ($(this).children('img').attr('alt') === currentCorrect) {
        currentRight++;
        questionNumber++;
        $(".js-score-right").text(`Correct: ${currentRight}`);
        if ((currentRight + currentWrong) >= 10) {
          $question.html('');
          $(".rightOrWrong").html("");
          displayScore();
        } else {
          displayCorrect();
          shufflePage();
        }

      } else {
        currentWrong++;
        questionNumber++;
        $(".js-score-wrong").text(`Wrong: ${currentWrong}`);
        if ((currentRight + currentWrong) >= 10) {
          $question.html('');
          $(".rightOrWrong").html("");
          displayScore();
        } else {
          displayWrong();
          shufflePage();
        }
      }
    };
  });
};

function resetScore() {
  currentRight = 0;
  $(".js-score-right").text(`Correct: ${currentRight}`);
  currentWrong = 0;
  $(".js-score-wrong").text(`Wrong: ${currentWrong}`);
  questionNumber = 1;
  $questionCount.html(`Question ${questionNumber} of 10`)
}

function clearFullList() {
  // console.log("should be clear");
  $('.js-displayFullList').html("");
  $('.js-addAPerson').html('');
}

function clearTryAgain() {
  $tryagain.html('');
  $(".questionCountStatus").text("Question 1 of 10")
  $(".rightOrWrong").html("");
  $(".js-displayFullList").html("");
}

function displayScore() {
  if (currentRight >= 7) {
    $answers.html(`Congratulations! You got ${currentRight} correct!`);
    $tryagain.html(`<button type="button" class="startQuiz" name="reset-button" onclick="clearTryAgain(); resetScore(); shufflePage();">Try again?</button>`);
    $(".js-displayFullList").html(`<button type="button" class="showList" name="button" onclick="showList();">See Full List</button>`);
  } else {
    $answers.html(`Looks like you only got ${currentRight} correct`);
    $tryagain.html(`<button type="button" class="startQuiz" name="reset-button" onclick="clearTryAgain(); resetScore(); shufflePage();">Try again?</button>`);
    $(".js-displayFullList").html(`<button type="button" class="showList" name="button" onclick="showList();">See Full List</button>`);
  }
}


// function handleNewItemSubmit() {
//   $('#js-addAPersonForm').submit(function(event) {
//     event.preventDefault();
//     const newPersName = $('.personEntry').val();
//     $('.personEntry').val('');
//     const newPath = $('.pathEntry').val();
//     $('.pathEntry').val();
//     fullArray.unshift({name: newPersName, src: newPath});
//   });
// }
