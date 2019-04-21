import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrestadoresComponent } from './components/prestadores/prestadores.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    PrestadoresComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
