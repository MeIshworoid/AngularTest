import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fpsgame',
  standalone: true,
  imports: [],
  templateUrl: './fpsgame.component.html',
  styleUrl: './fpsgame.component.scss'
})
export class FPSGameComponent {
@Input() GameGenre: string ='';
onClick(){
  window.open('https://store.steampowered.com/app/2406770/Bodycam/', '_blank');
}
}
