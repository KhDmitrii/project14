import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  constructor() {}

  mySuperFunction(p) {
    console.log(p);
  }
}
