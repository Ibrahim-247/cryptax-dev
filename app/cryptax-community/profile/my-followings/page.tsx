import { Metadata } from "next"
import MyFollowingList from "../components/my-following-list"


export const metadata: Metadata = {
    title: 'Following – People You Follow | CRYPTAX',
    description: 'View and manage the users you follow on CRYPTAX. Stay connected to experts, discussions, and updates relevant to crypto and taxation.',
}
const MyFollowings = () => {
    return (
        <div className="w-full p-6 gap-6 bg-white rounded-primary border border-primary-border flex flex-col justify-start">
            <div className="flex justify-start items-center gap-3">
                <p className="text-2xl font-semibold">Followings</p>
                <span className="py-1 px-3 text-sm bg-primary text-white rounded-full">({232})</span>
            </div>
            <hr className="w-full border border-primary-border" />
            {/* Follower List */}
            <MyFollowingList />
        </div>
    )
}

export default MyFollowings