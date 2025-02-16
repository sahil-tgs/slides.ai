'use client'

import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useState, useCallback } from 'react'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

interface NavFooterProps {
    prismaUser: User
}

const NavFooter: React.FC<NavFooterProps> = ({ prismaUser }) => {
    const { isLoaded, isSignedIn, user } = useUser()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleUpgrade = useCallback(async () => {
        try {
            setLoading(true)
            // Add your upgrade logic here
            // Example: await upgradeSubscription()
            router.refresh()
        } catch (error) {
            console.error('Error upgrading subscription:', error)
        } finally {
            setLoading(false)
        }
    }, [router])

    if (!isLoaded || !isSignedIn) {
        return null
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <div className="flex flex-col gap-y-6 items-start group-data-[collapsible-icon]:hidden">
                    {!prismaUser.subscription && (
                        <div className="flex flex-col items-start p-2 pb-3 gap-4 bg-surface-300 rounded-lg group-data-[collapsible=icon]:hidden">
                            <div className="flex flex-col items-start gap-1">
                                <p className="text-base font-bold">
                                    Get <span className="text-gradient">Creative AI</span>
                                </p>
                                <span className="text-sm text-text-secondary">
              Unlock all features including AI and more
            </span>
                            </div>
                            <div className="w-full bg-creative-ai-gradient p-[1px] rounded-full">
                                <Button
                                    className="w-full border-brand-500 bg-surface-300 hover:bg-surface-400 text-text-primary rounded-full font-bold"
                                    variant="default"
                                    size="lg"
                                    onClick={handleUpgrade}
                                    disabled={loading}
                                >
                                    {loading ? 'Upgrading...' : 'Upgrade'}
                                </Button>
                            </div>
                        </div>
                    )}
                    <SignedIn>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-foreground w-full"
                        >
                            <UserButton />
                            <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate font-semibold text-text-primary">
              {user?.fullName || 'User'}
            </span>
                                <span className="truncate text-text-secondary">
              {user?.emailAddresses[0]?.emailAddress || 'No email provided'}
            </span>
                            </div>
                        </SidebarMenuButton>
                    </SignedIn>
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default NavFooter