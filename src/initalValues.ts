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
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_01.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_02.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_03.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_04.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_05.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_06.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_07.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_08.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_09.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_10.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_11.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_12.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_13.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_14.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_15.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_16.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_17.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_18.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_19.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_20.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_21.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_22.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_23.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_24.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_25.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_26.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_27.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_28.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_29.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_30.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_31.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_32.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_33.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_34.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_35.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_36.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_37.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_38.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_39.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_40.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_41.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_42.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_43.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_44.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_45.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_46.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_47.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_48.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_49.png' },
  { type: WheelType.TypeA, openImg: '/PWImages/PinwheelA_50.png' },
]

const PinwheelDataB: InitialData[] = [
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
  },
  {
    type: WheelType.TypeB,
    openImg: '/PCImages/PCImg1.png',
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
