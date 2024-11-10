import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, NavComponent ,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
