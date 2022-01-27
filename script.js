var score = document.getElementById('score');
var now, then;
var c = document.getElementById('gameCanvas');
var ctx = c.getContext("2d");
let grid;
let res = 32;
var trains;
var colors;
var canvasRect = c.getBoundingClientRect();
var elapsed;
var stop;
var btns = document.querySelectorAll('.btns')
let interval;
let diff = 0;
let caveGrid = [];
let stationGrid = [];
let railGrid = [];
let alterGrid = [];
let toggle = document.getElementById('switch')
let slider = document.querySelector('.slider');
slider.style.setProperty('--trans', '.4s')
let checkbox = document.getElementById('checkbox');
let lblHighscore = document.getElementById('lblHighscore');
let sponsor = document.getElementById('sponsor');

sponsor.addEventListener('click',function(){
  window.open('https://www.buymeacoffee.com/bugeaters', '_blank');
})

const originalHeight = c.height;
const originalWidth = c.width;

chrome.storage.sync.get(['highscore'], function(result) {
  if(result.highscore == undefined){
    chrome.storage.sync.set({highscore: 0}, function() {
      console.log('set');
      lblHighscore.innerHTML = 'highscore: ' + 0;
    });
  }else{
    lblHighscore.innerHTML = 'highscore: ' + result.highscore;
  }
});





