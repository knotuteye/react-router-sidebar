import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Tree.css'

export default function ({ routeTree, showTree }) {
  const [showTreeState, setShowTreeState] = useState(showTree)
  const [showFlyout, setShowFlyout] = useState(false)
  const [isMouseInFlyout, setIsMouseInFlyout] = useState(false)

  return (
    <div
      className="sidebar-tree"
      style={{
        borderLeft: showTreeState ? '3px solid blue' : '3px solid transparent',
      }}
    >
      <Link
        to={routeTree.children[0].route}
        onClick={() => {
          setShowTreeState(!showTreeState)
        }}
        onMouseEnter={() => {
          setShowFlyout(!showTreeState)
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setShowFlyout(false || isMouseInFlyout)
          }, 1000)
        }}
        style={{
          color: showTreeState ? 'blue' : 'black',
          fontWeight: showTreeState ? 'bold' : 'normal',
        }}
      >
        {routeTree.icon && <i className={`fas fa-${routeTree.icon}`}></i>}
        <p>{routeTree.name}</p>
      </Link>

      <div className="flyout" style={{ display: showFlyout ? 'flex' : 'none' }}>
        {routeTree.children.map((routeTuple) => (
          <Link to={routeTuple.route}>{routeTuple.name}</Link>
        ))}
      </div>

      <div>
        {showTreeState &&
          routeTree.children.map((routeTuple) => (
            <NavLink
              to={routeTuple.route}
              activeClassName="active"
              className="sub"
            >
              {routeTuple.name}
            </NavLink>
          ))}
      </div>
    </div>
  )
}
