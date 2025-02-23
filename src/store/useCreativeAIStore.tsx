import { create } from "zustand";
import { OutlineCard } from "@/lib/types";
import { persist } from "zustand/middleware";

type CreativeAIStore = {
    outlines: OutlineCard[];  // Fixed: Changed 'outline' to 'outlines'
    setCurrentAiPrompt: (prompt: string) => void;
    addMultipleOutlines: (outlines: OutlineCard[]) => void;
    addOutline: (outline: OutlineCard) => void;
    currentAiPrompt: string;
    resetOutline: () => void;
};

const useCreativeAIStore = create<CreativeAIStore>()(
    persist(
      (set) => ({
        currentAiPrompt: '',
        setCurrentAiPrompt: (prompt: string) => {
          set({ currentAiPrompt: prompt });
        },
        outlines: [],
        addOutline: (outline: OutlineCard) => {
          set((state) => ({ 
            outlines: [outline, ...state.outlines], // Append new outline
          }));
        },
        addMultipleOutlines: (outlines: OutlineCard[]) => {
          set((state) => ({
            outlines: [...outlines], // Append multiple outlines
          }));
        },
          resetOutline: () => set({ outlines: [] }),
      }),
      {
        name: 'creative-ai', // storage key for the persisted store
      }
    )
);

export default useCreativeAIStore;
