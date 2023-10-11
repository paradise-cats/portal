'use client'
import React from 'react'
import { FooterContainer, FooterButton } from './styled'
import Image from 'next/image'

interface iFooterProps {
  openModal: Function
}
export const Footer = ({openModal}: iFooterProps) => {
  return (
    <FooterContainer>
        <FooterButton onClick={()=>openModal()}>
          <Image src="icons/add.svg" alt="+" width={15} height={15} />
          Adicionar Gastos
      </FooterButton>
    </FooterContainer>
  )
}
