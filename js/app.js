
var grid=['g1','g2','g3','g4','g5','g6','g7','g8','g9'];
var imgSrc=['beavisbutthead.png','janicefromfriends.png','jimmycarr.png','laughingmanonbrexit.png','laughingpoliceman.png','nelson.png','petergriffin.png','rickygervais.png','sidjames.png'];
var audioId=['audio1','audio2','audio3','audio4','audio5','audio6','audio7','audio8','audio9'];

var score=0;
var speedOfGame=2000; //speed of main setInterval function displaying each image after two seconds
var gridInterval; // will assign the main setInterval function to this variable
var TimerInterval; //will assign the countdown setInterval function to this variable
var counter=30; //the counter variable which holds the intial value that will decrease the value of countdown setInterval

function action(){
  var randomImg=Math.floor(Math.random()*9);
  var randomGrid=Math.floor(Math.random()*9)+1;
  gridClear();
  document.getElementById('g'+randomGrid).innerHTML="<img src='images/"+imgSrc[randomImg]+"' class='img' id='"+randomImg+"'>";
  document.getElementById(randomImg).addEventListener('click',function(){
    playAudio(audioId[randomImg]); // this playAudio function is defined below and takes one parameter; the id of audio tag which will play on onclick event
  });
}
function gridClear(){
  for(var i=0;i<=8;i++){
    document.getElementById(grid[i]).innerHTML="";
  }
}
function playAudio(aud){ //this function takes one parameter
  var audioElement=document.getElementById(aud);// gets the tag by id and assign it to audioElement variable
  audioElement.play(); // calls the play method of the audio; the audio will then be played
  checkTimer(); //this function checks the countdown if countdown is 0 then this will stop the main setInterval
  updateScore();
  speedDecrease(); //this function will decrease the interval between images showing
  clearInterval(gridInterval); //I call this function here because once audio is played it means a successful click so I stop the old interval and want to start a new interval with a shorter viewing interval
  gridInterval=setInterval(action,speedOfGame); // here I assigned the setinterval function gridInterval. setInterval will take two parameters; the first is function and second the speed of repeating
}

function checkTimer(){ // this function will check if the counter is zero then call the Gamestop function which makes the game stop
  if(counter<=0){
    GameStop();
  }
}
function updateScore(){ // this function will update the score by 1. I call the function in onclick button
  score=score+1;
  document.getElementById('score').innerHTML=score; // updates the html
  if(score==10){
    GameStop(); //if score becomes 10 then the game stops
  }
}
function speedDecrease(){ // this function will decrease the view interval by 200
  speedOfGame=speedOfGame-200;
}
function playTheGame(){ //I called this function on play button. this function starts both the intervals
  gridInterval=setInterval(action,speedOfGame);
  TimerInterval=setInterval(function(){
    checkTimer();
    document.getElementById('timer').innerHTML="Time:  "+counter;
    counter=counter-1;
  },1000)
}
function GameStop(){
  clearInterval(gridInterval); //if gamestop function is called then this will clear the main interval
  clearInterval(TimerInterval); // also the timerInterval
  gridClear(); // this function will clear the  grid
}
document.getElementById('play').addEventListener('click',playTheGame); // onclick event listener on the play button

document.getElementById('stop').addEventListener('click',GameStop); // onclick event Listener on the stop button
