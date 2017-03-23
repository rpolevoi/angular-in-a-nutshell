import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DemoResolver } from './demo-resolver.service';
import { Demo } from './demo';
import { Observable } from "rxjs";
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    demos: Demo[];
    user = {};

  
    constructor(
              public af: AngularFire,
              private demoServ: DemoResolver,
              private router: Router) {
              Observable.timer(4000).subscribe(()=> this.demos = this.demoServ.demos);
              this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
              }
              
  get nextDisabled(): boolean { 
    if (this.demoServ.current < this.demoServ.length - 1) 
    return false; 
    else return true;
  }  
  
  get backDisabled(): boolean { 
    if (this.demoServ.current > 0) 
    return false; 
    else return true;
  }
              
  next() {
    if (this.demoServ.current < this.demoServ.length - 1) 
        { this.router.navigate(['demo', this.demoServ.current + 1]); }
  }
  
  back() {
    if (this.demoServ.current > 0) 
        { this.router.navigate(['demo', this.demoServ.current - 1]); }
  }
  
  login() {
  this.af.auth.login({
    provider: AuthProviders.Google
  });
}
 
logout() {
  this.af.auth.logout();
}

   
  
} 
