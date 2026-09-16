const quizData = [
    {
      q: "Where is the Master Emerald located?",
      choices: ["South Island", "Station Square", "Angel Island", "Mystic Ruins"],
      a: "Angel Island"
    },
    {
      q: "Who is known for taking a strong liking to grapes?",
      choices: ["Knuckles", "Shadow", "Sonic", "Silver"],
      a: "Knuckles"
    },
    {
      q: "Which group did the Chao evolve from?",
      choices: ["Gaians", "Babylonians", "Critters", "Ancients"],
      a: "Ancients"
    },
    {
      q: "Who wiped out the ancient Echidna Tribe long ago?",
      choices: ["The Black Arms", "Perfect Chaos", "Owl Tribe", "Emerl"],
      a: "Perfect Chaos"
    },
    {
      q: "Where does Little Planet appear over for a month per year?",
      choices: ["Green Hill Zone", "Angel Island", "Never Lake", "Soleanna"],
      a: "Never Lake"
    },
    {
      q: "Who was shot and killed in the Raid on Space Colony ARK?",
      choices: ["Sonic", "Maria", "Shadow", "Gerald Robotnik"],
      a: "Maria"
    },
    {
      q: "Who was the wielder the Phantom Ruby during Eggmans Conquest?",
      choices: ["Dr. Eggman", "Shadow", "Black Doom", "Infinite"],
      a: "Infinite"
    },
    {
      q: "Where is the Lost Hex?",
      choices: ["Up in the sky", "In space", "Deep underground", "On a different planet"],
      a: "Up in the sky"
    },
    {
      q: "Which of the following can cause extreme reality alterations under high energy?",
      choices: ["Master Emerald", "Warp Topaz", "Phantom Ruby", "Time Stones"],
      a: "Warp Topaz"
    },
    {
      q: "What god does the city of Soleanna celebrate in a festival?",
      choices: ["Iblis", "Light Gaia", "Mephiles", "Solaris"],
      a: "Solaris"
    },
  ];

  const questionElement = document.getElementById("q");
  const questionNumber = document.getElementById("qnum");
  const choicesElement = document.getElementById("choices");
  
  let currentQuestion = 0;
  let currentQuestionDisplayed = currentQuestion + 1;
  let score = 0;
  
  function showQuestion() {
    currentQuestionDisplayed = currentQuestion + 1;
    questionNumber.innerText = "Question #" + currentQuestionDisplayed;

    const question = quizData[currentQuestion];
    questionElement.innerText = question.q;
  
    choicesElement.innerHTML = "";
    question.choices.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      choicesElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const a = quizData[currentQuestion].a;
  
    if (selectedButton.innerText === a) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
        <header class="title">
            <h1>The World of Sonic the Hedgehog</h1>
        </header>

            <h2 class="subtitle">
                Quiz
            </h2>

    <div id="imghint">
        <img width="250px" src="assets/images/Hint.png"></img>
 
      <div style="color:#9091f0; padding-bottom:6.6vw;">
      <h3>Thank you so much for playing!</h3>
      <p>You got ${score} out of 10 questions correct!</p>
      </div>
    </div>
    `;
  }
  
  showQuestion();