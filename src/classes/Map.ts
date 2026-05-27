import { TILE_SIZE } from "../constants/gameConstants";

export class Map{
    private grid: number[][] = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    constructor(){}

    public draw(ctx: CanvasRenderingContext2D): void{
        for (let fila = 0; fila < this.grid.length; fila++) {
            const columnas = this.grid[fila];
            if(!columnas) continue;
            for (let columna = 0; columna < columnas.length; columna++) {
                const tileX = columna * TILE_SIZE;
                const tileY = fila * TILE_SIZE;

                ctx.fillStyle = columnas[columna] === 1 ? '#444' : '#222'
                ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE)

                ctx.strokeStyle = '#333';
                ctx.strokeRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
            }
        }
    }

    public isWall(screenX: number, screenY: number): boolean{
        const columna = Math.floor(screenX / TILE_SIZE)
        const fila = Math.floor(screenY / TILE_SIZE)

        const columnas = this.grid[fila]

        if (fila < 0 || fila >= this.grid.length || !columnas || columna < 0 || columna >= columnas.length) {
            return true;
        }

        return columnas[columna] === 1;
    }
}