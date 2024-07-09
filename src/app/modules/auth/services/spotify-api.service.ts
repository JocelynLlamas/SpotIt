// src/app/services/spotify-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotitAuthService } from './spotit-auth.service';

@Injectable({
    providedIn: 'root',
})
export class SpotifyApiService {
    private apiUrl = 'https://api.spotify.com/v1';

    constructor(private http: HttpClient, private authService: SpotitAuthService) { }

    async getUserProfile() {
        const token = await this.authService.getAccessToken();
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });

        return this.http.get(`${this.apiUrl}/me`, { headers });
    }
}
