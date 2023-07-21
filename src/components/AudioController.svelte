<script lang=ts>
    let isVideoPlaying = true;

    const higherPitch = () => {
        
    }

    const lowerPitch = () => {
        
    };
</script>

<main>
    {#if isVideoPlaying}
        <div>
            YouTube video is playing!
        </div>
        <button on:click={higherPitch}>Up</button>
        <button on:click={lowerPitch}>Down</button>
    {:else}
      <div>No YouTube video is playing.</div>
    {/if}
</main>

<style>
    div {
        width: 50px;
        height: 50px;
    }
</style>