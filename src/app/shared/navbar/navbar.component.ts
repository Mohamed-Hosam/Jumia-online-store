import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private route: ActivatedRoute, public router: Router){}

// reroute(id:any){
//   let currentUrl = this.route.snapshot.url.join('/');
//   window.location.href = currentUrl+ "/"+id;
// }
loggedIn = false;
ngOnInit(){
this.checklogedin();
}

checklogedin(){
  console.log("loggedIn  in the begging:"+this.loggedIn);

  let data:any = localStorage.getItem('loggedIn');
  this.loggedIn = JSON.parse(data).loggedIn;
  console.log("loggedIn  after change:"+this.loggedIn);

  let temp = document.getElementById("nav-bar");
  // temp === null?"":( this.loggedIn ===true? temp.style.display = "true" : temp.style.display="none");
  if(temp !== null){
    if(this.loggedIn == true){
      temp.style.display = "true";
    }else{
      temp.style.display = "none";
    }
  }

  console.log(this.loggedIn);
  console.log("later"+ (temp===null?"abc":temp.style.display));



}

signOut(){
  localStorage.setItem('loggedIn', JSON.stringify({loggedIn: false}));
  this.checklogedin();
  this.router.navigate(['/']);
}

}
