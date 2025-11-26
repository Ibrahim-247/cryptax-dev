import { Metadata } from 'next'
import Image from 'next/image'
import currency_image from '@/public/images/currency_image.png'


export const metadata: Metadata = {
    title: 'Crypto & Tax News Netherlands – Latest Updates | CRYPTAX',
    description: 'Stay informed with curated Dutch crypto and tax news from trusted sources. Clean, structured updates tailored for serious users.',
}


const NewsDetails = () => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-4 md:gap-6'>
            {/* news details */}
            <div className='flex flex-col justify-start items-start gap-2.5'>
                <div className='flex flex-col gap-2 md:gap-4'>
                    <h1 className='md:text-2xl text-xl font-semibold'>The EU office that called out a shady Dutch contractor</h1>
                    <p>Whether you’re managing a product roadmap, organizing a work project, planning a travel itinerary, or preparing for an upcoming season, one of the biggest challenges is figuring out what to do first. In today’s world, distractions are everywhere, resources are limited, and to-do lists seem to grow by the hour. Without a system to guide your choices, it’s easy to get stuck in reactive mode—working hard but not necessarily working smart. That’s where prioritization frameworks come in.</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-4'>
                    <h1 className='md:text-2xl text-xl font-semibold'>The EU office that called out a shady Dutch contractor</h1>
                    In every field—whether you’re a student, entrepreneur, team leader, or solo professional—it’s easy to confuse activity with progress. You might spend hours responding to emails, putting out fires, or finishing small tasks, all while delaying the things that could actually drive meaningful outcomes. This constant state of motion can feel productive in the moment, but without prioritization, it rarely leads to significant growth. That’s because not all tasks are created equal.

                    The solution isn’t just about doing less; it’s about doing what matters more. By identifying which actions have the greatest impact, you create space to focus deeply, make better decisions, and move with greater clarity. Prioritization is what allows you to stop reacting to your day and start leading it—with purpose, structure, and a sense of direction that builds momentum over time.
                </div>
                <div className='flex flex-col gap-2 md:gap-4'>
                    <h1 className='md:text-2xl text-xl font-semibold'>The EU office that called out a shady Dutch contractor</h1>
                    <p>Whether you’re managing a product roadmap, organizing a work project, planning a travel itinerary, or preparing for an upcoming season, one of the biggest challenges is figuring out what to do first. In today’s world, distractions are everywhere, resources are limited, and to-do lists seem to grow by the hour. Without a system to guide your choices, it’s easy to get stuck in reactive mode—working hard but not necessarily working smart. That’s where prioritization frameworks come in.</p>
                </div>
            </div>
            {/* news image */}
            <div className='w-full md:h-96 sm:h-56 rounded overflow-hidden'>
                <Image
                    src={currency_image.src}
                    alt="news"
                    width={400}
                    height={400}
                    className="w-full transition-all hover:grayscale-25 ease-in-out duration-300 hover:scale-105 h-full object-cover"
                />
            </div>
        </div>
    )
}

export default NewsDetails