import styled, { css } from 'styled-components';
import { device } from '../../styles/mediaQueries';

const wrapperModifiers = {
  normal: (theme) => css`
    width: 100%;
    max-width: 290px;
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border: 4px solid ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${theme.spacings.xxxsmall} 0;
    margin: 0 auto;
    border-radius: 30px;
    box-shadow: 0px 5px 2px ${theme.colors.gray};


    @media all and (${device.tablet}){
      padding: ${theme.spacings.xxsmall} 0;
    }

    :hover{
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    }

    span {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.sizes.xlarge};
      font-weight: 900;


    @media all and (${device.tablet}){
      font-size: ${theme.font.sizes.medium};
    }
    }

    &:disabled {
      border-color: #b3b3b3;
      opacity: 0.8;
      background-color: ${theme.colors.white};
      color: #b3b3b3;
    }

  `,
};

export const Wrapper = styled.button`
  ${({ theme, variant }) => css`
    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`;
