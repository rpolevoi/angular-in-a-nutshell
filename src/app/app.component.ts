import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
//import { DemoService } from './demo.service';
import { DemoResolver } from './demo-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    subscription:Subscription;
  
    constructor(
              private demoServ: DemoResolver,
              private router: Router) { }
  
  next() {
    
    console.log("current in next is", this.demoServ.current );
    console.log("current in next is", this.demoServ.length );
    if (this.demoServ.current < this.demoServ.length - 1) 
        {
          this.router.navigate(['demo', this.demoServ.current + 1]);
      }


    else this.router.navigate(['demo', 0]);
  }
  
  openMenu() {
    console.log("openMenu CLICKED");
  }
   
     ngOnDestroy() {
    
    this.subscription.unsubscribe();
  }
  
} 
