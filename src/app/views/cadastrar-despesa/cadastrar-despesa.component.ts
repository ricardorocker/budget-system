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
  form!: FormGroup;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.form = this.formBuilder.group({
      category: ['', Validators.required],
      nameExpense: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getCategorySelect();
  }

  getCategorySelect(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories
      console.log(this.categories)
    })
  }

  onSubmit() {
    console.log('Entrou no onSubmit()');
  }

}
