import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Tree.css'

export default function ({ routeTree, showTree, headerOnCLick, collapsed }) {
  const [showFlyout, setShowFlyout] = useState(false)
  return (
    <div className={`sidebar-tree ${showTree ? 'active' : ''}`}>
      <Link
        to={routeTree.children[0].route}
        onClick={() => {
          headerOnCLick()
        }}
        className="header-link"
        onMouseEnter={() => {
          setShowFlyout(true)
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setShowFlyout(false)
          }, 50)
        }}
        style={{
          color: showTree ? '#4b4ba3' : '#666',
          fontWeight: showTree ? 'bold' : 'normal',
          flex: 1,
        }}
      >
        {routeTree.icon && (
          <i
            className={`fas fa-${routeTree.icon}`}
            style={
              collapsed
                ? {
                    flex: 1,
                    textAlign: 'center',
                  }
                : {}
            }
          ></i>
        )}
        {!collapsed && <p>{routeTree.name}</p>}
      </Link>

      <div
        className={
          showTree && !collapsed
            ? 'sub'
            : !collapsed
            ? 'flyout'
            : 'flyout collapsed'
        }
        style={
          showFlyout && (!showTree || collapsed) ? { display: 'flex' } : {}
        }
      >
        {routeTree.children.map((routeTuple, index) => (
          <NavLink
            key={index}
            exact
            to={routeTuple.route}
            activeClassName="active"
            onClick={() => {
              headerOnCLick()
            }}
          >
            {routeTuple.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
