import './CoreConcept.css'
import { CSSProperties, ReactNode } from 'react'

interface CoreConceptProps {
  title: string
  description: string
  image: string
  children?: ReactNode
  style?: CSSProperties
}

const CoreConcept = ({ title, description, image }: CoreConceptProps) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcept
