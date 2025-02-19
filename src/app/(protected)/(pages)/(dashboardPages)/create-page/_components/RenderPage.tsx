'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import usePromptStore from "@/store/usePromptStore";
import CreatePage from "@/app/(protected)/(pages)/(dashboardPages)/create-page/_components/CreatePage/CreatePage";

type Props = {}

const RenderPage = (props: Props) => {
    const router = useRouter();
    const { page, setPage } = usePromptStore();

    const renderStep = ()=>{
        switch (page) {

            case 'create':
                return <CreatePage/>
            case 'create-scratch':
                return <></>
            case 'creative-ai':
                return <></>

            default:
                return null

        }
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
                {renderStep()}
            </motion.div>
        </AnimatePresence>
    );
};

export default RenderPage;
