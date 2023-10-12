'use client'
import React, { useState } from 'react'
import { HeaderContainer, LogoutButton, LogoutButtonSpan } from './styled'
import Image from 'next/image'

interface iHeaderProps {
  setModalRoute: Function
}


export const Header = ({setModalRoute}: iHeaderProps) => {
  const [isOnline, setIsOnline] = useState(false)
  return (
    <HeaderContainer>
      <Image src="icons/logo.svg" alt="Cats Paradise's logo" width={150} height={50} />
      <LogoutButton  onClick={()=>{
        setModalRoute('login')
        setIsOnline(!isOnline)
        }} >
        {
          !!isOnline ?
          <LogoutButtonSpan>
            Entrar
          </LogoutButtonSpan>
          :
          <LogoutButtonSpan>
            Sair
          </LogoutButtonSpan>
        }
      <Image src="icons/logout icon.svg"  alt="Logout button" width={15} height={15}/>
      </LogoutButton>
    </HeaderContainer>
  )
}
