import { Injectable } from '@angular/core';
import { Quote } from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getGoals(){
    return Quote
  }
  constructor() { }
}
