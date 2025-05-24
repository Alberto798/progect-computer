import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PCComponent } from '../../components.type';
import { PC_COMPONENTS } from '../../mock/componenti';
import { CommonModule } from '@angular/common';
import { ComponentsService } from '../../service/components.service';




@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {

  components: PCComponent[] = [];

  

  constructor(private serviceComponents: ComponentsService) {}
  ngOnInit(): void {
    this.components = PC_COMPONENTS;

  }

  addComponent(component: PCComponent) {

    this.serviceComponents.addNewComponent(component)
    
  }

  
}