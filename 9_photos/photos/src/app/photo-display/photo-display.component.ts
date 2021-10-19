import { Component, OnInit } from '@angular/core';
import { GetPhotoService } from '../get-photo.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})
export class PhotoDisplayComponent implements OnInit {
  imageUrl: string = '';

  constructor(private getPhotoService: GetPhotoService) {

    this.fetchPhoto();
   }

  ngOnInit(): void {
  }

  generatePhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.getPhotoService.randomPhoto().subscribe(response => {
      this.imageUrl = response.urls.small;
    });
  }


}
