import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import UserAside from "@/components/shared/user-aside"
import FeedBackModal from "./components/feed-back-modal"

const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full relative">
            <Header />
            <div className="2xl:container px-4  py-4 sm:py-6 flex gap-4 2xl:gap-6">
                <UserAside />
                <main className="w-full">
                    {children}
                </main>
            </div>
            <FeedBackModal />
            <Footer />
        </div>
    )
}

export default CommunityLayout