import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight/highlight.directive';

@Component({
  selector: 'app-child',
  imports: [HighlightDirective],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() name = '';
  @Output() notifyParent = new EventEmitter<string>();

  notify() {
    this.notifyParent.emit(`Hello from ${this.name}`);
  }
}
