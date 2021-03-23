import { componentFactoryName } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>

        <h3>La base es : <strong> {{ base }} </strong></h3>

        <button (click)=" acumular(base); "> + {{ base }} </button>

        <span> {{ numero }} </span> 

        <button (click)=" acumular(-base); "> - {{ base }} </button>

    `
})
export class ContadorComponet{
  title : string = 'Contador App';
  numero: number = 10;
  base  : number = 5;

  // Metodos en el componente
  acumular( valor: number ){
    // acemos referencia a la propiedad de la clase
    this.numero += valor;
  }
}