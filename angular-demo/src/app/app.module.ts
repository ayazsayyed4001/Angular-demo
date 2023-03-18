import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { HeroAppComponent } from './hero-app/hero-app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    UserComponent,
    LoginComponent,
    HeroAppComponent,
    DemoComponentComponent,
    MyCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
