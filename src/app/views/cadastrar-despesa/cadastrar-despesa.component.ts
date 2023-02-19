import { Category } from './../../interfaces/category';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-cadastrar-despesa',
  templateUrl: './cadastrar-despesa.component.html',
  styleUrls: ['./cadastrar-despesa.component.css']
})
export class CadastrarDespesaComponent implements OnInit {
  myForm!: FormGroup;
  categories: Category[] = [];

  constructor(
    private form: FormBuilder,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.myForm = this.form.group({
      category: ['', Validators.required],
      nameExpense: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories
      console.log(this.categories)
    })
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
