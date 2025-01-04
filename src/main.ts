import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(BrowserAnimationsModule),
//     provideToastr({
//       timeOut: 3000,
//       positionClass: 'toast-top-right',
//       preventDuplicates: true,
//     }),
//   ],
// }).catch(err => console.error(err));
