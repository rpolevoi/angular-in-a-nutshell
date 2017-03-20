import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';



@Injectable()
export class DemoResolver implements Resolve<any> {
    
  test: "this is here now";
  current: number;
  length: number;
  demos: string[];

    constructor(private http: Http) {}

    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<string> {
        
        if(!length) {
            
        return this.http.get('https://project-484930452002308078.firebaseio.com/demostrings.json')
            .map(response => response.json())
            .do(arr => {this.demos = arr; this.length = arr.length; console.log(this.demos);})
            .map(arr => {
                let x = route.params['id'] ? +route.params['id'] : 0;
                this.current = x;
                console.log("PARAMS ID CURRENT", this.current);
                return arr[x];
            });//end of map and of chain
        }
        
       else {  //figure out how to use the array that was saved here for everything else:
            //probably needs to be stuffed in observable
            //make subsject to lenght test.  FIX next() in root componet -- maybe oK now
            this.current = +route.params['id'];
            return Observable.of(this.demos[this.current]);
            
        }

    }//end of resolver()
    
}//end of class