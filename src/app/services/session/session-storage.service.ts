import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  private SessionStore = sessionStorage

  set(key:string, data:any){
    try {
      this.SessionStore.setItem(key, JSON.stringify(data));
      return true
    } catch (error) {
      return false
    }
  }

  get(key:string){
    try {
      const respond = JSON.parse(this.SessionStore.getItem(key) ?? '')
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
