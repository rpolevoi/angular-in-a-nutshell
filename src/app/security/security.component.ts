import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DemoService } from '../demo.service';

@Component({
  selector: 'security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  unsafeUrl: string;
  safeUrl: SafeResourceUrl;
  id:string;
  
  subscription:Subscription;

  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private router: Router,
              private demoServ: DemoService) {}

  ngOnInit() {
    

    this.subscription = this.route.params
      .subscribe(params => {
            let x:number = params['id'] ? +params['id'] : 0;
            console.log("update with", x);
            this.demoServ.fetchDemo(x)
              .do(console.log)
              .subscribe(dem => this.updateVideoUrl(dem));
      });
  }
  
  updateVideoUrl(id: string) {
 
    this.unsafeUrl = "https://embed.plnkr.co/" + id;
    this.safeUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
  }
  
   
  ngOnDestroy() {
    
    this.subscription.unsubscribe();
  }

}
