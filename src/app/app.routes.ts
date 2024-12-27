import { Routes } from '@angular/router';
import { GameComponent } from './ModuleDataTransferBetweenComponents/game/game.component';
import { FPSGameComponent } from './ModuleDataTransferBetweenComponents/fpsgame/fpsgame.component';
import { CalculatorComponent } from './CalculationApp/calculator/calculator.component';

export const routes: Routes = [
    {path: '',component:CalculatorComponent}
    //{path: 'game',component:GameComponent},
    //{path: 'fpsgame' ,component:FPSGameComponent}
];
