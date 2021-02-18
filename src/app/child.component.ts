import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>child works!</p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {
  @Input() callback: Function;

  ngOnInit(): void {
    setInterval(() => {
      this.callback()
    }, 2000)
  }


}
