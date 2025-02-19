import { LucideHome, LucideLayoutTemplate, LucideSettings, LucideTrash } from "lucide-react";
import {Theme} from "@/lib/types";

export const data = {
    user: {
        name: "Shadcnm",
        email: "me@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Home",
            url: "/dashboard",
            icon: LucideHome,
        },
        {
            title: "Templates",
            url: "/templates",
            icon: LucideLayoutTemplate,
        },
        {
            title: "Trash",
            url: "/trash",
            icon: LucideTrash,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: LucideSettings,
        },
    ],
};


export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },

}

export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};


export const themes: Theme[] = [
    {
        name: 'Midnight',
        fontFamily: 'Inter, sans-serif',
        fontColor: '#E2E8F0',
        backgroundColor: '#0F172A',
        slideBackgroundColor: '#1E293B',
        accentColor: '#60A5FA',
        gradientBackground: 'linear-gradient(to right, #0F172A, #1E293B)',
        sidebarColor: '#0F172A',
        navbarColor: '#1E293B',
        mode: 'dark'
    },
    {
        name: 'Ocean',
        fontFamily: 'Inter, sans-serif',
        fontColor: '#1E293B',
        backgroundColor: '#F0F9FF',
        slideBackgroundColor: '#FFFFFF',
        accentColor: '#0EA5E9',
        gradientBackground: 'linear-gradient(to right, #BAE6FD, #E0F2FE)',
        sidebarColor: '#F0F9FF',
        navbarColor: '#FFFFFF',
        mode: 'light'
    },
    {
        name: 'Forest',
        fontFamily: 'Inter, sans-serif',
        fontColor: '#064E3B',
        backgroundColor: '#ECFDF5',
        slideBackgroundColor: '#FFFFFF',
        accentColor: '#059669',
        gradientBackground: 'linear-gradient(to right, #D1FAE5, #ECFDF5)',
        sidebarColor: '#ECFDF5',
        navbarColor: '#FFFFFF',
        mode: 'light'
    },
    {
        name: 'Sunset',
        fontFamily: 'Inter, sans-serif',
        fontColor: '#FFFFFF',
        backgroundColor: '#7C2D12',
        slideBackgroundColor: '#92400E',
        accentColor: '#F97316',
        gradientBackground: 'linear-gradient(to right, #7C2D12, #92400E)',
        sidebarColor: '#7C2D12',
        navbarColor: '#92400E',
        mode: 'dark'
    },
    {
        name: 'Minimal',
        fontFamily: 'Inter, sans-serif',
        fontColor: '#18181B',
        backgroundColor: '#FAFAFA',
        slideBackgroundColor: '#FFFFFF',
        accentColor: '#18181B',
        gradientBackground: 'linear-gradient(to right, #F4F4F5, #FAFAFA)',
        sidebarColor: '#FAFAFA',
        navbarColor: '#FFFFFF',
        mode: 'light'
    }
];

export const CreatePageCard = [
    {
        title: 'Use a',
        highlightedText: 'Template',
        description: 'Write a prompt and leave everything else for us to handle',
        type: 'template',
    },
    {
        title: 'Generate with',
        highlightedText: 'Creative AI',
        description: 'Write a prompt and leave everything else for us to handle',
        type: 'creative-ai',
        highlight: true,
    },
    {
        title: 'Start from',
        highlightedText: 'Scratch',
        description: 'Write a prompt and leave everything else for us to handle',
        type: 'create-scratch',
    },
];
