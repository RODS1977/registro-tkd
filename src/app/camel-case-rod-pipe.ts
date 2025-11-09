import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CamelCaseRod'
})
export class CamelCaseRodPipe implements PipeTransform {

  transform(value: string): string {
    let temporal = value;
    temporal = temporal.toLowerCase();
    let listaDePalabras = temporal.split(' ');
    let palabraDeSalida: string = '';

    listaDePalabras.forEach((palabra:string, index) => {
      if(index > 0) {
        console.log('Palabra Original: ', palabra);
        palabra = palabra.substring(0,1).toUpperCase() + palabra.substring(1);
        console.log('Palabra Modificada: ', palabra);
      }
      console.log('Palabra de salida: ', palabra);
      palabraDeSalida += palabra;
    });
    console.log('listaDePalabras Modificada', palabraDeSalida);
    return palabraDeSalida;
  }

}
