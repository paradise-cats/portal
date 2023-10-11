'use client'
import React from 'react'
import { Form, CloseForm, StyledImage, TextBoxName, TextBox, DescriptionBox, PhotoDiv, FormButtonSpan, ImageButton, ImageButtonSpan, FormButton } from './styled'
import Image from 'next/image'
interface iFooterProps {
  closeModal: Function
}
export const RegisterForm = ({closeModal}: iFooterProps) => {
  return (
    <Form>
      <CloseForm>
        <StyledImage src="icons/close.svg" alt="" width={24} height={24} onClick={()=> closeModal()}/>
      </CloseForm>
      <TextBoxName>
          Título
        </TextBoxName>
      <TextBox placeholder='Título do Gasto' type='text' />
      <TextBoxName>
        Valor total
      </TextBoxName>
      <TextBox placeholder='R$0,00' type='text' />
      <TextBoxName>
        Quantidade
      </TextBoxName>
      <TextBox placeholder='0' type='text' />
      <TextBoxName>
        Data
      </TextBoxName>
      <TextBox placeholder='DD/MM/AA' type='text' />
      <TextBoxName>
        Descrição
      </TextBoxName>
      <DescriptionBox placeholder='Descrição do Gasto' />
      <PhotoDiv>
      <TextBoxName>
        Foto
      </TextBoxName>
      <ImageButton>
        <Image src='icons/add_photo_alternate.svg' alt='' width={16}  height={16} />
        <ImageButtonSpan>
          Adicionar imagem
        </ImageButtonSpan>
      </ImageButton>
      </PhotoDiv>
      <FormButton>
        <FormButtonSpan>
          Concluir Cadastro
        </FormButtonSpan>
      </FormButton>
    </Form>
  )
}
