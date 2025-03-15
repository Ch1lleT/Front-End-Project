import { CUSTOM_ELEMENTS_SCHEMA, Component, viewChild, ElementRef, ChangeDetectionStrategy, model, computed, Signal, signal, effect } from '@angular/core';
import { extend, injectBeforeRender, injectLoader, injectStore, NgtArgs } from 'angular-three';
import { Mesh, BoxGeometry, MeshBasicMaterial , MeshStandardMaterial } from 'three'; 
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {GLTF, OrbitControls} from 'three-stdlib';
import { CommonModule } from '@angular/common';

extend(THREE);
extend({ OrbitControls });

@Component({
  standalone : true,
  imports : [NgtArgs,CommonModule],
  template: `
    <!-- <ngt-primitive *args="[model()]"></ngt-primitive> -->
    @if(meshes()){
      <ngt-group [dispose]="null" *ngFor="let mesh of meshes()" >
        <ngt-mesh
          [castShadow]="true"
          [receiveShadow]="true"
          [geometry]="mesh.geometry"
          [position]="mesh.position"
          (click)="MouseClick($event.object)"
          (pointerover)="OnMouseHover($event.object)"
          (pointerout)="OnMouseOut($event.object)"
          [name]="mesh.name"
        >
        <ngt-mesh-standard-material color="red"></ngt-mesh-standard-material>
        </ngt-mesh>
      </ngt-group>
    }
    
    <ngt-orbit-controls *args="[camera(),glDomElement()]"  ></ngt-orbit-controls>
    <ngt-directional-light [position]="[ 1,1, 1]"   [intensity]="2" ></ngt-directional-light>
    <ngt-directional-light [position]="[ 1,1,-1]"  [intensity]="2" ></ngt-directional-light>
    <ngt-directional-light [position]="[-1,1, 1]"  [intensity]="2" ></ngt-directional-light>
    <ngt-directional-light [position]="[-1,1,-1]" [intensity]="2" ></ngt-directional-light>
    <ngt-axes-helper></ngt-axes-helper>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Experience {
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
  hoverMesh = signal<THREE.Mesh | null>(null);

  selected : THREE.Mesh | null = null;

  BaseColor = new THREE.Color("#ff0000");
  GreenColor = new THREE.Color("#00ff00");


  gltfLoader = injectLoader(()=> GLTFLoader , ()=> '../assets/thailand.gltf')
  ngtStore = injectStore();
  
  raycast = new THREE.Raycaster();
  
  meshes = computed(()=>{
    const gltf = this.gltfLoader();
    if(!gltf) return null;
    
    gltf.scene.children.forEach((mesh) => {
      const Mesh = mesh as Mesh;
      const material = Mesh.material as MeshStandardMaterial;
      material.color.set(this.BaseColor);
    });

    console.log(gltf);
    return gltf.scene.children;
  }) as Signal<THREE.Mesh[]>


  

  camera = this.ngtStore.select('camera');
  glDomElement = this.ngtStore.select('gl','domElement');


  MouseClick(event : THREE.Object3D){
    console.log(event);

    if(this.selected){
      (this.selected.material as MeshStandardMaterial).color.set(this.BaseColor);
    }

    const mesh = event as Mesh
    const material = mesh.material as MeshStandardMaterial;
    this.selected = mesh;
    material.color.set(this.GreenColor);
  }

  OnMouseHover(event:THREE.Object3D){
    console.log(event);
    const mesh = event as THREE.Mesh;
    const material = mesh.material as THREE.MeshStandardMaterial
    material.color.set(this.GreenColor);

  }

  OnMouseOut(event:THREE.Object3D){
    console.log(event);
    const mesh = event as THREE.Mesh;
    const material = mesh.material as THREE.MeshStandardMaterial
    material.color.set(this.BaseColor);

  }


  constructor(){

    console.log(this.meshes());

    // injectBeforeRender(()=>{
      

      // this.raycast.setFromCamera( ,this.camera)
      
    // })
      
  }
}

