import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from "app/app.route";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  
  hmrOnInit(store) {
    console.log('HRM store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    //recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation)
    //remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    //display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
