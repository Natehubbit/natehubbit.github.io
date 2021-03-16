import React from 'react'
import styles from './style.module.scss'
import Navbar from '../../components/Navbar'
import { Airplay, Download } from 'react-feather'
import cn from 'classnames'
import stack from '../../assets/stackback2.png'
import stackBack from '../../assets/stack-mobile2.png'
import { Link } from 'react-router-dom'
import UtilService from '../../services/UtilService'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Navbar />
      <div className={styles['body']}>
        <div className={styles['menu']}> 
          <nav>
            <li>
              <Link to='/projects'>
              <h4>
                <Airplay className={styles.icon} />
                My Projects
              </h4>
              </Link>
            </li>
            <li onClick={()=>UtilService.downloadFile('/CV.pdf')}>
              <h4>
                <Download className={styles.icon} />
                My Resume
              </h4>
            </li>
          </nav>
        </div>
        <div className={cn(styles['stack'],'d-none d-lg-flex')}>
          <img src={stack} alt='stack' />
        </div>
        <div className={cn(styles['stack-mobile'],'d-lg-none')}>
          <img src={stackBack} alt='stack-back-mobile' />
        </div>
      </div>
    </div>
  )
}

export default Home
