var canvas, backgroundImage;

var questions;
var question, contestant, quiz;

function setup(){

  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.start();

}

function draw(){

  background("pink");

  textSize(20);
  fill(0, 0, 0);
  text("Seu nome", 137, 260);
  textSize(20);
  fill(0, 0, 0);
  text("Sua resposta", 338, 260);

}
console.log("Crianças, salvem seus projetos. Nunca confiem em autosave");

