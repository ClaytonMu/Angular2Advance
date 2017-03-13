import { Route } from '@angular/router';

export const fullbackRoute: Route =
  { path: '**', redirectTo: '/', pathMatch: 'full'};
