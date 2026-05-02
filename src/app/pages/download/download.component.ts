import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {

  constructor(private router: Router) {}

  irParaJogo() {
    window.open('https://nico-adventures-beta.vercel.app', '_blank');
  }

   irParaHome() {
    this.router.navigate(['/']);
  }

}
