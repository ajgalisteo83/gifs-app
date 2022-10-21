import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  constructor() { }

  buscar(): void {
    console.log(this.textBuscar.nativeElement.value);
    this.textBuscar.nativeElement.value = '';
  }

}
