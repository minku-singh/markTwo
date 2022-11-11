var readlineSync = require("readline-sync");
var chalk = require("chalk");
var name = readlineSync.question("Enter your name: ");

var questions = [
  {
    q: "Who composed original Ramayan? ",
    a: "a",
    options: ["a: Rishi Valmiki", "b: Tulsi Das", "c: Sant Ek Nath", "d: Anhinanda"]
  },

  {
    q: "Lakshman is incarnation of? ",
    a: "d",
    options: ["a: Vishnu", "b: Shiv", "c: Brahma", "d: Sheshnag"]
  },

  {
    q: "Ravan was devotee of? ",
    a: "c",
    options: ["a: Vishnu", "b: Brahma", "c: Shiv", "d: Ganesh"]
  },

  {
    q: "Lord Ram's father was? ",
    a: "d",
    options: ["a: Shalishuka", "b: Bahapana", "c: Janak", "d: Dasrath"]
  },

  {
    q: "Name of a bow that was used by Lord Rama in Goddess Sita swayamvar to marry her? ",
    a: "a",
    options: ["a: Pinaka", "b: Pindaka", "c: Anandakah", "d: Rulapand"]
  },

  {
    q: "Name of Lord Ram's mother? ",
    a: "c",
    options: ["a: Kaikeyi", "b: Kunti", "c: Kaushalya", "d: Sumitra"]
  },

  {
    q: "Ram ji was part of which dynasty? ",
    a: "a",
    options: ["a: Sun dynasty", "b: Flower dynasty", "c: Moon dynasty", "d: Rock dynasty"]
  },

  {
    q: "Sita ji was avatar of? ",
    a: "b",
    options: ["a: Annika", "b: Anagha", "c: Medha", "d: Ambika"]
  },

  {
    q: "Parents of Ravan were? ",
    a: "d",
    options: ["a: Sarikshit and Dhubhudhi", "b: Avangada and Kartikya", "c: Pranapanksh and Bidvisha", "d: Visharva and Kaikesi"]
  },

  {
    q: "Who was Lakshmana's mother? ",
    a: "a",
    options: ["a: Sumitra", "b: Kaushalya", "c: Kaikeyi", "d: Urmila"]
  }
];

var highest_score = [
  { name: "Minku", score: 7 },
  { name: "Mili", score: 5 }
]
var score = 0;

function welcome() {
  console.log(chalk.bgYellow.bold("Hey " + name + "! Welcome to 'How well do you know Ramayan'!!\n"));

  console.log("Enter " + chalk.red("QUIT") + " if you want to quit the game!");
}

function endShow() {
  console.log("\n=============================\n");
  console.log("Thanks for playing!!")
  console.log(chalk.bgGreen.bold("YOUR SCORE: " + score));
  console.log("Check out the highest scores, if you have scored more than them, ping me, I'll update it: ");
  for (var i = 0; i < highest_score.length; i++) {
    console.log(highest_score[i].name + " : " + highest_score[i].score);
  }
  if (score > highest_score[0].score || score > highest_score[1].score) {
    console.log(chalk.bgMagenta.bold("Congrats, You are one of the highest scorers!!"))
  }
  console.log("=============================\n");
  return;
}

function quit() {
  endShow();
}

function showScore() {
  console.log(chalk.green("CURRENT SCORE: " + score));
  console.log("-----------------------\n");
}

function play(answer, user_ans) {

  user_ans = user_ans.toLocaleLowerCase();

  if (user_ans === answer) {
    console.log("🎉 That's the right ans!");
    score++;
  } else {
    console.log("❌ No, " + answer + " is the right option.");
    score--;
  }

  showScore();
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var user_ans = readlineSync.question((i + 1) + ") " + questions[i].q + "\n" + questions[i].options + "\n");
    if (user_ans === "quit") {
      quit();
      return;
    }
    play(questions[i].a, user_ans);
  }

  endShow();
}

welcome();
game();
