'use client'
import React from 'react'
import {
  AscendingOrder,
  DescendingOrder,
  Filter,
  FilterButton,
  FilterButtonSpan,
  Period,
  SearchAlphabetic,
  SearchAlphabeticSpan,
  SearchDate,
  SearchDateSpan,
  SearchName,
  SearchOrder,
  SearchTime,
  SearchTimeButton,
  SearchTimeSpan,
  SearchType,
} from './styled'
import Image from 'next/image'

interface iFilterDropdownProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const FilterDropDown = ({ onClick }: iFilterDropdownProps) => {
  return (
    <SearchType>
      <Filter>
        <FilterButton onClick={onClick}>
          <Image src="icons/filter_alt.svg" alt="" width={16} height={16} />
          <FilterButtonSpan>
            Filtro
          </FilterButtonSpan>
        </FilterButton>
        <Image src="icons/keyboard_control_key.svg" alt="" width={24} height={24} />
      </Filter>

      <Period>
        <SearchName>Período</SearchName>
          <SearchDate>
            <SearchDateSpan>De</SearchDateSpan>
              <div></div>
            <SearchDateSpan>até</SearchDateSpan>
              <div></div>
          </SearchDate>
      </Period>
      <SearchOrder>
        <SearchName>Ordem de pesquisa</SearchName>
        <SearchTime>
          <SearchTimeButton>
            <SearchTimeSpan>Mais Antigo</SearchTimeSpan>
          </SearchTimeButton>
          <SearchTimeButton>
            <SearchTimeSpan>Mais Recente</SearchTimeSpan>
          </SearchTimeButton>
        </SearchTime>
        <SearchAlphabetic>
          <AscendingOrder>
            <SearchAlphabeticSpan>A → Z Alfabética</SearchAlphabeticSpan>
          </AscendingOrder>
          <DescendingOrder>
            <SearchAlphabeticSpan>Z → A Alfabética</SearchAlphabeticSpan>
          </DescendingOrder>
        </SearchAlphabetic>
      </SearchOrder>
    </SearchType>
  )
}
