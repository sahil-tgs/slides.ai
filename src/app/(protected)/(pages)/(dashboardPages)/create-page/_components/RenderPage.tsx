'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import usePromptStore from "@/store/usePromptStore";
import CreatePage from "@/app/(protected)/(pages)/(dashboardPages)/create-page/_components/CreatePage/CreatePage";
import CreativeAI from '@/app/(protected)/(pages)/(dashboardPages)/create-page/_components/GenerateAI/CreativeAI';

type Props = {}

const RenderPage = (props: Props) => {
    const router = useRouter();
    const { page, setPage } = usePromptStore();

    const handleBack = () => {
        setPage('create')
    }

    // const handleSelectOption = (option: string) => {
    //     if (option === 'template') {
    //         router.push('/templates') 
    //     } else if (option === 'create-scratch') {
    //         setPage('create-scratch')
    //     } else if (option === 'creative-ai') {
    //         setPage('creative-ai')
    //     }
    // }

// In RenderPage.tsx
const handleSelectOption = (option: string) => {
    // console.log('handleSelectOption called with:', option);  // Add this
    if (option === 'template') {
        router.push('/templates') 
    } else if (option === 'create-scratch') {
        setPage('create-scratch')
    } else if (option === 'creative-ai') {
        setPage('creative-ai')
    }
}

    const renderStep = ()=>{
        switch (page) {

            case 'create':
                return <CreatePage onSelectOption={handleSelectOption}/>
            case 'create-scratch':
                return <></>
            case 'creative-ai':
                return <CreativeAI onBack={handleBack} />

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
