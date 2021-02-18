import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appWhen]'
})
export class WhenDirective {
  @Input('appWhen') condition: boolean;

  constructor() { }

}
