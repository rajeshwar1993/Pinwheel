'use client'

import PlayArea from '@/components/PlayArea'
import Image from 'next/image'
import * as sPW from '@/assets/images/sPW.png'
import * as sPC from '@/assets/images/sPC.png'

export default function Home() {
  return (
    <div className="flex justify-center items-center px-8 py-8 md:px-16 min-h-[100vh]">
      <div className="w-full max-w-screen-2xl grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-2 text-sm flex flex-col justify-between">
          <div>
            <div className="text-5xl md:text-7xl font-bold mb-2 md:mb-4">
              फिरकी
            </div>
            <div className="col-span-5 lg:col-span-2 text-lg md:text-4xl font-bold max-w-[400px]">
              Objects of <br /> Transient Belongings
            </div>
            <div className="mt-5">
              <p>
                Firki (फिरकी) celebrates the colourful, diverse visual language
                of hand-painted signs in India’s public spaces. The project
                playfully captures their transient essence through multiple
                designed objects, highlighting voices and narratives while
                documenting and archiving them. Firki takes you down memory lane
                embedded in a cultural heritage often overlooked as everyday
                ephemera.
              </p>
              <p className="mt-5">
                Objects here refer to the signs that are often temporal and have
                been replaced by more modern techniques and outcomes. Despite
                that, these visual elements belong to the collective memory and
                identity of spaces and people who navigate through them.
              </p>
            </div>
            <div className="flex gap-x-6 mt-5">
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
            <div className="text-xs mt-5 w-72">
              *’Voices of the People’ are responses gathered via survey that
              engaged with their perception towards celebrating the visual
              landscape of India.
            </div>
          </div>

          <div className="mt-8 hidden md:block">
            <div>
              <span className="font-bold mb-2 block">
                Documentation images by
              </span>
              <p>
                Pallavi Yadav, Suneepa Das, Bhavani Balasubramanyam, Anupa
                Joshy, Priyanka Vaghela, Ronojoy Sircar, Qainaat, Shreeparna
                Chatterjee, Sarthak Bhattacharya, Bandita Ghosh, Niharika Arora,
                Srinidhi Ravishankar, Abhranil Munsi, Srijeeta, Vasundhara
                Kapoor, Tithi Majumder, Dr. Sunil Koijam, Senwarne Goyary, Tisha
                Kulgod
              </p>
            </div>
            <div className="mt-5">
              <span className="font-bold mb-2 block">Online Resources</span>
              <div>
                <a
                  className="underline pointer"
                  href="https://www.flickr.com/photos/meanestindian/"
                  target="_blank"
                >
                  Meena Kadri | Flickr
                </a>
              </div>
              <div>
                <a
                  className="underline pointer"
                  href="https://www.flickr.com/groups/indicscripts/"
                  target="_blank"
                >
                  Indic & Indian scripts | Flickr
                </a>
              </div>
            </div>
            <div className="border-b border-black w-full my-4"></div>
            <div className="text-xs flex justify-between flex-col md:flex-row gap-y-4">
              <div className="w-48">
                <div>
                  Project by{' '}
                  <span className="font-extrabold">Deepesh Sangtani</span>
                </div>
                <div>
                  The Glasgow School of Art -{' '}
                  <a
                    target="_blank"
                    href="https://2024.gsashowcase.net/deepesh-sangtani/"
                    className="underline pointer"
                  >
                    Masters Degree Project
                  </a>
                </div>
                <div className="flex mt-1 gap-1">
                  <span>
                    <img src="/images/instalogo.png" className="w-4 h-4" />
                  </span>
                  <span>
                    @
                    <a
                      href="https://www.instagram.com/deepstagram27/"
                      target="_blank"
                      className="underline  pointer"
                    >
                      deepstagram27
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <div>Online version and website</div>
                <div>
                  <span className="font-extrabold">Rajeshwar Rudra</span>
                </div>
                <div className="flex mt-1 gap-1">
                  <span>
                    <img src="/images/instalogo.png" className="w-4 h-4" />
                  </span>
                  <span>
                    @
                    <a
                      href="https://www.instagram.com/karon_okaron/"
                      target="_blank"
                      className="underline  pointer"
                    >
                      karon_okaron
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <div>Illustration by</div>
                <div>
                  <a
                    href="https://bhankadraws.com/"
                    target="_blank"
                    className="font-extrabold underline pointer"
                  >
                    Bhavani Balasubramanyam
                  </a>
                </div>
                <div className="flex mt-1 gap-1">
                  <span>
                    <img src="/images/instalogo.png" className="w-4 h-4" />
                  </span>
                  <span>
                    @
                    <a
                      href="https://www.instagram.com/bhankadraws/"
                      target="_blank"
                      className="underline  pointer"
                    >
                      bhankadraws
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 md:col-span-3 mt-40 md:mt-0">
          <PlayArea />
        </div>
        <div className="mt-5 mb-10 md:hidden col-span-5 text-xs md:text-base">
          <div>
            <span className="font-bold mb-2 block ">
              Documentation images by
            </span>
            <p>
              Pallavi Yadav, Suneepa Das, Bhavani Balasubramanyam, Anupa Joshy,
              Priyanka Vaghela, Ronojoy Sircar, Qainaat, Shreeparna Chatterjee,
              Sarthak Bhattacharya, Bandita Ghosh, Niharika Arora, Srinidhi
              Ravishankar, Abhranil Munsi, Srijeeta, Vasundhara Kapoor, Tithi
              Majumder, Dr. Sunil Koijam, Senwarne Goyary, Tisha Kulgod
            </p>
          </div>

          <div className="mt-5">
            <span className="font-bold mb-2 block">Online Resources</span>
            <div>
              <a
                className="underline pointer"
                href="https://www.flickr.com/photos/meanestindian/"
                target="_blank"
              >
                Meena Kadri | Flickr
              </a>
            </div>
            <div>
              <a
                className="underline pointer"
                href="https://www.flickr.com/groups/indicscripts/"
                target="_blank"
              >
                Indic & Indian scripts | Flickr
              </a>
            </div>
          </div>
          <div className="border-b border-black w-full my-4"></div>
          <div className="text-xs flex justify-between flex-col md:flex-row gap-y-4">
            <div>
              <div>
                Project by{' '}
                <span className="font-extrabold">Deepesh Sangtani</span>
              </div>
              <div>
                The Glasgow School of Art -{' '}
                <a
                  href="https://2024.gsashowcase.net/deepesh-sangtani/"
                  target="_blank"
                  className="underline pointer"
                >
                  Masters Degree Project
                </a>
              </div>
              <div className="flex mt-1 gap-1">
                <span>
                  <img src="/images/instalogo.png" className="w-4 h-4" />
                </span>
                <span>
                  @
                  <a
                    href="https://www.instagram.com/deepstagram27/"
                    target="_blank"
                    className="underline  pointer"
                  >
                    deepstagram27
                  </a>
                </span>
              </div>
            </div>
            <div>
              <div>Online version and website</div>
              <div>
                <span className="font-extrabold">Rajeshwar Rudra</span>
              </div>
              <div className="flex mt-1 gap-1">
                <span>
                  <img src="/images/instalogo.png" className="w-4 h-4" />
                </span>
                <span>
                  @
                  <a
                    href="https://www.instagram.com/karon_okaron/"
                    target="_blank"
                    className="underline  pointer"
                  >
                    karon_okaron
                  </a>
                </span>
              </div>
            </div>
            <div>
              <div>Illustration by</div>
              <div>
                <span className="font-extrabold">
                  <a
                    href="https://bhankadraws.com/"
                    target="_blank"
                    className="font-extrabold underline pointer"
                  >
                    Bhavani Balasubramanyam
                  </a>
                </span>
              </div>
              <div className="flex mt-1 gap-1">
                <span>
                  <img src="/images/instalogo.png" className="w-4 h-4" />
                </span>
                <span>
                  @
                  <a
                    href="https://www.instagram.com/bhankadraws/"
                    target="_blank"
                    className="underline  pointer"
                  >
                    bhankadraws
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
