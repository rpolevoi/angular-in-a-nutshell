import { Routes } from '@angular/router';
import { SecurityComponent } from './security/security.component';

export const routes: Routes = [
  {
    path: '',
    component: SecurityComponent
  },
  {
    path: 'demo/:id',
    component: SecurityComponent
  },
  {
    path: '**',
    component: SecurityComponent
  }
  
];