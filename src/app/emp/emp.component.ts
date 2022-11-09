import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  empoyes = [
    {name: 'Ábor Elek', city: 'Szeged', salary: 384},
    {name: 'Trank Gábor', city: 'Miskolc', salary: 322},
    {name: 'Paprika József', city: 'Szolnok', salary: 349},
    {name: 'Long Lajos', city: 'Budapest', salary: 335}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
