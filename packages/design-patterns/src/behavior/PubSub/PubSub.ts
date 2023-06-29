export class PubSub {
  subscribers : Function[] = [];

  suscribe(suscriber: Function) {
    this.subscribers.push(suscriber);
  }

  unsuscribe(subscriber: Function) {
    this.subscribers = this.subscribers.filter(suscribed => suscribed !== subscriber)
  }

  notify(data: unknown) {
    this.subscribers.forEach(suscriber => suscriber(data))
  }

}