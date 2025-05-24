import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ComputerCustomComponent } from "./components/computer-custom/computer-custom.component";
import { ComponentsService } from './service/components.service';
import { PCComponent } from './components.type';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent, ComputerCustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'progect-computer';

  components: PCComponent[] = [];

  constructor(private serviceComponents: ComponentsService) {}

  addNewComponent(component: any) {
    this.serviceComponents.addNewComponent(component);
  }
}
