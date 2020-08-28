import React, { useState, useEffect } from 'react'
import SidebarRoot from './SidebarRoot/SidebarRoot'
import Tree from './Tree/Tree'
import './Sidebar.css'

export default function ({ sideBarObject, initialRoute }) {
  const [indexOfActiveTreeHeader, setIndexOfActiveTreeHeader] = useState(null)

  function rebuildTree() {
    sideBarObject.routeTree.forEach((routeTreeObject, index) => {
      routeTreeObject.children.forEach((routeTuple) => {
        if (routeTuple.route == initialRoute) {
          setIndexOfActiveTreeHeader(index)
        }
      })
    })
  }
  useEffect(() => {
    rebuildTree()
  }, [])

  return (
    <div className="sidebar">
      <SidebarRoot
        routeTuple={{
          name: sideBarObject.header,
          route: sideBarObject.routeTree[0].children[0].route,
        }}
        headerOnCLick={rebuildTree}
      ></SidebarRoot>
      {sideBarObject.routeTree.map((routeTreeObject, index) => (
        <Tree
          key={index}
          routeTree={routeTreeObject}
          showTree={index == indexOfActiveTreeHeader}
          headerOnCLick={() => {
            setIndexOfActiveTreeHeader(index)
          }}
        ></Tree>
      ))}
    </div>
  )
}
