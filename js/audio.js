var sound = new Howl({
    src: ['assest/audio.mp3'],
    volume:0.2,
  });
  
  sound.play();
  
  var btnPlay = document.getElementById("play");
  btnPlay.addEventListener("click", function(){
    sound.play();
  });
 

    
  var btnPause = document.getElementById("pause");
  btnPause.addEventListener("click", function(){
    sound.pause();
  });