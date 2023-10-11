'use client'
import React, { useState } from 'react'
import { SectionControlPanel, Span, ContainerSearchBar, FilterButton, FilterDiv } from './styled'
import Image from 'next/image'
import { FilterDropDown } from './filter'

export const ControlPanel = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchText, setSearchText] = useState("")
  return (
    <SectionControlPanel>
          <Span>Painel de controle</Span>
          <ContainerSearchBar>
            <Image src="icons/search.svg" alt="" width={15} height={15} />
            <input
              type="text"
              placeholder="Procurar gasto..."
              value={searchText}
              onChange={(e)=>{setSearchText(e.target.value)}}
            />
          </ContainerSearchBar>
          <FilterDiv>
            {
              isFilterOpen ?
                <FilterDropDown onClick={()=>{setIsFilterOpen(false)}} /> :
                <FilterButton onClick={()=>{setIsFilterOpen(true)}}>
                  <Image src="icons/filter_alt.svg" alt="" width={15} height={15} />
                  Filter
                </FilterButton>
            }
          </FilterDiv>

    </SectionControlPanel>
  )
}

