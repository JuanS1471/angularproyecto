import { NgModule } from '@angular/core';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
