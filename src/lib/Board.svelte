<script lang="ts">
    import Tile from "./Tile.svelte";
    import { Modes, type Cell } from "../typings";
    import { createArray } from "../helpers";
    
    export let currentColor: number = 1
    export let colors: string[] = ["#ffffff", "#000000"]
    export let mode: Modes = Modes.Fill
    export let rows = 10
    export let columns = 10

    let boardState: Cell[][] = createArray({
        possibility: 0,
        color: 0
    }, [rows, columns]) 
    let size = 10 //temporarily

    function changeFor(row: number, column: number) {
        if (mode == Modes.Fill) {
            if (boardState[row][column].color == currentColor) {
                boardState[row][column].color = 0
            } else {
                boardState[row][column].color = currentColor
                boardState[row][column].possibility = 0
            }
        } else {
            if (boardState[row][column].possibility == currentColor) {
                boardState[row][column].possibility = 0
            } else {
                boardState[row][column].possibility = currentColor
                boardState[row][column].color = 0
            }
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
                    <Tile size={size} color={cell.color} possibility={cell.possibility} clickHandle={() => changeFor(i, j)} translateColor={(i) => colors[i]}></Tile>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
    }

    
</style>