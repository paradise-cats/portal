'use client'
import styled from 'styled-components'

export const CardContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 112px;
  padding: 16px 8px;
  border-radius: 19px;
  gap: 10px;
  box-shadow: 0px 2px 10px -3px #00000040;
`
export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  width: 134px;
  height: 73px;
  gap: 8px;

`
export const CardName = styled.p`
  color: #2890CA;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
`
export const CardDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #A3A3A3;
`
export const CardText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #6C6C6C;
`
export const RightText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 83px;
  height: 72px;
  gap: 32px;
`
export const CardPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #6C6C6C;
`
export const CardButton = styled.button`
  width: 83px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 6px;
  gap: 8px;
  display: flex;
  align-items: center;
  background-color: #23BF87;
  color: #FBFBFB;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
`
