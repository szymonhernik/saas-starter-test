import { client } from '@/sanity/lib/client'
import {
  MorePostsQueryResult,
  PostsQueryResult
} from '../types/sanity/sanity.types'
import { morePostsQuery, searchQuery } from '@/sanity/lib/queries'
import { SinglePostType } from '../types/sanity'

const fetchMorePosts = async (
  selectedFiltersArray: Array<string> | null,
  paginationParams: {
    lastPublishedAt: string | null
    lastId: string | null
    limit: number
  }
) => {
  // console.log('selectedFiltersArray: ', selectedFiltersArray)

  const result: MorePostsQueryResult = await client.fetch(morePostsQuery, {
    selectedFiltersArray: selectedFiltersArray,
    lastPublishedAt: paginationParams.lastPublishedAt,
    lastId: paginationParams.lastId,
    limit: paginationParams.limit
  })
  const newPosts = result.posts

  // console.log('Fetching new data')

  if (newPosts.length > 0) {
    paginationParams.lastPublishedAt = newPosts[newPosts.length - 1].publishedAt
    paginationParams.lastId = newPosts[newPosts.length - 1]._id
  } else {
    paginationParams.lastId = null // Reached the end
    console.log('Reached the end')
  }
  // console.log('newPosts ', newPosts)

  const posts = newPosts as SinglePostType[]

  return posts
}

const getSearchResults = async (searchValue: string) => {
  const result = await client.fetch(searchQuery, { searchValue })
  console.log('result: ', result)

  return result
}

export { fetchMorePosts, getSearchResults }
