'use client'

import { Button } from '@/components/shadcn/ui/button'

import { useEffect, useState } from 'react'
import {
  disconnectDiscord,
  getDiscordConnectionStatus,
  initiateDiscordConnection
} from './actions'
import { useToast } from '@/components/ui/Toasts/use-toast'
import { useRouter } from 'next/navigation'

export default function DiscordIntegration({
  discordConnectionStatusResult,
  userId
}: {
  discordConnectionStatusResult: {
    status: boolean | null
    error: string | null
  }
  userId: string
}) {
  // TODO: when stripe subscription updates
  // TODO: when discord account is removed by hand in discord
  const { toast } = useToast()
  const router = useRouter()
  const handleConnect = async () => {
    try {
      const url = await initiateDiscordConnection()
      window.location.href = url
    } catch (error) {
      console.error('Error initiating Discord connection:', error)
      toast({
        title: 'Failed to initiate Discord connection',
        variant: 'destructive'
      })
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnectDiscord(userId)
      router.refresh()
      toast({ title: 'Discord disconnected successfully' })
    } catch (error) {
      console.error('Error disconnecting Discord:', error)
      toast({ title: 'Failed to disconnect Discord', variant: 'destructive' })
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Discord Integration</h2>
      {discordConnectionStatusResult.error ? (
        <div className="text-red-500">
          {discordConnectionStatusResult.error}
        </div>
      ) : discordConnectionStatusResult.status ? (
        <Button onClick={handleDisconnect}>Disconnect Discord</Button>
      ) : (
        <Button onClick={handleConnect}>Connect Discord</Button>
      )}
    </div>
  )
}
