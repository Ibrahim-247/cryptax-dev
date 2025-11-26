import NavLink from '@/components/common/nav-link';
import React from 'react'

const ProfileNavs = () => {
    const links = [
        { name: "My Posts", path: "/cryptax-community/profile", exact: true },
        { name: "Followers", path: "/cryptax-community/profile/my-followers", exact: true },
        { name: "Following", path: "/cryptax-community/profile/my-followings", exact: true },
        { name: "Settings", path: "/cryptax-community/profile/settings", exact: true },
    ];
    return (
        <nav className='w-full p-2 flex gap-2 rounded-md bg-white'>
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    href={link.path}
                    exact={link.exact}
                    className='px-6 py-2 rounded-md text-base text-[#374151]'
                    activeClass='!text-white bg-primary'
                >
                    <span>{link.name}</span>
                </NavLink>
            ))}
        </nav>
    )
}

export default ProfileNavs