import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

export const sideBarObject = {
  header: 'URL Shortener',
  avatar: 'http://link-butcher-2.herokuapp.com/MDE2YzE2',
  routeTree: [
    {
      children: [
        { name: 'Progress', route: '/dashboard/' },
        { name: 'Contributions', route: '/dashboard/r' },
        { name: 'Activity', route: '/dashboard/o' },
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

function RouteDemo({ children }) {
  return <div className="routeDemo">{`You are here > ${children}`}</div>
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login}></Route>
      </Switch>
    </div>
  )
}

function Login() {
  return <Link to="/dashboard">Click here to Login</Link>
}

function Dashboard({ match }) {
  return (
    <div>
      <div>
        <Sidebar
          sideBarObject={sideBarObject}
          initialRoute={window.location.pathname}
        ></Sidebar>
      </div>
      <Switch>
        <Route path={match.url + '/r'}>
          <RouteDemo>R</RouteDemo>
        </Route>
        <Route path={match.url + '/o'}>
          <RouteDemo>O</RouteDemo>
        </Route>
        <Route path={match.url + '/'}>
          <RouteDemo>Home</RouteDemo>
        </Route>
      </Switch>
    </div>
  )
}
export default App
