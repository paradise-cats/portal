'use client'
import React from 'react'
import { Background, BackgroundContent, StyledImage } from './styled'


export const Register = ({
  closeModal,
  children,
}: {
  children: React.ReactNode
  closeModal: Function
}) => {
  return (
    <>
      <Background>
        <BackgroundContent>
          <StyledImage src="icons/close.svg" alt="" width={24} height={24} onClick={()=> closeModal()}/>
          {children}
        </BackgroundContent>
      </Background>
    </>
  )
}