//Classes..............................................................
class Grid{
 constructor(x,y){
   this.x = x;
   this.y = y;
   this.type = 'none';
 }
 run(){
   let t = this.type.split("-")[0];
   if(t == 'cave'){
     this.cave();
   }else if(t == 'rail'){
     railDraw(this.x, this.y,this.type.split("-")[1],elapsed,ctx,res);
   }else if(t == 'alter'){
     this.alter(false);
   }else if(t == 'station'){
     this.station();
   }
 }
 cave(){
  caveDraw(this.x * res, this.y * res,this.type.split("-")[1]);
  if(elapsed % interval == 0){
  trains.push(new Train(this.x,this.y));
  interval -= 2.5 * Math.floor(getComputedStyle(slider, ":before").getPropertyValue('content').replace('x','').replace(/['"]+/g, ''));
  }
 }
 alter(alter_change){
  if(alter_change){
    let arr = this.type.split("-");
    [arr[1], arr[2]] = [arr[2], arr[1]];
    this.type = arr.join("-");
    return
  }
  railDraw(this.x, this.y,this.type.split("-")[1],elapsed,ctx,res);
  ctx.beginPath();
  ctx.rect(this.x * res, this.y * res, res, res);
  ctx.fillStyle = 'rgba(234,206,9,0.2)'
  ctx.fill();
 }
 station(){
  if(this.type == 15) this.type += '-0'
  hopper(this.x * res, this.y * res,this.type.split("-")[1]);
 }

}

class Train{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.time = 1;
    this.newTrain = true; 
    this.whenCreated = elapsed;
  }
  run(){  
    if(this.newTrain){
      this.newTrain = false 
    } else {
    let dir = grid[this.x][this.y].type.split("-")[1];
    if((elapsed - this.whenCreated) % 100 == 0){
    if(dir == "down"){
      this.y ++
    }
    if(dir == "up"){
     this.y --
    }
    if(dir == "right"){
      this.x ++
    }
    if(dir == "left"){
      this.x --
    }
    }
    if(dir == this.color){
      this.time ++
      if(this.time == 20){
        trains[trains.indexOf(this)] = 0;
        for(i = 0; i < Math.floor(getComputedStyle(slider, ":before").getPropertyValue('content').replace('x','').replace(/['"]+/g, '')); i ++){
        if(diff == 'easy'){
          score.innerHTML ++;
        }else if(diff == 'medium'){
          score.innerHTML ++;
          score.innerHTML ++;
        }else{
          score.innerHTML ++;
          score.innerHTML ++;
          score.innerHTML ++;
        }
      }
      }
    }else if(dir[0] == "#"){
      end();
    }

    let transX = 0;
    let transY = 0;
    if(dir == "down"){
      transY = res / 100 * ((elapsed - this.whenCreated) % 100)
    }
    if(dir == "up"){
     transY = -res / 100 * ((elapsed - this.whenCreated) % 100)
    }
    if(dir == "right"){
      transX = res / 100 * ((elapsed - this.whenCreated) % 100)
    }
    if(dir == "left"){
      transX = -res / 100 * ((elapsed - this.whenCreated) % 100)
    }


    boxDraw(this.x * res + transX,this.y * res + transY,this.color,this.time)
    }
  }
}
//Listeners............................................................
c.addEventListener("click", onClick, false);
function onClick(e){

  if(grid[Math.round(((e.x - canvasRect.left) - res / 2 ) / res )][Math.round(((e.y - canvasRect.top) - res/ 2) / res )].type.split('-')[0] == 'alter'){
    grid[Math.round(((e.x - canvasRect.left) - res / 2 ) / res )][Math.round(((e.y - canvasRect.top) - res/ 2) / res )].alter(true);
  }
}

//Setup..................................................................

end();





startLoop();
function startLoop(fps) {
  then = Date.now();
  //draw();
  loop();
}



//draw.............................................................
function loop(){
  requestAnimationFrame(loop);
  now = Date.now();
  let elapsed = now - then;
  if(elapsed > (10)){
    then = now - (elapsed % 10);
    if(!stop){
    draw();
    }
  }
  
}

function draw(){

  const dimensions = getObjectFitSize(
    true,
    c.clientWidth,
    c.clientHeight,
    c.width,
    c.height
  );
  let ratio = Math.min(
    c.clientWidth / originalWidth,
    c.clientHeight / originalHeight
  );
  ctx.scale(ratio, ratio);


  c.width = dimensions.width;
  c.height = dimensions.height;

  //console.log(getComputedStyle(slider, ":before").getPropertyValue('content').replace('x','').replace(/['"]+/g, ''));
  elapsed += Math.floor(getComputedStyle(slider, ":before").getPropertyValue('content').replace('x','').replace(/['"]+/g, ''));


  ctx.beginPath();
  ctx.rect(0,0,c.width,c.height);
  ctx.fillStyle = '#050A30';
  ctx.fill();
  
  for(let i of railGrid){
    i.run();
  }

  for(let i of alterGrid){
    i.run();
  }

  for(let i of stationGrid){
    i.run();
  }
  
  for(let i of trains){
    if(i != 0){
    i.run()
    }
  }

  for(let i of caveGrid){
    i.run();
  }
  
}

//stop-----------------------------------------------------------


function end(){

  chrome.storage.sync.get(['highscore'], function(result) {
    if(result.highscore < parseFloat(score.innerHTML)){
      chrome.storage.sync.set({highscore: parseFloat(score.innerHTML)}, function() {
        console.log('set');
        lblHighscore.innerHTML = 'highscore: ' + parseFloat(score.innerHTML);
      });
    }
  });





  stop = true;
  slider.style.setProperty('--trans', '.4s');
  slider.style.visibility = 'visible';
  toggle.style.visibility = 'visible';
  for(let i of btns){
    i.style.visibility = 'visible';
    i.addEventListener('click',function(){
      start(i.innerHTML);
    })
  }
}



function start(difficulityMode){
  slider.style.setProperty('--trans', '0s');
  slider.style.visibility = 'hidden'
  toggle.style.visibility = 'hidden'
  for(let i of btns){
    i.style.visibility = 'hidden';
  }
  stop = false;
  score.innerHTML = 0;
  grid = [];
  trains = [];
  elapsed = 0;
  interval = 500;
  diff = difficulityMode;
  caveGrid.length = 0;
  stationGrid.length = 0;
  railGrid.length = 0;
  alterGrid.length = 0;
  


  for(x = 0; x < c.width / res; x ++){
  grid[x] = [];
  for(y = 0; y < c.height / res; y ++){
    grid[x][y] = new Grid(x,y);
  }
  }

  maps[difficulityMode][Math.floor(Math.random() * maps[difficulityMode].length)](grid);

  for(let i of grid){
     for(let j of i){
      switch(j.type.split("-")[0]){
        case "cave":
          caveGrid.push(j);
        case "station":
          stationGrid.push(j);
        case "rail": 
          railGrid.push(j);
        case "alter":
          alterGrid.push(j);
      }
    }
  }
}

function getObjectFitSize(
  contains,
  containerWidth,
  containerHeight,
  width,
  height
) {
  var doRatio = width / height;
  var cRatio = containerWidth / containerHeight;
  var targetWidth = 0;
  var targetHeight = 0;
  var test = contains ? doRatio > cRatio : doRatio < cRatio;

  if (test) {
    targetWidth = containerWidth;
    targetHeight = targetWidth / doRatio;
  } else {
    targetHeight = containerHeight;
    targetWidth = targetHeight * doRatio;
  }

  return {
    width: targetWidth,
    height: targetHeight,
    x: (containerWidth - targetWidth) / 2,
    y: (containerHeight - targetHeight) / 2
  };
}


