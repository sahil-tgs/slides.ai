'use client'
import { Button } from '@/components/ui/button'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import { toast } from 'sonner'

import { Project } from '@prisma/client'
import { JsonValue } from '@prisma/client/runtime/library'
import React from 'react'

import { useSlideStore } from '@/store/useSlideStore'
import { useRouter } from 'next/navigation'

type Props = {
    recentProjects: Project[]
}

function RecentOpen({ recentProjects }: Props) {

    const router = useRouter();
    const {setSlides} = useSlideStore()
    const handleClick = (projectId: string, slides: JsonValue) => {
        if(!projectId || !slides){
            toast.error("No projects found.", {
                description: "pls try again",
            });
            return;
        }

        setSlides(JSON.parse(JSON.stringify(slides)));
        router.push(`/presentation/${projectId}`);

    }
    return (
        recentProjects.length > 0 ? (
            <SidebarGroup>
                <SidebarGroupLabel className="text-text-tertiary">
                    Recently Opened
                </SidebarGroupLabel>
                <SidebarMenu>
                    {recentProjects.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                className="hover:bg-surface-300 transition-colors duration-200"
                            >
                                <Button
                                    variant="link"
                                    onClick={() => handleClick(item.id, item.slides)}
                                    className="text-xs items-center justify-start text-text-secondary hover:text-text-primary"
                                >
                                    <span>{item.title}</span>
                                </Button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        ) : null
    );
}

export default RecentOpen;
