export class VoteComponent {
  noOfVotes: number;
  constructor() {
    this.noOfVotes = 0;
  }
  upVote = () => this.noOfVotes += 1;
  downVote = () => this.noOfVotes -= 1;
}
