import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EstudianteService } from './estudiante/estudiante.service';
import { MatriculaService } from './matricula/matricula.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EstudianteService, MatriculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
