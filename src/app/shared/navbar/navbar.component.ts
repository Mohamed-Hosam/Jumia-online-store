import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private route: ActivatedRoute, public router: Router){}

loggedIn = false;
ngOnInit(){
this.checklogedin();
}

checklogedin(){
  let data:any = localStorage.getItem('loggedIn');
  this.loggedIn = JSON.parse(data).loggedIn;

  let temp = document.getElementById('navbar');
  if(temp !== null){
    if(Boolean(this.loggedIn)){
      temp.style.display = "block";
    }else{
      temp.style.display = "none";
    }
  }
}

signOut(){
  localStorage.setItem('loggedIn', JSON.stringify({loggedIn: false}));
  this.checklogedin();
  this.router.navigate(['/']);
}

}
