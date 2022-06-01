import React from 'react'
import styles from '../styles/css/navbarMenu.module.css'

const NavbarMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>Home</li>
      <li className={styles.item}>Services</li>
      <li className={styles.item}>Products</li>
      <li className={styles.item}>Chat</li>
      <li className={styles.item}>Profile</li>
    </ul>
  )
}

export default NavbarMenu
