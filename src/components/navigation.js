import React from "react"
import navigationStyles from "./navigation.module.css"

const Patty = ()=> {
    return <span className={navigationStyles.patty}></span>
}

const Navigation = ({ children })=> {
    return (
        <nav role="navigation">
            <div className={navigationStyles.menuToggle}>
                <input className={navigationStyles.checkbox} type="checkbox" />
                <Patty />
                <Patty />
                <Patty />     
                <ul className={navigationStyles.menu}>
                    {children}
                </ul>                
            </div>
        </nav>
    )
}

export default Navigation