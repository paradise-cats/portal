'use client'
import React, {useState, useCallback} from 'react'
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
import { IBillData, IFormError } from '@/interfaces/bill'

export const RegisterForm = ({
  errorList,
  setErrorList,
  editingCard,
  Submit,
  Delete
}: {
  errorList: IFormError[]
  setErrorList: Function
  editingCard: IBillData | null
  Submit: (data: IBillData) => void | IFormError[]
  Delete: () => void
}) => {
  const [title, setTitle] = useState(editingCard?.title || '')
  const [price, setPrice] = useState(editingCard?.price || 0)
  const [amount, setAmount] = useState(editingCard?.amount || 0)
  const [date, setDate] = useState(editingCard?.date
    ? new Date(editingCard.date).toLocaleDateString('en-CA') // Use a localização desejada
    : ''
    )
  const [description, setDescription] = useState(editingCard?.description || '')
  const [photo, setPhoto] = useState(editingCard?.photo || '')

  const clearForm = () => {
    setTitle('');
    setPrice(0);
    setAmount(0);
    setDate('');
    setDescription('');
    setPhoto('');
  }

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const updatedCard = {
      title,
      price,
      amount,
      date,
      description,
      photo
    }
    const errors = Submit(updatedCard)
    if(!errors?.length) clearForm()
  }

  const onDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    Delete()
    clearForm()
  }

  const getErrors = useCallback((key: string): IFormError[] => {
    return errorList.filter(error => error.key === key)
  }, [errorList])


  return (
    <Form>
      <TextBoxName>
        Título
      </TextBoxName>
      <TextBox
        placeholder='Título do Gasto'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        hasError={getErrors("title").length > 0}
      />
      <TextBoxName>
        Valor total
      </TextBoxName>
      <TextBox
      placeholder='R$0,00'
      type='number'
      value={price}
      onChange={(e) =>setPrice(parseFloat(e.target.value))}
      hasError={getErrors("price").length > 0}
      />
      <TextBoxName>
        Quantidade
      </TextBoxName>
      <TextBox placeholder='0'
      type='number'
      value={amount}
      onChange={(e) =>setAmount(parseFloat(e.target.value))}
      hasError={getErrors("amount").length > 0}
      />
      <TextBoxName>
        Data
      </TextBoxName>
      <TextBox
      placeholder='DD/MM/AA'
      type='date'
      value={date}
      onChange={(e) => setDate(e.target.value)}
      hasError={getErrors("date").length > 0}
      />
      <TextBoxName>
        Descrição
      </TextBoxName>
      <DescriptionBox
      placeholder='Descrição do Gasto'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      />
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
