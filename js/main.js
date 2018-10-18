let counts = 0;

//listen to shake event
var shakeEvent = new Shake({threshold: 10});
shakeEvent.start();
window.addEventListener('shake', function(){
    alert("Shaked");
    counts++;
    $('#counter').html(counts);
}, false);

//stop listening
function stopShake(){
    shakeEvent.stop();
}

//check if shake is supported or not.
if(!("ondevicemotion" in window)){alert("Not Supported");}