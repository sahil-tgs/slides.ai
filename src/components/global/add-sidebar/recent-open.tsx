import React from 'react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { Project } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {toast} from "sonner"; // Ensure Button is imported

type Props = {
    recentProjects: Project[]
}

function RecentOpen({ recentProjects }: Props) {

    const router = useRouter();
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
            <SidebarGroupLabel>
                Recently Opened
            </SidebarGroupLabel>
            <SidebarMenu>
                {recentProjects.length > 0 ? (
                    recentProjects.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                className={`hover:bg-primary-80`}
                            >
                                <Button
                                    variant={'link'}
                                    onClick ={()=>handleClick(item.id, item.slides)}
                                    className={`text-xs item-center justify-start`}
                                >
                                    <span>{item.title}</span>
                                </Button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))
                ) : ('')}
            </SidebarMenu>
        </SidebarGroup>) : ""

    );
}

export default RecentOpen;
