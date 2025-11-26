import Image from "next/image"
import { BsThreeDots } from "react-icons/bs"

interface NotificationType {
    name: string
    title: string
    date: string
    image: string
}


const NotificationCard = ({ notification }: { notification: NotificationType }) => {
    return (
        <div className="w-full px-3 sm:px-5 relative border-b border-gray-200 py-4 flex justify-start items-start gap-4">
            <div className="size-10 shrink-0 rounded-full overflow-hidden">
                <Image width={40} height={40} src={notification.image} alt="user" className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex flex-col gap-0.5">
                <p className="text-sm font-semibold">{notification.name}</p>
                <p className="text-xs text-black/80">{notification.title}</p>
            </div>
            <div className="absolute flex items-center justify-end top-2 gap-4 right-4 ">
                <p className="text-xs text-black/80">{notification.date}</p>
                <button type="button" className="cursor-pointer">
                    <BsThreeDots size={20} />
                </button>
            </div>
        </div>
    )
}

export default NotificationCard