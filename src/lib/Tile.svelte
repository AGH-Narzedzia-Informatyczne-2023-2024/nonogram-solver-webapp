<script lang="ts">
    export let clickHandle: () => void
    export let size: number
    export let color: number
    export let possibility: number
    export let translateColor: (index: number) => string

    $: isCrossed = color < 0

    function drawCross(e: EventTarget & Element) {
        let ctx = (e as HTMLCanvasElement).getContext("2d")!
        ctx.moveTo(0, 0)
        ctx.lineTo(size, size)
        ctx.moveTo(0, size)
        ctx.lineTo(size, 0)
    }
</script>

<div 
    class="cell" 
    aria-pressed="false" 
    role="button" 
    tabindex="0"
    on:click={clickHandle} 
    on:keydown={() => {}}
    style={`background-color: ${translateColor(color >= 0 ? color : 0)}; width: ${size}px; height: ${size}px`}
    >
    <canvas width={size} height={size} class:active={isCrossed} on:load={(e) => drawCross(e.currentTarget)}></canvas>
    <div class:active={!isCrossed} style={`background-color: ${possibility}`}></div>
</div>

<style>
    .cell {
        user-select: none;
        border: 1px solid black;
    }
    
    .circle {
        width: 50%;
        border-radius: 50%;
        height: 50%;
        margin: 25%;
    }
</style>