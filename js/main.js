let counts = 0;

//listen to shake event
var shakeEvent = new Shake({threshold: 5});
shakeEvent.start();
window.addEventListener('shake', function(){
    counts++;
    $('#counts').html(counts);
}, false);

$('#counts').click(()=>{
    alert('click!')
});

//stop listening
function stopShake(){
    shakeEvent.stop();
}

//check if shake is supported or not.
if(!("ondevicemotion" in window)){alert("Not Supported");}