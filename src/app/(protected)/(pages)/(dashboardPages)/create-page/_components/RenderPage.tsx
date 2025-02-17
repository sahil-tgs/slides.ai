'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import usePromptStore from "@/store/usePromptStore";

type Props = {}

const RenderPage = (props: Props) => {
    const router = useRouter();
    const { page, setPage } = usePromptStore();
    const renderStep = ()=>{

    }
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={page} // Fixed: Use 'page' instead of 'pages'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
            >

                <h1>{page}</h1>
            </motion.div>
        </AnimatePresence>
    );
};

export default RenderPage;
