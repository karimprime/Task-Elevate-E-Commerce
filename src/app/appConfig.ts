import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { errorsInterceptor } from './core/interceptors/errors/errors.interceptor';
import { loadingInterceptor } from './core/interceptors/loading/loading.interceptor';
import { provideToastr } from 'ngx-toastr';
import { successInterceptor } from './core/interceptors/success/success.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([
        errorsInterceptor,
        successInterceptor,
        loadingInterceptor,
      ])
    ),
    provideAnimations(),
    provideToastr({
      closeButton: false,
      positionClass: 'toast-below-navbar',
      timeOut: 3000,
      progressBar: true,
    }),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
};
