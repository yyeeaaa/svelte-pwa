<script>
    let url = "";

    function openWeb() {
        window.location.href = url
    }
</script>

<input type="text" bind:value={url}><button on:click={openWeb}>open</button>
