export class Widget {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}
interface Mediator {
  register: (id: string, widget: Widget) => void
  notify: Function
};


export class Input extends Widget {
  
  private _state = 'idle';
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    super('input');
    mediator.register('input', this);
    this.mediator = mediator
  }

  public set state(newState) {
    this._state = newState;
    if (newState) {
      this.mediator.notify(this);
    }
  }

  get state() : string {
    return this._state;
  }
}

export class Video extends Widget {
  
  private _state = 'idle';
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    super('video');
    mediator.register('video', this);
    this.mediator = mediator
  }

  public set state(newState) {
    this._state = newState;
    this.mediator.notify(this);

  }

  get state() : string {
    return this._state;
  }
}

export class PlatziMediator implements Mediator {
  widgets = new Map<string, Widget>();
  
  register(key: string, instance: Widget) {
    this.widgets.set(key, instance);
  }

  notify(sender: Widget) {
    if (sender?.id === 'input') {
      const input = <Input>this.widgets.get('input');
      if (input.state === 'writing') {
        const video = <Video>this.widgets.get('video');
        video.state = 'paused';
      }
    }

    if (sender?.id === 'video') {
      const video = <Video>this.widgets.get('video');
      if (video.state === 'paused') {
        console.log('Video has been paused');
      }
    }

  }
}