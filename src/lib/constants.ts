import { LucideHome, LucideLayoutTemplate, LucideSettings, LucideTrash } from "lucide-react";

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
