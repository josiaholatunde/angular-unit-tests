import { VoteComponent } from './form.component';

describe('VoteComponent', () => {
  let component : VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  })
  it('should check if noOfVotes is null ', () => {
    let noOfVotes = null;
    component.votesChange.subscribe(vt => noOfVotes = vt);
    component.upVote();
    //expect(noOfVotes).not.toBeNull();
    expect(noOfVotes).toBe(1);
  })

})
