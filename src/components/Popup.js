import React from "react";
import { Link } from "react-router-dom";
/**
 *
 * @param {Array<{name:string, route:string}>} routeTupleArray
 */

export default function (routeTupleArray) {
  return (
    <div>
      {routeTupleArray.map((routeTuple) => (
        <Link to={routeTuple.route}>{routeTuple.name}</Link>
      ))}
    </div>
  );
}
