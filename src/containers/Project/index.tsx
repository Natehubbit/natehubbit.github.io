import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Navbar from '../../components/Navbar'
import Col from 'react-bootstrap/Col'
import { useRouteMatch } from 'react-router'
import { PROJECTS } from '../../common/constants'
import Carousel from 'react-bootstrap/Carousel'
import cn from 'classnames'
import {Globe,Code} from 'react-feather'

const Project = () => {
  const { params: { id } }:{params:{id:string}} = useRouteMatch()
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    const d = PROJECTS.filter(d=>d.label===id)[0]||null
    setData(d)
  }, [id])
  if (!data)return null
  return (
    <div className={styles['container']}>
      <Navbar />
      <div className={styles['body']}>
        <Carousel fade indicators={false} className={cn("d-block w-100",styles['carousel'])}>
          {data.gallery.map((img:any)=>
            <Carousel.Item className={styles['carouselItem']}>
              <img src={img} alt={img} />
            </Carousel.Item>)}
        </Carousel>
        <Col lg={{span:6,offset:3}}>
        <article className={styles['article']}>
          <h3>{data.label}</h3>
          {data.stack.map((s:string)=>
            <img src={s} alt={s} className={styles['stack']} />)}
          <br/>
          <div className={styles['links']}>
            {data?.project&&
              <a href={data.project} className={styles['hyperlink']} target='_blank' rel="noreferrer">
                <Globe className={styles['icon']} size={15}/> visit project
              </a>}
            {data.code&&
              <a href={data.code} className={styles['hyperlink']} target='_blank' rel="noreferrer">
                <Code className={styles['icon']} size={15} /> view code
              </a>}
          </div>
          {data.article}
        </article>
        </Col>
      </div>
    </div>
  )
}

export default Project
