import { ResponseProcessor } from './ChainOfResponsibility';

describe('Test suite Chains of Responsibility pattern', () => {
  it('should modify object response to add data', () => {
    const response = {};
    const responseProccessor = new ResponseProcessor();
    responseProccessor.process(response)
    expect(response).toHaveProperty('token');
    expect(response).toHaveProperty('metadata');
    expect(response).toHaveProperty('user');
  })
});