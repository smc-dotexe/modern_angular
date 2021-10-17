import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: any[] = [];

  constructor(private wikipedia: WikipediaService) { }

  onTerm(term: string) {
    // retrieves observable
    // subscribe is the observer
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
