import { Metadata } from "next"
import React from "react"
import ProfileBanner from "./components/profile-banner"
import ProfileNavs from "./components/profile-navs"
import fakeDelay from "@/utils/fakeDelay"

export const metadata: Metadata = {
    title: 'Profile – Your CRYPTAX Account & Activity | CRYPTAX',
    description: 'View your CRYPTAX profile, activity, and community presence. Manage posts, followers, and your crypto & tax engagement in one place.',
}

const MyProfileLayout = async ({ children }: { children: React.ReactNode }) => {
    await fakeDelay(100);
    // make profile layout
    return (
        <div className="w-full flex flex-col justify-start gap-4 sm:gap-6 ">
            {/* profile header */}
            <div className="sm:p-4 p-3 flex flex-col gap-1 sm:gap-2 bg-white rounded-primary">
                <p className="sm:text-xl text-lg font-bold">Profile</p>
                <p className="sm:text-base text-sm text-[#374151]">You can access all your data and information from anywhere. </p>
            </div>
            {/* separator */}
            <hr className="w-full border border-gray-300" />
            {/* profile info banner */}
            <ProfileBanner />
            {/* profile other pages */}
            <ProfileNavs />
            {/* pages */}
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default MyProfileLayout
