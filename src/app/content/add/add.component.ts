import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Adress, inventory } from '../content.model';
import { CustomValidator } from '../custom.validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  adress = Adress;
  form: FormGroup = new FormGroup({});

  submitted = false;

  private formValue: AngularFirestoreCollection<inventory> | undefined;

  constructor(private fb: FormBuilder, private fireStore: AngularFirestore) {
    {
      this.form = fb.group({
        number: ['', [CustomValidator.numeric]],
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      name: [''],
      Adress: Adress.Choose,
      number: [],
    });
  }
  submit(value: inventory) {
    this.formValue
      ?.add(value)
      .then((res) => {
        console.log('წარმატებით გაიგზავნა');
      })
      .catch((err) => {
        console.log(err);
      });
    this.submitted = true;
  }

  ngOnInit() {
    this.formValue = this.fireStore.collection('inventory');
    this.buildForm();
  }
}
