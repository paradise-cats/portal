'use client'
import React from 'react'
import { CardContainer, LeftText, CardName, CardDate, CardText, RightText, CardPrice, CardButton } from './styled'
import Image from 'next/image'

export const Card = () => {
  return (
    <section>
        <CardContainer>
          <LeftText>
            <div>
              <CardName>Saca de Ração</CardName>
              <CardDate>Sept 19 23</CardDate>
            </div>
            <CardText>gasto mensal com ração para gato co...</CardText>
          </LeftText>
          <RightText>
            <CardPrice>R$ 100,00</CardPrice>
            <CardButton>
              <Image src="icons/edit.svg" alt="" width={15} height={15} />
              Editar
            </CardButton>
          </RightText>
      </CardContainer>
    </section>
  )
}
