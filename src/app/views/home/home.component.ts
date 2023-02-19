import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myForm!: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.form.group({
      grupoDespesa: ['', Validators.required],
      nomeDespesa: ['', Validators.required],
      dataVencimento: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
