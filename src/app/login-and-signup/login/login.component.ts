import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public router: Router, private _nav:NavbarComponent) {}

  users: any = [];
  foundFlag = false;

  onSubmit() {
    console.log(this.loginForm);

    if (this.loginForm.valid) {
      let data: any = localStorage.getItem('users');
      this.users = JSON.parse(data);
      if (this.users !== null) {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].email === this.loginForm.value.email) {
            this.foundFlag = true;
            if (this.users[i].password === this.loginForm.value.password) {
              localStorage.setItem('loggedIn', JSON.stringify({loggedIn: true}));
              this.router.navigate(['/home']);

              console.log("hereeee" +this._nav.loggedIn);
              this._nav.checklogedin();
              console.log("hereeee" +this._nav.loggedIn);

            } else {
              alert('password Incorrect');
            }
          }
        }
        if (!this.foundFlag) {
          alert('Email not registered');
        }
      } else {
        alert('This email is not registered');
      }
    } else {
      alert('Please enter all fields');
    }
  }
}
