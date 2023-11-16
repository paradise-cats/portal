'use client'
import React, { useState } from 'react'
import {
  ContainerSearchBar,
  SearchBar,
  FilterButton,
  FilterDiv,
  SectionControlPanel,
  Span,
} from './styled'
import Image from 'next/image'
import { FilterDropDown } from './filter'
import { ISortType } from '@/interfaces/bill'

interface IControlPanelProps {
  setStoreStartDate: Function,
  storeStartDate: string,
  setStoreEndDate: Function,
  storeEndDate: string,
  setSearchText: Function,
  searchText: string,
  setSortType: Function,
  sortType: ISortType
}

export const ControlPanel = ({
  setStoreStartDate,
  storeStartDate,
  setStoreEndDate,
  storeEndDate,
  setSearchText,
  searchText,
  setSortType,
  sortType
}: IControlPanelProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  return (
    <SectionControlPanel>
      <Span>Painel de controle</Span>
      <ContainerSearchBar>
        <Image src="icons/search.svg" alt="" width={15} height={15} />
        <SearchBar
          type="text"
          placeholder="Procurar gasto..."
          value={searchText}
          onChange={(e)=>{setSearchText(e.target.value)}}
        />
      </ContainerSearchBar>
      <FilterDiv>
        {
          isFilterOpen ?
            <FilterDropDown
              onClick={()=>{setIsFilterOpen(false)}}
              setStoreStartDate={setStoreStartDate}
              storeStartDate={storeStartDate}
              setStoreEndDate={setStoreEndDate}
              storeEndDate={storeEndDate}
              setSortType={setSortType}
              sortType={sortType}
            /> :
            <FilterButton onClick={()=>{setIsFilterOpen(true)}}>
              <Image src="icons/filter_alt.svg" alt="" width={15} height={15} />
              Filter
            </FilterButton>
        }
      </FilterDiv>

    </SectionControlPanel>
  )
}

