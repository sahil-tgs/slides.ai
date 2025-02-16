import React from 'react';
import { User } from "@prisma/client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Searchbar from "@/components/global/upper-info-bar/upper-info-searchbar";
import ThemeSwitcher from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import NewProjectButton from "@/components/global/upper-info-bar/new-project";

type Props = {
    user: User;
};

const UpperInfoBar = ({ user }: Props) => {
    return (
        <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center justify-between border-b px-4">
                <div className="flex items-center gap-4">
                    <SidebarTrigger
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    />
                    <Separator orientation="vertical" className="h-4" />
                    <div className="hidden sm:block w-[280px] lg:w-[400px]">
                        <Searchbar />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden sm:inline-flex items-center gap-2 rounded-lg font-medium hover:bg-muted"
                    >
                        <Upload className="h-4 w-4" />
                        <span>Import</span>
                    </Button>

                    <div className="hidden sm:block">
                        <NewProjectButton user={user} />
                    </div>

                    <ThemeSwitcher />

                    <Button
                        variant="outline"
                        size="icon"
                        className="sm:hidden"
                        aria-label="Search"
                    >
                        <Upload className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default UpperInfoBar;