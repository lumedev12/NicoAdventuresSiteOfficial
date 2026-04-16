import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {

  irParaJogo() {
    window.open('https://nico-adventures-beta.vercel.app', '_blank');
  }

}
