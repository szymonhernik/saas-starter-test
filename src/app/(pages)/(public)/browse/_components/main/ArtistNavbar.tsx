'use client'
import ImageBox from '@/components/ui/ImageBox'
import { PostsByArtistSlugQueryResult } from '@/utils/types/sanity/sanity.types'
import Breadcrumbs from '../../../_components/Breadcrumbs'
import { useState } from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'

interface Props {
  artistInfo: PostsByArtistSlugQueryResult['artistInfo']
}
export default function ArtistNavbar(props: Props) {
  const { artistInfo } = props
  const [showBio, setShowBio] = useState(false)

  const pathnames = [
    { name: 'browse', path: '/browse' },
    { name: 'artists' },
    { name: artistInfo?.name ? artistInfo.name : 'artist name' }
  ]

  const handleBioClick = () => {
    console.log('bio clicked')
    setShowBio(!showBio)
  }

  return (
    <>
      <div className=" relative w-full  h-full flex flex-col  ">
        <div className="  p-4">
          <Breadcrumbs pathnames={pathnames} />
        </div>
        <div className=" w-full  grow  py-4 flex flex-row items-center overflow-y-auto">
          <div className="h-full w-1/2 max-w-72 md:max-w-auto lg:w-auto aspect-[16/9] md:h-full max-h-48 px-4">
            {' '}
            <ImageBox
              image={artistInfo?.image}
              size="(max-width: 768px) 100vw, 30vw"
              classesWrapper="relative w-full h-full aspect-[16/9] rounded-full  overflow-hidden"
              width={504}
              height={280}
            />
          </div>
          <div className="  h-full max-h-48 pr-4">
            {artistInfo?.bio && (
              <>
                <h2 className="screen-short:pt-0 pt-4 text-lg font-semibold italic group-hover:underline">
                  {artistInfo?.name}
                </h2>
                <button
                  className="underline "
                  onClick={() => {
                    handleBioClick()
                  }}
                >
                  BIO
                </button>
              </>
            )}
          </div>
        </div>

        {/* <div className=" h-[16vh] bg-violet-300  my-auto  flex flex-col lg:flex-row gap-6  "> */}
        {/* <div className=" h-[16vh] w-[28vh]    ">
            <ImageBox
              image={artistInfo?.image}
              size="(max-width: 768px) 100vw, 30vw"
              classesWrapper="relative w-full h-full aspect-[16/9] rounded-full  overflow-hidden"
              width={504}
              height={280}
            />
          </div>

          <div className=" flex flex-col">
            <h2
              key={artistInfo?._id}
              className="pt-4 text-lg font-semibold italic group-hover:underline"
            >
              {artistInfo?.name}
            </h2>
            {artistInfo?.bio && (
              <>
                <div>BIO</div>
                <p className=" overflow-scroll">{artistInfo.bio}</p>
              </>
            )}
          </div> */}
        {/* </div> */}
      </div>
      {showBio && artistInfo && (
        <div className="fixed top-[calc(20vh+8rem)] w-full left-0 lg:top-dynamicDisplayBar lg:w-toolbarDesktop bg-black/80 backdrop-blur-sm text-white p-4 flex gap-4">
          <p className="text-sm  overflow-y-auto">{artistInfo.bio}</p>
          <div
            onClick={() => setShowBio(false)}
            className="hover:cursor-pointer"
          >
            <Cross1Icon width={20} height={20} />
          </div>
        </div>
      )}
    </>
  )
}
