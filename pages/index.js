import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/homepage.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={styles.homeContainer}>
        <img src="/images/jessandhawk.jpg" alt="a very cute pup" className={styles.profileImage} />
        <div className={utilStyles.break}></div>
        <p>Hey! I'm Jess. I am a software engineer. I live with my dog and my partner in Brooklyn.</p>
        </div>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
