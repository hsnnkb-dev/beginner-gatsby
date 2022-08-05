import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>UX designer and web developer</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="corporate banner" style={{maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}
