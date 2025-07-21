import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Counter } from "./counter"
import { By } from "@angular/platform-browser";

describe('CounterComponent', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Counter],
    });

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should have initial count of 0', () => {
    expect(component.count).toBe(0);
  })

  it('should increment the count', () => {
    component.increment();
    expect(component.count).toBe(1);
  })

  it('should decrement the count', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  })

  it('should display the count in the DOM', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Counter: 0');
  })

  it('should update the DOM when + button is clicked', () => {
    const incrementButton = fixture.debugElement.query(By.css('.incr'));
    incrementButton.triggerEventHandler('click')
    fixture.detectChanges();

    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Counter: 1');
  })

  it('should update the DOM when - button is clicked', () => {
    const incrementButton = fixture.debugElement.query(By.css('.decr'));
    incrementButton.triggerEventHandler('click')
    fixture.detectChanges();

    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Counter: -1');
  })
})