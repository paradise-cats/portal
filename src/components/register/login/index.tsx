'use client';
import React from 'react';
import { Container, TextBoxName, TextBox, SubmitButton, SubmitButtonSpan } from './styled';

export const RegisterLogin = ({
  recording,
  setPassword,
  setUsername,
}: {
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  recording: () => void;
}) => {
  return (
    <Container onSubmit={recording}>
      <TextBoxName>
        Usuário
        <TextBox type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      </TextBoxName>
      <TextBoxName>
        Senha
        <TextBox type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      </TextBoxName>
      <SubmitButton type='submit'>
        <SubmitButtonSpan>
          Login
        </SubmitButtonSpan>
      </SubmitButton>
    </Container>
  );
};
