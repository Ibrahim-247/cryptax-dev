import UserMessage from "../components/user-message"

const UserConversation = async ({ params }: { params: { userslug: string } }) => {

    const { userslug } = await params

    // main render
    return (
        <div className="w-full flex flex-col h-full">
            <UserMessage />
        </div>
    )
}

export default UserConversation