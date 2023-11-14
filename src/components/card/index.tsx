'use client'
import React from 'react'
import {
  CardContainer,
  LeftText,
  CardName,
  CardDate,
  CardText,
  RightText,
  CardPrice,
  CardButton,
  CardBox,
  CardInfo
} from './styled'
import Image from 'next/image'
import { IBillData } from '@/interfaces/bill'
interface ICardProps {
  data: IBillData
  setBillModal: Function
}

export const Card = ({
    data,
    setBillModal
  }: ICardProps) => {
    function formatedMoney(value: number): string {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    }

    function formattedDate(date: string | number): string {
      const timestamp = typeof date === 'string' ? parseInt(date, 10) : date;

      if (isNaN(timestamp)) {
        return 'Data inválida';
      }

      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(timestamp);
    }

  return (
    <CardBox>
      <CardContainer>
        <LeftText>
          <CardInfo>
            <CardName>{data.title}</CardName>
            <CardDate>{formattedDate(data.date)}</CardDate>
          </CardInfo>
          <CardText>{data.description}</CardText>
        </LeftText>
        <RightText>
          <CardPrice>{formatedMoney(data.price)}</CardPrice>
          <CardButton onClick={() => setBillModal(true, data)} >
            <Image src="icons/edit.svg" alt="" width={15} height={15}/>
            Editar
          </CardButton>
        </RightText>
      </CardContainer>
    </CardBox>
  )
}
