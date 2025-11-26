"use client"

import axiosPublic from "@/lib/axios.public";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const NotificationList = () => {
    const [filter, setFilter] = useState<null | string>(null);
    const axiosInstance = axiosPublic();
    // filter options
    const filterOptions = [
        {
            label: 'All',
            value: null
        },
        {
            label: 'My Posts',
            value: 'my-posts'
        },
    ];
    const notifications = [
        {
            id: 1,
            name: 'John Doe',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: 'https://i.pravatar.cc/150?img=6',
            date: '2023-01-01'
        },
        {
            id: 2,
            name: 'John Doe',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: 'https://i.pravatar.cc/150?img=9',
            date: '2023-01-01'
        },
        {
            id: 3,
            name: 'John Doe',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: 'https://i.pravatar.cc',
            date: '2023-01-01'
        },
        {
            id: 4,
            name: 'John Doe',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: 'https://i.pravatar.cc/150?img=8',
            date: '2023-01-01'
        },
        {
            id: 5,
            name: 'John Doe',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: 'https://i.pravatar.cc/150?img=4',
            date: '2023-01-01'
        },
        {
            id: 6,
            name: 'John Doe',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            image: 'https://i.pravatar.cc/150?img=10',
            date: '2023-01-01'
        }

    ]
    // main render
    return (
        <div className="w-full flex flex-col gap-6">
            {/* filter  */}
            <div className="w-full flex bg-white p-4 rounded-primary justify-start items-center gap-3">
                {filterOptions?.map((item, i) => (
                    <button key={i} type="button" onClick={() => setFilter(item.value)} className={`text-sm font-semibold cursor-pointer border rounded-full px-6 py-1 ${item.value === filter ? 'border-primary text-primary' : 'text-[#4F4F4F] border-[#808080]'}`}>
                        {item.label}
                    </button>
                ))}
            </div>
            {/* notification list */}
            <div className="w-full flex flex-col bg-white  rounded-primary justify-start items-center ">
                {
                    notifications?.map((notification) => (
                        <div className="w-full px-5 relative border-b border-gray-200 py-4 flex justify-start items-start gap-4" key={notification.id}>
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
                    ))
                }
            </div>
        </div>
    )
}

export default NotificationList