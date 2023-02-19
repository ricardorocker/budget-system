import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public navbarItems = [
    {
      name: 'Home',
      routerLink: '/'
    },
    {
      name: 'Dashboard',
      routerLink: '/dashboard'
    },
    {
      name: 'Grupo despesas',
      routerLink: '/grupo-despesas'
    },
    {
      name: 'Despesa',
      routerLink: '/register-expense'
    },
    {
      name: 'Gastos',
      routerLink: '/register-expense-values'
    },
    {
      name: 'Receita',
      routerLink: '/register-salary'
    },

    // {
    //   name: 'Cadastros',
    //   subitems: [
    //     {
    //       name: 'Grupo despesas',
    //       routerLink: '/subitem1'
    //     },
    //     {
    //       name: 'Despesa',
    //       routerLink: '/register-expenses'
    //     },
    //     {
    //       name: 'Gastos',
    //       routerLink: '/subitem3'
    //     }
    //   ]
    // }
  ];

  constructor(
  ) { }

}
