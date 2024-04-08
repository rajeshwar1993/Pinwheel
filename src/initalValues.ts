import * as PW1 from '@/assets/images/PW1.png'
import * as PW2 from '@/assets/images/PW2.png'

export enum XValsLeft {
  X1 = -110,
  X2 = -100,
  X3 = -90,
  X4 = -80,
}
export enum XValsRight {
  X1 = 80,
  X2 = 70,
  X3 = 60,
  X4 = 50,
}

export type InitialData = {
  id: number
  positionX: XValsLeft | XValsRight
  positionY: number
  leaning: 'left' | 'right'
  duration: number
  text: string
  img: typeof import('*.png')
  isChosen: boolean
}

export type WheelData = {
  id: number
  positionX: number
  positionY: number
  leaning: 'left' | 'right'
  duration: number
  openImg: string
  wheel: typeof import('*.png')
  isChosen: boolean
}

export const PinwheelData: InitialData[] = [
  {
    id: 1,
    positionX: XValsRight.X1,
    positionY: -100,
    leaning: 'right',
    duration: 0.9,
    text: 'Test text',
    img: PW1,
    isChosen: false,
  },
  {
    id: 2,
    positionX: XValsLeft.X1,
    positionY: 100,
    leaning: 'left',
    duration: 2,
    text: 'Test text',
    img: PW2,
    isChosen: false,
  },
  // {
  //   id: 3,
  //   positionX: XValsLeft.X2,
  //   positionY: 200,
  //   leaning: 'left',
  //   duration: 2,
  //   text: 'Test text',
  //   img: Flower,
  //   isChosen: false,
  // },
  // {
  //   id: 4,
  //   positionX: XValsRight.X3,
  //   positionY: 50,
  //   leaning: 'right',
  //   duration: 4,
  //   text: 'Test text',
  //   img: Flower,
  //   isChosen: false,
  // },
  // {
  //   id: 5,
  //   positionX: XValsRight.X4,
  //   positionY: 250,
  //   leaning: 'right',
  //   duration: 2,
  //   text: 'Test text',
  //   img: Flower,
  //   isChosen: false,
  // },
]
