import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentsService } from '../../service/components.service';
import { PCComponent } from '../../components.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-computer-custom',
  imports: [CommonModule],
  templateUrl: './computer-custom.component.html',
  styleUrl: './computer-custom.component.css',
})
export class ComputerCustomComponent implements OnInit {
  components: PCComponent[] = [];

  totale = 0

  types = [
    "CPU",
    "GPU",
    "RAM",
    "SSD",
    "HDD",
    "PSU",
    "Case",
    "Motherboard"
    ]

  constructor(private serviceComponents: ComponentsService) {}
  ngOnInit() {
    this.serviceComponents.selectedComponent.subscribe(() => {
      this.components = this.serviceComponents.componenti;
      this.addComponentiScelti()
    });
  }
  componentiScelti: PCComponent[] = [];

  removeComponent(id: number) {
    this.components = this.components.filter(
      (component) => component.id !== id
    );
    this.serviceComponents.resetOne(id);
  }

  resetComponents() {
    this.serviceComponents.reset();
    this.componentiScelti = []
    this.totale = 0;
  }

  addComponentiScelti() {
    this.componentiScelti = this.serviceComponents.componenti;
    this.serviceComponents.calculateTotalPrice();
    this.totale = this.serviceComponents.prezzoTotale;
    
  }
}
