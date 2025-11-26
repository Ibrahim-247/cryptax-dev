import PageUnderDevelopment from '@/components/common/page-under-construction'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Crypto Services Marketplace – Tools & Professionals | CRYPTAX',
    description: 'Find crypto-related tools, services, and professionals. A curated marketplace designed for Dutch users with transparency and trust.',
}
const MarketPlace = () => {
    return (
        <div className='w-full'>
            <PageUnderDevelopment pageName="Marketplace" />
        </div>
    )
}

export default MarketPlace