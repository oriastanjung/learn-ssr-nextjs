import React from 'react'
import FooterComponent from '../FooterComponent'
import HeadComponent from '../HeadComponent'
import styles from '../../styles/Home.module.css'
import Link from "next/link";


function Layout(props) {
  return (
    <div className={styles.container}>
      <HeadComponent title = {props.title}/>
      <nav style={{display : "flex", gap : "3rem", justifyContent : "center", alignItems : "center"}}>
          <Link href={'/'}>
            <a> Home </a>
          </Link>
          <Link href={'/users'}>
            <a> Users </a>
          </Link>
      </nav>
      <main>
        {props.children}
      </main>

      <FooterComponent />
    </div>
  )
}

export default Layout