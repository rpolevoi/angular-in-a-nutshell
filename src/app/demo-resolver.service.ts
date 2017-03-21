import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import { Demo } from './demo';



@Injectable()
export class DemoResolver implements Resolve<any> {
    
        
  current: number;
  length: number;
  demos: Demo[];
  //not needed if delay!! 
  //sub:Subject<Demo[]> = new Subject();

    constructor(private http: Http) {}

    
    resolve(route: ActivatedRouteSnapshot):Observable<Demo> {
        
        if(!length) {
            
        return this.http.get('https://project-484930452002308078.firebaseio.com/demos.json')
            .map(response => response.json())
            .do(arr => {this.demos = arr; this.length = arr.length; console.log(this.demos);})
            .map(arr => {
                let x = route.params['id'] ? +route.params['id'] : 0;
                this.current = x;
                //not needed to push because of delay in root component
                //this.sub.next(arr);
                console.log("PARAMS ID CURRENT", this.current);
                return arr[x];
            });
        }
        
       else {  
            this.current = +route.params['id'];
            return Observable.of(this.demos[this.current]);
        }

    }//end of resolve()
    
}//end of class