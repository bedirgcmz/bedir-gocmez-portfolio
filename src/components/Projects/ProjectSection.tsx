import React from 'react'
import ProudOfProjects from './ProudOfProjects/ProudOfProject'
import SchoolProjects from './SchoolProject/SchoolProjects'
import { useAnimation } from 'framer-motion';


const ProjectSection = () => {
  const controls = useAnimation();
  return (
    <section>
        <ProudOfProjects />
        <SchoolProjects controls={controls} />
    </section>
  )
}

export default ProjectSection