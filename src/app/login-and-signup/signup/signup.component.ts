import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  signupForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    homeAddress: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(public router:Router){}

  onSubmit() {
    console.log(this.signupForm);
    this.router.navigate(['/']);

  }
}
