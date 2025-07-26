import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  standalone: true
})
export class Counter {
  private counterService = inject(CounterService);
  count = 0;

  onIncrement() {
    this.count = this.counterService.increment();
  }

  onDecrement() {
    this.count = this.counterService.decrement();
  }
}
