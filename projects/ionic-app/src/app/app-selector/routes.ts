import { Routes } from '@angular/router';
import { ROUTES_MOBILE } from '../mobile/app.routes';
import { ROUTES_HOME } from '../home/app.routes';

export const ROUTES = ROUTES_MOBILE.concat(ROUTES_HOME);
