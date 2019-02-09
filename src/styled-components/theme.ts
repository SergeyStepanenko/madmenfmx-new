export interface ThemeInterface {
  fontFamily: {
    main: string
  }
  colors: {
    main: string
    white: string
  }
}

export const theme: ThemeInterface = {
  fontFamily: {
    main: 'Open Sans, sans-serif'
  },
  colors: {
    main: '#052554',
    white: '#fff'
  }
}
