import { PROJECTS_ITEMS } from '@/constants/general'
import { ProjectItem } from '@/app/_sections/projects-section/_components/project-item'

export function ProjectList() { 
  const MAPPED_PROJECTS = PROJECTS_ITEMS.map((item, index) => (
    <ProjectItem key={index} {...item} />
  ))

  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {MAPPED_PROJECTS}
    </ul>
  )
}
