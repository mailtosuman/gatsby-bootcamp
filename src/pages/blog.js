import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const blogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Layout>
        <h1>Blogs</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default blogPage
