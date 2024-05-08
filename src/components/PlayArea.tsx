'use client'

import PaperFlower from '@/components/PaperFlower'
import { WheelType, type WheelData } from '../initalValues'
import { useState, useRef, useEffect } from 'react'
import { pinwheelData } from '@/utils'

export default function PlayArea() {
  const pinBarRef = useRef<HTMLDivElement | null>(null)

  const [pinwheels, updatePinwheels] = useState<WheelData[]>([])
  const [poster, updatePoster] = useState<WheelData | null>(null)

  const onSelectFlower = (id: number) => {
    let nextState = pinwheels
      .map((f) => ({
        ...f,
        isChosen: false,
      }))
      .map((f) => {
        if (f.id === id) {
          f.isChosen = true
          updatePoster(f)
        }
        return f
      })

    updatePinwheels(nextState)
  }

  const clearSelection = () => {
    let nextState = pinwheels.map((f) => ({ ...f, isChosen: false }))
    updatePoster(null)
    updatePinwheels(nextState)
  }

  useEffect(() => {
    if (pinBarRef.current !== null)
      updatePinwheels(pinwheelData(pinBarRef.current?.getBoundingClientRect()))
  }, [pinBarRef.current])

  return (
    <div className="pt-20 sm:px-4 md:pt-0 relative">
      <div className="mx-auto h-[70vh] aspect-9/16 flex justify-center items-center">
        <div
          className="relative h-[90%] w-full"
          style={{
            backgroundImage: `url('/images/seller.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="relative w-[11%] h-[55%] top-[1%] left-[34%]"
            style={{
              transformBox: 'fill-box',
            }}
            ref={pinBarRef}
          >
            {poster && (
              <>
                <div
                  className="fixed left-0 right-0 top-0 bottom-0 z-20 bg-transparent"
                  onClick={clearSelection}
                />
                <div
                  className="absolute w-[calc(100vw-40px)] md:w-[800px] md:-left-[350px] md:-top-36 border rounded-lg shadow-lg z-50 origin-center"
                  style={{
                    left:
                      screen.width > 768
                        ? '-320px'
                        : `${
                            -(
                              pinBarRef.current?.getBoundingClientRect().left ||
                              0
                            ) + 20
                          }px`,
                  }}
                >
                  {/* <Image src={poster} alt="" width={2000} height={2000} /> */}
                  <img
                    src={poster.openImg}
                    alt="poster"
                    className={`w-full ${
                      poster.type === WheelType.TypeB && 'animate-spin'
                    }`}
                    style={{
                      animationDuration: '40s',
                    }}
                  />
                </div>
              </>
            )}
            {pinwheels.map((flower) => (
              <PaperFlower
                {...flower}
                key={flower.id}
                onSelected={onSelectFlower}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
