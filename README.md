CamelCaseRod Pipe - Documentación
Introducción
El pipe CamelCaseRod es un pipe personalizado en Angular que transforma una cadena de texto en formato camelCase. Este pipe es útil para formatear nombres, títulos, o cualquier texto que se desee mostrar en camelCase.

Instalación e Integración
Paso 1: Crear el Pipe
El pipe se genera utilizando el CLI de Angular con el comando:
'ng generate pipe camel-case-rod'

Paso 2: Implementación del Código del Pipe
El código del pipe se encuentra en el archivo camel-case-rod.pipe.ts:

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CamelCaseRod'
})
export class CamelCaseRodPipe implements PipeTransform {

  /**
   * Transforma una cadena de texto a formato camelCase
   * @param value - Texto original a transformar
   * @returns Texto en formato camelCase
   */
  transform(value: string): string {
    // Normaliza el texto a minúsculas para consistencia
    let temporal = value;
    temporal = temporal.toLowerCase();
    
    // Divide el texto en palabras individuales usando espacios como separadores
    let listaDePalabras = temporal.split(' ');
    let palabraDeSalida: string = '';

    // Procesa cada palabra del array
    listaDePalabras.forEach((palabra: string, index) => {
      // Capitaliza todas las palabras excepto la primera
      if (index > 0) {
        console.log('Palabra Original: ', palabra);
        // Capitaliza: primera letra mayúscula + resto de la palabra
        palabra = palabra.substring(0, 1).toUpperCase() + palabra.substring(1);
        console.log('Palabra Modificada: ', palabra);
      }
      console.log('Palabra de salida: ', palabra);
      // Concatena la palabra al resultado final
      palabraDeSalida += palabra;
    });
    
    console.log('listaDePalabras Modificada', palabraDeSalida);
    return palabraDeSalida;
  }
}

Paso 3: Importar el Pipe en el Componente
En el archivo app.component.ts, importamos el pipe y lo incluimos en la lista de imports del componente:

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CamelCaseRodPipe } from './camel-case-rod.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, CamelCaseRodPipe], // ← Pipe importado aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('registro-tkd');
  
  // Lista original con diferentes formatos de texto
  listaOriginal: string[] = [
    'Rodrigo Silva Badillo',      // CamelCase normal
    'Francisco Silva Badillo',    // CamelCase normal  
    'Alejandro Silva Badillo',    // CamelCase normal
    'RODRIGO SILVA badillo',      // Mayúsculas y minúsculas mixtas
    'RODRIGO silva badillo'       // Mayúsculas y minúsculas mixtas
  ];
  
  listaCamelCase: string[] = []; // Para futuras expansiones
}

Paso 4: Usar el Pipe en la Plantilla
En el archivo app.html, utilizamos el pipe en un bucle *ngFor para aplicar la transformación a cada elemento de la lista:

<!-- Uso del pipe en el template -->
<div *ngFor="let text of listaOriginal">
  {{ text | CamelCaseRod }}
</div>

Explicación del Código del Pipe
Función transform
Entrada: Una cadena de texto (value).

Salida: La cadena transformada en camelCase.

Proceso de Transformación
Convertir a minúsculas: La cadena entera se convierte a minúsculas para uniformizar.

Dividir en palabras: Se divide la cadena por espacios, obteniendo un array de palabras.

Capitalizar palabras (excepto la primera): A partir de la segunda palabra, cada palabra se capitaliza (primera letra en mayúscula).

Unir las palabras: Se concatenan todas las palabras formando una sola cadena.

Ejemplo de Transformación
Entrada: "Rodrigo Silva Badillo"

Se convierte a minúsculas: "rodrigo silva badillo"

Se divide: ["rodrigo", "silva", "badillo"]

Se capitalizan las palabras desde la segunda:

"rodrigo" (se deja igual)

"silva" -> "Silva"

"badillo" -> "Badillo"

Se unen: "rodrigoSilvaBadillo"

Salida en Consola
El pipe incluye console.log para depuración, que muestra:

Palabra original en el array (antes de capitalizar, para index > 0)

Palabra modificada (después de capitalizar)

Palabra que se va concatenando en cada iteración

La cadena final resultante

Resultados Esperados
Dada la listaOriginal en app.component.ts, la salida en la plantilla será:
rodrigoSilvaBadillo
franciscoSilvaBadillo
alejandroSilvaBadillo
rodrigoSilvaBadillo
rodrigoSilvaBadillo

_________________________________________________________________________
_________________________________________________________________________
# RegistroTkd

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
