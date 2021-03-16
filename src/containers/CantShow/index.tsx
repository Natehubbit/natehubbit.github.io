import React from 'react'
import arrowLeft from '../../assets/arrowLeft.svg'
import Navbar from '../../components/Navbar'
import sadIcon from '../../assets/sad.gif'
import styles from './style.module.scss'
import { useHistory } from 'react-router'

interface ICantShowProps {
  url?: string;
}

const CantShow: React.FC<ICantShowProps> = ({
  url
}) => {
  const { goBack } = useHistory()
  const onGoBack = () => {
    goBack()
  }
  return (
    <div className={styles['container']}>
      <Navbar />
      <div className={styles['body']}>
        <img className={styles['img']} src={sadIcon} alt='sad' />
        <p>
          As the nature of this work is confidential,
          i wont be able to show any code on this.<br/>
          However, you can ping me and  i will be 
          able to provide mored details about what i did.<br />
          {url&&<a href={url}>visit project</a>}
        </p>
        <div onClick={onGoBack} role='button' className={styles['goBack']}>
          <img src={arrowLeft} alt='left icon' />
          Go back
        </div>
      </div>
    </div>
  )
}

export default CantShow
