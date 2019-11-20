import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    template: '<h1>Navegacion</h1>'
})

export class Navigation {
  constructor() {
    console.log("Navigation component loaded");
  }
}
