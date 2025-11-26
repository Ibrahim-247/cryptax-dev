"use client"

import axiosPublic from "@/lib/axios.public";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import NotificationCard from "./notification-card";

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
        <div className="w-full flex flex-col gap-4 2xl:gap-6">
            {/* filter  */}
            <div className="w-full flex bg-white p-3 sm:p-4 rounded-primary justify-start items-center gap-3">
                {filterOptions?.map((item, i) => (
                    <button key={i} type="button" onClick={() => setFilter(item.value)} className={`text-sm font-semibold cursor-pointer border rounded-full px-4 sm:px-6 py-1 ${item.value === filter ? 'border-primary text-primary' : 'text-[#4F4F4F] border-[#808080]'}`}>
                        {item.label}
                    </button>
                ))}
            </div>
            {/* notification list */}
            <div className="w-full flex flex-col bg-white  rounded-primary justify-start items-center ">
                {
                    notifications?.map((notification) => (
                        <NotificationCard key={notification.id} notification={notification} />
                    ))
                }
            </div>
        </div>
    )
}

export default NotificationList