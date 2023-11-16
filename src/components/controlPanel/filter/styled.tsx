'use client'
import styled from 'styled-components'

export const SearchType = styled.section `
  background-color: #ffffff;
  border-radius: 8px;
  color: #A3A3A3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 40vh;
  padding: 16px;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  align-items: flex-start;
  @media (min-width: 1200px) {
    height: 200px;
  };
`
export const Filter = styled.article `
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 1200px) {

  };
`
export const FilterButton = styled.button `
  align-items: center;
  background-color: #ffffff;
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;
  @media (min-width: 1200px) {
};
`
export const FilterButtonSpan = styled.span `
  color: #A3A3A3;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
`
export const Period = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 60px;
  width: 300px;
  @media (min-width: 1200px) {

  }
`
export const SearchName = styled.span `
  color: #6C6C6C;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;

`
export const SearchDate = styled.div `
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 24px;
  width: 243px;
`
export const SearchDateSpan = styled.span `
  color: #2890CA;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
`
export const SearchOrder = styled.article `
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 160px;
  justify-content: flex-end;
  width: 226px;
  @media (min-width: 1200px) {
    height: 100px;
    width: 300px;
  }
`
export const SearchTime = styled.div `
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 32px;
  width: 100%;

`
export const SearchTimeButton = styled.button `
  align-items: center;
  background-color: #ffffff;
  border-radius: 37px;
  border: 0.8px solid #2890CA;
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
`
export const SearchTimeSpan = styled.span `
  color: #2890CA;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
`
export const SearchAlphabetic = styled.div `
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 200px;
  justify-content: flex-end;
  width: 100%;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`
export const AscendingOrder = styled.button `
  background: #ffffff;
  border-radius: 37px;
  border: 0.8px solid #2890CA;
  height: 32px;
  padding: 8px;
  width: 60%;
  @media (min-width: 1200px) {
    height: 30px;
    width: 70%;
  }
`
export const SearchAlphabeticSpan = styled.span `
  color: #2890CA;
`
export const DescendingOrder = styled.button `
  background: #ffffff;
  border-radius: 37px;
  border: 0.8px solid #2890CA;
  height: 32px;
  padding: 8px;
  width: 60%;
  @media (min-width: 1200px) {
    height: 30px;
    width: 70%;
  }
`
export const SearchDateDiv = styled.div `

`
export const SearchDateInput = styled.input `

`
export const ListType = styled.div `
  display: flex;
  flex-direction: row;
`
