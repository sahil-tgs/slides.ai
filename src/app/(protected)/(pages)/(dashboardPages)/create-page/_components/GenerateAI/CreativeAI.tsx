"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {ChevronLeft, Loader2, RotateCcw} from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/constants';
import useCreativeAIStore from "@/store/useCreativeAIStore";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CardList from "@/app/(protected)/(pages)/(dashboardPages)/create-page/_components/Common/CardList";


type Props = {
    onBack: () => void;
}

const CreativeAI = ({ onBack }: Props) => {
    const router = useRouter();
    const { currentAiPrompt, setCurrentAiPrompt, outlines, resetOutline } = useCreativeAIStore();
    const [noOfCards, setNoOfCards] = useState(0);
    const [editingCard, setEditingCard] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [editText, setEditText] = useState('');

    const handleBack = () => {
        onBack();
    }

    const resetCards = () => {
        setEditingCard(null);
        setSelectedCard(null);
        setEditText('');
        setCurrentAiPrompt('');
        resetOutline();
    }

    // WIP: const generateOutline = () => {}

    return (
        <motion.div
            className='space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <Button
                onClick={handleBack}
                variant='outline'
                className='mb-4'
            >
                <ChevronLeft className='w-4 h-4 mr-2' />
                Back
            </Button>

            <motion.div variants={itemVariants} className="text-center space-y-2">
                <h1 className="text-4xl font-semibold text-gray-900">
                    Generate with <span className="text-vivid">Creative AI</span>
                </h1>
                <p className="text-secondary">What would you like to create today?</p>
            </motion.div>

            <motion.div className="bg-primary/10 p-4 rounded-xl" variants={itemVariants}>
                <div className="flex flex-col sm:flex-row justify-between gap-3 items-center rounded-xl">
                    <input
                        value={currentAiPrompt || ''}
                        onChange={(e) => setCurrentAiPrompt(e.currentTarget.value)}
                        placeholder="Enter Prompt and add to the card..."
                        className='w-full py-3 px-3 leading-tight focus:outline-none'
                        required
                    />
                    <div className="flex items-center gap-3">
                        <Select
                            value={noOfCards.toString()}
                            onValueChange={(value) => setNoOfCards(parseInt(value))}
                        >
                            <SelectTrigger className="w-fit gap-2 font-semibold shadow-xl">
                                <SelectValue placeholder='Select number of cards' />
                            </SelectTrigger>
                            <SelectContent className="w-fit">
                                {outlines.length === 0 ? (
                                    <SelectItem value="0" className="font-semibold">No Cards</SelectItem>
                                ) : (
                                    Array.from({ length: outlines.length }, (_, idx) => idx + 1).map((num) => (
                                        <SelectItem
                                            key={num}
                                            value={num.toString()}
                                            className="font-semibold"
                                        >
                                            {num} {num === 1 ? "Card" : "Cards"}
                                        </SelectItem>
                                    ))
                                )}
                            </SelectContent>
                        </Select>
                        <Button
                            variant="destructive"
                            onClick={resetCards}
                            size="icon"
                            aria-label="Reset Cards"
                        >
                            <RotateCcw className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </motion.div>
            <div className="w-full flex justify-center item-center">
                <Button
                    className="font-medium text-lg flex gap-2 items-center"
                    // onClick={generateOutline}
                    disabled={isGenerating}
                >
                    {
                        isGenerating ? (
                            <>
                                <Loader2 className="animate-spin mr-2" /> Generating...
                            </>
                        ) : (
                            'Generated Outline'
                        )
                    }
                </Button>
            </div>

            <CardList/>
        </motion.div>
    );
}

export default CreativeAI;