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
    nextDisabled:boolean;
    backDisabled:boolean;
  
    constructor(
              private demoServ: DemoResolver,
              private router: Router) {
              this.demoServ.sub.subscribe(arr => this.demos = arr)
              }
              

  next() {
    console.log("in next", this.demoServ.demos);
    console.log("current in next is", this.demoServ.current );
    console.log("current in next is", this.demoServ.length );
    if (this.demoServ.current < this.demoServ.length - 1) 
        { this.nextDisabled = false;
          this.router.navigate(['demo', this.demoServ.current + 1]);
      }
      
    else this.nextDisabled = true;  

  }
  
    back() {
    if (this.demoServ.current > 0) 
        {
          this.backDisabled = false;
          this.router.navigate(['demo', this.demoServ.current - 1]);
      }
      
      else this.backDisabled = true;
  }
  
  openMenu() {
    console.log("openMenu CLICKED");
  }
   
  
} 
