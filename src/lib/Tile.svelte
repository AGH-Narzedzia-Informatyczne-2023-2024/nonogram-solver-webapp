<script lang="ts">
    export let clickHandle: () => void
    export let size: number
    export let color: number
    export let possibility: number
    export let translateColor: (index: number) => string
</script>

<div class="cell" aria-pressed="false" role="button" tabindex="0"
    on:click={clickHandle}  on:keydown={() => {}}
    style={`background-color: ${translateColor(color >= 0 ? color : 0)}; width: ${size}px; height: ${size}px`}>
    <canvas class:active={isCrossed}></canvas>
    {#if color < 0}
    
    {#else}
    {/if}

</div>

<style>
    .cell {
        user-select: none;
    }
    
    .circle {
        width: 50%;
        border-radius: 50%;
        height: 50%;
        margin: 25%;
    }
</style>