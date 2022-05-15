import React from 'react'

export default function SideBarElement({ Icon, title }) {
  return (
    <div className="flex items-center space-x-2 ">
      <Icon className="h-10 w-10" />
      <p>{title}</p>
    </div>
  )
}
