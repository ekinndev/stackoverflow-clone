import React from 'react'

import styles from './navigation.module.css'

import { useRouter } from 'next/router'

import NavItem from './NavItem/nav-item'
import { World } from '../Icons'

function Navigation() {
  let router = useRouter()

  //For storybook
  if (router == null) {
    router = {
      pathname: '/'
    }
  }

  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <World />
        <span>Stack Overflow</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <span>Tags</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
