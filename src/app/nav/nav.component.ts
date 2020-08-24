import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public model: any = {};


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log("log in");

    }, error => {
      console.log("error");
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return token;
  }

  logout(){
    localStorage.removeItem('token');
  }

}
