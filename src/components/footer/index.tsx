'use client'
import React from 'react'
import { FooterContainer, FooterButton } from './styled'
import Image from 'next/image'

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterButton>
          <Image src="icons/add.svg" alt="+" width={15} height={15} />
          Adicionar Gastos
      </FooterButton>
    </FooterContainer>
  )
}
