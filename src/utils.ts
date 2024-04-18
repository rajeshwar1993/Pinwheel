import * as PW1 from '@/assets/images/PW1.png'
import * as PW2 from '@/assets/images/PW2.png'

import {
  PinwheelData,
  type WheelData,
  LeaningRange,
  Duration,
  XPosVariation,
} from './initalValues'

const batch = 6
const batchSize = PinwheelData.length / batch

export const pinwheelData = (rect: DOMRect): WheelData[] => {
  if (PinwheelData.length === 0) return []

  let currentBatch = 1

  const durations = [Duration.D1, Duration.D2, Duration.D3, Duration.D4]

  const intervalSize = Math.ceil(rect.height / batch)

  const angleInterval = Math.ceil(
    (LeaningRange.max - LeaningRange.min) / batchSize
  )

  const positionX = Math.ceil(rect.width / 2)
  console.log(rect.height, angleInterval, intervalSize)

  const wheels: WheelData[] = PinwheelData.map((p, index) => {
    const randomIndex = Math.trunc(Math.random() * 4)

    const wheel = randomIndex % 2 === 0 ? PW1 : PW2
    const duration = durations[randomIndex]
    const pwheight = screen.width > 768 ? 150 : 100
    const positionY = intervalSize * currentBatch - pwheight
    const leaning = LeaningRange.min + angleInterval * (index % batchSize)
    console.log('positionY:', positionY, 'leaning:', leaning)

    if ((index + 1) % batchSize === 0) {
      console.log(currentBatch, index)
      currentBatch++
    }

    const wheelData: WheelData = {
      id: index,
      positionX: positionX + XPosVariation[randomIndex],
      positionY,
      leaning,
      duration,
      stickLength: 100,
      openImg: p.openImg,
      wheel,
      isChosen: false,
    }

    return wheelData
  })

  return wheels
}
