'use client'

import LogoCloud from '@/components/ui/LogoCloud'
import type { Tables } from 'types_db'
import { getStripe } from '@/utils/stripe/client'
import { checkoutWithStripe } from '@/utils/stripe/server'
import { getErrorRedirect } from '@/utils/helpers'
import { User } from '@supabase/supabase-js'
import cn from 'classnames'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import {
  BillingInterval,
  Price,
  ProductWithPrices,
  SubscriptionWithProduct
} from '@/utils/types'
import Link from 'next/link'
import ConditionalWrapper from '../ConditionalWrapper'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/shadcn/ui/avatar'
import { Button } from '@/components/shadcn/ui/button'

interface Props {
  user: User | null | undefined
  products: ProductWithPrices[]
  subscription: SubscriptionWithProduct | null
  userDetails: { can_trial: boolean } | null
}

export default function Pricing({
  user,
  products,
  subscription,
  userDetails
}: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  )
  const router = useRouter()
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month')
  const [priceIdLoading, setPriceIdLoading] = useState<string>()
  const currentPath = usePathname()

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id)

    if (!user) {
      setPriceIdLoading(undefined)
      return router.push('/signin/signup')
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      currentPath
    )

    if (errorRedirect) {
      setPriceIdLoading(undefined)
      return router.push(errorRedirect)
    }

    if (!sessionId) {
      setPriceIdLoading(undefined)
      return router.push(
        getErrorRedirect(
          currentPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      )
    }

    const stripe = await getStripe()
    stripe?.redirectToCheckout({ sessionId })

    setPriceIdLoading(undefined)
  }

  return (
    <section className="">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-xl font-extrabold  sm:text-center ">
            Pricing Plans
          </h1>

          <div className="relative self-center mt-6 bg-zinc-100 rounded-lg p-0.5 flex sm:mt-8  ">
            {intervals.includes('month') && (
              <button
                onClick={() => setBillingInterval('month')}
                type="button"
                className={`${
                  billingInterval === 'month'
                    ? 'relative w-1/2 bg-zinc-200  shadow-sm text-black'
                    : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-600'
                } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap  focus:z-10 sm:w-auto sm:px-8`}
              >
                Monthly billing
              </button>
            )}
            {intervals.includes('year') && (
              <button
                onClick={() => setBillingInterval('year')}
                type="button"
                className={`${
                  billingInterval === 'year'
                    ? 'relative w-1/2 bg-zinc-200 shadow-sm text-black'
                    : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-600'
                } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap  focus:z-10 sm:w-auto sm:px-8`}
              >
                Yearly billing
              </button>
            )}
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
            )
            if (!price) return null

            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency!,
              minimumFractionDigits: 0
            }).format((price?.unit_amount || 0) / 100)

            // Determine button text based on trial_allowed in product metadata, user eligibility, and presence of trial_allowed
            const metadata = product.metadata as { trial_allowed?: boolean }
            const userCanTrial = userDetails?.can_trial
            let buttonText = 'Subscribe' // Default button text

            // Check if trial_allowed is explicitly mentioned in metadata
            if (metadata.hasOwnProperty('trial_allowed')) {
              if (metadata.trial_allowed && userCanTrial) {
                buttonText = 'Trial' // Both product allows trial and user can trial
              } else {
                buttonText = '(trial not available) Subscribe' // user can't trial
              }
            }

            return (
              <div
                key={product.id}
                className={cn(
                  'flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-100',
                  {
                    'border border-pink-500': subscription
                      ? product.name === subscription?.prices?.products?.name
                      : product.name === 'Freelancer'
                  },
                  'flex-1', // This makes the flex item grow to fill the space
                  'basis-1/3', // Assuming you want each card to take up roughly a third of the container's width
                  'max-w-xs' // Sets a maximum width to the cards to prevent them from getting too large
                )}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-black">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-zinc-300">{product.description}</p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {priceString}
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      /{billingInterval}
                    </span>
                  </p>

                  <Button
                    type="button"
                    onClick={(e) => {
                      {
                        !subscription && !user
                          ? router.push('/signin')
                          : !subscription && user
                            ? router.push('/checkout' + '?priceId=' + price.id)
                            : router.push('/account')
                      }
                    }}
                    isLoading={priceIdLoading === price.id}
                    className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md "
                  >
                    {subscription ? 'Manage' : buttonText}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
