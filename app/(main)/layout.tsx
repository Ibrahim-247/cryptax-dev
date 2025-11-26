import React from 'react'
import Image from "next/image";
import logoImage from "@/public/images/logo.png";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Join Now || Cryptax Community',
    description: 'Join the Cryptax Community to connect, share, and learn with fellow crypto enthusiasts. Stay updated with the latest news, discussions, and insights in the world of cryptocurrency taxation.',
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    // main render
    return (
        <div className='w-full min-h-screen xl:flex-row flex-col 2xl:px-28 px-6 md:px-10 pt-2 pb-10 md:pb-20 xl:py-10 lg:gap-5 xl:gap-32 xl:justify-between flex items-center'>
            <div className="w-full flex justify-center items-center">
                <div className='2xl:w-[450px] 2xl:h-[450px] xl:size-96 md:w-96 w-52 h-40 md:h-64  shrink-0'>
                    <Image
                        src={logoImage}
                        alt="Logo"
                        width={470}
                        height={200}
                        className="w-full cursor-pointer transition-all hover:grayscale-25 ease-in-out duration-300 hover:scale-105 h-full object-contain"
                        priority
                    />
                </div>
            </div>
            <div className='w-full max-w-3xl'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout