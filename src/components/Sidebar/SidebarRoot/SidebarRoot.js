import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarRoot.css'

export default function ({ routeTuple }) {
  return (
    <NavLink
      className="sidebar-root"
      activeClassName="active"
      to={routeTuple.route}
    >
      <div>{routeTuple.name[0]}</div>
      <p>{routeTuple.name}</p>
    </NavLink>
  )
}
