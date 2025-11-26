import MostPopularNews from "@/app/cryptax-community/components/most-popular-news"
import Sponsored from "@/app/cryptax-community/components/sponsored"
import UserSuggesstion from "@/app/cryptax-community/components/user-suggesstion"

const RightSideBar = () => {
    return (
        <div className="2xl:w-[450px] xl:w-92  shrink-0  h-[calc(100vh-140px)] scrollbar-hide-hover overflow-y-auto sticky top-[110px] bottom-6 xl:flex hidden flex-col gap-6">
            {/* user list */}
            <UserSuggesstion />
            {/* Sponsored */}
            <Sponsored />
            {/* most popular news */}
            <MostPopularNews />
        </div>
    )
}

export default RightSideBar