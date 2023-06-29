import { PlatziMediator, Video, Input } from './Mediator';

describe('Test suite Mediator pattern', () => {
  it('should change video state to paused when input change to writing state', () => {
    const platziMediator = new PlatziMediator();
    const input = new Input(platziMediator);
    const video = new Video(platziMediator);
    input.state = 'writing';
    expect(video.state).toEqual('paused');
  })
});