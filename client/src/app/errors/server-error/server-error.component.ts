import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  standalone: true,
  imports: [],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css'
})
export class ServerErrorComponent {
  error: any;
  constructor(private router: Router) {
    const navigarion = this.router.getCurrentNavigation();
    this.error = navigarion?.extras?.state?.['error'];
  }
}
