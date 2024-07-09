// src/app/services/spotify-auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpotitAuthService {
  private clientId = '81c66323b65443559060f6de2044101d';
  private redirectUri = 'http://localhost:4200/auth/callback';
  private authUrl = 'https://accounts.spotify.com/en/authorize';
  private token: string | null = null;

  constructor(private router: Router) { }

  login() {
    const url = `${this.authUrl}?client_id=${this.clientId}&response_type=token&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=user-read-private%20user-read-email%20playlist-read-private&show_dialog=true`;
    window.location.href = url;
  }

  handleAuthCallback() {
    const fragment = new URLSearchParams(window.location.hash.replace('#', ''));
    const token = fragment.get('access_token');
    if (token) {
      this.token = token;
      window.history.replaceState({}, document.title, window.location.pathname); // Limpiar el hash de la URL
      this.router.navigate(['/']); // Redirigir a la página principal
    } else {
      // Manejar el error de autenticación
      this.router.navigate(['/auth/sign-in']);
    }
  }

  get accessToken() {
    return this.token;
  }

  get isLoggedIn() {
    return !!this.token;
  }
}
