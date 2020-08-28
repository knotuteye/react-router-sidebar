import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Tree.css'

export default function ({ routeTree, showTree, headerOnCLick }) {
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
          }, 100)
        }}
        style={{
          color: showTree ? '#4b4ba3' : '#666',
          fontWeight: showTree ? 'bold' : 'normal',
        }}
      >
        {routeTree.icon && <i className={`fas fa-${routeTree.icon}`}></i>}
        <p>{routeTree.name}</p>
      </Link>

      <div
        className={showTree ? 'sub' : 'flyout'}
        style={showFlyout && !showTree ? { display: 'flex' } : {}}
      >
        {routeTree.children.map((routeTuple) => (
          <NavLink
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
