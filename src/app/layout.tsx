import { Metadata } from 'next'
import Footer from '@/components/ui/Footer'
import { Toaster } from '@/components/ui/Toasts/toaster'
import { PropsWithChildren, Suspense } from 'react'
import localFont from 'next/font/local'

import '@/styles/main.css'
import { getURL } from '@/utils/helpers'

import GlobalNav from '@/components/ui/Header/GlobalNav'

const suisse = localFont({
  src: [
    {
      path: '../fonts/SuisseIntl-Regular-WebTrial.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/SuisseIntl-RegularItalic-WebTrial.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/SuisseIntl-SemiBold-WebTrial.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/SuisseIntl-SemiBoldItalic-WebTrial.woff2',
      weight: '600',
      style: 'italic'
    }
  ]
})

const meta = {
  title:
    'Lux Cache | Tools. support and insight to experimental music production.',
  description: 'Tools. support and insight to experimental music production.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: getURL()
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Vercel', 'Supabase', 'Next.js', 'Stripe', 'Subscription'],
    authors: [{ name: 'Vercel', url: 'https://vercel.com/' }],
    creator: 'Vercel',
    publisher: 'Vercel',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Vercel',
      creator: '@Vercel',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` loading ${suisse.className}`}>
        <div className="flex min-h-screen flex-col lg:flex-row-reverse">
          <GlobalNav />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]  flex-1 lg:overflow-auto "
          >
            {props.children}
          </main>

          {/* <Footer /> */}
        </div>
        <Suspense>
          <Toaster />
        </Suspense>

        {/*  */}
      </body>
    </html>
  )
}
