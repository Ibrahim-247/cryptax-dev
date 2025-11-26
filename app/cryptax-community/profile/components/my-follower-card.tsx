"user client"

import Image from "next/image"

interface FollowerType {
    id: number,
    name: string,
    username: string,
    profession: string,
    image: string
}
const MyFollowerCard = ({ follower: follower }: { follower: FollowerType }) => {
    return (
        <div className="w-full hover:shadow-xl transition-all ease-in-out duration-200 p-4 rounded-md border border-primary-border flex justify-start items-start gap-4">
            <div className="size-10 shrink-0  overflow-hidden rounded-full">
                <Image width={40} height={40} src={follower.image} alt="user" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <p>{follower.name}</p>
                <p className="text-xs text-black/80">{follower.profession}</p>
            </div>
        </div>
    )
}

export default MyFollowerCard