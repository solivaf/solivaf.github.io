import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  authenticate(email: string, password: string) {
    if (this.authService.isValidEmailAndPassword(email, password)) {
      this.router.navigate(['/campaign']);
    }
  }
}
