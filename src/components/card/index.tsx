'use client'
import React from 'react'
import { CardContainer, LeftText, CardName, CardDate, CardText, RightText, CardPrice, CardButton } from './styled'
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
  return (
    <>
      <section>
      <CardContainer>
        <LeftText>
          <div>
            <CardName>{data.title}</CardName>
            <CardDate>{data.date}</CardDate>
          </div>
          <CardText>{data.description}</CardText>
        </LeftText>
        <RightText>
          <CardPrice>{data.price}</CardPrice>
          <CardButton onClick={() => setBillModal(true, data)} >
            <Image src="icons/edit.svg" alt="" width={15} height={15}/>
            Editar
          </CardButton>
        </RightText>
      </CardContainer>
    </section>
    </>
  )
}
