import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>; // reference to BehaivorSubject
  // signedin = false
  constructor(private authService: AuthService) { 
    this.signedin$ = this.authService.signedin$
  }

  // This method is another way to grab the info WITHOUT having 
  // the 'async' pipe in our html template ()
  // ngOnInit() {
    // this.authService.signedin$.subscribe(signedin => {
      // this.signedin = signedin;
    //});
  //}

  ngOnInit() {
    this.authService.checkAuth().subscribe(()=>{});
  }

}
