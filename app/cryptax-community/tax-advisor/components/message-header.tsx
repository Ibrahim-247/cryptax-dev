import Image from "next/image"

const MessageHeader = () => {
    return (
        <div className='w-full px-2 py-3  sm:py-4 border-b border-blue-100 flex justify-between items-center'>
            <div className='flex justify-start items-center gap-2 sm:gap-4'>
                <div className='md:size-14 sm:size-12 size-8 xs:size-10 rounded-full overflow-hidden shrink-0'>
                    <Image
                        width={56}
                        height={56}
                        src={'https://i.pravatar.cc/150?img=1'}
                        alt="user"
                        className="size-full rounded-full border border-gray-200 shrink-0"
                    />
                </div>
                <div>
                    <p className='md:text-base text-sm font-semibold'>Anand Kashi</p>
                    <div className='text-sm flex gap-2 items-center justify-start text-black/80'>
                        <span className='sm:size-2 size-1 block shrink-0 rounded-full animate-ping bg-green-600'></span>
                        <span>Active Now</span>
                    </div>
                </div>
            </div>
            <p className='lg:text-2xl  text-sm sm:text-lg xs:block hidden font-semibold text-primary'>Tax Advisor</p>
            <div className='text-sm flex gap-2 items-center justify-start text-black/80'>
                <span className='size-3 flex justify-center items-center border rounded-full animate-pulse border-red-400'>
                    <span className='size-2 block shrink-0 rounded-full bg-red-600'></span>
                </span>
                <span className='md:text-lg text-xs sm:text-base font-medium'>Live Chat</span>
            </div>
        </div>
    )
}

export default MessageHeader