import { Component, OnInit } from '@angular/core';
import { PaginationDirective } from './pagination.directive';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  currentPage = 0;
  maxPerPage = 5;
  displayPages: number[]=[];

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<= this.maxPerPage; i++)
    {
      this.displayPages.push(i);
    }
  }

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'In the City',
      url: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Around the Forest',
      url: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'On the Mountain',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Around the Forest',
      url: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'On the Mountain',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Around the Forest',
      url: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'On the Mountain',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Around the Forest',
      url: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'On the Mountain',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  pageDecrease() {
    if (this.currentPage === 0) {
      return;
    }

    this.currentPage -= 1;
  }

  pageIncrease() {
    this.currentPage += 1;
    console.log('displayPages', this.displayPages)
    if (this.currentPage > 5) {
      console.log('this ran')
    }
  }

}
