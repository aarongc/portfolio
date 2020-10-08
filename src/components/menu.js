import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.css"

const ListLink = props => (
    <li className={menuStyles.listItem}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Menu = ({ isHomepage }) => {
    return (
        <>
            {
                isHomepage ?
                    '' : <ListLink to="/">home</ListLink>
            }            
            <ListLink to="/about/">about</ListLink>
            <ListLink to="/contact/">contact</ListLink>
        </>
    )
}

export default Menu