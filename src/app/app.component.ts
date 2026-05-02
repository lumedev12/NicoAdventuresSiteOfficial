import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'NicoAdventuresSiteOficial';

  showHeader = true;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        const noHeaderRoutes = ['/download'];
        const noFooterRouter = ['/download'];

        this.showHeader = !noHeaderRoutes.some(route => event.urlAfterRedirects.startsWith(route));
        this.showFooter = !noFooterRouter.some(route => event.urlAfterRedirects.startsWith(route));

        this.showHeader = !event.urlAfterRedirects.startsWith('/download');
      });
  }
}