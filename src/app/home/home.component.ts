import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Experience } from '../experience/experience.component';
import { ProvinceService } from '../province.service';

@Component({
  selector: 'app-home',
  imports: [NgtCanvas],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sceneGraph = Experience;
  title = 'FrontEnd-Project';
  selected: string | null = null;

  OnMouseMove(event: MouseEvent) {
    // console.log('move');
  }

  constructor(private proviceService: ProvinceService) {
  }

  ngOnInit(): void {
    this.proviceService.seletecedProvince.subscribe((item) => {
      this.selected = item;
    });
    console.log(this.selected);
  }
}
