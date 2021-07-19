import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderSecondary.css"
function HeaderSecondary({ name, pathName, length }) {
    return (
        <div className="headerSecondary">
            <h2>{name}</h2>
            {length && <Link to={pathName}>See all</Link>}
        </div>
    )
}
export default HeaderSecondary
