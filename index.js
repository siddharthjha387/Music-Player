

let isPlaying = false;
var songindex=0;
var size=document.querySelectorAll(".drum").length;
var song=document.querySelector("audio");
for(let i=0;i<size;i++)
document.querySelectorAll("button")[i].addEventListener("click",function(){

// song=document.querySelector("audio");
songindex=this.innerHTML-1;
// animation(songindex+1);
loadsongs(information[this.innerHTML-1]);
  if(isPlaying)
  pausemusic();
  // else
  playmusic();
});

function playmusic(){
  document.getElementById("play").classList.replace("fa-play","fa-pause");
  song.play();
  isPlaying=true;
}
function pausemusic(){
 document.getElementById("play").classList.replace("fa-pause","fa-play");
  song.pause();
  isPlaying=false;
}

function handle(ch)
{
  if(ch==' '){
    if(isPlaying)
    pausemusic();
    else
    playmusic();
  }
  else
if(ch>information.length)
return;
else{
  songindex=ch-1;
  loadsongs(information[ch-1]);
    if(isPlaying)
    pausemusic();
    playmusic();
}
}
document.addEventListener("keydown",function(event){
  // alert("key pressed");
  console.log(event.key);
  handle(event.key);
})
function animation(ch)
{
  document.querySelector("."+ch).classList.add("pressed");
  setTimeout(function(){
   document.querySelector("."+ch).classList.remove("pressed");
   }, 300);
}
function Informations(name,artist,image,music)
{
  this.name=name;
  this.artist=artist;
  this.image=image;
  this.music=music;
}
var information=[];
var song1=new Informations("Bella Ciao","Artist","images/m-1.jpg","sounds/m-1.mp3");
var song2=new Informations("Money Heist","Artist","images/m-2.jpg","sounds/m-2.mp3");
var song3=new Informations("On My Way","Alan Walker","images/m-3.jpg","sounds/m-3.mp3");
var song4=new Informations("Faded","Alan Walker","images/m-4.jpg","sounds/m-4.mp3");
var song5=new Informations("Alone","Alan Walker","images/m-5.jpg","sounds/m-5.mp3");
var song6=new Informations("In The End","Linkin Park","images/m-6.jpg","sounds/m-6.mp3");
var song7=new Informations("Believer","Imagine Dragons","images/m-7.png","sounds/m-7.mp3");


information.push(song1);
information.push(song2);
information.push(song3);
information.push(song4);
information.push(song5);
information.push(song6);
information.push(song7);

document.getElementById("play").addEventListener("click",function(){

  if(isPlaying)
  pausemusic();
  else
  playmusic();
})

document.getElementById("next").addEventListener("click",function(){
  songindex=(songindex+1)%information.length;
loadsongs(information[songindex]);
})

document.getElementById("prev").addEventListener("click",function(){
  songindex=(songindex-1+information.length)%information.length;
loadsongs(information[songindex]);
})
function loadsongs(information){
  document.getElementById("name").textContent=information.name;
  document.getElementById("artist").textContent=information.artist;
  document.getElementById("themeimg").src=information.image;
  document.querySelector("audio").src=information.music;
  playmusic();
}


// var title=
// var artist=document.getElementById("artist");
// var title=document.getElementById("title");
