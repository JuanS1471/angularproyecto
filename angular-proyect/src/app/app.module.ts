import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './component/componente/componente.component';
import { ComponentchildComponent } from './componentehijo/componentchild/componentchild.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { CaracteristicasEmpleadosComponent } from './componentehijo/componentchild/caracteristicas-empleados/caracteristicas-empleados.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { empleadosService } from './empleados.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectsComponentComponent } from './proyects-component/proyects-component.component';
import { QuienComponentComponent } from './quien-component/quien-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';

const appRoutes:Routes=[

  {
    path:'', component: HomeComponentComponent
  },
  {
    path:'proyectos', component: ProyectsComponentComponent
  },
  {
    path:'nosotros', component: QuienComponentComponent
  },
  {
    path:'contactenos', component: ContactoComponentComponent
  },
  {
    path:'actualizar/:id', component: ActualizarComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    ComponentchildComponent,
    CaracteristicasEmpleadosComponent,
    HomeComponentComponent,
    ProyectsComponentComponent,
    QuienComponentComponent,
    ContactoComponentComponent,
    HomeComponentComponent,
    QuienComponentComponent,
    ProyectsComponentComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, empleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
