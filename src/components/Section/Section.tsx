import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  title: string
  children?: ReactNode
}
const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Section
