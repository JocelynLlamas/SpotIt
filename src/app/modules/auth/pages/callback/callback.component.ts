import { Component, OnInit } from '@angular/core';
import { SpotitAuthService } from '../../services/spotit-auth.service';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit {
  
  constructor(private spotifyAuthService: SpotitAuthService) {

  }

  ngOnInit(): void {
    this.spotifyAuthService.handleAuthCallback();
  }
}
