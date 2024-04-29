import { WheelData } from '@/initalValues'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { FlowerStates } from '@/types'

type AddedProps = {
  onSelected: (id: number) => void
}

type Props = WheelData & AddedProps

const PaperFlower = ({
  id,
  positionX,
  positionY,
  leaning,
  duration,
  wheel,
  stickLength,
  isChosen,
  onSelected,
}: Props) => {
  const [state, updateState] = useState<FlowerStates>(
    isChosen ? FlowerStates.ShowCase : FlowerStates.Initial
  )

  const parentVariants = {
    [FlowerStates.Initial]: { opacity: 0.9, scale: [1] },
    [FlowerStates.Hover]: { opacity: 1, scale: [1.2] },
  }

  return (
    <>
      <motion.div
        className={`absolute cursor-pointer origin-bottom`}
        initial={{
          rotate: leaning,
          translateX: `${positionX}px`,
          translateY: `${positionY}px`,
        }}
        transition={{ type: 'spring', duration: 2.2, bounce: 0.7 }}
        onClick={onSelected.bind(null, id)}
        variants={parentVariants}
        animate={state}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: duration, repeat: Infinity, ease: 'linear' }}
          className="absolute z-10 w-16 h-16 md:w-24 md:h-24 left-[-30px] top-[-30px]"
          onHoverStart={() => {
            if (!isChosen) updateState(FlowerStates.Hover)
          }}
          onHoverEnd={() => {
            if (!isChosen) updateState(FlowerStates.Initial)
          }}
        >
          <Image src={wheel} width={1000} height={1000} alt="flower" />
        </motion.div>
        <div
          className={`w-1 origin-top z-0`}
          style={{
            backgroundColor: '#D9D9D9',
            height: `${stickLength}px`,
          }}
        />
      </motion.div>
    </>
  )
}

export default PaperFlower
