import { Injectable } from '@angular/core';
import { goals } from '../quotelist';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  
  getGoals(){
    return goals
  }
  constructor() { }
}
