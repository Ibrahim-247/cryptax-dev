import Image from "next/image";
import { BsExclamationCircle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
const UserSuggesstion = () => {

  // main render
  return (
    <div className='w-full p-4 relative flex bg-white flex-col gap-4 justify-start rounded-primary'>
      <p className="text-lg font-medium">Add to your feed</p>
      <BsExclamationCircle className='absolute top-4 right-4' />
      <div className='w-full flex flex-col gap-3'>
        {
          Array.from({ length: 4 }).map((_, i) => (
            <div className="w-full flex justify-between items-start" key={i}>
              <div className="flex justify-start items-start gap-2">
                <div className="size-10 shrink-0 rounded-full overflow-hidden">
                  <Image width={40} height={40} src={`https://i.pravatar.cc/150?img=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs text-black/80">John Doe</p>
                </div>
              </div>
              <button type="button" className="border shrink-0 border-primary cursor-pointer px-3 py-1 rounded-full flex justify-center items-center gap-2 text-primary">
                <FaPlus />
                <span>Follow</span>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserSuggesstion