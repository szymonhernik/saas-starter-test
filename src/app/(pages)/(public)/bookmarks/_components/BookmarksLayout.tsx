import ImageBoxArticle from '@/components/shared/ImageBoxArticle'
import { BookmarkedQueryResult } from '@/utils/types/sanity/sanity.types'
import Link from 'next/link'
import RemoveBookmarkButton from './RemoveBookmarkButton'

type Props = {
  posts: BookmarkedQueryResult | null
}

export default function BookmarksLayout(props: Props) {
  const { posts } = props

  return (
    <div className="my-36 max-w-2xl mx-auto divide-y grid gap-4 px-4">
      {posts && posts.length > 0 ? (
        posts.map((post) => <BookmarkedItem key={post._id} post={post} />)
      ) : (
        <h1>No bookmarks</h1>
      )}
    </div>
  )
}

function BookmarkedItem({ post }: { post: BookmarkedQueryResult[number] }) {
  const { _id, title, slug, subtitle, coverImage } = post

  if (slug) {
    return (
      <div className="flex justify-between gap-4 py-4 tracking-tight p-2">
        <div className="flex-1">
          <Link href={`/post/${slug}`}>
            <div className="font-semibold text-lg uppercase text-primary-foreground">
              {title}
            </div>
            {subtitle && (
              <div className="text-sm w-full sm:w-3/4 text-tertiary-foreground uppercase">
                {subtitle}
              </div>
            )}
          </Link>

          <RemoveBookmarkButton postId={_id} />
        </div>
        <div className="gap-2 w-28 h-28">
          {coverImage && (
            <ImageBoxArticle
              image={coverImage}
              width={200}
              height={200}
              size="200px"
            />
          )}
        </div>
      </div>
    )
  }
}
