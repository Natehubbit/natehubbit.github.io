import React from 'react'
import { v4 as uuid } from 'uuid'
import Col from 'react-bootstrap/Col'
import UtilService from '../../services/UtilService'
import { PROJECTS } from '../../common/constants'
import Navbar from '../../components/Navbar'
import ProjectCard from '../../components/ProjectCard'
import styles from './style.module.scss'
import { useHistory } from 'react-router'

const Projects = () => {
  const { push } = useHistory()
  const onViewCode = (v:string) => {
    if (v) {
      UtilService.openNewTab(v)
    }
  }
  const onViewProject = (param:string) => {
    push(`project/${param}`)
  }
  return (
    <div className={styles['container']}>
      <Navbar />
      <div className={styles['body']}>
        <Col md={{span:10,offset:1}} lg={{span:8,offset:2}} xs={12}>
          {PROJECTS.map(p=>(
            <ProjectCard 
              imageUrl={p.gallery[0]||''}
              key={uuid()}
              header={p.label}
              stack={p.stack}
              summary={p.summary}
              onViewCode={()=>onViewCode(p.code)}
              onViewProject={()=>onViewProject(p.label)}
            />
          ))}
        </Col>
      </div>
    </div>
  )
}

export default Projects
