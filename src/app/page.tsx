'use client'

import PlayArea from '@/components/PlayArea'
import Image from 'next/image'
import * as sPW from '@/assets/images/sPW.png'
import * as sPC from '@/assets/images/sPC.png'

export default function Home() {
  return (
    <div className="flex justify-center items-center py-8 px-16">
      <div className="w-full max-w-screen-2xl">
        <div className="text-5xl md:text-7xl font-bold mb-2 md:mb-4">फिरकी</div>
        <div className="col-span-5 lg:col-span-2 text-base md:text-3xl font-bold max-w-[300px]">
          Objects of <br /> Transient Belongings
        </div>
        <div className="grid grid-cols-5 gap-4 mt-8">
          <div className="relative col-span-5 md:col-span-2 text-sm flex flex-col justify-between mt-5">
            <div className="absolute top-[50%] left-[50%]" id="refDiv" />
            <div>
              <p>
                Firki celebrates the multicoloured tapestry of graphic design
                elements in public spaces around India, delving into the
                intricacies between cultural narratives and visual motifs. It
                also explores the process of investigating the narrative of
                text, symbols, and language and contextualising the
                Indian-specific design system. Through a lens that celebrates
                heritage, art, and everyday life, Jagruk unveils the profound
                stories woven within these spaces informed by documented design
                vocabulary.
              </p>
            </div>
            <div className="mt-5">
              <div className="flex gap-x-6 mb-6">
                <div className="flex flex-col w-16 items-center text-center">
                  <div className="w-16 h-16">
                    <Image src={sPW} alt="" width={200} height={200} />
                  </div>
                  <span className="text-xs">Documented Designs</span>
                </div>
                <div className="flex flex-col w-16 items-center text-center">
                  <div className="w-16 h-16">
                    <Image src={sPC} alt="" width={200} height={200} />
                  </div>
                  <span className="text-xs">Voices of the People</span>
                </div>
              </div>
              <div>
                <span className="font-bold mb-2 block">
                  Documentation images by
                </span>
                <p>
                  Pallavi Yadav, Suneepa Das, Bhavani Bala, Anupa Joshy,
                  Priyanka Vaghela, Ronojoy Sircar, Shreeparna Chatterjee,
                  Qainaat, Bandita Ghosh, Niharika Arora, Srinidhi Ravishankar,
                  Abhranil Munsi, Vasundhara Kapoor
                </p>
              </div>
              <div className="border-b border-black w-full my-4"></div>
              <div className="text-xs flex justify-between flex-col md:flex-row gap-y-4">
                <div>
                  <div>
                    Project by{' '}
                    <span className="font-extrabold">Deepesh Sangtani</span>
                  </div>
                  <div>The Glasgow School of Art - Masters Degree Project</div>
                </div>
                <div className="md:mr-6">
                  <div>Online version and website</div>
                  <div>
                    by <span className="font-extrabold">Rajeshwar Rudra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-3">
            <PlayArea />
          </div>
        </div>
      </div>
    </div>
  )
}
