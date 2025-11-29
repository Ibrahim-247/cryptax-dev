import { Metadata } from "next"
import RightSideBar from "@/components/shared/right-aside"
import fakeDelay from "@/utils/fakeDelay";

export const metadata: Metadata = {
    title: 'Crypto & Tax News Netherlands – Latest Updates | CRYPTAX',
    description: 'Stay informed with curated Dutch crypto and tax news from trusted sources. Clean, structured updates tailored for serious users.',
}

const NewsLayout = async ({ children }: { children: React.ReactNode }) => {
    await fakeDelay(100);
    // main render
    return (
        <div className="w-full flex justify-between gap-4 2xl:gap-6 items-start">
            {children}
            {/* user list and most popular news */}
            <RightSideBar />
        </div>
    )
}

export default NewsLayout