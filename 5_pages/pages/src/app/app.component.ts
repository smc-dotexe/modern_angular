import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
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

  checkWindowIndex(index: number) {
    //return (this.currentPage - index) < 5;

    return index < 5;
    // if (index >= 5) {
    //   // take the next 5 indexes
    //   // replace it with the first 5 indexes

    //   // loop through the first 5 indexes and replace it with next 5
    //   for(var i=0; i < 5; i++) {
        
    //   }
    // }

  }

  checkPageIndex(index: number) {
    console.log('CURRENTPAGE: ', this.currentPage)
    console.log('INDEX', index)
    this.currentPage = index;
    if (this.currentPage % 4 === 1){
      console.log('THIS IF RAN')
      this.currentPage = 0;
    }
    return this.currentPage +=1;
  }
}
