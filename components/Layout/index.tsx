import React from 'react'
import Header from "../Header";
import styles from './layout.module.css'

type ILayout = {
  children: React.ReactElement
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-center">
        <div className={styles.navbar}>NavBar</div>
        <div className="flex-1 p-6 bg-white">{children}</div>
      </div>
    </div>
  )
}

export default Layout