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
  var enemy1;
  var enemy2;
  var enemy3;
  
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
  enemy1= new Enemy();
  enemy2= new Enemy();
  enemy3= new Enemy();
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
class Enemy
{
  constructor()
  {
    var moving=false;
    var alive;
    this.x=getRandomInt(0,270);
    this.y=0;
  }
  move()
  {
    if(moving)
    {
      this.y+=10;
      ctx.fillRect(this.x,this.y,30,30);
      console.log(this.y);
      if(this.y>300)
      {
        this.respawn();
      } 
    }
  }
  respawn()
  {
    this.x=getRandomInt(0,270);
    this.y=0;
  }
}
function spawnEnemy()
{
  
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}