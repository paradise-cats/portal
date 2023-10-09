'use client'
import React from 'react'
import { HeaderContainer, LogoutButton } from './styled'
import Image from 'next/image'

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src="icons/logo.svg" alt="Cats Paradise's logo" width={150} height={50} />
      <LogoutButton>
        Sair
        <Image src="icons/logout icon.svg"  alt="Logout button" width={15} height={15} />
      </LogoutButton>
    </HeaderContainer>
  )
}
