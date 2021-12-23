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
function OnKeyPressed(e)
{
  if(e.key=='a')
  {
    // console.log(--px);
    --px;
  }
  else if(e.key=='d')
  {
    // console.log(++px);
    ++px;
  }
}
function Awake()
{
  ctx.fillStyle="black";
  ctx.strokeStyle="black";
  ctx.strokeRect(0,0,299,299);
  // gamePlay=setInterval('update()',100)
  spawnEnemy();
}
function OnPressedStartButton()
{
  gamePlay=setInterval('update()',100);
  // spawnEvent=setInterval('spawnEnemy()',1000);
  spawnEnemy();
  
}
function update()
{
  ctx.fillStyle="white";
  ctx.fillRect(0,0,300,300);
  ctx.fillStyle="black";
  ctx.fillRect(px,150,30,30);
  enemy.move();
}
class Enemy
{
  constructor(x,y)
  {
    var alive;
    this.x=x;
    this.y=y;
    alive=setInterval(this.move(),100);
  }
  move()
  {
    this.y+=10;
    ctx.fillRect(this.x,this.y,30,30);
    console.log(this.y);
    if(this.y>300)
    {
      spawnEnemy();
    }
  }
}
function spawnEnemy()
{
  enemy= new Enemy(getRandomInt(0,290),0);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}