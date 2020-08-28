# React Router Sidebar

> A gitlab-esque sidebar for react router.

## Demo

See it live in action [here.](https://ko-sidebar.netlify.app/)

## Install

```
npm install react-router-sidebar
```

Or using yarn:

```
yarn add react-router-sidebar
```

## Dependencies

```json
{
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-router-dom": "^5.2.0",
  "react-scripts": "3.4.3"
}
```

## Usage

```js
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from 'react-router-sidebar'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar
          sideBarObject={myTreeObject}
          initialRoute={window.location.pathname}
        ></Sidebar>
      </div>
      <Switch>....Your Routes Go Here</Switch>
    </Router>
  )
}
```

## Props

### initialRoute

Receives a string relative path which is set as the initial active route of the sidebar.

### sideBarObject

Receives an object with the following tree structure:

```js
const myTreeObject = {
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
```

- #### header

The title to display below the avatar.

- #### avatar

The path to the image which serves as the avatar.

- #### routeTree

An array of objects each possessing children (an array of route tuples),
name (the text to show on the tree head), and icon (the Font Awesome Solid icon name to be rendered before the tree head).

## Important

- The sidebarObject prop value must conform with the structure of the example object above. Failure to conform would lead to unexpected, even, catastrophic results.

- This component renders as a fixed component and takes up 15rem of space in expanded form and 3rem in collapsed form. Please remember to offset your route components accordingly.

## TODO

- Add a style prop for a themeing object.
- Add a layout prop for more layount control.

## Contribution

If you see potential in this project and would like to contribute, hit me up at [kevinotuteye@gmail.com](mailto:kevinotuteye@gmail.com).

Happy Coding!!
