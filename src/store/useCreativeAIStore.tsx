import { create } from "zustand";
import { OutlineCard } from "@/lib/types";
import { persist } from "zustand/middleware";

type CreativeAIStore = {
    outline: OutlineCard[];
    addMultipleOutlines: (outlines: OutlineCard[]) => void;
    addOutline: (outline: OutlineCard) => void;
};

const useCreativeAIStore = create<CreativeAIStore>()(
    persist(
        (set) => ({
            outline: [],
            addMultipleOutlines: (outlines) => set((state) => ({ outline: [...state.outline, ...outlines] })),
            addOutline: (outline) => set((state) => ({ outline: [...state.outline, outline] })),
        }),
        {
            name: "creative-ai",
        }
    )
);

export default useCreativeAIStore;
