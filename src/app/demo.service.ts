import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';



@Injectable()
export class DemoService {

  current: number;
  length:number;
        
  constructor(private http: Http) { 
      
    this.http.get('https://project-484930452002308078.firebaseio.com/demostrings.json')
            .map(response => response.json())
            .subscribe(demos => this.length = demos.length);
  }
  
  fetchDemo(x: number){
    this.current = x;  
    return this.http.get('https://project-484930452002308078.firebaseio.com/demostrings/'+ x + '.json')
            .map(response => response.json());
  }



}

