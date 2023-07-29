import React from 'react'
import Container from '../../layout/container'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from './navbar.module.scss'
import classNames from 'classnames'
import { navbarList } from '../../helpers'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container className={styles.navbar__container}>
                <Link to={"/"} className={styles.navbar__logo}>
                    <img src={logo} alt="logo" />
                </Link>
                <div className={styles.navbar__list}>
                    {navbarList.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive
                                ? classNames(styles.navbar__link, styles.navbar__link_active)
                                : styles.navbar__link
                        }>{link.name}</NavLink>
                    ))}
                </div>
            </Container>
        </nav>
    )
}

export default Navbar