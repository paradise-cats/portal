'use client'
import styled from 'styled-components'
import Image from 'next/image'

export const Background = styled.div `
  align-items: center;
  background-color: #59595966;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
`

export const BackgroundContent = styled.div `
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  height: 600px;
  opacity: 1;
  padding: 16px;
  position: relative;
  width: 300px;
`

export const StyledImage = styled(Image)`
  position: absolute;
  right: 10px;
  top: 10px;
`

