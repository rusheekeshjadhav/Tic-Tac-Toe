import { Component, VERSION } from '@angular/core';
import { boardService } from './board.service';
import { StateService } from './state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private bs: boardService, private ss: StateService) {}
  
  get Board(){
    return this.bs.Board;
  }
  
}
