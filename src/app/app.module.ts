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
import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";


const firebaseConfig = {
    apiKey: "AIzaSyAiQHyVUKq4mN2pk2WcXSSwEgeidZ73McE",
    authDomain: "nutshell-a3488.firebaseapp.com",
    databaseURL: "https://nutshell-a3488.firebaseio.com",
    storageBucket: "nutshell-a3488.appspot.com",
    messagingSenderId: "668377948630"
  };


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
    RouterModule.forRoot(routes, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [ DemoResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
