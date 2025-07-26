import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';
import { Counter } from '../../counter/counter';
import { By } from '@angular/platform-browser';

describe('CounterService', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(CounterService);
    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should display initial count as 0', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Counter: 0');
  });

  
  it('should increment count when + button is clicked', () => {
    spyOn(service, 'increment').and.returnValue(1);
    const incrementButton = fixture.debugElement.query(By.css('.incr'));
    incrementButton.triggerEventHandler('click')
    fixture.detectChanges();
    
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Counter: 1');
    expect(service.increment).toHaveBeenCalled();
  })
  
  it('should decrement count when - button is clicked', () => {
    spyOn(service, 'decrement').and.returnValue(-1);
    const incrementButton = fixture.debugElement.query(By.css('.decr'));
    incrementButton.triggerEventHandler('click')
    fixture.detectChanges();
    
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Counter: -1');
    expect(service.decrement).toHaveBeenCalled();
  })
});

// it('should increment the count', () => {
//   component.increment();
//   expect(component.count).toBe(1);
// })

// it('should decrement the count', () => {
//   component.decrement();
//   expect(component.count).toBe(-1);
// })

// it('should display the count in the DOM', () => {
//   const h2 = fixture.nativeElement.querySelector('h2');
//   expect(h2.textContent).toContain('Counter: 0');
// })