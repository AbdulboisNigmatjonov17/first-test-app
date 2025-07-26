import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Child } from '../../components/child/child';

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<Child>

  beforeEach(() => {
    TestBed.configureTestingModule({})

    fixture = TestBed.createComponent(Child)
    fixture.detectChanges()
  })


  it('should highlight on mouse enter', () => {
    const p = fixture.debugElement.query(By.css('.paragraph'));
    p.triggerEventHandler('mouseenter')
    expect(p.nativeElement.style.backgroundColor).toBe('yellow')
  })

  it('should highlight on mouse leave', () => {
    const p = fixture.debugElement.query(By.css('.paragraph'));
    p.triggerEventHandler('mouseleave')
    expect(p.nativeElement.style.backgroundColor).toBe('')
  })
});
