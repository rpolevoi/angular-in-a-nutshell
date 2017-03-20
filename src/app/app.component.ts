import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DemoResolver } from './demo-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    demos;
  
    constructor(
              private demoServ: DemoResolver,
              private router: Router) {
              this.demoServ.sub.subscribe(arr => this.demos = arr)
              }
              
  ngOnInit(){
    
    console.log("on init", this.demoServ.demos);
  }            
  
  next() {
    console.log("in next", this.demoServ.demos);
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
   
  
} 
