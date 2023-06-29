import { vi } from 'vitest'
import { PubSub } from './PubSub';

describe('Test suite PubSub pattern', () => {
  it('should call suscribers with data', () => {
    const publisher = new PubSub();
    const suscriber1 = vi.fn();
    const suscriber2 = vi.fn();
    publisher.suscribe(suscriber1);
    publisher.suscribe(suscriber2);
    const data = {};
    publisher.notify(data);
    expect(suscriber1).toHaveBeenNthCalledWith(1, data);
    expect(suscriber2).toHaveBeenNthCalledWith(1, data);
  });

  it('should not call suscriber removed suscribers', () => {
    const publisher = new PubSub();
    const suscriber1 = vi.fn();
    const suscriber2 = vi.fn();
    publisher.suscribe(suscriber1);
    publisher.suscribe(suscriber2);
    const data = {};
    publisher.unsuscribe(suscriber2);
    publisher.notify(data);
    expect(suscriber1).toHaveBeenNthCalledWith(1, data);
    expect(suscriber2).not.toHaveBeenCalled();
  });
});
