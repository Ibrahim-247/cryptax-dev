import PageUnderDevelopment from '@/components/common/page-under-construction'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Crypto & Tax Podcasts – Listen & Learn | CRYPTAX',
    description: 'Explore crypto and taxation podcasts from Dutch and global partners. Stream episodes directly on CRYPTAX — professionally curated.',
}
const Podcasts = () => {
    return (
        <div className='w-full'>
            <PageUnderDevelopment pageName="Podcast" />
        </div>
    )
}

export default Podcasts