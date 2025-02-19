import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { OutlineCard } from "@/lib/types";

type Page = "create" | "creative-ai" | "create-scratch";

type Prompt = {
    id: string;
    createdAt: string;
    title: string;
    outlines: OutlineCard[];
};

type PromptStore = {
    page: Page;
    setPage: (page: Page) => void;
    prompts: Prompt[];
    addPrompt: (prompt: Prompt) => void;
    removePrompt: (id: string) => void;
};

const usePromptStore = create<PromptStore>()(
    devtools(
        persist(
            (set) => ({
                page: "create",
                setPage: (page: Page) => set({ page }),

                prompts: [],

                addPrompt: (prompt: Prompt) =>
                    set((state) => ({
                        prompts: [prompt, ...state.prompts],
                    })),

                removePrompt: (id: string) =>
                    set((state) => ({
                        prompts: state.prompts.filter((prompt) => prompt.id !== id),
                    })),
            }),
            { name: "prompts" }
        )
    )
);

export default usePromptStore;
