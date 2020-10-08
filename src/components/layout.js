import React from "react"
import Navigation from "./navigation"
import layoutStyles from "./layout.module.css"
import Menu from "./menu"
import { withPrefix } from "gatsby"

const Layout = ({ pathname, children }) => {
    const isHomepage = pathname === withPrefix("/")   

    return (
        <div className={layoutStyles.layout}>
            <header>
                <Navigation>
                    <Menu isHomepage={isHomepage} />
                </Navigation>                
            </header>
            <article className={layoutStyles.article}>
                {children}
            </article>
        </div>
    )
}

Layout.defaultProps = {
    location: {}
}

export default Layout