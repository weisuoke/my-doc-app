import React from 'react'
import cx from 'classnames'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={cx(styles.header, "bg-white flex justify-between items-center px-4")}>
      <div>Logo</div>
      <div>Menus</div>
    </div>
  )
}

export default Header