import { Component } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  template: `
    <h1>
      this is a component with both inline style and inline template
</h1>
  `,
  styles: [`h1{color:green}`
  ]
})
export class MyCompComponent {

}
