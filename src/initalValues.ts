export enum Leaning {
  Left = 'left',
  Right = 'right',
}

export enum Duration {
  D1 = 1.0,
  D2 = 1.5,
  D3 = 2.0,
  D4 = 2.5,
}

export const XPosVariation = [5, -5, 10, -10]

export const StickLength = [50, 70, 90, 110]

export enum XVals {
  X1 = 30,
  X2 = 20,
  X3 = 10,
  X4 = 0,
}
export enum LeaningRange {
  min = -120,
  max = 120,
}

export type InitialData = {
  openImg: string
}

export type WheelData = {
  id: number
  positionX: number
  positionY: number
  leaning: number
  duration: number
  stickLength: number
  openImg: string
  wheel: typeof import('*.png')
  isChosen: boolean
}

export const PinwheelData: InitialData[] = [
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
  {
    openImg: '',
  },
]
