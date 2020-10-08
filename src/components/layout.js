import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
    <li className={layoutStyles.listItem}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (
        <div className={layoutStyles.layout}>
            <header>
                <Navigation>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </Navigation>                
            </header>
            <article className={layoutStyles.article}>
                {children}
            </article>
        </div>
    )
}