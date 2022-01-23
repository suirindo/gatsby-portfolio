import * as React from "react"
import { graphql, Link } from "gatsby"

const Blog = (props) => {
    return(
    <>
      <div>
        <div>
        <h1>Blog</h1>
        <p>開発のtipsをお届けします。</p>
            {props.data.allMarkdownRemark.edges.map((singleBlog, index) =>(
            <div key = {index}>
              <div>
                <h3>{singleBlog.node.frontmatter.title}</h3>
                <p>{singleBlog.node.frontmatter.excerpt}</p>
                <p>{singleBlog.node.frontmatter.date}</p>
                <Link to = {singleBlog.node.fields.slug}>Read More</Link>
              </div>
            </div>
            )
        )}
        </div>
      </div>
    </>
     )
 }    
export default Blog

export const query = graphql`
query BlogQuery {
  allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date
          excerpt
          id
          title
        }
      }
    }
  }
}
`