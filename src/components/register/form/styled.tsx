'use client'
import styled from 'styled-components'


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  width: 100%;
`
export const TextBoxName = styled.label`
  align-items: center;
  color: #2890CA;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  height: 24px;
  letter-spacing: 0.05em;
  line-height: 16px;
  padding-left: 8px;
  text-align: left;
`
export const TextBox = styled.input`
  border-radius: 4px;
  border: 0.5px solid #E6E6E6;
  box-shadow: 0px 2px 10px -3px #00000040;
  padding: 8px;
  width: 100%;
`
export const DescriptionBox = styled.textarea`
  border-radius: 4px;
  border: 0.5px solid #E6E6E6;
  box-shadow: 0px 2px 10px -3px #00000040;
  height: 100px;
  padding: 8px;
  width: 100%;
`
export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100px;
  width: 100%;
`
export const ImageButton = styled.button`
  align-items: center;
  align-self: center;
  background-color: #5EB8EA;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  height: 50%;
  justify-content: center;
  justify-self: center;
  padding: 4px 8px;
  width: 40%;
`
export const FormButton = styled.button`
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
  width: 60%;
  `
export const FormButtonSpan = styled.span`
  color: #23BF87;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
`
export const ImageButtonSpan = styled.span`
  color: #FBFBFB;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 16px;
  text-align: left;
`
