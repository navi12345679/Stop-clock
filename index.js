const display= document.getElementById("display");
let timer = null;
let elapseDtime= 0;
let startTime = 0;
let isRunning = true;

function start(){
    if(isRunning){
        startTime = Date.now()-elapseDtime; 
        timer = setInterval(update,10);  
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
      clearInterval(timer);
      elapseDtime = Date.now()-startTime;
      isRunning = false;
    }
    isRunning = true;
}
function reset(){
 
clearInterval(timer);
 elapseDtime= 0;
 startTime = 0;
 isRunning = false;
 display.textContent =  `00:00:00:00`;
}


function update(){
    const currenttime= Date.now();
    elapseDtime = currenttime - startTime ;

    let hours= Math.floor(elapseDtime /(1000 * 60 * 60));
    let minutes = Math.floor(elapseDtime/(1000 * 60) % 60);
     let seconds = Math.floor(elapseDtime/1000% 60 );
     let miliseconds = Math.floor(elapseDtime % 1000/10);

      hours = String(hours).padStart(2,"0");
      minutes = String(minutes).padStart(2,"0");
      seconds = String(seconds).padStart(2,"0");
      miliseconds = String(miliseconds).padStart(2,"0");

     display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
  
}