import { Component, Input } from '@angular/core';
import { GameData } from '../Models/GameData';
import { GameDataService } from '../game-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-game-data',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './input-game-data.component.html',
  styleUrl: './input-game-data.component.scss',
  providers:[DatePipe],
})
export class InputGameDataComponent {
  game:GameData={
    gameTitle:'',
    publisher:'',
    genre:'',
    releasedDate:new Date(),
    gotGameOfTheYearTitleOn:''
  };

  years:number[] =[];

  constructor(private gameDataService:GameDataService,
    private datePipe:DatePipe){
    this.generateYears();
  }

  onSubmit(){
    console.log("Form Submit Clicked...");
    this.gameDataService.addGameData(this.game);
    //this.toastr.success("Game Data Added Successfully.");
    this.resetGameData();    
  }

  resetGameData():void{
    this.game={
      gameTitle:'',
      publisher:'',
      genre:'',
      releasedDate:new Date(),
      gotGameOfTheYearTitleOn:''
    };
  }

  // formatting date
  get formattedReleaseDate():string{
    return this.datePipe.transform(this.game.releasedDate,"yyyy-MM-dd")!;
  }

  //generate array of an years

  generateYears():void{
    const currentYear = new Date().getFullYear();
    for(let year=2000;year<=currentYear;year++){
      this.years.push(year);
    }
  }
}
