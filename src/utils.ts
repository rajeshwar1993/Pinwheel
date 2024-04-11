import * as PW1 from '@/assets/images/PW1.png'
import * as PW2 from '@/assets/images/PW2.png'

import {
  PinwheelData,
  type WheelData,
  Leaning,
  LeaningRange,
  Duration,
  XPosVariation,
  StickLength,
} from './initalValues'

export const pinwheelData = (rect: DOMRect): WheelData[] => {
  if (PinwheelData.length === 0) return []
  const durations = [Duration.D1, Duration.D2, Duration.D3, Duration.D4]

  const intervalSize = Math.ceil((rect.height - 100) / PinwheelData.length)

  const angleInterval = Math.ceil(
    (LeaningRange.max - LeaningRange.min) / PinwheelData.length
  )

  const positionX = Math.ceil(rect.width / 2)

  const wheels: WheelData[] = PinwheelData.map((p, index) => {
    const randomIndex = Math.trunc(Math.random() * 4)

    const dir = index % 2 === 0 ? Leaning.Left : Leaning.Right
    const wheel = randomIndex % 2 === 0 ? PW1 : PW2
    const duration = durations[randomIndex]
    const pwheight = screen.width > 768 ? 190 : 100
    const positionY = intervalSize * index - pwheight + 100
    const leaning =
      dir === Leaning.Left
        ? angleInterval * index * -1 - 10
        : angleInterval * index + 10

    const wheelData: WheelData = {
      id: index,
      positionX: positionX + XPosVariation[randomIndex],
      positionY,
      leaning,
      duration,
      stickLength: StickLength[randomIndex],
      openImg: p.openImg,
      wheel,
      isChosen: false,
    }

    return wheelData
  })

  return wheels
}
