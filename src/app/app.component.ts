import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvinceService } from './province.service';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgtCanvas],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    sceneGraph = Experience;
    title = 'FrontEnd-Project';
    selected : string | null = null;

    OnMouseMove(event: MouseEvent){
        // console.log('move');
    }

    constructor(private proviceService:ProvinceService){
    }

    ngOnInit(): void {
        this.proviceService.seletecedProvince.subscribe((item)=>{
            this.selected = item;
        });
        console.log(this.selected);
    }

}