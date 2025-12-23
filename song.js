

// This code ensures only one audio element plays at a time.
// When; any audio starts playing, it pauses all other audio elements.

document.querySelectorAll('audio').forEach(function(audio) {
    audio.addEventListener('play', function() {
        document.querySelectorAll('audio').forEach(function(other) {
            if (other !== audio) other.pause(); // Pause all other audio elements
        });
    });
});


const audio = document.getElementById("MyKannazhagiii");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

audio.addEventListener("play", function () {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

document.getElementById("NeeParthaVizhigal").onplay=function(){

alert('sri: Nijamadi pennae tholaivinil unnai\nNilavinil kanden nadamaada\nValiyadi pennae varaimurai illai\nVadhaikkiraai ennai medhuvaaga')


};

document.getElementById("thoseeyes").onplay=function(){

alert('Hey!narmu you have a hypnotising brown eyes👁️🫣')


};


document.getElementById("smile").onplay=function()
{
    alert("Hey! papi your the reason for my smiile 😁")
};

document.getElementById("blue").onplay=function(){

alert(' Sri:my love will always stay by you ☺️')


}

document.getElementById("vizhiveekura").onplay=function(){
alert(' Sri: Unnoda konja neram unna Naanum konja venum ☺️')


};

document.getElementById("iwannabeyours").onplay=function(){
alert(' Sri:i wanna be yours💗🫴 ')


};

































































































