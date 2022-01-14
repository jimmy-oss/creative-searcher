 import { Component, OnInit } from '@angular/core';
 import { Quote } from '../quote';
 import { QuoteService } from '../quote-service/quote.service';
 import { AlertService } from '../alert-service/alert.service';
 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers:[QuoteService],
 
})
export class QuoteComponent implements OnInit {
     goals!: Quote[];
     alertService!: AlertService;
     constructor(goalService:QuoteService, alertService:AlertService){
      this.goals = goalService.getGoals()
      this.alertService = alertService;
    }
     addNewQuote (goal: Quote){
      let goalLength = this.goals.length;
      goal.id = goalLength+1;
      goal.completeDate = new Date(goal.completeDate)
      this.goals.push(goal)
    }
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
        this.alertService.alertMe("This quote has been deleted🤗")
      }
    }
  }
 
 
  ngOnInit(): void {
  }

}
