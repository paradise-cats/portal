'use client'
import styled from 'styled-components'
import Image from 'next/image';

export const StyledLogo = styled(Image)`
  /* Adicione estilos conforme necessário */
  @media (min-width: 1200px) {
    position: absolute;
    left: 0;
    margin-left: 30px;
  };
`;
export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #FBFBFB;
  border: 0px 0px 8px 0px;
  box-shadow: 0px 2px 10px -3px #00000040;
  display: flex;
  flex-direction: row;
  gap: 66px;
  height: 80px;
  justify-content: center;
  width: 100%;
  @media (min-width: 1200px) {
    padding: 30px;
    position: relative;
  };
`

export const LogoutButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1.4px solid #83DEBD;
  display: flex;
  gap: 4px;
  height: 24px;
  padding: 4px 8px;
  width: 60px;
  @media (min-width: 1200px) {
    position: absolute;
    right: 0;
    margin-right: 30px;
  };
`
export const LogoutButtonSpan = styled.span `
  color: #83DEBD;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 16px;
`
