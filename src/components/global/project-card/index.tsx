'use client'
import React from 'react';
import { JsonValue } from "@prisma/client/runtime/library";
import { motion } from "framer-motion";
import { itemVariants, themes } from "@/lib/constants";
import { useRouter } from "next/navigation";
import ThumbnailPreview from "@/components/global/project-card/thumbnail-preview";
import { useSlideStore } from "@/store/useSlideStore";
import { timeAgo } from "@/lib/utils";
import AlertDialogBox from "@/components/global/alert-dialog";
import { Button } from "@/components/ui/button";
import {toast} from "sonner";

type Props = {
    projectId: string;
    title: string;
    createdAt: string;
    src: string;
    isDeleted?: boolean;
    slideData: JsonValue;
    themeName: string;
};

const ProjectCard = ({
                         createdAt,
                         projectId,
                         slideData,
                         src,
                         title,
                         isDeleted,
                         themeName,
                     }: Props) => {
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const { setSlides } = useSlideStore();
    const router = useRouter();

    const theme = themes.find((t) => t.name === themeName) || themes[0];

    const handleRecover = async () => {
        setLoading(true)
        if(!projectId){
            setLoading(false)
            toast("Error", {
                description: 'Project not found.'
            })
            return
        }
        try {
            const res = await recoverProject(projectId);
        } catch (error){

        }
    }

    const handleNavigation = () => {
        try {
            if (slideData) {
                const slides = typeof slideData === 'string' ? JSON.parse(slideData) : slideData;
                setSlides(slides);
                router.push(`/presentation/${projectId}`);
            }
        } catch (error) {
            console.error('Error parsing slide data:', error);
        }
    };

    const firstSlide = React.useMemo(() => {
        try {
            const parsedData = typeof slideData === 'string' ? JSON.parse(slideData) : slideData;
            return parsedData?.[0] || null;
        } catch (error) {
            console.error('Error parsing slide data:', error);
            return null;
        }
    }, [slideData]);

    return (
        <motion.div
            className={`group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors ${!isDeleted ? 'hover:bg-muted/50' : ''}`}
            variants={itemVariants}
        >
            <div
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={handleNavigation}
                style={{ backgroundColor: theme.slideBackgroundColor }}
            >
                <ThumbnailPreview
                    src={src}
                    title={title}
                    themeStyles={{
                        fontFamily: theme.fontFamily,
                        color: theme.fontColor,
                        backgroundColor: theme.backgroundColor,
                        backgroundImage: theme.gradientBackground,
                    }}
                    slideContent={firstSlide}
                />
            </div>
            <div className="w-full">
                <div className="space-y-1">
                    <h3 className="font-semibold text-base text-primary line-clamp-1">{title}</h3>
                    <div className="flex w-full justify-between items-center gap-2">
                        <p className="text-sm text-muted-foreground" suppressHydrationWarning>
                            {timeAgo(createdAt)}
                        </p>
                        {/*{isDeleted && (*/}
                            <div className="flex items-center gap-2">
                                <AlertDialogBox
                                    description="This will recover your project and restore your data"
                                    className="bg-green-500 text-white dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700"
                                    loading={loading}
                                    open={open}
                                    onClick={handleRecover}
                                    handleOpen={() => setOpen(!open)}
                                >
                                    <Button disabled={loading}>Recover</Button>
                                </AlertDialogBox>
                            </div>
                        {/*)}*/}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
