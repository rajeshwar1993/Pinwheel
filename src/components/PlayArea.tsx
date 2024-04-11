'use client'

import PaperFlower from '@/components/PaperFlower'
import { type WheelData } from '../initalValues'
import { useState, useRef, useMemo, useEffect } from 'react'
import { pinwheelData } from '@/utils'

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

  useEffect(() => {
    if (pinBarRef.current !== null)
      updatePinwheels(pinwheelData(pinBarRef.current?.getBoundingClientRect()))
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
