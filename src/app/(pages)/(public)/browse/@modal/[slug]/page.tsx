import { loadPost } from '@/sanity/loader/loadQuery'

import ModalPage from '@/components/pages/modal/ModalPage'
import { createClient } from '@/utils/supabase/server'
import { getUserTier } from '@/utils/supabase/queries'
import { canAccessPost } from '@/utils/helpers/subscriptionUtils'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await loadPost(slug)
  const { data } = post || {}

  if (!data) {
    // redirect to not found page
    notFound()
  }

  const supabase = createClient()
  const subscriptionTier = await getUserTier(supabase)
  const userTier = subscriptionTier?.userTier
  const canAccess =
    userTier && data?.minimumTier
      ? canAccessPost(userTier, data.minimumTier)
      : 'loading'

  return <ModalPage data={data} canAccess={canAccess} />
}
