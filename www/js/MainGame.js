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
var enemyAlive=false;
var playerAlive=true;
var score=0;
var ncmb = new NCMB(this.APPLICATION_KEY, this.CLIENT_KEY);
  
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
}
function OnPressedStartButton()
{
  gamePlay=setInterval('update()',100);
}
function update()
{
  if(playerAlive)
  {
    if(!enemyAlive)
    {
      setEnemy();
    }
    ctx.fillStyle="white";
    ctx.fillRect(0,0,300,300);
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc( px, 200, 15, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    ctx.fillStyle = "rgba(255,0,0,0.8)" ;
    ctx.fill() ;
    ctx.strokeStyle = "black" ;
    ctx.lineWidth = 1 ;
    ctx.stroke() ;

    ctx.beginPath();
    ctx.arc( ex, ey, 15, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    ctx.fillStyle = "rgba(255,0,0,0.8)" ;
    ctx.fill() ;
    ctx.strokeStyle = "black" ;
    ctx.lineWidth = 1 ;
    ctx.stroke() ;
    ey+=10;
    var hit=false;
    console.log(getDistance(px,30,ex,ey));
    if(getDistance(px,200,ex,ey)<15)
    {
      playerAlive=false;
      alert("DEATH");
    }
    if(ey>290)
    {
      enemyAlive=false;
      score+=100;
    }
    $("#list-page strong").html(String(this.score));
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function setEnemy()
{
  ex=getRandomInt(15,285);
  ey=0;
  enemyAlive=true;
}
function getDistance( x1,y1,x2,y2)
{
  var pos1 = { x : x1, y : y1 };
  var pos2 = { x : x2, y : y2 }; 
  var distance = Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
  return distance;
}

function saveScore (name, score) {
    var GameScore=ncmb.DataStore("GameScore");
    var gameScore=new GameScore();
    gameScore.set("name",name);  
    gameScore.set("score",score);
    gameScore.save()
    .then(function (result){
      console.log("保存に成功しました!");
    })
    .catch(function(result){
      console.log("保存に失敗しました");
    })
}

function imputName(count){
    // 入力アラートを表示
	var name = window.prompt("名前を入力してください", "");
    if (name == null || name == "") {
        $("#list-page p").html("保存がキャンセルされました");        
    } else {
        // スコアと入力した名前を保存
        saveScore(name, count);
        $("#list-page p").html(name + "さんのスコアは" + String(count) + "連打でした"); 
    }
    // ボタンの有効化
    document.gameForm.start.disabled = false;
    document.gameForm.ranking.disabled = false;
}