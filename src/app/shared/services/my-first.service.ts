import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  constructor() {}

  mySupserFunction(param: string) {
    console.log(param);
  }
}
