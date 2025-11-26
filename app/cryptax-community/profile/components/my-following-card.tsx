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
        <div className='w-full hover:shadow-xl transition-all ease-in-out duration-200 border p-4 rounded-md flex flex-col justify-start items-start gap-3 border-primary-border'>
            <div className="size-10 shrink-0 overflow-hidden rounded-full">
                <Image width={40} height={40} src={following.image} alt="user" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <p className="text-sm font-semibold">{following.name}</p>
                <p className="text-xs text-black/80">{following.profession}</p>
                <button className='py-2 w-fit text-sm mt-3 text-white font-semibold rounded-sm cursor-pointer px-6 bg-primary'>Unfollow</button>
            </div>
        </div>
    )
}

export default MyFollowingsCard