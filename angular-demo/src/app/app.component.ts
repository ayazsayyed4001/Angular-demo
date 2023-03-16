import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome(){
    return "welcome to Nass Technologies"
  };
  title = 'Nass Technologies';
  duration=10;
  runningStatus = true;
  faculty = {
    firstName:"Akil",lastName:"Khan"
  };
  myClass= "xyz"
}
