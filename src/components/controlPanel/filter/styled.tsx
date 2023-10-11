'use client'
import styled from 'styled-components'
// SearchOrder, Periodo, SearchType OrdemDePesquisa, De, Ate, MaisAntigo, MaisRecente, OrdemAlfabeticaCrescente, OrdemAlfabeticaDecrescente
export const SearchType = styled.section `
  width: 100%;
  height: 40vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background-color: #ffffff;
  z-index: 1;
  color: #A3A3A3;
  padding: 16px;
  position: absolute;
  top: 0;
`
export const Filter = styled.article `
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const FilterButton = styled.button `
  padding: 8px 0px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 90%;
  height: 16px;
  gap: 10px;

`
export const FilterButtonSpan = styled.span `
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #A3A3A3;
`
export const Period = styled.div `
  display: flex;
  flex-direction: column;
  width: 243px;
  height: 56px;
  gap: 16px;
`
export const SearchName = styled.span `
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #6C6C6C;

`
export const SearchDate = styled.div `
  display: flex;
  flex-direction: row;
  width: 243px;
  height: 24px;
  gap: 8px;

`
export const SearchDateSpan = styled.span `
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #2890CA;
`
export const SearchOrder = styled.article `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 226px;
  height: 160px;
  gap: 16px;
`
export const SearchTime = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 32px;
  gap: 8px;

`
export const SearchTimeButton = styled.button `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 37px;
  border: 0.8px solid #2890CA;
  gap: 8px;
  background-color: #ffffff;
`
export const SearchTimeSpan = styled.span `
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #2890CA;
`
export const SearchAlphabetic = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  gap: 8px;
`
export const AscendingOrder = styled.button `
  background: #ffffff;
  width: 60%;
  height: 32px;
  padding: 8px;
  border-radius: 37px;
  border: 0.8px solid #2890CA;
`
export const SearchAlphabeticSpan = styled.span `
  color: #2890CA;
`
export const DescendingOrder = styled.button `
  background: #ffffff;
  width: 60%;
  height: 32px;
  padding: 8px;
  border-radius: 37px;
  border: 0.8px solid #2890CA;
`

