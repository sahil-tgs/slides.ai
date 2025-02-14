import {create} from "zustand";
import {persist} from "zustand/middleware";

export const setSlidesStore = create(
    persist( ()=> ({
        states: null,
        setStates: () =>
    }) )
)