import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  private localStore = localStorage

  set(key:string, data:any){
    try {
      this.localStore.setItem(key, JSON.stringify(data));
      return true
    } catch (error) {
      return false
    }
  }

  get(key:string){
    try {
      const respond = JSON.parse(this.localStore.getItem(key) ?? '')
      return {
        status: true,
        data: respond
      }
    } catch (error) {
      return {
        status: false,
        data: null
      }
    }
  }
}

