import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { DemoResolver } from './demo-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: false }),
    
  ],
  providers: [ DemoResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
