'use client'

import PaperFlower from '@/components/PaperFlower'
import {
  PinwheelData,
  type WheelData,
  InitialData,
  Leaning,
  XValsLeft,
  XValsRight,
} from '../initalValues'
import { useState, useRef, useMemo, useEffect } from 'react'
import * as PW1 from '@/assets/images/PW1.png'
import * as PW2 from '@/assets/images/PW2.png'

export default function PlayArea() {
  const pinBarRef = useRef<HTMLDivElement | null>(null)

  const [pinwheels, updatePinwheels] = useState<WheelData[]>([])

  // const onSelectFlower = (id: number) => {
  //   let nextState = flowerData
  //     .map((f) => ({
  //       ...f,
  //       isChosen: false,
  //     }))
  //     .map((f) => {
  //       if (f.id === id) {
  //         f.isChosen = true
  //       }
  //       return f
  //     })

  //   updateFlowerData(nextState)
  // }

  // const clearSelection = () => {
  //   let nextState = flowerData.map((f) => ({ ...f, isChosen: false }))

  //   updateFlowerData(nextState)
  // }

  const pinwheelData = (): WheelData[] => {
    if (pinBarRef.current === null || PinwheelData.length === 0) return []

    const rect = pinBarRef.current?.getBoundingClientRect()
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

  useEffect(() => {
    updatePinwheels(pinwheelData())
  }, [pinBarRef.current])

  return (
    <div className="border">
      <div className="mx-auto h-[80vh] aspect-9/16 flex justify-center items-center">
        <div
          className="relative h-[90%] border border-red-900 w-full"
          style={{
            backgroundImage: `url('/images/seller.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="relative w-[11%] h-[55%] top-[1%] left-[34%] border border-red-900"
            style={{
              transformBox: 'fill-box',
            }}
            ref={pinBarRef}
          >
            {pinwheels.map((flower) => (
              <PaperFlower {...flower} key={flower.id} onSelected={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
