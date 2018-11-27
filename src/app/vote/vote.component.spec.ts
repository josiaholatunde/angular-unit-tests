import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component : VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  })
  it('should initialise noOfVotes to 0', () => {
    expect(component.noOfVotes).toEqual(0);
  })
  it('should increment noOfVotes when called', () => {
    component.upVote();
    expect(component.noOfVotes).toEqual(1);
  })

  it('should decrement noOfVotes when called', () => {
    component.downVote();
    expect(component.noOfVotes).toEqual(-1);
  })
})
