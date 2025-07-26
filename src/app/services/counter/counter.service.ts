import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0;

  getCount(): number {
    return this.count;
  }

  increment(): number {
    return this.count++;
  }

  decrement(): number {
    return this.count--;
  }
}