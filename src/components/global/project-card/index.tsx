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
import { toast } from "sonner";
import {deleteProject, recoverProject} from "@/actions/project";


type Props = {
    projectId: string;
    title: string;
    createdAt: string;
    themeName: string;
    isDeleted?: boolean;
    slideData: JsonValue;

};

const ProjectCard = ({
                         createdAt,
                         projectId,
                         slideData,
                         title,
                         themeName,
                         isDeleted,
                     }: Props) => {
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const { setSlides } = useSlideStore();
    const router = useRouter();

    const theme = themes.find((t) => t.name === themeName) || themes[0];

    const handleDelete = async () => {
        setLoading(true);
        if(!projectId) {
            setLoading(false);
            toast.error("Error", {
                description: "Project not found.",
            });
            return;
        }
        try {
            const res = await deleteProject(projectId);
            if(res.status !== 200) {
                toast.error('Oopsie!', {
                    description: res.error || "Something went wrong.",
                });
                return;
            }
            setOpen(false);
            router.refresh();
            toast.success("Success", {
                description: "Project moved to trash successfully"
            });
        } catch (error) {
            console.error(error);
            toast.error('Oopsie!', {
                description: "Something went wrong. Please contact support",
            });
        } finally {
            setLoading(false);
        }
    };

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
            if(res.status !== 200) {
                toast.error('Oopsie!', {
                    description: res.error || "Something went wrong.",
                })
                return
            }
            setOpen(false)
            router.refresh()
            toast.success("Success", {
                description: "Project recovered successfully"
            })
        } catch (error){
            console.error(error)
            toast.error('Oopsie!', {
                description: "Something went wrong. Please contact support",
            })
        } finally {
            setLoading(false)
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
                        {isDeleted ? (
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
                        ) : (
                            <AlertDialogBox
                                description="This will delete your project and send to trash."
                                className="bg-red-500 text-white dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
                                onClick={handleDelete}
                                loading={loading}
                                open={open}
                                handleOpen={() => setOpen(!open)}
                            >
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="bg-background-80 dark:hover:bg-background-90"
                                    disabled={loading}
                                >
                                    Delete
                                </Button>
                            </AlertDialogBox>
                        )}
                </div>
            </div>
        </div>
</motion.div>
);
};

export default ProjectCard;