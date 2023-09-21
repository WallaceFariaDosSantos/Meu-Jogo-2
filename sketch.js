//constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variáveis
var engine, world, canvas;
var player, elementFire, elementWater, elementEarth, elementAir, elementDarkness, playerHealth, playerAtributes;
var playerLevel, backgroundImg, titleGif, controlButton, startButton;
var rat, tree, rock, money;
var cavaleiroPulando, cavaleiroAtacando, cavaleiroCaindo, cavaleiroCorrendo, cavaleiroParado;
var level = 0;
var gameState = 0;

//função preload
function preload(){
  cavaleiroAtacando = loadImage("./assets/CavaleiroAtacando.gif");
  cavaleiroPulando = loadImage("./assets/CavaleiroPulando.png");
  cavaleiroCaindo = loadImage("./assets/CaindoNoChão.gif");
  cavaleiroParado = loadImage("./assets/CavaleiroParado.gif");
  cavaleiroCorrendo = loadImage("./assets/CavaleiroCorrendo.gif");
  backgroundImg = loadImage("./assets/Background.gif");
  titleGif = loadImage("./assets/title.gif");

  cavaleiroAtacando.playing = true;
  cavaleiroCaindo.playing = true;
  cavaleiroCorrendo.playing = true;
  cavaleiroParado.playing = true;

  cavaleiroAtacando.looping = false;
  cavaleiroCaindo.looping = false;
  cavaleiroCorrendo.looping = true;
  cavaleiroParado.looping = true;
}

//função setup
function setup(){
//tela do jogo
  canvas = createCanvas(2000, 800);

//botões
  var botoes = new Botoes();
  botoes.display();

//engine e world
  engine = Engine.create();
  world = engine.world;

//sprites
//cavaleiro
  player = createSprite(1000, 400, 20, 20);
  player.scale = 0.5;
  player.addImage("correndo", cavaleiroCorrendo);
  player.addImage("parado", cavaleiroParado);
  player.addImage("caindo", cavaleiroCaindo);
  player.addImage("pulando", cavaleiroPulando);
  player.addImage("atacando", cavaleiroAtacando);
  player.changeImage("parado");
  player.visible = false;
}

//função draw
function draw(){
  Engine.update(engine);

//condições
  if(gameState === 1){
    background(backgroundImg);
  }

  if(gameState === 0){
    background(titleGif);
  }

  if(gameState === -1){
    background("teal");
  }

//Barra de nível



//drawSprites
  drawSprites();
}

//outras funções que talvez sejam adicionadas
function createEnemy(){
  if(level == 1){
    var monsterLvl1;

  }
  if(level == 2){
    var monsterLvl2;

  }
  if(level == 3){
    var monsterLvl3;

  }
  if(level == 4){
    var monsterLvl4;

  }
}
