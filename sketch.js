var canvas;
var gameState, contestantCount, allContestants, database;
var answer, quiz, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}