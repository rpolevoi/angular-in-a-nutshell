import { Routes } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { DemoResolver } from './demo-resolver.service';


export const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    resolve: {
      demo: DemoResolver
    }
  },
  {
    path: 'demo/:id',
    component: SecurityComponent,
        resolve: {
      demo: DemoResolver
    }
  },
  {
    path: '**',
    component: SecurityComponent
  }
  
];