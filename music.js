var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
let show_duration = document.querySelector('#show_duration');
let timer;
let slider = document.querySelector("#duration_slider");
let aud = document.getElementById("aud");

function reset_slider(){
  slider.value = 0;
}


function change_duration() {
  slider_position = aud.duration * (slider.value / 100);
  aud.currentTime = slider_position;
 
  let position = 0;
  if(!isNaN(aud.duration)){
     position = aud.currentTime * (100 / aud.duration);
     slider.value =  position;
      }
      if(aud.ended){
        reset_slider();
      }
}

let Playing_song=false;
function justplay(music){
  document.getElementById("aud").load();
  document.getElementById("aud").setAttribute("src", music);
  if(Playing_song==false){
    aud.play();
    Playing_song=true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  }else{
    aud.pause();
    Playing_song=false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  }
}
function skip(time) {
     if (time == 'back') {
       aud.currentTime = (aud.currentTime - 20);
     } else if (time == 'fwd') {
       aud.currentTime = (aud.currentTime + 20);
     }
}


let Playing = false;
let track = document.getElementById('pla');
function cirplay(music){
  document.getElementById("pla").load();
  document.getElementById("pla").setAttribute("src", music);
  if(Playing==false){
    track.play();
    Playing = true;
  }else{
    track.pause();
    Playing = false;
  }
}

