import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  horoes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'DeadPool'];
  heroeBorrado: string = '';
  borrado: boolean = false;

  borrarHeroe(): void{
    console.log('Borrando...');
    /*La fucnión shift, remueve el primer elemento
    del array y lo retorna, por lo cual puede ser
    almacenado dentro de una varibale para ser mostrado
    o ejecutar acciones con el*/
    this.heroeBorrado = this.horoes.shift() || '';
    this.borrado = true;
    /**La función shift puede regrasr "undefined" y para
     * prevenir esto, colocamos el operado logico ||
     * el cual le dice que si el valor es "undefined"
     * entonces regrese un strin vacio
     */
    
    // console.log(heroeBorrado);
    
  }

}
