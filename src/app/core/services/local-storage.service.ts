import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setToLocalStorage(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
}
