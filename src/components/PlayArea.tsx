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
    <div className="pt-20 sm:px-4 md:pt-0 h-[700px] md:h-[850px] flex justify-center">
      <div className="h-full w-[326px] md:w-[370px] relative ml-20">
        <div
          className="h-60 w-60 top-[-270px] right-[-50px] md:top-[-60px] md:right-[-140px] absolute"
          style={{
            backgroundImage: `url('/images/click.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="h-full w-full absolute md:hidden"
          style={{
            backgroundImage: `url('/images/seller.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '160%',
            backgroundPosition: '-75px 120%',
          }}
        />
        <div
          className="h-full w-full absolute hidden md:block"
          style={{
            backgroundImage: `url('/images/seller.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '155%',
            backgroundPosition: '-100px 120px',
          }}
        />
        <div
          className="relative w-[50px] h-[300px] top-[20px] left-[60px] md:w-[60px] md:h-[280px] md:top-[220px] md:left-[110px]"
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
                className="absolute w-[calc(100vw-40px)] md:w-[700px] md:-top-36 border rounded-lg shadow-lg z-50 origin-center bg-white p-4"
                style={{
                  left:
                    screen.width > 768
                      ? '-270px'
                      : `${
                          -(
                            pinBarRef.current?.getBoundingClientRect().left || 0
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
                    animationDuration: '70s',
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
  )
}
