import React from "react"
import Layout from "../components/layout" 

const Home = ({ location }) => {
    return (
        <Layout pathname={location.pathname}>
            <h1>Oh,</h1>
            <h1>hello there.</h1>
        </Layout> 
    )
}

export default Home