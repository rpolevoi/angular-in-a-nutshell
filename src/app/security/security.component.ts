import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DemoResolver } from '../demo-resolver.service';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/do';

@Component({
  selector: 'security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {

  unsafeUrl: string;
  safeUrl: SafeResourceUrl;
  id:string;
  
  subscription:Subscription;

  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private router: Router,
              private demoServ: DemoResolver) {
                
              route.data.pluck('demo')
                .subscribe(dem => this.updateUrl(<string> dem));
              }



  
  updateUrl(id: string) {
 
    this.unsafeUrl = "https://embed.plnkr.co/" + id;
    this.safeUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
  }
  
   


}
