import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvinceService } from './province.service';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    sceneGraph = Experience;
    title = 'FrontEnd-Project';
    selected: string | null = null;

    @Input() locationData: any;
    @Output() close = new EventEmitter<void>();

    selectedImageIndex = 0;

    closeDetail() {
        this.close.emit();
    }

    selectImage(index: number) {
        this.selectedImageIndex = index;
    }

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