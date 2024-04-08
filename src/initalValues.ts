export enum Leaning {
  Left = 'left',
  Right = 'right',
}

export enum XValsLeft {
  X1 = -130,
  X2 = -120,
  X3 = -110,
  X4 = -100,
}
export enum XValsRight {
  X1 = 100,
  X2 = 90,
  X3 = 80,
  X4 = 70,
}

export type InitialData = {
  id: number
  openImg: string
}

export type WheelData = {
  id: number
  positionX: number
  positionY: number
  leaning: Leaning
  duration: number
  openImg: string
  wheel: typeof import('*.png')
  isChosen: boolean
}

export const PinwheelData: InitialData[] = [
  {
    id: 1,
    openImg: '',
  },
  {
    id: 2,
    openImg: '',
  },
  {
    id: 3,
    openImg: '',
  },
  {
    id: 4,
    openImg: '',
  },
  {
    id: 5,
    openImg: '',
  },
  {
    id: 6,
    openImg: '',
  },
  {
    id: 7,
    openImg: '',
  },
  {
    id: 8,
    openImg: '',
  },
  {
    id: 9,
    openImg: '',
  },
  {
    id: 10,
    openImg: '',
  },
]
