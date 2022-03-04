import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Adress } from '../content.model';
import { CustomValidator } from '../custom.validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  adress = Adress;
  formData = [];

  form: FormGroup = new FormGroup({});

  submitted = false;

  constructor(private fb: FormBuilder) {
    {
      this.form = fb.group({
        number: ['', [CustomValidator.numeric]],
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      name: [''],
      Adress: Adress.null,
      number: [''],
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  // onSubmit() {
  //   const currentData = JSON.stringify(localStorage.getItem('formdata'));
  //   localStorage.setItem(
  //     'formdata',
  //     JSON.stringify(JSON.parse(currentData).concat(this.form.valueChanges))
  //   );
  // }
  onSubmit() {
    const currentData = JSON.stringify(localStorage.getItem('formdata'));
    const jsonData = JSON.stringify(this.form.value);
    localStorage.setItem(
      'formdata',
      JSON.stringify(JSON.parse(currentData).concat(this.form.valueChanges))
    );
  }
}
