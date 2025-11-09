import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

 import { CamelCaseRodPipe } from './camel-case-rod-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, CamelCaseRodPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('registro-tkd');
  listaOriginal: string[] = [
    'Rodrigo Silva Badillo',
    'Francisco Silva Badillo',
    'Alejandro Silva Badillo', 
    'RODRIGO SILVA badillo', 
    'RODRIGO silva badillo'
  ];
  listaCamelCase: string[] = [];

}
