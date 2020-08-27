import React from 'react'
import './NewSidebar.css'
import { NavLink } from 'react-router-dom'

export default function ({ sideBarJSON }) {
  return (
    <div className="sidebar">
      <NavLink className="sidebar-root" activeClassName="active" to={}>
        <div>{}</div>
        <p>{}</p>
      </NavLink>
    </div>
  )
}
