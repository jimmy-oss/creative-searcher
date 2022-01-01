import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  public numberOfUpVotes: number = 0;
  public numberOfDownVotes: number = 0;

  upVoteButtonClick() {
    this.numberOfUpVotes++;
  }

  downVoteButtonClick() {
    this.numberOfDownVotes--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
