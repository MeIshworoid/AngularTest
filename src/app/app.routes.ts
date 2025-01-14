import { Routes } from '@angular/router';
import { GameComponent } from './ModuleDataTransferBetweenComponents/game/game.component';
import { FPSGameComponent } from './ModuleDataTransferBetweenComponents/fpsgame/fpsgame.component';
import { CalculatorComponent } from './CalculationApp/calculator/calculator.component';
import { GameDataComponent } from './Routing/game-data/game-data.component';
import { InputGameDataComponent } from './Routing/input-game-data/input-game-data.component';
import { GameDetailsComponent } from './Routing/game-details/game-details.component';

export const routes: Routes = [
    //{path: '',component:CalculatorComponent}
    //{path: 'game',component:GameComponent},
    //{path: 'fpsgame' ,component:FPSGameComponent}
    // {path:'inputgamedata',component:InputGameDataComponent},
    // {path:'gamedata',component:GameDataComponent},
    // {path:'gamedetails',component:GameDetailsComponent},
    // { path: '', redirectTo: '/inputgamedata', pathMatch: 'full' }
{
    path: '',
    loadChildren: () => import('./Template Driven Form/module/tdf.module').then(m => m.TDFModule) //lazy loading
}
];
