import { Component } from '@angular/core';
import { GameData } from '../Models/GameData';
import { GameDataService } from '../game-data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-game-data',
  imports: [CommonModule],
  templateUrl: './game-data.component.html',
  styleUrl: './game-data.component.scss'
})
export class GameDataComponent {

gameData:GameData[]=[]; //store the array of gamedata

constructor(private gameDataService:GameDataService,private router:Router){}

ngOnInit(){
  //subscribtion of the gamedata and updata when changes
  this.gameDataService.currentGameData.subscribe(data=>{
  console.log('gameData: ',data);

    this.gameData=data;
  })
}

viewGameDetails(game:GameData):void{
this.router.navigate(['/gamedetails'],{state:{game}});
}
  
}
