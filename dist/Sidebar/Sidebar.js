import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

function SidebarRoot({
  routeTuple,
  headerOnCLick,
  collapsed,
  avatar
}) {
  return /*#__PURE__*/React.createElement(NavLink, {
    className: "sidebar-root",
    activeClassName: "active",
    to: routeTuple.route,
    onClick: () => {
      headerOnCLick(routeTuple.route);
    },
    style: collapsed ? {
      alignItems: 'center'
    } : {}
  }, /*#__PURE__*/React.createElement("div", {
    style: collapsed ? {
      animationName: 'shrinkAvatar',
      backgroundImage: `url(${avatar})`
    } : {
      animationName: 'expandAvatar',
      backgroundImage: `url(${avatar})`
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: collapsed ? {
      display: 'none'
    } : {
      padding: '10px 16px'
    }
  }, routeTuple.name));
}

function Tree({
  routeTree,
  showTree,
  headerOnCLick,
  collapsed
}) {
  const [showFlyout, setShowFlyout] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `sidebar-tree ${showTree ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(Link, {
    to: routeTree.children[0].route,
    onClick: () => {
      headerOnCLick();
    },
    className: "header-link",
    onMouseEnter: () => {
      setShowFlyout(true);
    },
    onMouseLeave: () => {
      setTimeout(() => {
        setShowFlyout(false);
      }, 50);
    },
    style: {
      color: showTree ? '#4b4ba3' : '#666',
      fontWeight: showTree ? 'bold' : 'normal',
      flex: 1
    }
  }, routeTree.icon && /*#__PURE__*/React.createElement("i", {
    className: `fas fa-${routeTree.icon}`,
    style: collapsed ? {
      flex: 1,
      textAlign: 'center'
    } : {}
  }), !collapsed && /*#__PURE__*/React.createElement("p", null, routeTree.name)), /*#__PURE__*/React.createElement("div", {
    className: showTree && !collapsed ? 'sub' : !collapsed ? 'flyout' : 'flyout collapsed',
    style: showFlyout && (!showTree || collapsed) ? {
      display: 'flex'
    } : {}
  }, routeTree.children.map((routeTuple, index) => /*#__PURE__*/React.createElement(NavLink, {
    key: index,
    exact: true,
    to: routeTuple.route,
    activeClassName: "active",
    onClick: () => {
      headerOnCLick();
    }
  }, routeTuple.name))));
}

export default function ({
  sideBarObject,
  initialRoute
}) {
  const [indexOfActiveTreeHeader, setIndexOfActiveTreeHeader] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  function rebuildTree(auxRoute) {
    sideBarObject.routeTree.forEach((routeTreeObject, index) => {
      routeTreeObject.children.forEach(routeTuple => {
        if (auxRoute && routeTuple.route === auxRoute || routeTuple.route === initialRoute) {
          setIndexOfActiveTreeHeader(index);
        }
      });
    });
  }

  useEffect(rebuildTree, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "sidebar",
    style: {
      width: isCollapsed ? '4rem' : '15rem'
    }
  }, /*#__PURE__*/React.createElement(SidebarRoot, {
    avatar: sideBarObject.avatar,
    routeTuple: {
      name: sideBarObject.header,
      route: sideBarObject.routeTree[0].children[0].route
    },
    headerOnCLick: rebuildTree,
    collapsed: isCollapsed
  }), sideBarObject.routeTree.map((routeTreeObject, index) => /*#__PURE__*/React.createElement(Tree, {
    collapsed: isCollapsed,
    key: index,
    routeTree: routeTreeObject,
    showTree: index === indexOfActiveTreeHeader,
    headerOnCLick: () => {
      setIndexOfActiveTreeHeader(index);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "collapse",
    onClick: () => {
      setIsCollapsed(!isCollapsed);
    },
    style: isCollapsed ? {
      width: '4rem'
    } : {
      width: '15rem'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: isCollapsed ? 'fas fa-angle-double-right' : 'fas fa-angle-double-left'
  }), /*#__PURE__*/React.createElement("p", {
    style: isCollapsed ? {
      display: 'none'
    } : {
      display: 'flex'
    }
  }, "Collapse sidebar")));
}