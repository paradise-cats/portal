'use client'
import styled from 'styled-components'

export const Container = styled.form `
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 50%;
 gap: 16px;
`
export const TextBoxName = styled.label`
  align-items: center;
  justify-content: flex-end;
  color: #2890CA;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  height: 24px;
  letter-spacing: 0.05em;
  line-height: 16px;
  padding-left: 8px;
  gap: 8px;
  width: 100%;
`
export const TextBox = styled.input `
  border-radius: 4px;
  border: 0.5px solid #E6E6E6;
  box-shadow: 0px 2px 10px -3px #00000040;
  padding: 8px;
  width: 200px;
`
export const SubmitButton = styled.button `
  align-items: center;
  align-self: center;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1.4px solid #23BF87;
  display: flex;
  gap: 4px;
  height: 32px;
  justify-content: center;
  padding: 4px, 8px;
  width: 30%;
`
export const SubmitButtonSpan = styled.span `
  color: #23BF87;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
`
