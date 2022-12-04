import React from 'react'
import { useState } from 'react'
import SideBarAdmin from './SideBarAdmin'
import HeaderAdmin from './HeaderAdmin'

const LayoutAdmin = () => {
  const [active, setActive] = useState(false)

  return (
    <div>
      <SideBarAdmin active={active} />
      <HeaderAdmin active={active} setActive={setActive} />
      <div className={active ? 'content_active page-content p-3 mt-5' : 'page-content p-3 mt-5 content'}></div>
    </div>
  )
}

export default LayoutAdmin
