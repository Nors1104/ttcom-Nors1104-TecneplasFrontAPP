import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  games =[
    {
      id:1,
      name: 'uno'
    },
    {
      id:2,
      name:'catan'
    },
    {
      id:3,
      name:'monopoly'
    },
  ]
}
