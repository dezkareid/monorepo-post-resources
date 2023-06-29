interface Handler {
  next: Function,
  setNext: Function
}

type Request = {[key: string] : string}

export class AuthHandler implements Handler {
  _next: Handler

  setNext (next: Handler) {
    this._next = next
  }
  
  next(value: Request) {
    value.token = 'something';
    if (this._next) {
      this._next.next(value);
    }
  }
}

export class MetadataHandler implements Handler {
  _next: Handler

  setNext (next: Handler) {
    this._next = next
  }
  
  next(value: Request) {
    value.metadata = 'something';
    if (this._next) {
      this._next.next(value);
    }
  }
}

export class UserHandler implements Handler {
  _next: Handler

  setNext (next: Handler) {
    this._next = next
  }
  
  next(value: Request) {
    value.user = 'something';
    if (this._next) {
      this._next.next(value);
    }
  }
}



export class ResponseProcessor {

  auth = new AuthHandler();
  metadata = new MetadataHandler();
  user = new UserHandler();

  constructor() {
    
    this.auth.setNext(this.metadata);
    this.metadata.setNext(this.user);
  }
  
  process(request: Request) {
    this.auth.next(request);
  }
}
