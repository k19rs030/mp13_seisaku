// This is a JavaScript file
document.addEventListener("keypress",OnKeyPressed);
var s=0;
function OnKeyPressed(e)
{
}
function startGame()
{
  // setInterval('update()',100)
}
function update()
{
  console.log(s);
  s++;
  if(s>20)
  {
    clearInterval();
  }
}