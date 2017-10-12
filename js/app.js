// console.log('loaded');

// page loads check console.log('loaded');
// player hits play button (add onClick event to play button)
// computer picks random box and displays image
// user (attempts to!) clicks on box (add class and click event to box) and audio file plays
// score +1

//functionality:
// audio
// score

// win scenario

//enhance gameplay via:
// - speed
// - sand timer

// built in methods:
// setInterval - set start variable to setInterval
// clearInterval

//list functions:
// function stop()
// function gridClear()

// list variables (chnage to let or con)
/*
var score = 0;
var start;
var play;
var stop;
var reset;
var audio;
var img;
var speed;
var counter = 30;
//var randomImg = Math.floor(Math.random()*9);
//var randomGrid = Math.floor(Math.random()*9)+1;

var grid = ['g1','g2','g3','g4','g5','g6','g7','g8','g9'];
var obj = [
  {img:'beavisbutthead.png',
  audio:'beavisbutthead'
},
{img:'janicefromfriends.png',
audio:'janicefromfriends'
},
{
  img:'jimmycarr.png',
  audio:'jimmycarr'
},
{
  img:'laughingmanonbrexit.png',
  audio:'laughingmanonbrexit'
},
{
  img:'laughingpoliceman.png',
  audio:'laughingpoliceman'
},
{
  img:'nelson.png',
  audio:'nelson'
},
{img:'petergriffin.png',
audio:'petergriffin'
},
{img:'rickygervais.png',
audio:'rickygervais'
},
{img:'sidjames.png',
audio:'sidjames'
}
];



//play function called on from the "onclick event" on play button
function play(){
  start=setInterval(function(){  // assign setInterval to start variable
    var randomImg=Math.floor(Math.random()*9); //get a random number b/w 0-9 in order to retrive random object from obj variable
    var randomGrid=Math.floor(Math.random()*9)+1;//get random number for grid to assign the image to randomgrid
    document.getElementById('g'+randomGrid).innerHTML="<img src='images/"+obj[randomImg].img+"' class='img' id='"+randomImg+"'>";// concatenate grid to produce outcome of randomGrid then concatenate img src to produce image
  });
}


var grid=['g1','g2','g3','g4','g5','g6','g7','g8','g9'];
var imgSrc=['beavisbutthead.png','janicefromfriends.png','jimmycarr.png','laughingmanonbrexit.png','laughingpoliceman.png','nelson.png','petergriffin.png','rickygervais.png','sidjames.png'];
var audioId=['beavisbutthead','janicefromfriends','jimmycarr','laughingmanonbrexit','laughingpoliceman','nelson','petergriffin','rickygervais','sidjames'];




var grid=['g1','g2','g3','g4','g5','g6','g7','g8','g9'];
var imgSrc=['beavisbutthead.png','janicefromfriends.png','jimmycarr.png','laughingmanonbrexit.png','laughingpoliceman.png','nelson.png','petergriffin.png','rickygervais.png','sidjames.png'];
var audioId=['audio1','audio2','audio3','audio4','audio5','audio6','audio7','audio8','audio9'];

var score=0;
var speedOfGame=2000;
var speedOfTimer=1000;
var gridInterval;
var TimerInterval;
var counter=30;

function action(){
  var randomImg=Math.floor(Math.random()*9);
  var randomGrid=Math.floor(Math.random()*9)+1;
  gridClear();
  document.getElementById('g'+randomGrid).innerHTML="<img src='images/"+imgSrc[randomImg]+"' class='img' id='"+randomImg+"'>";
  document.getElementById(randomImg).addEventListener('click',function(){
    playAudio(audioId[randomImg]);

  });


}
function gridClear(){
  for(var i=0;i<=8;i++){
    document.getElementById(grid[i]).innerHTML="";
  }
}

function playAudio(aud){
  var audioElement=document.getElementById(aud);
  audioElement.play();
  checkTimer();
  updateScore();
  speedDecrease();
  console.log(speedOfGame);
  clearInterval(gridInterval);
  gridInterval=setInterval(action,speedOfGame);
}

function checkTimer(){
  if(counter<=0){
    GameStop();
  }
}
function updateScore(){
  score=score+1;
  document.getElementById('score').innerHTML=score;
  if(score==10){
    GameStop();
  }
}
function speedDecrease(){
  speedOfGame=speedOfGame-200;
}


function playTheGame(){
  gridInterval=setInterval(action,speedOfGame);
  TimerInterval=setInterval(function(){
    checkTimer();
    document.getElementById('timer').innerHTML="Time:  "+counter;
    counter=counter-1;
  },1000)
}

function GameStop(){
  clearInterval(gridInterval);
  clearInterval(TimerInterval);
  gridClear();
}
*/

var grid=['g1','g2','g3','g4','g5','g6','g7','g8','g9'];
var imgSrc=['beavisbutthead.png','janicefromfriends.png','jimmycarr.png','laughingmanonbrexit.png','laughingpoliceman.png','nelson.png','petergriffin.png','rickygervais.png','sidjames.png'];
var audioId=['audio1','audio2','audio3','audio4','audio5','audio6','audio7','audio8','audio9'];

var score=0;
var speedOfGame=2000; //speed of main setInterval function displaying each image after two seconds
var gridInterval; //will assign the main setInterval function to this variable
var TimerInterval; //will assign the countdown setInterval function to this varaible later
var counter=30; //the counter variable which holds the intial value that will decrease the value in countdown setInterval

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
function playAudio(aud){ //this function take one parameter
  var audioElement=document.getElementById(aud);// here I get the tag by id and assign it to audioElement variable
  audioElement.play(); // here I call the play method of the audio; the audio will then be played
  checkTimer(); //this function  will check the countdown if countdown is 0 then this will stop the main setInterval
  updateScore();
  speedDecrease(); //this function will decrease the interval between images showing
  clearInterval(gridInterval); //I call this function here because once audio is played it means a successful click so I stop the old interval and want to start a new interval with a shorter viewing interval
  gridInterval=setInterval(action,speedOfGame); // here I assigned the setinterval function gridInterval. setInterval will take two parameters; the first is function and second the speed of repeating
}

function checkTimer(){ // this function will check the counter if zero then call the Gamestop function which makes the game stop
  if(counter<=0){
    GameStop();
  }
}
function updateScore(){ // this function will update the score by 1. I called the function in onclick button
  score=score+1;
  document.getElementById('score').innerHTML=score; // here I want to update in the html
  if(score==10){
    GameStop(); //if score become 10 then the game stops
  }
}
function speedDecrease(){ // this function will decrease the view interval by 200
  speedOfGame=speedOfGame-200;
}
function playTheGame(){ //I called this function on play button. this function starts both the interval
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
  gridClear(); //lastly this function will clear the  grid
}
document.getElementById('play').addEventListener('click',playTheGame); // onclick event listener on the play button

document.getElementById('stop').addEventListener('click',GameStop); // onclick event Listener on the stop button
