'use client'
import styled from 'styled-components'

export const SectionControlPanel = styled.section`
  width: 360px;
  height: 160px;
  padding: 10px 40px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #2890CA;
  align-self: flex-start;
`

export const ContainerSearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 32px;
  padding: 8px 9px;
  border-radius: 84px;
  gap: 5px;
  background-color: white;
  box-shadow: 0px 2px 10px -3px #00000040;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.05em;
  color: #B9B9B9;
`
export const FilterButton = styled.button `
  width: 89px;
  height: 32px;
  padding: 8px 13px;
  border-radius: 84px;
  gap: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px -3px #00000040;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #A3A3A3;
`
export const FilterDiv = styled.div `
  display: flex;
  width: 100%;
  height: 300px;
  z-index: 1;
  position: relative;
`
