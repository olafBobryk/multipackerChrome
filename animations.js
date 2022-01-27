function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


function railDraw(x,y,dir){
  ctx.beginPath();
  ctx.fillStyle = '#adadad';
  ctx.rect(x * res,y * res,res,res);
  ctx.fill();

  if(dir == 'down'){
    ctx.beginPath();
    ctx.fillStyle = '#878787'
    ctx.rect(x * res + res / 10,y * res,res / 10 * 8,res);
    ctx.fill();

    for(i = 0; i < 5; i ++){
      ctx.beginPath();
      ctx.fillStyle = '#7a7a7a';
      ctx.rect(x * res + res / 10,y * res + ((res / 5 * i) + elapsed / 3.2) % res,res / 10 * 8,res/10);
      ctx.fill();
    }
  }else if(dir == 'up'){
    ctx.beginPath();
    ctx.fillStyle = '#878787'
    ctx.rect(x * res + res / 10,y * res,res / 10 * 8,res);
    ctx.fill();

    for(i = 0; i < 5; i ++){
      ctx.beginPath();
      ctx.fillStyle = '#7a7a7a';
      ctx.rect(x * res + res / 10,y * res + ((res / 5 * i) + (elapsed + 100) / -3.2) % res + res,res / 10 * 8,res/10);
      ctx.fill();
    }
  }else if(dir == 'right'){
    ctx.beginPath();
    ctx.fillStyle = '#878787'
    ctx.rect(x * res ,y * res + res / 10,res,res / 10 * 8);
    ctx.fill();

    for(i = 0; i < 5; i ++){
      ctx.beginPath();
      ctx.fillStyle = '#7a7a7a';
      ctx.rect(x * res  + ((res / 5 * i) + elapsed / 3.2) % res,y * res + res / 10,res /10,res / 10 * 8);
      ctx.fill();
    }
  }else if(dir == 'left'){
    ctx.beginPath();
    ctx.fillStyle = '#878787'
    ctx.rect(x * res ,y * res + res / 10,res,res / 10 * 8);
    ctx.fill();

    for(i = 0; i < 5; i ++){
      ctx.beginPath();
      ctx.fillStyle = '#7a7a7a';
      ctx.rect(x * res  + ((res / 5 * i) + (elapsed + 100) / -3.2) % res + res,y * res + res / 10,res /10,res / 10 * 8);
      ctx.fill();
    }
  }
}

function boxDraw(x,y,color,size){
  ctx.beginPath();
  ctx.fillStyle = '#B0916E';
  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  let offset = res / 12;
  let offsetSize = mapRange(offset * 10 / size,0,offset * 10,offset * 10,0)/ 2;
  ctx.rect(x + offset + offsetSize, y + offset + offsetSize,offset * 10 / size ,offset * 10 / size);
  ctx.fill();
  ctx.stroke();

  let offsetSizeTape = mapRange(res / 15 * 13 / size,0,res / 15 * 13,res / 15 * 13,0) / 2;
  ctx.beginPath();
  ctx.fillStyle = '#8D7458';
  ctx.rect(x + res / 2 - res / 20, y + res / 15 + offsetSizeTape,res / 10, res / 15 * 13 / size);
  ctx.fill();
}


function hopper(x,y,color){
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.fillStyle = '#000000'
  ctx.rect(x, y, res, res);
  ctx.fill();
  ctx.stroke();
  
}

function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

function caveDraw(x,y,dir){
  ctx.beginPath();
  ctx.rect(x - res / 20,y - res / 20, res + res / 10, res + res / 10);
  ctx.fillStyle = '#565656';
  ctx.fill();

  if(dir == "down"){
    ctx.beginPath();
    ctx.rect(x - res / 16,y + res / 4 * 3, res + res / 8, res / 4);
    ctx.fillStyle = '#474747';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8,y + res/8,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8 * 7,y + res/8,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();

  }else if(dir == "up"){
    ctx.beginPath();
    ctx.rect(x - res / 16,y, res + res / 8, res / 4);
    ctx.fillStyle = '#474747';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8,y + res - res/8,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8 * 7,y + res - res/8,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();

  }else if(dir == "left"){
    ctx.beginPath();
    ctx.rect(x,y - res / 16,res / 4, res + res / 8);
    ctx.fillStyle = '#474747';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8 * 7,y + res / 8,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8 * 7,y + res / 8 * 7,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();
  }else if(dir == "right"){
    ctx.beginPath();
    ctx.rect(x + res / 4 * 3,y - res / 16,res / 4, res + res / 8);
    ctx.fillStyle = '#474747';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8,y + res / 8,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + res / 8,y + res / 8 * 7,2,0, 2 * Math.PI);
    ctx.fillStyle= '#7a7a7a';
    ctx.fill();
  }
}