import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private route: ActivatedRoute){}

reroute(id:any){
  let currentUrl = this.route.snapshot.url.join('/');
  window.location.href = currentUrl+ "/"+id;
}

}
