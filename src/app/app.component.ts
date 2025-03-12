import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgtCanvas],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    sceneGraph = Experience;
    title = 'FrontEnd-Project';


    OnMouseMove(event: MouseEvent){
        // console.log('move');
    }

}