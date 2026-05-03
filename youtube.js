 var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    // this function will be called automatically !
    function onYouTubeIframeAPIReady() {
            console.log("this func is automatically called");
        player = new YT.Player('yt-video-iframe', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError,
            }
        });
    }
    
    function onPlayerReady(event) {
        console.log('video is ready');
    }

    function onPlayerStateChange(event) {
        console.log(event.data);
    }
    function onPlayerError(event) {
        swipeUp();
    }    