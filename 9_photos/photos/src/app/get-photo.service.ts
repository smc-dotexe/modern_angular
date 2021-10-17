import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    small: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetPhotoService {
  apiKey = 'z86qkGbPCKDKDPNvVrqrXExd_PyA333OtLJjZKUmLAY';
  constructor(private http: HttpClient) { }

  randomPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': 'Client-ID ' + this.apiKey
      }
    })
  }
}
