import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return {
      id: 'asdf',
      subject: 'asdf',
      to: 'asdf',
      from: 'asdf',
      text: 'asdf',
      html: 'asdf'
    }
  }
}
