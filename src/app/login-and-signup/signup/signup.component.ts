import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    homeAddress: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public router: Router) {}
  users: any = [];

  onSubmit() {
    if (this.signupForm.valid) {
      let data: any = localStorage.getItem('users');
      this.users = JSON.parse(data);
      if (this.users === null) {
        this.users = [];
      }
      this.users.push(this.signupForm.value);
      localStorage.setItem('users', JSON.stringify(this.users));

      this.router.navigate(['/']);
    } else {
      alert('Please enter all fields');
    }
  }
}
