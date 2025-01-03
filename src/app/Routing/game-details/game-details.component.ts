import { Component } from '@angular/core';
import { GameData } from '../Models/GameData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-details',
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {

  game:GameData={
    gameTitle:'',
    publisher:'',
    genre:'',
    releasedDate:new Date(),
    gotGameOfTheYearTitleOn:''
  };

  ngOnInit(){
    const navigation=window.history.state; // retreiving the passed data from the state
    console.log('navigation: ',navigation);
    if(navigation && navigation.game){
      this.game=navigation.game;
    }
  }
}
