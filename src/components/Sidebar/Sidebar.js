import React from 'react'
import SidebarRoot from '../SidebarRoot/SidebarRoot'
import Tree from '../Tree/Tree'
import './Sidebar.css'

export default function ({ sideBarObject }) {
  return (
    <div className="sidebar">
      <SidebarRoot
        routeTuple={{
          name: sideBarObject.header,
          route: sideBarObject.routeTree[0].children[0].route,
        }}
      ></SidebarRoot>
      {sideBarObject.routeTree.map((routeTreeObject, index) => (
        <Tree routeTree={routeTreeObject} showTree={index == 0}></Tree>
      ))}
    </div>
  )
}
