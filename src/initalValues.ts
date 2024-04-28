export enum WheelType {
  TypeA,
  TypeB,
}

export enum Duration {
  D1 = 1.0,
  D2 = 1.5,
  D3 = 2.0,
  D4 = 2.5,
}

export const XPosVariation = [5, -5, 10, -10]

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
  type: WheelType
  openImg: string
}

export type WheelData = {
  id: number
  type: WheelType
  positionX: number
  positionY: number
  leaning: number
  duration: number
  stickLength: number
  openImg: string
  wheel: typeof import('*.png')
  isChosen: boolean
}

const PinwheelDataA: InitialData[] = [
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeA,
    openImg: '/images/sample.png',
  },
]

const PinwheelDataB: InitialData[] = [
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/images/sample.png',
  },
]

export const shuffle = (array: InitialData[]) => {
  let currentIndex = array.length

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const PinwheelData = shuffle([...PinwheelDataA, ...PinwheelDataB])
