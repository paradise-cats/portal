'use client'
import React from 'react'
import {
  DescriptionBox,
  Form,
  FormButton,
  FormButtonSpan,
  ImageButton,
  ImageButtonSpan,
  PhotoDiv,
  TextBox,
  TextBoxName,
} from './styled'
import Image from 'next/image'

export const RegisterForm = () => {
  return (
    <Form>
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
