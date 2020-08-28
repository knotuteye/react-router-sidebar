import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  const sideBarObject = {
    header: 'URL Shortener',
    avatar: 'http://link-butcher-2.herokuapp.com/MDE2YzE2',
    routeTree: [
      {
        children: [
          { name: 'Progress', route: '/' },
          { name: 'Contributions', route: '/r' },
          { name: 'Activity', route: '/o' },
        ],
        icon: 'home',
        name: 'Project Overview',
      },
      {
        children: [
          { name: 'Frytol', route: '/lo' },
          { name: 'Eno Serwaa', route: '/t' },
          { name: 'Pepsi', route: '/v' },
          { name: 'Soyabean', route: '/u' },
        ],
        icon: 'burn',
        name: 'Oil',
      },
      {
        children: [
          { name: 'Sardine', route: '/g' },
          { name: 'DHall Beast', route: '/j' },
          { name: 'Last Killer', route: '/d' },
          { name: 'Brilla', route: '/l' },
          { name: 'Ant Brain', route: '/e' },
        ],
        icon: 'brain',
        name: 'Minds',
      },
    ],
  }

  return (
    <Router>
      <div className="App">
        <Sidebar
          sideBarObject={sideBarObject}
          initialRoute={window.location.pathname}
        ></Sidebar>
      </div>
      <Switch></Switch>
    </Router>
  )
}

export default App
