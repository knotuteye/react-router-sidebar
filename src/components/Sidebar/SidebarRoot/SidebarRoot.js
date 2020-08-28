import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarRoot.css'

export default function ({ routeTuple, headerOnCLick, collapsed }) {
  return (
    <NavLink
      className="sidebar-root"
      activeClassName="active"
      to={routeTuple.route}
      onClick={() => {
        headerOnCLick(routeTuple.route)
      }}
      style={collapsed ? { alignItems: 'center' } : {}}
    >
      <div>{routeTuple.name[0]}</div>
      <p style={collapsed ? { display: 'none' } : {}}>{routeTuple.name}</p>
    </NavLink>
  )
}
