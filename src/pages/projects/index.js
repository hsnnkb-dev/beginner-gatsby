import React from 'react';
import Layout from '../../components/Layout';
import {Link, graphql} from 'gatsby';
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio Projects</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Email me at {contact}</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
