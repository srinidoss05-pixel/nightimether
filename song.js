

// This code ensures only one audio element plays at a time.
// When any audio starts playing, it pauses all other audio elements.

document.querySelectorAll('audio').forEach(function(audio) {
    audio.addEventListener('play', function() {
        document.querySelectorAll('audio').forEach(function(other) {
            if (other !== audio) other.pause(); // Pause all other audio elements
        });
    });
});


document.getElementById("MyKannazhagiii").addEventListener('click',function(){

alert(`sri: Uyirae uyirae unaivida edhuvum
Uyril peridhaai illayadi
Azhagae azhagae unaivida edhuvum
Azhagil azhagaai illaiyadi💗🫴`);

});

document.getElementById("NeeParthaVizhigal").addEventListener('click',function(){

alert('sri: Nijamadi pennae tholaivinil unnai\nNilavinil kanden nadamaada\nValiyadi pennae varaimurai illai\nVadhaikkiraai ennai medhuvaaga');


});

document.getElementById("thoseeyes").addEventListener('click',function(){

alert('Hey!narmu you have a hypnotising brown eyes👁️🫣');


});


document.getElementById("smile").addEventListener('click',function()
{
    alert("Hey! papi your the reason for my smiile 😁");
});

document.getElementById("blue").addEventListener('click',function(){

alert(' Sri:my love will always stay by you ☺️');


});

document.getElementById("vizhiveekura").addEventListener('click',function(){
alert(' Sri: Unnoda konja neram unna Naanum konja venum ☺️');


});


document.getElementById("iwannabeyours").addEventListener('click',function(){
alert(' Sri:i wanna be yours💗🫴 ');


});

































































































