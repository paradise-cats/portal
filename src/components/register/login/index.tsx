'use client'
import React from 'react'
import { Container, TextBoxName, TextBox, SubmitButton, SubmitButtonSpan } from './styled'

export const RegisterLogin = () => {
  return (
    <Container>
      <TextBoxName>
        Usuário
        <TextBox type='text' placeholder='username'/>
      </TextBoxName>
      <TextBoxName>
        Senha
        <TextBox type='text' placeholder='password'/>
      </TextBoxName>
      <SubmitButton>
        <SubmitButtonSpan>
           Login
        </SubmitButtonSpan>
      </SubmitButton>
    </Container>
  )
}
