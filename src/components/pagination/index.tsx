'use client'
import React from 'react'
import { PaginationContainer, PaginationNumber } from './styled'
import Image from 'next/image'

export const Pagination = () => {
  return (
    <PaginationContainer>
      <a href="#">
        <Image src="icons/keyboard_double_arrow_left.svg" alt="" width={15} height={15} />
      </a>
      <PaginationNumber href="index.html">
        1
      </PaginationNumber>
      <a href="#">
        <Image src="icons/keyboard_double_arrow_right.svg" alt="" width={15} height={15} />
      </a>
    </PaginationContainer>
  )
}
