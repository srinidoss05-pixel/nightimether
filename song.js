

// This code ensures only one audio element plays at a time.
// When any audio starts playing, it pauses all other audio elements.

document.querySelectorAll('audio').forEach(function(audio) {
    audio.addEventListener('play', function() {
        document.querySelectorAll('audio').forEach(function(other) {
            if (other !== audio) other.pause(); // Pause all other audio elements
        });
    });
});


document.getElementById("thoseeyes").addEventListener('play',function(){

alert('Hey!narmu you have a hypnotising brown eyes👁️🫣');


});


document.getElementById("smile").addEventListener('play',function()
{
    alert("Hey! papi your the reason for my smiile 😁");
});

document.getElementById("blue").addEventListener('play',function(){

alert(' Sri:my love will always stay by you ☺️');


});




































































































