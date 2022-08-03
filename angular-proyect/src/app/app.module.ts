import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './component/componente/componente.component';
import { ComponentchildComponent } from './componentehijo/componentchild/componentchild.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    ComponentchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
