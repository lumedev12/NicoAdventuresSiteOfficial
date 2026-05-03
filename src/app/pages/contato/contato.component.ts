import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

  name = '';
  email = '';
  message = '';

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  enviar() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contactService.sendMessage(data).subscribe({
      next: () => {
        alert('Mensagem enviada com sucesso!');

        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao enviar mensagem');
      }
    });
  }

  irParaHome() {
    this.router.navigate(['/']);
  }
}