'use client'
import React from 'react'
import { Background, BackgroundContent } from './styled'

export const Register = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Background>
        <BackgroundContent>
          {children}
        </BackgroundContent>
      </Background>
    </>
  )
}
