'use client'
import { EpisodeSkeletonListView } from '@/components/ui/skeletons/skeletons'
import ListItem from './ListItem'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import {
  InitialPostsQueryResult,
  PostsQueryResult
} from '@/utils/types/sanity/sanity.types'

import { Suspense, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { GridWrapperDiv } from './GridWrapperDiv'
import LoadMore from './LoadMore'
import clsx from 'clsx'
import PostWrapper from './PostWrapper'
import { createClient } from '@/utils/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { getSubscription, getUser, getUserTier } from '@/utils/supabase/queries'
import { fetchSubscriptions } from '@/utils/fetch-helpers/client'
import useSubscription from '@/utils/hooks/use-subscription-query'

export interface ObservableGridProps {
  data: InitialPostsQueryResult
  encodeDataAttribute?: EncodeDataAttributeCallback
}

// export const fetchSubscriptions = async () => {
//   const supabase = createClient()
//   const userTierObject = await getUserTier(supabase)
//   // frieze for 3 sec
//   await new Promise((resolve) => setTimeout(resolve, 3000))
//   return userTierObject?.userTier
// }

export default function ObservableGrid({
  data: dataProps,
  encodeDataAttribute
}: ObservableGridProps) {
  const { posts: initialPosts } = dataProps || {}
  const searchParams = useSearchParams()
  const filters = searchParams.get('filter')
  const view = searchParams.get('view')
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null)

  const supabase = createClient()
  const [sessionExpiresAt, setSessionExpiresAt] = useState(null)
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      //   @ts-ignore
      // sleep for 3 seconds

      setSessionExpiresAt(data.session?.expires_at)
    }
    getSession()
  }, [])

  const { data, isLoading } = useSubscription(sessionExpiresAt)

  // const { data: subscriberData, isLoading } = useQuery({
  //   queryKey: ['subscriptions', sessionExpiresAt],
  //   staleTime: 5 * 60 * 1000, //  5 minutes
  //   queryFn: fetchSubscriptions
  // })

  const userTier = data ? data : 0

  const handleHover = useCallback((postId: string | null) => {
    setHoveredPostId(postId)
  }, [])

  // if filters are present i don't want to render initial posts and load more should fetch first $limit posts without lastpublisheddate
  // if filters are NOT present i want to render initial posts and load more should fetch next $limit posts with lastpublisheddate
  return (
    <div
      className={clsx(' relative', {
        'overflow-x-auto   ': !view,
        'flex items-start': view === 'list'
      })}
    >
      <>
        {view === 'list' && (
          <div
            className={clsx(
              'hidden lg:block sticky top-dynamicDisplayBar ml-4 mr-8  bg-blue-200'
            )}
          >
            <Suspense fallback={<EpisodeSkeletonListView />}>
              <div
                className={` bg-gray-400 hidden lg:block w-full lg:w-[20vw] lg:max-w-72   aspect-square`}
              >
                {hoveredPostId}
              </div>
            </Suspense>
          </div>
        )}

        <div
          className={clsx('lg:flex', {
            'lg:flex-col flex-grow': view === 'list'
          })}
        >
          {!filters && (
            <>
              <GridWrapperDiv view={view}>
                {initialPosts.map((post, index) => {
                  // console.log('post:', post._id)

                  return (
                    <PostWrapper postId={post._id} onHover={handleHover}>
                      <Suspense fallback={<h1>Loading</h1>}>
                        <ListItem
                          item={post}
                          userTier={userTier}
                          isLoading={isLoading}
                          encodeDataAttribute={encodeDataAttribute}
                        />
                      </Suspense>
                    </PostWrapper>
                  )
                })}
              </GridWrapperDiv>
              <LoadMore
                initialPosts={initialPosts}
                view={view}
                userTier={userTier}
                isLoadingSubscriptions={isLoading}
                onHover={handleHover}
              />
            </>
          )}
          {filters && (
            <LoadMore
              onHover={handleHover}
              view={view}
              userTier={userTier}
              isLoadingSubscriptions={isLoading}
            />
          )}
        </div>
      </>
    </div>
  )
}
