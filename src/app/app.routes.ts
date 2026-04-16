import { Routes } from '@angular/router';

export const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },
  {
    path: 'sobre',
    loadComponent: () =>
      //import('./pages/sobre/sobre.component')
        import('./pages/sobre/sobre.component')
            .then(m => m.SobreComponent)
  },
  {
    path: 'download',
    loadComponent: () =>
      //import('./pages/download/download.component')
        import('./pages/download/download.component')
        .then(m => m.DownloadComponent)
  },

  {
    path: 'contato',
    loadComponent: () =>
      //import('./pages/contato/contato.component')
        import('./pages/contato/contato.component')
        .then(m => m.ContatoComponent)
  }
];
