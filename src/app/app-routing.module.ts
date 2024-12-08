import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TTSComponent } from './tts/tts.component';
import { STTComponent } from './stt/stt.component';

const routes: Routes = [
  { path: 'tts', component: TTSComponent },
  { path: 'stt', component: STTComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
