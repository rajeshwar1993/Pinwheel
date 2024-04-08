'use client'

import PaperFlower from '@/components/PaperFlower'
import { PinwheelData, type WheelData } from '../initalValues'
import { useState, useRef, useMemo } from 'react'

export default function PlayArea() {
  const [flowerData, updateFlowerData] = useState<InitialData[]>(PinwheelData)

  const pinBarRef = useRef(null)

  const onSelectFlower = (id: number) => {
    let nextState = flowerData
      .map((f) => ({
        ...f,
        isChosen: false,
      }))
      .map((f) => {
        if (f.id === id) {
          f.isChosen = true
        }
        return f
      })

    updateFlowerData(nextState)
  }

  const clearSelection = () => {
    let nextState = flowerData.map((f) => ({ ...f, isChosen: false }))

    updateFlowerData(nextState)
  }

  const pinwheelData = useMemo((): WheelData[] => {
    if (pinBarRef === null) return []

    const wheels: WheelData[] = []

    return wheels
  }, [pinBarRef])

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
            {flowerData.map((flower) => (
              <PaperFlower
                {...flower}
                key={flower.id}
                onSelected={onSelectFlower.bind(null, flower.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
