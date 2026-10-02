import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  ToastController, IonButton, IonFooter, IonList, 
  IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //TODO añade los componentes de Ionic y FormsModule a imports
  imports: [IonButton, IonLabel, IonItem, IonList, IonFooter, 
    IonHeader, IonToolbar, IonTitle, IonContent, IonInput,
    FormsModule
  ],
})
export class HomePage {

  // DONE (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // DONE (Apartado 1): Añade al menos 5 elementos a este array
  // Puedes cambiar los campos según tu dominio (películas, libros, países, etc.)
  surfistas: Elemento[] = [
    { id: 1, nombre: 'Aitor Francesena', horario: 'Lunes a viernes de mañanas', precioHora: 50, telefono: '666 666 666' },
    { id: 2, nombre: 'Aritz Aranburu', horario: 'Cambiante', precioHora: 45, telefono: '666 666 666' },
    { id: 3, nombre: 'Axi Muniain', horario: 'Muchos mediodías entre semana y domingos', precioHora: 50, telefono: '666 666 666' },
    { id: 4, nombre: 'Hugo Prieto', horario: 'Flexible', precioHora: 48, telefono: '666 666 666' },
    { id: 5, nombre: 'Ibon Oregi', horario: 'Por las tardes', precioHora: 45, telefono: '666 666 666' }
  ];

  // DONE Apartado 1 - Nombre de la aplicación: Share the Wave
  nombreApp: string = "Share the Wave";

  // DONE Apartado 1 - Footer informativo
  footerApp: string = "© 2026 Share the Wave. Todos los derechos reservados.";

  // DONE (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
    return this.surfistas.length > 0; // Modificado para que devuelva true si hay elementos en la lista
  }

  // DONE (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    // Implementa el filtro (this.elementos.filter): devuelve solo los elementos cuyo nombre
    // incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas -> .toLowerCase())
    return this.surfistas.filter(surfista => surfista.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

  // DONE Modificar el constructor para inyectar Router y ToastController con inject
  constructor() {}
  private router = inject(Router);
  private toastController = inject(ToastController);

  // DONE (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consultada la teoría: apartado "ion-toast vs ion-alert":
    // ToastController es un componente de Ionic que muestra mensajes emergentes
    const toast = await this.toastController.create({
      message: 'Lista de surfistas cargada correctamente',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();   
  }
}