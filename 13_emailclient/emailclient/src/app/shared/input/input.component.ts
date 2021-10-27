import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() control = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

}
