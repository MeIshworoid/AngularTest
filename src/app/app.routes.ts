import { Routes } from '@angular/router';
import { GameComponent } from './ModuleDataTransferBetweenComponents/game/game.component';
import { FPSGameComponent } from './ModuleDataTransferBetweenComponents/fpsgame/fpsgame.component';
import { CalculatorComponent } from './CalculationApp/calculator/calculator.component';
import { GameDataComponent } from './Routing/game-data/game-data.component';
import { InputGameDataComponent } from './Routing/input-game-data/input-game-data.component';
import { GameDetailsComponent } from './Routing/game-details/game-details.component';
import { LoginFormComponent } from './Routing/login-form/login-form.component';
import { authGuard } from './Routing/Gaurd/auth.guard';

export const routes: Routes = [
    //{path: '',component:CalculatorComponent}
    //{path: 'game',component:GameComponent},
    //{path: 'fpsgame' ,component:FPSGameComponent}
    {path:'inputgamedata',component:InputGameDataComponent,canActivate:[authGuard]},
    {path:'gamedata',component:GameDataComponent},
    {path:'gamedetails',component:GameDetailsComponent},
    {path:'loginForm',component:LoginFormComponent},
    // { path: '', redirectTo: '/loginForm', pathMatch: 'full' }
// {
//     path: '',
//     loadChildren: () => import('./Template Driven Form/module/tdf.module').then(m => m.TDFModule) //lazy loading
// },
{
    path: '',
    loadChildren: () => import('./BookManagementApp/books/books.module').then(m=>m.BooksModule)
},
];
