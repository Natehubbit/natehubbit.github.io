import React from 'react'
import cn from 'classnames'
import projectImg from '../../assets/back.webp'
import Button from '../Button'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

interface IProjectCard {
  imageUrl: string;
  header: string;
  summary: string;
  stack: any[];
  onViewCode: () => void;
  onViewProject: () => void;
}

const ProjectCard: React.FC<IProjectCard> = ({
  header,
  summary,
  stack,
  imageUrl,
  onViewCode,
  onViewProject
}) => {
  return (
    <>
      <div className={cn(styles['container'],'d-none d-md-flex')}>
        <div className={styles['img']} style={{
          background: `url(${imageUrl||projectImg})`
        }} />
        <div className={styles['body']}>
          <div className={styles['content']}>
            <button className={styles['headerLink']} onClick={onViewProject}>
              <h5>{header}</h5>
            </button>
            <p className={styles['summary']}>{summary}</p>
            <div className={styles['stack']}>
              {stack&&stack?.map(s=>(<img src={s} alt={s} className={styles['stack-item']} />))}
            </div>
          </div>
          <div className={styles['foot']}>
            <Button onClick={onViewCode} label='View code'  />
            <Button onClick={onViewProject} type='outline' label='View project' />
          </div>
        </div>
      </div>
      <div className={cn(styles['mobile-container'],'d-md-none')}>
        <div
          className={cn(styles['img'])}
          style={{background:`url(${imageUrl||projectImg})`}}
        />
        <div className={cn(styles['content'])}>
          <h5>{header}</h5>
          <p className={styles['summary']}>{summary}</p>
          <div className={styles['stack']}>
            {stack&&stack?.map(s=>(<img src={s} alt={s} className={styles['stack-item']} />))}
          </div>
          <div className={styles['foot']}>
            <Button onClick={onViewCode} label='View code'  />
            <Button onClick={onViewProject} type='outline' label='View project' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
