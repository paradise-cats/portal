'use client'
import React from 'react'
import { FooterContainer, FooterButton } from './styled'
import Image from 'next/image'

interface iFooterProps {
  setModalRoute: Function
}
export const Footer = ({setModalRoute}: iFooterProps) => {
  return (
    <FooterContainer>
        <FooterButton onClick={()=>setModalRoute('registerForm')}>
          <Image src="icons/add.svg" alt="+" width={15} height={15} />
          Adicionar Gastos
      </FooterButton>
    </FooterContainer>
  )
}
