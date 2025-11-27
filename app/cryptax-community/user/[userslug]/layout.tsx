import { Metadata } from "next"
import RightSideBar from "@/components/shared/right-aside"

export const metadata: Metadata = {
    title: "CRYPTAX – Dutch Crypto & Tax Knowledge Hub",
    description:
        "Discover the central Dutch platform for crypto and taxation. Access AI search, community insights, news, podcasts, and tools. Join us now!",
};
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