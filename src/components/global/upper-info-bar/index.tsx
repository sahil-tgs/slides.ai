import React from 'react';
import {User} from "@prisma/client";
import {SidebarTrigger} from "@/components/ui/sidebar";

type Props = {
    user: User;
    children: React.ReactNode;
}

const UpperInfoBar = ({ user }:Props) => {
    return <header className="sticky top-0 z-[10] flex shrink-0 flex-wrap items-center gap-2 border-b bg-background p-4 justify-between">
        <SidebarTrigger className="-ml-1" />
    </header>
};

export default UpperInfoBar;