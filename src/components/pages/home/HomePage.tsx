'use client'

import TestQuery from '@/components/TestQuery'
import { Button } from '@/components/shadcn/ui/button'
import { PostsPayload } from '@/utils/types/sanity'
import { PostsQueryResult } from '@/utils/types/sanity/sanity.types'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface HomePageProps {
  data: PostsQueryResult | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const { posts } = data || {}

  return (
    <main className="container mt-16 lg:mt-4 mx-auto grid grid-cols-1 ">
      <Countdown />
    </main>
  )
}

export function Countdown() {
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('09/09/2024 23:59:59')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      if (d <= 0 && h <= 0) {
        setPartyTime(true)
      }
    }, 0)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="">
      {partyTime ? (
        <>
          <h1>let's go!</h1>
        </>
      ) : (
        <>
          <div className="timer-wrapper w-full h-[95vh] flex flex-col  gap-1 justify-center items-center font-semibold text-xs uppercase">
            <p>Lux Cache </p>
            <p>Premiere on 1 September 2024 </p>
            <div className="timer-inner flex  ">
              <span className="time">
                {days} days, {hours} hours left
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// export default function HomePage({ data, encodeDataAttribute }: HomePageProps) {
//   const { posts } = data || {}

//   // Function to multiply posts
//   const multiplyPosts = (posts, multiplier = 10) => {
//     const multipliedPosts = []
//     for (let i = 0; i < multiplier; i++) {
//       posts.forEach((post) => {
//         multipliedPosts.push({
//           ...post,
//           _id: `${post._id}-${i}`, // Ensure unique ID for each post
//           title: `${post.title} (Copy ${i + 1})`
//         })
//       })
//     }
//     return multipliedPosts
//   }

//   // Multiply posts by 10 to simulate 200 posts
//   const multipliedPosts = multiplyPosts(posts, 10)

//   return (
//     <main className="container mt-16 lg:mt-4 mx-auto grid grid-cols-1 divide-y divide-neutral-400">
//       {multipliedPosts && multipliedPosts.length > 0 ? (
//         multipliedPosts.map((post) => (
//           <Link key={post._id} href={`post/${post.slug}`}>
//             <h2 className="p-4 hover:bg-neutral-100">{post.title}</h2>
//             <p>{post.ogDescription}</p>
//             {post.coverImage?.asset?.url && (
//               <Image
//                 alt={''}
//                 src={post.coverImage.asset.url}
//                 width={500}
//                 height={500}
//               ></Image>
//             )}
//           </Link>
//         ))
//       ) : (
//         <div className="p-4 text-red-500">No posts found</div>
//       )}
//     </main>
//   )
// }
