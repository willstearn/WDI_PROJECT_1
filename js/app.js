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
