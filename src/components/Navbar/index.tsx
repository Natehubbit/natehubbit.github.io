import React from 'react'
import styles from './style.module.scss'
import {NAV_LINKS} from '../../common/constants'
import cn from 'classnames'

import logo from '../../assets/logo.svg'
import mobileLogo from '../../assets/logo-mobile.svg'

const Navbar = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        <a href='/'>
          <img src={logo} alt='logo' className={cn('d-none','d-md-flex')} />
        </a>
        <a href='/'>
          <img src={mobileLogo} className={cn('d-md-none')} alt='logo' />
        </a>
      </div>
      <div className={cn(styles['social'],'d-none d-md-flex')}>
        {NAV_LINKS.map(s=>{
          return <a key={s.link} href={s.link} target='_blank' rel="noreferrer">
            <img src={s.icon} alt={s.alt} />
          </a>
        })}
      </div>
      <div className={cn(styles['social-mobile'],'d-md-none')}>
        {NAV_LINKS.map(s=>{
          return <a key={s.link} href={s.link} target='_blank' rel="noreferrer">
            <img src={s.icon} alt={s.alt} />
          </a>
        })}
      </div>
    </div>
  )
}

export default Navbar
