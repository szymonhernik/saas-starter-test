'use server'

import { loadMorePosts } from '@/sanity/loader/loadQuery'

export const getPosts = async (
  selectedFiltersArray: Array<string> | null,
  paginationParams: {
    lastPublishedAt: string | null
    lastId: string | null
    limit: number
  }
) => {
  try {
    const response = await loadMorePosts(selectedFiltersArray, paginationParams)
    const data = await response

    // console.log('response: ', response)

    return data
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}
