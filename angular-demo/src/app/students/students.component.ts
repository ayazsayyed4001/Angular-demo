import { Component } from '@angular/core';

@Component({
  selector: 'app-stud',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  greet(name:any,message:any){
    console.log(` ${name}, ${message}`)
  }
}
