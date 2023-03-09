var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2b7d9d35-627b-4f4f-9179-e45261e5dc41"],"propsByKey":{"2b7d9d35-627b-4f4f-9179-e45261e5dc41":{"name":"bola","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"0ZNLMaJzuvN3AfoXPdkMSfgorr9dM_1_","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/2b7d9d35-627b-4f4f-9179-e45261e5dc41.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 //variaves 
{
var caixa1 = createSprite(25,75,50,50);
caixa1.shapeColor="black";

var caixa2 = createSprite(75,75,50,50);
caixa2.shapeColor="orange";

var caixa3 = createSprite(125,75,50,50);
caixa3.shapeColor="black";

var caixa4 = createSprite(175,75,50,50);
caixa4.shapeColor="orange";

var caixa5 = createSprite(225,75,50,50);
caixa5.shapeColor="black";

var caixa6 = createSprite(275,75,50,50);
caixa6.shapeColor="orange";

var caixa7 = createSprite(325,75,50,50);
caixa7.shapeColor="black";

var caixa8 = createSprite(375,75,50,50);
caixa8.shapeColor="orange";

var caixa9 = createSprite(25,125,50,50);
caixa9.shapeColor="orange";

var caixa10 = createSprite(75,125,50,50);
caixa10.shapeColor="black";

var caixa11 = createSprite(125,125,50,50);
caixa11.shapeColor="orange";

var caixa12 = createSprite(175,125,50,50);
caixa12.shapeColor="black";

var caixa13 = createSprite(225,125,50,50);
caixa13.shapeColor="orange";

var caixa14 = createSprite(275,125,50,50);
caixa14.shapeColor="black";

var caixa15 = createSprite(325,125,50,50);
caixa15.shapeColor="orange";

var caixa16 = createSprite(375,125,50,50);
caixa16.shapeColor="black";

var raquete = createSprite(200,380,80,10);
raquete.shapeColor="black";

var bola = createSprite(200,350,10,10);
bola.setAnimation("bola");
bola.scale = 0.6;

var score=0;

var gameState = "serve";




}

function draw() {
  
  background("lightgray");
  
  textSize(20);
  stroke("black");
  text("pontuaçao:" + score,270,30);
  
  if(gameState == "serve"){
    textSize(30);
    stroke("orange");
    text("pressione spaço para iniciar",15,200);
     //movimento da bola
  if(keyDown("space")){
    bola.velocityX=4;
    bola.velocityY=9;
    gameState= "play";
  }
  }
  
  if(gameState == "play"){
    //movimento da raquete
  raquete.x=World.mouseX;
  
  if(bola.isTouching(bottomEdge) || score == 16){
    gameState="end";
  }
  
  }
  
  if(gameState == "end"){
     bola.velocityX=0;
     bola.velocityY=0;
     
     textSize(24);
     stroke("orange");
     text("FIM DE JOGO!!! sua pontuação é " + score,3,200);
  }
  
  
  drawSprites();
 

  

  
  
  createEdgeSprites();
  bola.bounceOff(raquete);
  bola.bounceOff(topEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
 

  if(bola.isTouching(caixa1)){
    score= score+1;  
    bola.bounceOff(caixa1);
    caixa1.destroy();
  }
  if(bola.isTouching(caixa2)){
    score= score+1;
    bola.bounceOff(caixa2);
    caixa2.destroy();
  }
  if(bola.isTouching(caixa3)){
    score= score+1;
    bola.bounceOff(caixa3);
    caixa3.destroy();
  }
  if(bola.isTouching(caixa4)){
    score= score+1;
    bola.bounceOff(caixa4);
    caixa4.destroy();
  }
  if(bola.isTouching(caixa5)){
    score= score+1;
    bola.bounceOff(caixa5);
    caixa5.destroy();
  }
  if(bola.isTouching(caixa6)){
    score= score+1;
    bola.bounceOff(caixa6);
    caixa6.destroy();
  }
  if(bola.isTouching(caixa7)){
    score= score+1;
    bola.bounceOff(caixa7);
    caixa7.destroy();
  }
  if(bola.isTouching(caixa8)){
    score= score+1;
    bola.bounceOff(caixa8);
    caixa8.destroy();
  }
  if(bola.isTouching(caixa9)){
    score= score+1;
    bola.bounceOff(caixa9);
    caixa9.destroy();
  }
  if(bola.isTouching(caixa10)){
    score= score+1;
    bola.bounceOff(caixa10);
    caixa10.destroy();
  }
  if(bola.isTouching(caixa11)){
    score= score+1;
    bola.bounceOff(caixa11);
    caixa11.destroy();
  }
  if(bola.isTouching(caixa12)){
    score= score+1;
    bola.bounceOff(caixa12);
    caixa12.destroy();
  }
  if(bola.isTouching(caixa13)){
    score= score+1;
    bola.bounceOff(caixa13);
    caixa13.destroy();
  }
  if(bola.isTouching(caixa14)){
    score= score+1;
    bola.bounceOff(caixa14);
    caixa14.destroy();
  }
  if(bola.isTouching(caixa15)){
    score= score+1;
    bola.bounceOff(caixa15);
    caixa15.destroy();
  }
  if(bola.isTouching(caixa16)){
    score= score+1;
    bola.bounceOff(caixa16);
    caixa16.destroy();
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
