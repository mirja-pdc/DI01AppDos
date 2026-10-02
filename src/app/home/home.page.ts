import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  ToastController
} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';
import { IonFooter, IonList, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //TODO añade los componentes de Ionic y FormsModule a imports
  imports: [IonLabel, IonItem, IonList, IonFooter, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    FormsModule
  ],
})
export class HomePage {

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
  // Puedes cambiar los campos según tu dominio (películas, libros, países, etc.)
  surfistas: Elemento[] = [
    { id: 1, nombre: 'Aitor Francesena', horario: 'Lunes a viernes de mañanas', precioHora: 50, telefono: '666 666 666' },
    { id: 2, nombre: 'Aritz Aranburu', horario: 'Cambiante', precioHora: 45, telefono: '666 666 666' },
    { id: 3, nombre: 'Axi Muniain', horario: 'Muchos mediodías entre semana y domingos', precioHora: 50, telefono: '666 666 666' },
    { id: 4, nombre: 'Hugo Prieto', horario: 'Flexible', precioHora: 48, telefono: '666 666 666' },
    { id: 5, nombre: 'Ibon Oregi', horario: 'Por las tardes', precioHora: 45, telefono: '666 666 666' }
  ];

  // Apartado 1 - Nombre de la aplicación: Share the Wave
  nombreApp: string = "Share the Wave";

  // Apartado 1 - Footer informativo
  footerApp: string = "© 2026 Share the Wave. Todos los derechos reservados.";

  // TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
    return this.surfistas.length > 0; // Modificado para que devuelva true si hay elementos en la lista
  }

  // TODO (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    // Implementa el filtro (this.elementos.filter): devuelve solo los elementos cuyo nombre
    // incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas -> .toLowerCase())
    return this.elementos;
  }

  // TODO Modificar el constructor para inyectar Router y ToastController con inject
  constructor(private router: Router, private toastController: ToastController) {}

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consulta la teoría: apartado "ion-toast vs ion-alert"    
  }
}