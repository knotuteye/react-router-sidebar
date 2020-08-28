import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarRoot.css'

export default function ({ routeTuple, headerOnCLick }) {
  return (
    <NavLink
      className="sidebar-root"
      activeClassName="active"
      to={routeTuple.route}
      onClick={headerOnCLick}
    >
      <div>{routeTuple.name[0]}</div>
      <p>{routeTuple.name}</p>
    </NavLink>
  )
}
