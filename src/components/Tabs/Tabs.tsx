import { ReactNode } from 'react'

export interface TabsProps {
  children?: ReactNode
  buttons?: ReactNode
  buttonsContainer: string
}

const Tabs = ({ buttonsContainer, children, buttons }: TabsProps) => {
  const ButtonsContainer = buttonsContainer
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}

export default Tabs
