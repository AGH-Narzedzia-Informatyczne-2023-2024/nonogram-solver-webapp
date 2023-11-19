<script lang="ts">
    import Tile from "./Tile.svelte";
    import { Modes, type Cell } from "../typings";
    
    export let currentColor: number = 1
    export let colors: string[]
    export let mode: Modes = Modes.Fill

    let boardState: Cell[][] = []
    let size = 10 //temporarily

    function changeFor(row: number, column: number) {
        if (mode == Modes.Fill) {
            boardState[row][column].color = currentColor
            boardState[row][column].possibility = 0
        } else {
            boardState[row][column].possibility = currentColor
            boardState[row][column].color = 0
        }
    }
</script>

<div>
    <div id="displaySquare"></div>
    <div id="verticalDescriptors"></div>
    <div id="horizontalDescriptors"></div>
    <div id="board">
        {#each boardState as row, i}
            <div class="row" id={`row${i}`}>
                {#each row as cell, j}
                    <Tile color={cell.color} possibility={cell.possibility} clickHandle={() => changeFor(i, j)} translateColor={(i) => colors[i]}></Tile>
                {/each}
            </div>
        {/each}
    </div>
</div>