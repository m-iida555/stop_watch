
function countUp(){
  let milliSec = 0;
  let timer = 0;

  timer = setInterval(
  function(){
    let milliSec = document.getElementById('milliSec');
    milliSec.innerText = milliSec;
    milliSec = milliSec + 1;
    return milliSec;
  }
, 1000);
  
function countStop(){
  if(timer){
    clearInterval(timer);
  }
}




/*
let count=0;
const countUp=() =>{
  console.log(count++);
}
const intervalId=setInterval(() =>{
  countUp();
if(count>10){
  clearInterval(intervalId);
}},1000);
*/ 


/*let countUp=function(){
  let timerCountUp= getElementById('milliSec');
  let milliSec=0;
  let milliSecTimer=setInterval(output,100);
  function output(){
    for(milliSec=0; milliSec<=10; milliSec++){
    if(milliSec<=9){
      concole.log(milliSec);
    }
    else(milliSec=10){
      function(){
        "owari"
      }
    }
  }
}
*/

