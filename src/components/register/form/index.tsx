'use client'
import React, {useState} from 'react'
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
import { IBillData } from '@/interfaces/bill'

export const RegisterForm = ({
  editingCard,
  Submit,
  Delete
}: {
  editingCard: IBillData | null
  Submit: (data: IBillData) => void
  Delete: () => void
}) => {
  const [billId, setBillId] = useState(editingCard?.key || '')
  const [title, setTitle] = useState(editingCard?.title || '')
  const [price, setPrice] = useState(editingCard?.price || '')
  const [amount, setAmount] = useState(editingCard?.amount || '')
  const [date, setDate] = useState(editingCard?.date || '')
  const [description, setDescription] = useState(editingCard?.description || '')
  const [photo, setPhoto] = useState(editingCard?.photo || '')

  const clearForm = () => {
    setBillId('');
    setTitle('');
    setPrice('');
    setAmount('');
    setDate('');
    setDescription('');
    setPhoto('');
  }

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const updatedCard = {
      billId,
      title,
      price,
      amount,
      date,
      description,
      photo
    }
    Submit(updatedCard)
    clearForm()
  }

  const onDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    Delete()
    clearForm()
  }

  return (
    <Form>
      <TextBoxName>
          Título
        </TextBoxName>
      <TextBox placeholder='Título do Gasto' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextBoxName>
        Valor total
      </TextBoxName>
      <TextBox placeholder='R$0,00' type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
      <TextBoxName>
        Quantidade
      </TextBoxName>
      <TextBox placeholder='0' type='text' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <TextBoxName>
        Data
      </TextBoxName>
      <TextBox placeholder='DD/MM/AA' type='text' value={date} onChange={(e) => setDate(e.target.value)} />
      <TextBoxName>
        Descrição
      </TextBoxName>
      <DescriptionBox placeholder='Descrição do Gasto' value={description} onChange={(e) => setDescription(e.target.value)} />
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
      <FormButton onClick={onSubmit}>
        <FormButtonSpan>
          Concluir Cadastro
        </FormButtonSpan>
      </FormButton>
      <FormButton onClick={onDelete}>
        <FormButtonSpan>
          Delete
        </FormButtonSpan>
      </FormButton>
    </Form>
  )
}
