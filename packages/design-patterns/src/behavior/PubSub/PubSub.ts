export class PubSub {
  suscribers : Function[] = [];

  suscribe(suscriber: Function) {
    this.suscribers.push(suscriber);
  }

  publish(data: unknown) {
    this.suscribers.forEach(suscriber => suscriber(data))
  }
}