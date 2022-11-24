import React from 'react'
import { FaBars } from 'react-icons/fa'

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
          <FaBars />
        </i>
      </button>
    </header>
  )
}

export default HeaderAdmin
