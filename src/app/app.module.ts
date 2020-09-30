import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent,  TodoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, providers: [TodoService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
