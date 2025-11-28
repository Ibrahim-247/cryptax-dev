import RightSideBar from '@/components/shared/right-aside'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Global Search – Discover & Connect | CRYPTAX',
    description: 'Discover and connect with crypto and taxation experts from around the world. Access a global community of professionals and resources for your crypto and taxation needs.',
}
const GlobalSearchLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex justify-between gap-4 2xl:gap-6 items-start">
            {children}
            {/* user list and most popular news */}
            <RightSideBar />
        </div>
    )
}

export default GlobalSearchLayout