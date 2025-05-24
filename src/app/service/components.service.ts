import { Component, Injectable, OnInit } from '@angular/core';
import { PCComponent } from '../components.type';
import { PC_COMPONENTS } from '../mock/componenti';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  components = PC_COMPONENTS;

  componenti: PCComponent[] = [];

  prezzoTotale = 0

  private selectedComponentSubject = new Subject<void>();
  selectedComponent = this.selectedComponentSubject.asObservable();

  constructor() {}



  addNewComponent(component: PCComponent) {
    this.componenti.push(component);
    this.selectedComponentSubject.next();
  }

  removeComponent(component: PCComponent) {
    this.components = this.components.filter((c) => c !== component);
    this.selectedComponentSubject.next();
  }

  reset() {
    this.componenti = [];
    this.selectedComponentSubject.next();
  }

  resetOne(id: number) {
    this.componenti = [...this.componenti.filter((c) => c.id !== id)];
    this.selectedComponentSubject.next();
  }

  calculateTotalPrice(){
    this.prezzoTotale = this.componenti.reduce(
      (acc, component) => acc + component.price,
      0
    );
    return this.prezzoTotale;
  }
}
