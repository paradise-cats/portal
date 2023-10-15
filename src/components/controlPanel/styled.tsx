'use client'
import styled from 'styled-components'

export const SectionControlPanel = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 160px;
  justify-content: center;
  padding: 10px 40px;
  width: 360px;
`
export const Span = styled.span`
  align-self: flex-start;
  color: #2890CA;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 16px;
`

export const ContainerSearchBar = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 84px;
  box-shadow: 0px 2px 10px -3px #00000040;
  color: #B9B9B9;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  gap: 5px;
  height: 32px;
  letter-spacing: 0.05em;
  line-height: 14px;
  padding: 8px 9px;
  width: 280px;
`
export const FilterButton = styled.button `
  align-items: center;
  background-color: #ffffff;
  border-radius: 84px;
  box-shadow: 0px 2px 10px -3px #00000040;
  color: #A3A3A3;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  gap: 10px;
  height: 32px;
  letter-spacing: 0.05em;
  line-height: 16px;
  padding: 8px 13px;
  width: 89px;
`
export const FilterDiv = styled.div `
  display: flex;
  height: 300px;
  position: relative;
  width: 100%;
  z-index: 1;
`
