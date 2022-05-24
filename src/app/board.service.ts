import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class boardService {
 
  private board: string[][] | any[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  get Board(){
    return this.board;
  }

  private currentPlayer: string | null = "X"

  updateTile($event: any) {
    this.board[$event.row][$event.col] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer == 'O' ? 'X' : 'O';
    setTimeout(() => this.checkMatchFinished(), 0);
  }

  checkMatchFinished() {
    let gameFinished = false;
    let player: string | any;
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] == this.board[i][1] &&
        this.board[i][1] == this.board[i][2]
      ) {
        gameFinished = true;
        player = this.board[i][0];
        break;
      }

      if (
        this.board[0][i] == this.board[1][i] &&
        this.board[1][i] == this.board[2][i]
      ) {
        gameFinished = true;
        player = this.board[0][i];
        break;
      }
    }
    if (
      this.board[0][0] == this.board[1][1] &&
      this.board[1][1] == this.board[2][2]
    ) {
      gameFinished = true;
      player = this.board[0][0];
    }

    if (
      this.board[2][0] == this.board[1][1] &&
      this.board[1][1] == this.board[0][2]
    ) {
      gameFinished = true;
      player = this.board[1][1];
    }

    if (gameFinished && player != null) {
      alert(`Game Finished, ${player} Won`);
    }
  }
}
