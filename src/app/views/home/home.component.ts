import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      img: '/assets/dashboard.png',
      alt: 'Dashboard',
      title: 'Dashboard',
      text: 'Consulte seus gastos e receitas.',
      routerLink: '/dashboard',
      btnText: 'Vizualizar Dashboard'
    },
    {
      img: '/assets/types-expenses.png',
      alt: 'Grupo Despesas',
      title: 'Grupo de Despesas',
      text: 'Organize suas despesas por grupos.',
      routerLink: '/grupo-despesas',
      btnText: 'Cadastrar Grupo de Despesas'
    },
    {
      img: '/assets/expenses.png',
      alt: 'Despesas',
      title: 'Despesas',
      text: 'Cadastre suas despesas.',
      routerLink: '/register-expense',
      btnText: 'Cadastrar Despesas'
    },
    {
      img: '/assets/expenses-value.png',
      alt: 'Gastos',
      title: 'Gastos',
      text: 'Registre seus gastos.',
      routerLink: '/gastos',
      btnText: 'Inserir Gastos'
    },
    {
      img: '/assets/salary.jpg',
      alt: 'Receitas',
      title: 'Receitas',
      text: 'Registre suas receitas.',
      routerLink: '/receitas',
      btnText: 'Cadastrar Receitas'
    }
  ];
}
