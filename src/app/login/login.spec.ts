import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { By } from '@angular/platform-browser';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
    })
      .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with email and password controls', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  })

  it('should make email constrol invalid if empty', () => {
    const control = component.loginForm.get('email');
    control?.setValue('bg');
    expect(control?.valid).toBeFalsy();
  })

  it('should mark as valid when both controls are filled', () => {
    component.loginForm.setValue({
      email: 'bg@bg.com',
      password: '123'
    })
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('should call submit and log value if valid', () => {
    spyOn(console, 'log');

    component.loginForm.setValue({
      email: 'bg@bg.com',
      password: '123'
    })

    const formEl = fixture.debugElement.query(By.css('form'));
    formEl.triggerEventHandler('ngSubmit', null);

    expect(console.log).toHaveBeenCalledWith({
      email: 'bg@bg.com',
      password: '123'
    });
  })
});
