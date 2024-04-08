import { WheelData } from '@/initalValues'
import { motion } from 'framer-motion'
import Image from 'next/image'
import * as Stick from '@/assets/images/stick.png'
import { useEffect, useMemo, useState } from 'react'
import { FlowerStates } from '@/types'

type AddedProps = {
  onSelected: () => void
}

type Props = WheelData & AddedProps

const PaperFlower = ({
  id,
  positionX,
  positionY,
  leaning,
  duration,
  text,
  img,
  isChosen,
  onSelected,
}: Props) => {
  const xPosHover = useMemo(
    () => (leaning === 'left' ? positionX - 10 : positionX + 10),
    [leaning]
  )

  const [state, updateState] = useState<FlowerStates>(
    isChosen ? FlowerStates.ShowCase : FlowerStates.Initial
  )

  const parentVariants = {
    [FlowerStates.Initial]: { opacity: 0.8, scale: [1] },
    [FlowerStates.Hover]: { opacity: 1, scale: [1.1], translateX: xPosHover },
    [FlowerStates.ShowCase]: { opacity: 1, scale: [5], rotate: 0 },
  }

  useEffect(() => {
    if (isChosen) {
      updateState(FlowerStates.ShowCase)
    } else {
      updateState(FlowerStates.Initial)
    }
  }, [isChosen])

  return (
    <motion.div
      className={`w-16 h-16 md:w-24 md:h-24 absolute cursor-pointer origin-center`}
      initial={{
        rotate: leaning === 'left' ? -40 : 40,
        translateX: `${positionX}px`,
        translateY: `${positionY}px`,
      }}
      onClick={onSelected}
      variants={parentVariants}
      animate={state}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: duration, repeat: Infinity, ease: 'linear' }}
        className="absolute z-10"
        onHoverStart={() => {
          updateState(FlowerStates.Hover)
        }}
        onHoverEnd={() => {
          updateState(FlowerStates.Initial)
        }}
      >
        <Image src={img} width={1000} height={1000} alt="flower" />
      </motion.div>
      <div
        className="absolute left-[30px] top-[30px] md:left-[45px] md:top-[50px] h-28 md:h-40 w-1 origin-top z-0"
        style={{
          backgroundColor: '#D9D9D9',
        }}
      />
    </motion.div>
  )
}

export default PaperFlower
