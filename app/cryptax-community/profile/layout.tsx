import { Metadata } from "next"
import React from "react"
import ProfileBanner from "./components/profile-banner"
import ProfileNavs from "./components/profile-navs"

export const metadata: Metadata = {
    title: 'Profile – Your CRYPTAX Account & Activity | CRYPTAX',
    description: 'View your CRYPTAX profile, activity, and community presence. Manage posts, followers, and your crypto & tax engagement in one place.',
}

const MyProfileLayout = ({ children }: { children: React.ReactNode }) => {

    // make profile layout
    return (
        <div className="w-full flex flex-col justify-start gap-6 ">
            {/* profile header */}
            <div className="p-4 flex flex-col gap-2 bg-white rounded-primary">
                <p className="text-xl font-bold">Profile</p>
                <p className="text-base text-[#374151]">You can access all your data and information from anywhere. </p>
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
