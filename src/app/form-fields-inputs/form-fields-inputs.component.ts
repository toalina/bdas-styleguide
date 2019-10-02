import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-fields-inputs',
  templateUrl: './form-fields-inputs.component.html',
  styleUrls: ['./form-fields-inputs.component.scss']
})
export class FormFieldsInputsComponent implements OnInit {
  // Checkbox
  disableSelect = new FormControl(false);

  // Radios with ngModel
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  // Form field with Error Message
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor() { }

  ngOnInit() {
  }
}
