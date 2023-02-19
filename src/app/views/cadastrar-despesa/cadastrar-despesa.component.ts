import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-despesa',
  templateUrl: './cadastrar-despesa.component.html',
  styleUrls: ['./cadastrar-despesa.component.css']
})
export class CadastrarDespesaComponent {
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
