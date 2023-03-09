import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidenavbarComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
