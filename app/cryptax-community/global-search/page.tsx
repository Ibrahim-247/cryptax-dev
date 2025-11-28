import { Metadata } from "next"
import GlobalSearchClient from "./components/global-search-client"

export const metadata: Metadata = {
    title: 'Global Search – Discover & Connect | CRYPTAX',
    description: 'Discover and connect with crypto and taxation experts from around the world. Access a global community of professionals and resources for your crypto and taxation needs.',
}

const GlobalSearch = () => {

    // main render
    return (
        <div>
            <GlobalSearchClient />
        </div>
    )
}

export default GlobalSearch