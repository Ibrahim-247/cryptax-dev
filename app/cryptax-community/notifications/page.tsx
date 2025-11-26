import NotificationList from "./components/notification-list"
import { Metadata } from "next";
import RightSideBar from "@/components/shared/right-aside"

export const metadata: Metadata = {
    title: 'Notifications – Updates & Activity | CRYPTAX',
    description: 'View your latest CRYPTAX activity, alerts, community updates, and interactions — all in one place. Stay connected and stay informed.',
}
const Notifications = () => {
    return (
        <div className='w-full flex justify-between gap-6 items-start'>
            {/* Notification list client  */}
            <NotificationList />
            {/* user list and most popular news */}
            <RightSideBar />
        </div>
    )
}

export default Notifications
