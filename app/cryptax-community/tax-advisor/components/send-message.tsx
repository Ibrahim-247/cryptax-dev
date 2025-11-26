import { FaArrowRight } from "react-icons/fa6"

const SendMessage = () => {
    return (
        <div className="w-full flex flex-col gap-3 justify-center items-center  shrink-0 ">
            <div className="sm:p-4 p-2 flex justify-between items-center rounded-md bg-background w-full">
                <input type="text" className="w-full border-none outline-none h-full text-base font-medium placeholder:text-gray-500" name="message" id="message" placeholder="Type your message" />
                <button className="size-10 cursor-pointer -rotate-45 shrink-0 flex justify-center items-center p-1 bg-primary rounded-full text-white">
                    <FaArrowRight />
                </button>
            </div>
            <p className="text-center">Ask our tax advisor</p>
        </div>
    )
}

export default SendMessage