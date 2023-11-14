'use client'
import styled from 'styled-components'

export const CardBox = styled.section`
  @media (min-width: 1200px) {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  white-space: nowrap;
  }
`
export const CardContainer = styled.article`
  align-items: center;
  border-radius: 19px;
  box-shadow: 0px 2px 10px -3px #00000040;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 112px;
  justify-content: center;
  padding: 16px 8px;
  width: 280px;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    width: 100%;
    padding: 0px 0px 0px 20px;
    height: 50px;
    justify-content: flex-start;
  }
`
export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 73px;
  width: 134px;
  @media (min-width: 1200px) {
    flex-direction: row;
    height: 30px;
    width: 50%;
    align-items: center;
    gap: 16px;
  }
`
export const CardInfo = styled.div `
    @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 50%;
    align-items: center;
    gap: 16px;
  }
`
export const CardName = styled.p`
  color: #2890CA;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
`
export const CardDate = styled.span`
  color: #A3A3A3;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
`
export const CardText = styled.span`
  color: #6C6C6C;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
  @media (min-width: 1200px) {
    width: 25%;
  }
`
export const RightText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 72px;
  width: 83px;
  @media (min-width: 1200px) {
    flex-direction: row;
    height: 30px;
    width: 50%;
    padding: 0px 20px 0px 0px;
    justify-content: flex-end;
  }
`
export const CardPrice = styled.span`
  color: #6C6C6C;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 16px;
  @media (min-width: 1200px) {
    width: 15%;
  }
`
export const CardButton = styled.button`
  align-items: center;
  background-color: #23BF87;
  border-radius: 6px;
  color: #FBFBFB;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  gap: 8px;
  height: 24px;
  letter-spacing: 0.05em;
  line-height: 16px;
  padding: 4px 8px;
  width: 83px;
`
