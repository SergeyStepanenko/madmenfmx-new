export interface ObserverOptions {
  callback?(total: number): void
}

export type ObserverHandler<T = {}> = (message: T) => void

export class Observer {
  private handlers: Set<ObserverHandler>
  private _previousTotal: number
  private _callback: (total: number) => void

  get total() {
    return this.handlers.size
  }

  constructor(options: ObserverOptions = {}) {
    this.handlers = new Set()

    if (options.callback) {
      this._callback = options.callback
    }

    this._previousTotal = 0
  }

  public subscribe(handler: ObserverHandler) {
    this.handlers.add(handler)

    this._onChangeHandlers()
  }

  public unsubscribe(handler: ObserverHandler) {
    if (this.handlers.has(handler)) {
      this.handlers.delete(handler)
    }

    this._onChangeHandlers()
  }

  public fire(message: any, handler: ObserverHandler | false = false) {
    if (handler) {
      handler.call(null, message)

      return
    }

    this.handlers.forEach((func) => {
      func.call(null, message)
    })
  }

  private _onChangeHandlers() {
    if (this._callback && this._previousTotal !== this.total) {
      this._previousTotal = this.total
      this._callback.call(null, this.total)
    }
  }
}
