"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Searchbar = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search submit
        console.log('Search query:', query);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative flex w-full max-w-2xl items-center"
            role="search"
        >
            <div className="relative flex w-full items-center rounded-full bg-muted/30 ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <Button
                    type="submit"
                    size="sm"
                    variant="ghost"
                    className="absolute left-0 h-full rounded-l-full px-3 hover:bg-transparent"
                >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                </Button>
                <Input
                    type="search"
                    placeholder="Search by title..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-full border-none bg-transparent pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-label="Search input"
                />
            </div>
        </form>
    );
};

export default Searchbar;