import React from 'react'
import ProudOfProjects from './ProudOfProjects/ProudOfProject'
import SchoolProjects from './SchoolProject/SchoolProjects'

const ProjectSection = () => {
  return (
    <section>
        <ProudOfProjects />
        <SchoolProjects controls={undefined} />
    </section>
  )
}

export default ProjectSection