export class Store {
  private static instance: Store;
  
  private Store() {
  }

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }
}
