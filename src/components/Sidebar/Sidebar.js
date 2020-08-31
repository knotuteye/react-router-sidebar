import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'

function SidebarRoot({ routeTuple, headerOnCLick, collapsed, avatar }) {
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

function Tree({ routeTree, showTree, headerOnCLick, collapsed }) {
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

export default function ({ sideBarObject, initialRoute }) {
  const [indexOfActiveTreeHeader, setIndexOfActiveTreeHeader] = useState(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  function rebuildTree(auxRoute) {
    sideBarObject.routeTree.forEach((routeTreeObject, index) => {
      routeTreeObject.children.forEach((routeTuple) => {
        if (
          (auxRoute && routeTuple.route === auxRoute) ||
          routeTuple.route === initialRoute
        ) {
          setIndexOfActiveTreeHeader(index)
        }
      })
    })
  }
  useEffect(rebuildTree, [])

  return (
    <div
      className="sidebar"
      style={{
        width: isCollapsed ? '4rem' : '15rem',
      }}
    >
      <SidebarRoot
        avatar={sideBarObject.avatar}
        routeTuple={{
          name: sideBarObject.header,
          route: sideBarObject.routeTree[0].children[0].route,
        }}
        headerOnCLick={rebuildTree}
        collapsed={isCollapsed}
      ></SidebarRoot>
      {sideBarObject.routeTree.map((routeTreeObject, index) => (
        <Tree
          collapsed={isCollapsed}
          key={index}
          routeTree={routeTreeObject}
          showTree={index === indexOfActiveTreeHeader}
          headerOnCLick={() => {
            setIndexOfActiveTreeHeader(index)
          }}
        ></Tree>
      ))}
      <div
        className="collapse"
        onClick={() => {
          setIsCollapsed(!isCollapsed)
        }}
        style={
          isCollapsed
            ? {
                width: '4rem',
              }
            : {
                width: '15rem',
              }
        }
      >
        <i
          className={
            isCollapsed
              ? 'fas fa-angle-double-right'
              : 'fas fa-angle-double-left'
          }
        ></i>
        <p style={isCollapsed ? { display: 'none' } : { display: 'flex' }}>
          Collapse sidebar
        </p>
      </div>
    </div>
  )
}
