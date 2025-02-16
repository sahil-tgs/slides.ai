'use client'

import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom Switch Component
const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            "peer inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-muted shadow-sm transition-all duration-300 ease-in-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "hover:bg-muted/80",
            className
        )}
        {...props}
        ref={ref}
    >
        <Moon
            className={cn(
                "absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform stroke-foreground transition-all duration-300",
                "data-[state=checked]:opacity-0 data-[state=unchecked]:opacity-100"
            )}
            aria-hidden="true"
        />
        <SwitchPrimitives.Thumb
            className={cn(
                "pointer-events-none block h-8 w-8 rounded-full bg-background shadow-lg ring-0 transition-transform duration-300",
                "data-[state=checked]:translate-x-10 data-[state=unchecked]:translate-x-1",
                "flex items-center justify-center"
            )}
        />
        <Sun
            className={cn(
                "absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform stroke-foreground transition-all duration-300",
                "data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-0"
            )}
            aria-hidden="true"
        />
    </SwitchPrimitives.Root>
));

Switch.displayName = "ThemeSwitch";

// Theme Switcher Component
const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-10 w-20" aria-hidden="true" />;
    }

    return (
        <div className="relative">
            <Switch
                checked={theme === 'light'}
                onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            />
            <span className="sr-only">
                Current theme: {theme === 'light' ? 'Light' : 'Dark'} mode
            </span>
        </div>
    );
};

export default ThemeSwitcher;