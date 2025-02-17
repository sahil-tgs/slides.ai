import React from 'react';
import {Slide, Theme} from "@/lib/types";
import {cn} from "@/lib/utils";
import {LucideImage} from "lucide-react";
import { themes } from "@/lib/constants";

type Props = {
    slide?: Slide;
    theme?: Theme;
}

const ThumbnailPreview = ({slide, theme = themes[0]}: Props) => {
    return (
        <div
            className={cn(
                "w-full h-full relative aspect-[16/10] rounded-lg overflow-hidden transition-all duration-200"
            )}
            style={{
                fontFamily: theme.fontFamily,
                color: theme.accentColor,
                backgroundColor: theme.slideBackgroundColor,
                backgroundImage: theme.gradientBackground,
            }}
        >
            {slide ? (
                <div className="scale-[0.5] origin-top-left w-[200%] h-[200%] overflow-hidden">
                    This is a slide
                </div>
            ) : (
                <div className="absolute inset-0 flex justify-center items-center">
                    <LucideImage className="w-6 h-6 text-gray-500" />
                </div>
            )}
        </div>
    );
};

export default ThumbnailPreview;