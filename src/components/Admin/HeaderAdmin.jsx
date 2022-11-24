import React from 'react'
import { TbLayoutNavbar } from 'react-icons/tb'

const HeaderAdmin = ({ active, setActive }) => {
  return (
    <header className={active ? 'sidebar_active bg-dark p-3' : 'bg-dark p-3 sidebar'}>
      <button
        id='sidebarCollapse'
        type='button'
        className='btn btn-light bg-light shadow-sm fw-bold'
        onClick={() => {
          setActive(!active)
        }}
      >
        <i>
          <TbLayoutNavbar />
        </i>
      </button>
    </header>
  )
}

export default HeaderAdmin
