import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao',
  standalone: true,
  templateUrl: './manutencao.component.html',
  styleUrl: './manutencao.component.scss'
})
export class ManutencaoComponent {

  constructor(private router: Router) {}

  voltarHome() {
    this.router.navigate(['/']);
  }
}