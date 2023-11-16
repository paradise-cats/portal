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
  SearchDateDiv,
  SearchDateInput,
  ListType
} from './styled'
import Image from 'next/image'
import { ISortType } from '@/interfaces/bill'


interface iFilterDropdownProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  setStoreStartDate: Function,
  storeStartDate: string,
  setStoreEndDate: Function,
  storeEndDate: string,
  setSortType: Function,
  sortType: ISortType
}

export const FilterDropDown = ( { onClick, setStoreStartDate, storeStartDate, setStoreEndDate, storeEndDate, setSortType, sortType }: iFilterDropdownProps) => {

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
      <ListType>
        <Period>
          <SearchName>Período</SearchName>
            <SearchDate>
              <SearchDateSpan>De</SearchDateSpan>
                <SearchDateDiv>
                  <SearchDateInput type="date" name="startDateOrder" id="" value={storeStartDate} onChange={(e) => setStoreStartDate(e.target.value)}/>
                </SearchDateDiv>
              <SearchDateSpan>até</SearchDateSpan>
                <SearchDateDiv>
                  <SearchDateInput type="date" name="endDateOrder" id="" value={storeEndDate} onChange={(e) => setStoreEndDate(e.target.value)}/>
                </SearchDateDiv>
            </SearchDate>
        </Period>
        <SearchOrder>
          <SearchName>Ordem de pesquisa</SearchName>
          <SearchTime>
            <SearchTimeButton onClick={()=> {
              sortType?.date === "oldest" ?
                setSortType((prev) => ({...prev, date: ''})) :
                setSortType((prev) => ({...prev, date: 'oldest'}))
            }}>
              <SearchTimeSpan>Mais Antigo</SearchTimeSpan>
            </SearchTimeButton>
            <SearchTimeButton onClick={()=> {
              sortType?.date === "newest" ?
                setSortType((prev) => ({...prev, date: ''})) :
                setSortType((prev) => ({...prev, date: 'newest'}))
            }}>
              <SearchTimeSpan>Mais Recente</SearchTimeSpan>
            </SearchTimeButton>
          </SearchTime>
          <SearchAlphabetic>
            <AscendingOrder>
              <SearchAlphabeticSpan onClick={()=> setSortType((prev) => ({...prev, name: 'a-z'}))}>A → Z Alfabética</SearchAlphabeticSpan>
            </AscendingOrder>
            <DescendingOrder>
              <SearchAlphabeticSpan onClick={()=> setSortType((prev) => ({...prev, name: 'z-a'}))}>Z → A Alfabética</SearchAlphabeticSpan>
            </DescendingOrder>
          </SearchAlphabetic>
        </SearchOrder>
      </ListType>
    </SearchType>
  )
}
