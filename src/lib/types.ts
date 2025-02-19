export interface Slide{
    id: string
    slideName: string
    type: string
    content: ContentItem
    slideOrder: number
    className?: string
}

export interface ContentItem {
    id: string
    type: ContentType
    name: string
    content: ContentItem[] | string | string[] | string[][]
    initialRows?: number
    initialColumns?: number
    restrictToDrop?: boolean
    columns?: number
    placeholder?: string
    className?: string
    alt?: string
    calloutType?: 'success' | 'warning' | 'info' | 'question' | 'caution'
    link?: string
    code?: string
    language?: string
    bgColor?: string
    isTransparent?: boolean
}

export type ContentType =
    | 'column'
    | 'resizable-column'
    | 'text'
    | 'paragraph'
    | 'image'
    | 'table'
    | 'multiColumn'
    | 'blank'
    | 'imageAndText'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'title'
    | 'blockquote'
    | 'numberedList'
    | 'bulletedList'
    | 'code'
    | 'link'
    | 'quote'
    | 'divider'
    | 'calloutBox'
    | 'todoList'
    | 'bulletList'
    | 'codeBlock'
    | 'customButton'
    | 'tableOfContents';

export interface Theme {
    name: string;
    fontFamily: string;
    fontColor: string;
    backgroundColor: string;
    slideBackgroundColor: string;
    accentColor: string;
    gradientBackground: string;
    sidebarColor?: string;      // Made optional with ?
    navbarColor: string;        // Fixed typo from navbarColor?
    mode: 'light' | 'dark';     // Using literal type for mode
}

export interface OutlineCard {
    title: string
    id: string
    order: number
}