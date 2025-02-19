'use client'

import React from 'react'
import usePromptStore from "@/store/usePromptStore";
import {motion} from "framer-motion";
import {containerVariants, itemVariants} from "@/lib/constants";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

type Props = {}

const RecentPrompts = (props: Props) => {
    const {prompts, setPage} = usePromptStore()
    const handleEdit = (id: string) => {
        const prompt = prompts.find((prompt) => prompt.id === id)
        if (!prompt) {
            setPage('creative-ai')
            addMultipleOutline(prompt?.outlines)
            setCurrentAiPrompt(prompt?.title)
        }p    }
    return <motion.div variants={containerVariants}
        className="space-y-4 !nt-20"
    >
    <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-center">
    Your Recent Prompts
    </motion.h2>
        <motion.div
            variants={containerVariants}
            className="space-y-2 w-full lg:max-w-[80%] mx-auto"
        >
            {prompts.map((prompt, i) => (
                <motion.div key={i} variants={itemVariants}>
                <Card className="p-4 flex items-center justify-between hover:bg-accent/50 transition-color duration-300">
                    <div className="max-w-[70%]">
                        <h3 className="font-semibold text-xl line-clamp-1">
                            {prompt?.title}
                        </h3>
                        <p className="font-semibold text-sm text-muted-foreground">
                            {timeAgo(prompt?.createdAt)}
                        </p>
                    </div>
                    <div className="flex item-center gap-4">
                        <span className="text-sm text-vivid"> Creative AI </span>
                        <Button
                            variant="default"
                            size="sm"
                            className="rounded-xl bg-primary-20 dark:hover:bg-gray-700 hover:bg-gray-200 text-primary"
                            onClick={() => handleEdit(prompt?.id)}
                        >
                            Edit
                        </Button>
                    </div>
                </Card>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>

}

export default RecentPrompts