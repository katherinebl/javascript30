

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.which}"]`)
    if(!audio) return //stops function 
    audio.currentTime = 0 //rewind to the start 
    audio.play()
}) 