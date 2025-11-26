import Image from 'next/image'
import React from 'react'

interface FollowingType {
    id: number,
    name: string,
    username: string,
    profession: string,
    image: string
}
const MyFollowingsCard = ({ following: following }: { following: FollowingType }) => {
    return (
        <div className='w-full hover:shadow-xl transition-all ease-in-out duration-200 border p-3 sm:p-4 rounded-md flex  justify-start items-start gap-3 border-primary-border'>
            <div className="sm:size-10 size-9 shrink-0 overflow-hidden rounded-full">
                <Image width={40} height={40} src={following.image} alt="user" className="w-full h-full object-cover" />
            </div>
            <div className="flex w-full flex-col">
                <p className="text-sm font-semibold">{following.name}</p>
                <p className="text-xs text-black/80">{following.profession}</p>
                <button className='py-2 self-end w-fit text-xs sm:text-sm mt-3 text-white font-semibold rounded-sm cursor-pointer px-3 sm:px-6 bg-primary'>Unfollow</button>
            </div>
        </div>
    )
}

export default MyFollowingsCard