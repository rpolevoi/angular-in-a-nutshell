import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DemoResolver } from '../demo-resolver.service';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/do';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {

  unsafeUrl: string;
  safeUrl: SafeResourceUrl;
  id:string;
  flag = true;
  
  subscription:Subscription;

  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private router: Router,
              private demoServ: DemoResolver,
              public af: AngularFire) {
                
              route.data.pluck('demo')
                .subscribe(dem => this.updateUrl(<string> dem['url']));
                
              this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.flag = false;

      }
      else {
        // user not logged in
        this.flag = true;

      }
    });  
                
              }



  
  updateUrl(id: string) {
 
    this.unsafeUrl = "https://embed.plnkr.co/" + id;
    this.safeUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
  }
  
   


}
