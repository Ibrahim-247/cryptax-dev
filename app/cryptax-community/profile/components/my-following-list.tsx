
import MyFollowingsCard from './my-following-card'

const MyFollowingList = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            username: "@johndoe",
            profession: "Works at Rotaract Club of Entertainment",
            image: "https://i.pravatar.cc/150?img=1"
        },
        {
            id: 2,
            name: "John Doe",
            username: "@johndoe",
            profession: "Works at Rotaract Club of Entertainment",
            image: "https://i.pravatar.cc/150?img=2"
        },
        {
            id: 3,
            name: "John Doe",
            username: "@johndoe",
            profession: "Works at Rotaract Club of Entertainment",
            image: "https://i.pravatar.cc/150?img=3"
        },
        {
            id: 4,
            name: "John Doe",
            username: "@johndoe",
            profession: "Works at Rotaract Club of Entertainment",
            image: "https://i.pravatar.cc/150?img=4"
        },
        {
            id: 5,
            name: "John Doe",
            username: "@johndoe",
            profession: "Works at Rotaract Club of Entertainment",
            image: "https://i.pravatar.cc/150?img=5"
        },
        {
            id: 6,
            name: "John Doe",
            profession: "Works at Rotaract Club of Entertainment",
            username: "@johndoe",
            image: "https://i.pravatar.cc/150?img=6"
        },
    ]
    return (
        <div className="w-full flex flex-col gap-3 justify-start">
            <div className='w-full grid grid-cols-4 gap-4 '>
                {
                    data.map((following) => (
                        <MyFollowingsCard key={following.id} following={following} />
                    ))
                }
            </div>
            {/* pagination */}
        </div>
    )
}

export default MyFollowingList