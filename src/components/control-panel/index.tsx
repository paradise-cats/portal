'use client'
import React from 'react'
import { SectionControlPanel, Span, ContainerSearchBar, FilterButton, FilterDiv } from './styled'
import Image from 'next/image'
import { FilterDropDown } from './filter'

export const ControlPanel = () => {
  return (
    <SectionControlPanel>
          <Span>Painel de controle</Span>
          <ContainerSearchBar>
            <Image src="icons/search.svg" alt="" width={15} height={15} />
            <input type="text" placeholder="Procurar gasto..." />
          </ContainerSearchBar>
          <FilterDiv>
            {
              false ?
                (<FilterButton>
                  <Image src="icons/filter_alt.svg" alt="" width={15} height={15} />
                  Filter
                </FilterButton>) :
                <FilterDropDown />
            }
          </FilterDiv>

    </SectionControlPanel>
  )
}

