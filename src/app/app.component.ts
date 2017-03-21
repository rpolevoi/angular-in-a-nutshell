import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DemoResolver } from './demo-resolver.service';
import { Demo } from './demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    demos: Demo[];
  
    constructor(
              private demoServ: DemoResolver,
              private router: Router) {
              //this.demoServ.sub.subscribe(arr => this.demos = arr);
              //THAT this below doesn't work is key insight
              //this.demos = this.demoServ.demos;
       
              window.setTimeout(()=> this.demos = this.demoServ.demos, 4000);
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

   
  
} 
