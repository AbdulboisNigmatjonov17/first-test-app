import { Component } from '@angular/core';
import { Parent } from "./components/parent/parent";
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Parent, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-test-app';
}
