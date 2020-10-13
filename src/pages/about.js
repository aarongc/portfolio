import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
    const companies = data.site.siteMetadata.companies.map(({ company }) => {
            if (company !== 'inspire team') 
                return <p key={company}>{company}</p>
        }       
    )

    return (
        <Layout>
            <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
            <h1>{data.site.siteMetadata.title} </h1>
            <p>{data.site.siteMetadata.description}</p>
            {companies}
        </Layout>
    )
}

export const query = graphql `
    query {
        site {
            siteMetadata {
                title
                description
                companies { 
                    company
                }
            }
        }
    }
`

export default About