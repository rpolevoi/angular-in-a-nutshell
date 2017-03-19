import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';



@Injectable()
export class DemoService {


/*demos = [
'zQl417tEHBqqsr9Lz9ZY',
'pQngeWIGG1HSghygLIq2',
'VOPFiKj3rRmxOIMcPFx0',
'XAk003P5dLu8E80F2mkT',
'zlnMGmShSRzyKxOj7nng'
];*/
  current: number;
  length:number;
  first: string;
        
  constructor(private http: Http) { }
    
    //this.length = this.demos.length;
  fetchFirstDemo()  {   
/*  return this.http.get('https://project-484930452002308078.firebaseio.com/demostrings/0.json')
            .map(response => response.json())
            .do(console.log);*/
            return 'zQl417tEHBqqsr9Lz9ZY';

  }
  
  fetchDemo(x: number){
    this.current = x;  
    return this.http.get('https://project-484930452002308078.firebaseio.com/demostrings/'+ x + '.json')
            .map(response => response.json());
   // return this.demos[x];        
            
  }



}

