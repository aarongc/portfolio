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
                    '' : <ListLink to="/">HOME</ListLink>
            }            
            <ListLink to="/about/">ABOUT</ListLink>
            <ListLink to="/contact/">CONTACT</ListLink>
        </>
    )
}

export default Menu