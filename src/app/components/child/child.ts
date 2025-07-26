import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
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
