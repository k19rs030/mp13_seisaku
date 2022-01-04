// This is a JavaScript file
document.addEventListener('keydown',OnKeyPressed);
var life=200;
var gamePlay;
var spawnEvent;
var inputKey;
var px=0;
var ex=0,ey=0;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  var alive=false;
  
function OnKeyPressed(e)
{
  if(e.key=='a')
  {
    // console.log(--px);
    px=px-30;
  }
  else if(e.key=='d')
  {
    // console.log(++px);
    px=px+30;
  }
}
function Awake()
{
  ctx.fillStyle="black";
  ctx.strokeStyle="black";
  ctx.strokeRect(0,0,299,299);
  // gamePlay=setInterval('update()',100)
}
function OnPressedStartButton()
{
  gamePlay=setInterval('update()',100);
}
function update()
{
  ctx.fillStyle="white";
  ctx.fillRect(0,0,300,300);
  ctx.fillStyle="black";
  ctx.fillRect(px,150,30,30);
  enemy1.move();
  enemy2.move();
  enemy3.move();
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}