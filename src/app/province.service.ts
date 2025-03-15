import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  seletecedProvinceSource = new BehaviorSubject<string | null>(null);
  seletecedProvince = this.seletecedProvinceSource.asObservable();

  constructor() {
  }

  Select(provice : string | null){
    this.seletecedProvinceSource.next(provice);
  }

}
