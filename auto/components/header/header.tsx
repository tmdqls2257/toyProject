import React, { useEffect, useState } from 'react'
import styles from '../styles/css/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarMenu from './navbarMenu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchForm from './searchForm'

const Header = () => {
  const [click, setClick] = useState(false)

  const barClick = () => {
    click ? setClick(false) : setClick(true)
  }

  return (
    <>
      <header className={styles.navbar}>
        {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
        <div className={styles.container}>
          <div className={styles.logo}></div>
          <SearchForm suggestions={['1234', '2123', '3123123', '4']} />
          <div className={styles.btnContainer}>
            <FontAwesomeIcon
              className={styles.hamburger}
              onClick={barClick}
              icon={faBars}
            />
          </div>
        </div>

        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>

        {click && <NavbarMenu />}
      </header>
    </>
  )
}

export default Header
