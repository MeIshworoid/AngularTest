import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameData } from './Models/GameData';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private gameDataSource = new BehaviorSubject<GameData[]>([]); //store the data

  currentGameData = this.gameDataSource.asObservable(); // observable to see the changes

  constructor() { }

  addGameData(game:GameData){
    const currentData = this.gameDataSource.value; // assign the currentData
    this.gameDataSource.next([...currentData,game]); // here ... is spread operator which create new array with current gamedata 
    // and upcomming  new gamedata
    // and next notify the subscriber GameDataComponent for updated data.
  }

}
