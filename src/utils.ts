import * as PW1 from '@/assets/images/PW1.png'
import * as PW2 from '@/assets/images/PW2.png'

import {
  PinwheelData,
  type WheelData,
  InitialData,
  Leaning,
  XValsLeft,
  XValsRight,
} from './initalValues'

export const pinwheelData = (rect: DOMRect): WheelData[] => {
  if (PinwheelData.length === 0) return []

  console.log('Detect changes: ', rect)
  const XVals = {
    [Leaning.Left]: [XValsLeft.X1, XValsLeft.X2, XValsLeft.X3, XValsLeft.X4],
    [Leaning.Right]: [
      XValsRight.X1,
      XValsRight.X2,
      XValsRight.X3,
      XValsRight.X4,
    ],
  }

  const wheels: WheelData[] = PinwheelData.map((p) => {
    const randomIndex = Math.trunc(Math.random() * 4)

    const leaning = randomIndex % 2 === 0 ? Leaning.Left : Leaning.Right
    const wheel = randomIndex % 2 === 0 ? PW1 : PW2
    // const sw = screen.width
    // const pwheight = screen.width > 768 ? 150 : 100
    const pwheight = 100
    const pinYPos = Math.trunc(Math.random() * rect.height) - pwheight

    const wheelData: WheelData = {
      id: p.id,
      positionX: XVals[leaning][randomIndex],
      positionY: pinYPos,
      leaning,
      duration: 0,
      openImg: p.openImg,
      wheel,
      isChosen: false,
    }

    return wheelData
  })

  return wheels
}
