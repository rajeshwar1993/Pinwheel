'use client'

import PlayArea from '@/components/PlayArea'

export default function Home() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-full max-w-screen-2xl">
        <div className="text-3xl md:text-7xl font-bold mb-2 md:mb-16">
          Jagruk
        </div>
        <div className="col-span-5 lg:col-span-2 text-base md:text-2xl font-bold max-w-[300px]">
          Celebrating the Graphic Design Language of Public Spaces in India
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 lg:col-span-2 text-sm flex flex-col justify-center">
            <div>
              <p>
                With the advent of technology, the wealth of research studies
                documenting language’s visual aspects has changed the language
                study landscape.1 The merging of architecture and graphic design
                in India’s public spaces seamlessly blends formality and
                informality. While widely ingrained graphic design has been a
                part of daily life, one can unravel the intricate threads of
                informal visual expression through hand-painted signages,
                posters, signboards and advertisements.
              </p>
              <p className="mt-8">
                Jagruk celebrates the multicoloured tapestry of graphic design
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
            <div className="lg:mt-[70%]">
              <span className="font-bold">Documentation images by</span>
              <p>
                Pallavi Yadav, Suneepa Das, Bhavani Bala, Anupa Joshy, Priyanka
                Vaghela, Ronojoy Sircar, Shreeparna Chatterjee, Qainaat, Bandita
                Ghosh, Niharika Arora, Srinidhi Ravishankar, Abhranil Munsi,
                Vasundhara Kapoor
              </p>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3 ">
            <PlayArea />
          </div>
        </div>
      </div>
    </div>
  )
}
