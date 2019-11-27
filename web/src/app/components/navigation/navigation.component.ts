import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})

export class Navigation {
  public brand: string;
  public items: Array<string>;
  
  
  constructor() {
    this.brand = 'LeandroAndrade';
    this.items = ['Inicio', 'Portfolio', 'Contacto'];
    console.log("Navigation component loaded");
  }
}
