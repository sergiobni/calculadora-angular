import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'calculadora-angular';
  pantalla = '';
  memoria = 0;

  constructor() {}

  ngOnInit(): void {}

  recoge(a: any) {
    //   if (typeof a === 'number'){this.memoria += a;}else if{ typeof a === 'string'{
    //     switch(a){
    //       case a === '+':
    //   }}
  }
}
