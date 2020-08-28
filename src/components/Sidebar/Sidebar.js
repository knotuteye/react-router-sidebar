import React, { useState, useEffect } from 'react'
import SidebarRoot from './SidebarRoot/SidebarRoot'
import Tree from './Tree/Tree'
import './Sidebar.css'

export default function ({ sideBarObject, initialRoute }) {
  const [indexOfActiveTreeHeader, setIndexOfActiveTreeHeader] = useState(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  function rebuildTree(auxRoute) {
    sideBarObject.routeTree.forEach((routeTreeObject, index) => {
      routeTreeObject.children.forEach((routeTuple) => {
        if (auxRoute) {
          if (routeTuple.route === auxRoute) {
            setIndexOfActiveTreeHeader(index)
          }
        } else if (routeTuple.route === initialRoute) {
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
