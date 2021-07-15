import styled, { css } from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    @media all and (${device.tablet}) {
      padding-top: ${theme.spacings.larger};
    }
  `}
`;

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    max-width: ${theme.width.max};
    width: 100%;
    border: none;
    padding: ${theme.spacings.larger} ${theme.spacings.xxxlarge};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media all and (${device.mobileM}) {
      max-height: ${theme.height.max};
      border-radius: 8px;
      padding: ${theme.spacings.larger} ${theme.spacings.xxxlarge};
    }
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    width: 110px;
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.large} 0;

    @media all and (${device.tablet}) {
      padding: ${theme.spacings.xxxlarge} 0;
    }
  `}
`;

export const PasswordInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
  `}
`;
export const EyeIcon = styled.div`
  ${({ theme }) => css`
    width: 35px;
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.font.sizes.small};
    padding-bottom: ${theme.spacings.xsmall};
    text-align: center;
  `}
`;

export const WelcomeWrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxxlarger};
    color: ${theme.colors.primary};

    p {
      font-size: ${theme.font.sizes.larger};
      font-weight: 700;
      margin-bottom: ${theme.spacings.xxlarge};
      font-family: ${theme.font.primary};
      text-align: center;
      text-transform: uppercase;
    }

    span {
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.secondary};
      font-weight: 400;
      color: #707070;
    }
  `}
`;

export const SpinnerWrapper = styled.section`
  ${({ theme }) => css`
    height: ${theme.height.default};
    display: flex;
    z-index: 20;
    background-color: #ffff;
    height: 100vh;
    border: 1px solid black;
    width: 100vw;
    position: absolute;
    align-items: center;
    justify-content: center;
  `}
`;
