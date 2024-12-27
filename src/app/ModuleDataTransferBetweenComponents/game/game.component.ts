import { Component,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FPSGameComponent } from '../fpsgame/fpsgame.component';


@Component({
  selector: 'app-game',
  imports: [FormsModule,FPSGameComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
 GameGenre: string='';
}
