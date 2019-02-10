import { Observer, ObserverHandler } from './Observer'

export type ORIENTATION_LANDSCAPE = 'landscape'
export type ORIENTATION_PORTRAIT = 'portrait'
export const ORIENTATION_LANDSCAPE: ORIENTATION_LANDSCAPE = 'landscape'
export const ORIENTATION_PORTRAIT: ORIENTATION_PORTRAIT = 'portrait'

export interface ScreenSizeData {
  windowWidth: number
  windowHeight: number
  windowOrientation: ORIENTATION_LANDSCAPE | ORIENTATION_PORTRAIT
  isInsta: boolean
}

export interface ScreenScrollData extends ScreenSizeData {
  scrollTop: number
  direction: -1 | 0 | 1 | null
}

export interface ScreenService {
  getScrollTop(): number
  getWindowWidth(): number
  getWindowHeight(): number
  getWindowOrientation(
    windowWidth: number,
    windowHeight: number
  ): ORIENTATION_LANDSCAPE | ORIENTATION_PORTRAIT
  // @ts-ignore
  onResize(handler: ObserverHandler, isInsta?: boolean)
  // @ts-ignore
  offResize(handler: ObserverHandler)
  // @ts-ignore
  onScroll(handler: ObserverHandler, isInsta?: boolean)
  // @ts-ignore
  offScroll(handler: ObserverHandler)
  getData(): ScreenScrollData
  getisTablet(mobileBreakPoint: number): boolean
}

/* istanbul ignore next */
export const getWindow = () => (typeof window === 'object' ? window : void 0) // tslint:disable-line:strict-type-predicates

export const createScreenService = (): ScreenService | undefined => {
  const w = getWindow()

  if (!w) {
    return void 0
  }

  const body = w.document.body
  const documentElement = w.document.documentElement

  const getScrollTop = (): number => {
    return (
      w.pageYOffset ||
      body.scrollTop ||
      (documentElement && documentElement.scrollTop) ||
      0
    )
  }

  const getWindowWidth = (): number => {
    return (
      w.innerWidth ||
      (documentElement && documentElement.clientWidth) ||
      body.clientWidth
    )
  }

  const getWindowHeight = (): number => {
    return (
      w.innerHeight ||
      (documentElement && documentElement.clientHeight) ||
      body.clientHeight
    )
  }

  const getWindowOrientation = (
    windowWidth: number,
    windowHeight: number
  ): ORIENTATION_LANDSCAPE | ORIENTATION_PORTRAIT => {
    return windowWidth >= windowHeight
      ? ORIENTATION_LANDSCAPE
      : ORIENTATION_PORTRAIT
  }

  let _lastScrollY: number = 0
  let _scrollDirection: -1 | 0 | 1 | null = null
  let _scrollTicking: boolean = false
  let _resizeTicking: boolean = false

  const setLastScrollY = (value: any) => {
    if (_scrollDirection === null) {
      _scrollDirection = 0
    } else if (_lastScrollY > value) {
      _scrollDirection = 1
    } else {
      _scrollDirection = _lastScrollY === value ? 0 : -1
    }

    _lastScrollY = value
  }

  const getResizeParams = (isInsta: boolean): ScreenSizeData => {
    const windowWidth = getWindowWidth()
    const windowHeight = getWindowHeight()
    const windowOrientation = getWindowOrientation(windowWidth, windowHeight)

    return {
      windowWidth,
      windowHeight,
      windowOrientation,
      isInsta
    }
  }

  const getScrollParams = (isInsta: boolean): ScreenScrollData => {
    return {
      scrollTop: _lastScrollY,
      direction: _scrollDirection,
      ...getResizeParams(isInsta)
    }
  }

  const _scrollObserver: Observer = new Observer()
  const _resizeObserver: Observer = new Observer()

  const onResize = (handler: ObserverHandler, insta = false) => {
    _resizeObserver.subscribe(handler)

    if (insta) {
      _resizeObserver.fire(getResizeParams(true), handler)
    }
  }

  const onScroll = (handler: ObserverHandler, insta = false) => {
    _scrollObserver.subscribe(handler)

    if (insta) {
      _scrollObserver.fire(getScrollParams(true), handler)
    }
  }

  const offResize = (handler: ObserverHandler) => {
    _resizeObserver.unsubscribe(handler)
  }

  const offScroll = (handler: ObserverHandler) => {
    _scrollObserver.unsubscribe(handler)
  }

  const getisTablet = (mobileBreakPoint: number) => {
    return mobileBreakPoint >= getScrollParams(false).windowWidth
  }

  const _resizeUpdate = () => {
    _resizeObserver.fire(getResizeParams(false))
    _resizeTicking = false
  }

  const _requestResizeTick = ({ needFrame = true }) => {
    if (_resizeTicking) {
      return
    }

    if (needFrame) {
      w.requestAnimationFrame(_resizeUpdate)

      _resizeTicking = true
    } else {
      _resizeTicking = true

      _resizeUpdate()
    }
  }

  const _scrollUpdate = () => {
    _scrollObserver.fire(getScrollParams(false))
    _scrollTicking = false
  }

  const _requestScrollTick = () => {
    if (_scrollTicking) {
      return
    }

    w.requestAnimationFrame(_scrollUpdate)

    _scrollTicking = true
  }

  const _onScrollAction = () => {
    setLastScrollY(getScrollTop())
    _requestScrollTick()
  }

  const _onResizeAction = (options = {}) => {
    _requestResizeTick(options)
    _onScrollAction()
  }

  w.addEventListener('resize', _onResizeAction, false)
  w.addEventListener('scroll', _onScrollAction, false)

  _onResizeAction({ needFrame: false })

  return {
    getScrollTop,
    getWindowWidth,
    getWindowHeight,
    getWindowOrientation,
    onResize,
    offResize,
    onScroll,
    offScroll,
    getData() {
      return getScrollParams(false)
    },
    getisTablet
  }
}

export const ScreenService = createScreenService()
