import { Component, EventEmitter, Input, Output } from "@angular/core";
import { boardService } from "../board.service";

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
})

export class TileComponent {
    @Input() row: number | any;
    @Input() col: number | any;

    @Input() currentPlayer: string | null = null;

    constructor(private bs : boardService){}

    mark() {
        let abc = new tileEdit(this.row, this.col);
        this.bs.updateTile(abc);
    }
}

class tileEdit{
    row: number;
    col: number;
    constructor(row: number, col: number){
        this.col = col;
        this.row = row;
    }
}