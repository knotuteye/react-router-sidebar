import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarRoot.css'

export default function ({ routeTuple, headerOnCLick, collapsed, avatar }) {
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
      <div
        style={
          collapsed
            ? {
                animationName: 'shrinkAvatar',
                backgroundImage: `url(${avatar})`,
              }
            : {
                animationName: 'expandAvatar',
                backgroundImage: `url(${avatar})`,
              }
        }
      ></div>
      <p
        style={
          collapsed
            ? { display: 'none' }
            : {
                padding: '10px 16px',
              }
        }
      >
        {routeTuple.name}
      </p>
    </NavLink>
  )
}
