import { profile } from "console"
import { Metadata } from "next"
import Image from "next/image"
import MyFollowerCard from "../components/my-follower-card"
import MyFollowerList from "../components/my-follower-list"


export const metadata: Metadata = {
    title: 'My Followers – Community Connections | CRYPTAX',
    description: 'See who follows your activity on CRYPTAX. Build credibility, connect with serious users, and grow your presence in the crypto & tax community.',
}
const MyFollowers = () => {

    return (
        <div className="w-full p-4 xl:p-6 xl:gap-6  gap-3 bg-white rounded-primary border border-primary-border flex flex-col justify-start">
            <div className="flex justify-start items-center gap-3">
                <p className="xl:text-2xl text-xl font-semibold">Followers</p>
                <span className="py-1 px-3 text-xs xl:text-sm bg-primary text-white rounded-full">({232})</span>
            </div>
            <hr className="w-full border border-primary-border" />
            {/* Follower List */}
            <MyFollowerList />
        </div>
    )
}

export default MyFollowers