import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TTSComponent } from './tts/tts.component';

const routes: Routes = [
  { path: 'tts', component: TTSComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
