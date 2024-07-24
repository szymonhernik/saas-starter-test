'use client'
import {
  AddressElement,
  PaymentElement,
  useCustomCheckout
} from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { getErrorRedirect, getStatusRedirect, getURL } from '@/utils/helpers'

import PromotionCodeForm from './PromotionCodeForm'
import OrderSummary from './OrderSummary'
import { Button } from '@/components/shadcn/ui/button'
import {
  Alert,
  AlertDescription,
  AlertTitle
} from '@/components/shadcn/ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { useQueryClient } from '@tanstack/react-query'

export default function CheckoutForm(props: {
  priceWithTrial: boolean
  daysTrial: number | null
  userCanTrial: boolean
}) {
  const { confirm, canConfirm, confirmationRequirements, lineItems, currency } =
    useCustomCheckout()
  const { priceWithTrial, daysTrial, userCanTrial } = props
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [messageBody, setMessageBody] = useState('')

  // console.log('lineItems', lineItems);

  // console.log('ENVIRONMENT: ', process.env.NODE_ENV)
  // console.log('next url: ', process.env.NEXT_PUBLIC_SITE_URL)

  // console.log('priceWithTrial', priceWithTrial);
  const queryClient = useQueryClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // if can't confirm don't allow form submission
    if (!canConfirm) {
      e.preventDefault()
      setIsSubmitting(false)
      return
    }
    e.preventDefault()
    setIsSubmitting(true)

    //  confirm() method returns a Promise that resolves to an object with one of the following types
    //  { session: CheckoutSession }
    //  { error: StripeError }
    confirm().then((result) => {
      setIsSubmitting(false)
      if (result.session) {
        // router.refresh();
        // router.push(`/?ts=${Date.now()}`);
        setIsSuccess(true)
        const returnUrl = getStatusRedirect(
          '/browse',
          'Success!',
          'Your payment was successful!'
        )
        // queryClient.invalidateQueries({ queryKey: ['subscription'] })
        router.push(returnUrl)
        router.refresh()
      } else {
        // const returnUrl = getErrorRedirect(
        //   getURL('/pricing'),
        //   'Unable to complete the purchase.',
        //   result.error.message || 'An error occurred'
        // )
        // router.push(returnUrl)
        setMessageBody(result.error.message || 'An error occurred')
      }
    })
  }
  return (
    <div className="flex flex-col gap-16 ">
      <>
        <div className="flex flex-col gap-8">
          <OrderSummary daysTrial={daysTrial} userCanTrial={userCanTrial} />

          <PromotionCodeForm />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
          <div>
            <h1 className="text-xl font-bold mb-4">Billing information</h1>
            <AddressElement options={{ mode: 'billing' }} />
          </div>
          <div>
            <h1 className="text-xl font-bold  mb-4">Payment information</h1>
            <PaymentElement />
          </div>
          <div
            id="messages"
            role="alert"
            className="text-red-500"
            style={messageBody ? { display: 'block' } : { display: 'none' }}
          >
            <AlertDestructive message={messageBody} />
          </div>
          <div className="space-x-2">
            <Button
              className="w-fit"
              isLoading={isSubmitting}
              disabled={!canConfirm || isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Processing' : 'Pay'}
            </Button>
            <Button variant="outline" className="w-fit" disabled={isSubmitting}>
              <Link href="/">Cancel</Link>
            </Button>
          </div>
        </form>
      </>
    </div>
  )
}

export function AlertDestructive({ message }: { message: string }) {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
