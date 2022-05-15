import React from 'react'
import SideBarElement from './SideBarElement'
import { HomeIcon, SearchIcon, BellIcon } from '@heroicons/react/solid'
import Home from '../pages'

export default function SideBar() {
  return (
    <div>
      <img
        className="h-10 w-10"
        src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
        alt=""
      />
      <SideBarElement Icon={HomeIcon} title="Home" />
      <SideBarElement Icon={SearchIcon} title="Search" />
      <SideBarElement Icon={BellIcon} title="Home" />
      <SideBarElement Icon={HomeIcon} title="Home" />
    </div>
  )
}
