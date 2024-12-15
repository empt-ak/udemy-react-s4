import { ReactNode } from 'react'

export interface TabsProps {
  children?: ReactNode
  buttons?: ReactNode
}

const Tabs = ({ children, buttons }: TabsProps) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  )
}

export default Tabs
