'use client'
import React from 'react'
import { Background, BackgroundContent, StyledImage } from './styled'

export const Register = ({
  setModalRoute,
  children,
}: {
  children: React.ReactNode
  setModalRoute: Function
}) => {
  return (
    <>
      <Background>
        <BackgroundContent>
          <StyledImage src="icons/close.svg" alt="" width={24} height={24} onClick={()=> setModalRoute('')}/>
          {children}
        </BackgroundContent>
      </Background>
    </>
  )
}
