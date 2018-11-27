import { EventEmitter } from "@angular/core";

export class VoteComponent {
  noOfVotes: number;
  votesChange = new EventEmitter();
  constructor() {
    this.noOfVotes = 0;
  }
  upVote = () => {
     this.noOfVotes += 1;
     this.votesChange.emit(this.noOfVotes);
  }
  downVote = () => this.noOfVotes -= 1;
}
