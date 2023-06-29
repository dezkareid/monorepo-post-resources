import { Store } from "./Singleton";

describe('Test suite Singleton pattern', () => {
  it('Store should be created only one time', () => {
    const instance1 = Store.getInstance();
    const instance2 = Store.getInstance();
    expect(instance1).toBe(instance2);
  });
});
