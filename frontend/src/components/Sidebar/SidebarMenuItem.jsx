import React from 'react'

const SidebarMenuItem = (props) => {
  const { icon, title, isActive } = props
  return (
    <>
      <div className="flex">
        <div className="flex gap-2 items-center w-full hover:bg-zinc-800 rounded-full px-3 cursor-pointer">
          <div className="p">
            {icon && React.createElement(icon, { className: ` text-2xl text-white ${isActive ? 'text-white' : 'text-gray-500'}` })}
          </div>
          <div className="p-2">
            <p className="text-lg text-white">{title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarMenuItem