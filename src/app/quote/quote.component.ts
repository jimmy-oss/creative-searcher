import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  goals:Quote[] = [
    new Quote(1, 'Dwell on the beauty of life', 'Watch the stars, and see yourself running with them.Marcus Aurelius',),
    new Quote(2,'Nothing is impossible', 'The word itself says ‘I’m possible’!” Audrey Hepburn'),
    new Quote(3,'Courage doesn’t always roar', 'Sometimes courage is the little voice at the end of the day that says ‘I’ll try again tomorrow. Mary Anne Radmacher',),
    new Quote(4,'Count your age by friends', 'Not years. Count your life by smiles, not tears.”John Lennon'),
    new Quote(5,'Laughter is timeless', 'Imagination has no age. And dreams are forever.” Walt Disney'),
  ];
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
