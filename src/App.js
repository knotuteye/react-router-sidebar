import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App() {
  const sideBarObject = {
    header: 'URL Shortener',
    routeTree: [
      {
        children: [
          { name: 'Progress', route: '/p' },
          { name: 'Contributions', route: '/r' },
          { name: 'Activity', route: '/o' },
        ],
        icon: 'home',
        name: 'Overview',
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
        <Sidebar sideBarObject={sideBarObject}></Sidebar>
      </div>
      <Switch></Switch>
    </Router>
  )
}

export default App
