import React from 'react'
import { Link } from 'react-router-dom'
import './Flyout.css'

export default function ({ routeTupleArray, show }) {
  return (
    <div className="flyout" style={{ display: show ? 'flex' : 'none' }}>
      {routeTupleArray.map((routeTuple) => (
        <Link to={routeTuple.route}>{routeTuple.name}</Link>
      ))}
    </div>
  )
}
