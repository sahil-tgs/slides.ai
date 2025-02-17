"use client"

import React from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { User } from "@prisma/client";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const NewProjectButton = ({ user }: { user: User }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/create-page');
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span>
                        <Button
                            onClick={handleClick}
                            disabled={!user.subscription}
                            className="rounded-lg font-semibold gap-2 hover:bg-primary/90 transition-colors"
                            aria-label="Create new project"
                        >
                            <Plus className="h-4 w-4" />
                            <span>New Project</span>
                        </Button>
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    {!user.subscription
                        ? "Subscribe to create new projects"
                        : "Create a new project"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default NewProjectButton;