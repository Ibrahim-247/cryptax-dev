import { Metadata } from "next"
import RightSideBar from "@/components/shared/right-aside"

export const metadata: Metadata = {
    title: 'User Profile || Cryptax Community',
    description: 'Join the Cryptax Community to connect, share, and learn with fellow crypto enthusiasts. Stay updated with the latest news, discussions, and insights in the world of cryptocurrency taxation.',
}
const UserLayout = ({ children }: { children: React.ReactNode }) => {

    // make profile layout
    return (
        <div className="w-full flex justify-between gap-6 items-start">
            {children}
            {/* user list and most popular news */}
            <RightSideBar />
        </div>
    )
}

export default UserLayout