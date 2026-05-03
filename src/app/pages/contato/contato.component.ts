import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

  enviar() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://localhost:3000/send-message', data)
      .subscribe({
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
    window.location.href = '/';
  }
}
