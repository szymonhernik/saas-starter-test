'use client'
import { Button, buttonVariants } from '@/components/shadcn/ui/button'
import { SinglePostType } from '@/utils/types/sanity'
import Link from 'next/link'
import CloseButton from './CloseButton'
import { Suspense, useCallback } from 'react'
import CloseIcon from '@/components/icons/CloseIcon'
import LockIcon from '@/components/icons/LockIcon'
import { LockClosedIcon } from '@radix-ui/react-icons'
import FiltersPreview from './FilterPreview'
import PreviewLinkButton from './PreviewLinkButton'
import AccessInfo from './AccessInfo'
import ImageBox from '@/components/ui/ImageBox'
import ImageBoxExpanded from '@/components/ui/ImageBoxExpanded'
import { CanAcessType } from '@/utils/types'
import {
  InitialPostsQueryResult,
  PostBySlugModalQueryResult,
  PostsQueryResult
} from '@/utils/types/sanity/sanity.types'

type Props = {
  data:
    | PostBySlugModalQueryResult
    | InitialPostsQueryResult['posts'][number]
    | PostsQueryResult['posts'][number] // this is used in draft mode
  canAccess: CanAcessType
  onModalDisplayChange?: (value: boolean) => void
}
export default function EpisodePreview(props: Props) {
  const { data, canAccess, onModalDisplayChange } = props
  const {
    title,
    publishedAt,
    filters,
    ogDescription,
    slug,
    subtitle,
    minimumTier,
    previewImage
  } = data || {}

  const handleModalDisplayChange = () => {
    if (onModalDisplayChange) {
      // console.log('Handle close modal')
      onModalDisplayChange(false)
    } else {
      return null
    }
  }

  return (
    <div className="bg-white w-[90vw] h-[80dvh]  lg:w-[80vw] lg:h-[80dvh] overflow-y-auto  overscroll-contain relative flex flex-col md:flex-row  md:items-start md:justify-center lg:max-w-screen-xl">
      {/* Image */}

      <div className="bg-yellow-200 md:grow md:w-1/2 min-h-[30dvh]  h-[30dvh] md:h-[80dvh] flex items-center justify-center sticky  top-0 left-0 z-[0]">
        {previewImage && (
          <ImageBoxExpanded
            image={previewImage}
            alt="Image preview of the post"
            classesWrapper="absolute z-[0] top-0 left-0 h-full"
            width={600}
            height={600}
            size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {!canAccess && minimumTier && (
          <div className="rounded-md z-[10] bg-black  w-4/5 md:h-[70%] text-white py-8 px-6 font-semibold text-sm space-y-4">
            <AccessInfo minimumTier={minimumTier} canAccess={canAccess} />
          </div>
        )}
      </div>
      {/* Textual */}
      <div className="p-4 md:p-8 flex flex-col z-10 bg-white pb-16 mb-16 md:grow md:w-1/2">
        <div className="w-full text-right md:sticky md:top-8 md:right-0">
          {onModalDisplayChange ? (
            <button
              onClick={() => {
                handleModalDisplayChange()
              }}
              className="close-button self-end"
            >
              <CloseIcon />
            </button>
          ) : (
            <Suspense>
              <CloseButton />
            </Suspense>
          )}
        </div>
        <div className="mt-8 flex flex-col gap-8 max-w-lg w-full self-center mx-auto">
          <div>
            <p className="">{publishedAt}</p>
            <h1 className="text-2xl font-semibold">{title}</h1>
            {subtitle && <h3 className="font-neue italic">{subtitle}</h3>}
            <FiltersPreview filters={filters} />
          </div>

          <div>
            <p className="font-neue italic">{ogDescription}</p>
          </div>

          {slug && (
            <>
              <PostReadButton canAccess={canAccess} slug={slug} />
              <PreviewLinkButton slug={slug} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function PostReadButton({
  canAccess,
  slug
}: {
  canAccess: CanAcessType
  slug: string | null
}) {
  if (canAccess) {
    return (
      <Link
        href={`/post/${slug}`}
        className="self-center"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button className="" size={'lgIcon'}>
          Open
        </Button>
      </Link>
    )
  } else {
    return (
      <Button disabled size={'lgIcon'} className="self-center">
        <LockClosedIcon className="w-5 h-5" /> <span>Open</span>
      </Button>
    )
  }
}
