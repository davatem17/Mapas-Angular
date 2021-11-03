import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDossc86yW8kSY9r7kdW59Y2cvj7jxlZMA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
