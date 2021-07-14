import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { usuariosComponent } from './Usuarios/usuarios.component';
import { ModalComponent } from './modal/modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { gastosComponent } from './gastos/gastos.component';
import {ModalGastoComponent} from './modalgastos/modalgastos.component'
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    usuariosComponent,
    ModalComponent,
    gastosComponent,
    ModalGastoComponent,
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
