<script context="module">
    let iframeApiReady = false;
  
    import { setContext, onMount } from "svelte";
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    window.onYouTubeIframeAPIReady = () =>
      window.dispatchEvent(new Event("iframeApiReady"));
  </script>

<script lang="ts">
    import { getContext, createEventDispatcher } from "svelte";
    let player;
    
    export function play(){
      player.playVideo()
    }
    const dispatch = createEventDispatcher();
    window.addEventListener("iframeApiReady", function(e) {
      console.log("yo", "player");
      player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "ABOYo7ioQJo",
        events: {
          onReady: playerIsReady,
          onStateChange: playerStateChange
        }
      });
    });

    function playerStateChange({data}){
      dispatch("PlayerStateChange", data)
      console.log(data)
      let strReturn = "";
      if(data== -1){ strReturn = "(unstarted)"}
      if(data== 0 ){ strReturn = "(ended)"}
      if(data== 1 ){ strReturn = "(playing)"}
      if(data== 2 ){ strReturn = "(paused)"}
      if(data== 3 ){ strReturn = "(buffering)"}
      if(data== 5 ){ strReturn = "(video cued)."}
      dispatch("PlayerStateChangeString", strReturn)
    }

    function playerIsReady() {
      dispatch("Ready");
      setInterval(() => {
        dispatch("currentPlayTime", player.getCurrentTime());
        //console.log(player.getCurrentTime())
      }, 1000);
    }
  </script>

<div id="player"></div>

<!--   
<div id="player">
    <iframe width=640 height=390 src="https://www.youtube.com/embed/BO2x08YHNMI" referrerpolicy="no-referrer-when-downgrade" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div> -->