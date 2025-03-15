import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Experience } from '../experience/experience.component';
import { ProvinceService } from '../province.service';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-home',
  imports: [NgtCanvas, CommonModule, DetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sceneGraph = Experience;
  title = 'FrontEnd-Project';
  selected: string | null = null;
  showDetail: boolean = false;
  selectedImage: string | null = null;

  OnMouseMove(event: MouseEvent) {
    // console.log('move');
  }

  constructor(private provinceService: ProvinceService) {
  }

  ngOnInit(): void {
    this.provinceService.seletecedProvince.subscribe((item) => {
      this.selected = item;
      this.showDetail = false; // รีเซ็ตเมื่อเปลี่ยนจังหวัด
    });
    console.log(this.selected);
  }

  onImageClick(imageName: string): void {
    if (imageName === 'image 16.png') {
      this.showDetail = true;
      this.selectedImage = imageName;
    }
  }
}