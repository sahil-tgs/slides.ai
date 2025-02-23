'use client';

import React from 'react';
import usePromptStore from "@/store/usePromptStore";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useCreativeAIStore from "@/store/useCreativeAIStore";
import { toast } from "sonner";


const RecentPrompts: React.FC = () => {
    const { prompts, setPage } = usePromptStore();
    const { addMultipleOutlines, setCurrentAiPrompt } = useCreativeAIStore();

    const handleEdit = (id: string) => {
        const prompt = prompts.find((prompt) => prompt?.id === id);
        if (prompt) {
            setPage('creative-ai');
            addMultipleOutlines(prompt.outlines);
            setCurrentAiPrompt(prompt.title);
        } else {
            toast.error('Error', {
                description: 'Prompt not found',
            });
        }


    };

    const timeAgo = (date: string) => {
        const time = new Date(date).getTime();
        const now = Date.now();
        const diff = Math.floor((now - time) / 1000 / 60); // minutes

        if (diff < 1) return "Just now";
        if (diff < 60) return `${diff} minutes ago`;
        if (diff < 1440) return `${Math.floor(diff / 60)} hours ago`;
        return `${Math.floor(diff / 1440)} days ago`;
    };

    return (
        <motion.div variants={containerVariants} className="space-y-4 mt-20">
            <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-center">
                Your Recent Prompts
            </motion.h2>
            <motion.div variants={containerVariants} className="space-y-2 w-full lg:max-w-[80%] mx-auto">
                {prompts.map((prompt, i) => (
                    <motion.div key={prompt.id} variants={itemVariants}>
                        <Card className="p-4 flex items-center justify-between hover:bg-accent/50 transition-color duration-300">
                            <div className="max-w-[70%]">
                                <h3 className="font-semibold text-xl line-clamp-1">
                                    {prompt.title}
                                </h3>
                                <p className="font-semibold text-sm text-muted-foreground">
                                    {timeAgo(prompt.createdAt)}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-vivid"> Creative AI </span>
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="rounded-xl bg-primary-20 dark:hover:bg-gray-700 hover:bg-gray-200 text-primary"
                                    onClick={() => handleEdit(prompt.id)}
                                >
                                    Edit
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default RecentPrompts;
