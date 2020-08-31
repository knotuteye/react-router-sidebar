import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { sideBarObject } from '../App'
import Sidebar from '../components/Sidebar/Sidebar'

it('renders the sample route tree correctly', () => {
  const DOMTree = renderer
    .create(
      <Router>
        <Sidebar sideBarObject={sideBarObject} initialRoute="/" />
      </Router>
    )
    .toJSON()
  expect(DOMTree).toMatchSnapshot()
})
