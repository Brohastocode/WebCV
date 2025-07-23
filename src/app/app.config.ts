
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http'; // Fontos HttpClient miatt
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideAnimations } from '@angular/platform-browser/animations'; // PrimeNG animációkhoz
import { routes } from './app.routes';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'; // A routing fájlod

// A fordítási fájlok betöltője
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Routing szolgáltatás
    provideHttpClient(),     // HttpClient szolgáltatás
    provideAnimations(),     // PrimeNG animációkhoz (fontos!)
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};
