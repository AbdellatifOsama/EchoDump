import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TTSComponent } from './tts/tts.component';
import { STTComponent } from './stt/stt.component';

@NgModule({
  declarations: [
    AppComponent,
    TTSComponent,
    STTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
