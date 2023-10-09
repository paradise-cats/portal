'use client'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width:100%;
  height:80px;
  box-shadow: 0px -3px 10px -3px #00000040;
  background-color: #FBFBFB;
`
export const FooterButton = styled.button`
  width: 166px;
  height: 32px;
  border-radius: 6px;
  background-color: #23BF87;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #FBFBFB;
`
