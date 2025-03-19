import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideHttpClient(withInterceptorsFromDi())] // ✅ Updated way to use HttpClient
}).catch((err) => console.error(err));