'use client'
import React from 'react'
import { OutlineCard } from "@/lib/types";

type Props = {
    outlines: OutlineCard[]
    editingCard: string | null
    selectedCard: string | null
    editText: string
    addOutline?: (card: OutlineCard) => void
    onEditChange: (value: string) => void
    onCardSelect: (id: string) => void
    onCardDoubleClick: (id: string, title: string) => void
    setEditText: (value: string) => void
    setEditingCard: (id: string | null) => void
    setSelectedCard: (id: string | null) => void
    addMultipleOutlines: (cards: OutlineCard[]) => void
}

const CardList = ({
                      outlines,
                      editingCard,
                      selectedCard,
                      editText,
                      addOutline,
                      onEditChange,
                      onCardSelect,
                      onCardDoubleClick,
                      setEditText,
                      setEditingCard,
                      setSelectedCard,
                      addMultipleOutlines
                  }: Props) => {
    return <div>CardList</div>
}

export default CardList