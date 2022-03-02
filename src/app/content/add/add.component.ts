import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Adress } from '../content.model';
import { CustomValidator } from '../custom.validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
adress = Adress;

form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {{
    this.form = fb.group({
      number: ['', [CustomValidator.numeric]]
    })
  } }
private buildForm(){
this.form = this.fb.group({
 name: [''],
 Adress: Adress.null,
 number: ['']
});
}
  ngOnInit() {
   this.buildForm()
  }


}

