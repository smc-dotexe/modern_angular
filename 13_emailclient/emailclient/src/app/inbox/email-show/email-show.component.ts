import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs/operators';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email = {} as Email;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) { 
    this.route.data.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmail(id).subscribe(email => {
    //     console.log(email);
    //   })
    // })

    // Above method has the possibility
    // to mix up the email details vs email selected if clicked too fast.
    // 'switchMap' operator below allows requests to be cancelled of this happens.

    // this.route.params.pipe(
    //   switchMap(({ id }) => {
    //     return this.emailService.getEmail(id);
    //   })
    // ).subscribe((email) => {
    //   this.email = email;
    // })
  }

}
