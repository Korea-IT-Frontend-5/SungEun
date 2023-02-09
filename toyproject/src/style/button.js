import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    color: ${({ theme }) => theme.PALETTE.fontColor};
    background: ${({ theme }) => theme.PALETTE.gray[100]};
  `,
  'primary-blue': css`
    color: ${({ theme }) => theme.PALETTE.fontColor};
    background: ${({ theme }) => theme.PALETTE.primary[200]};
  `,
  'primary-auto': css`
    color: ${({ theme }) => theme.PALETTE.fontColor};
    background: ${({ theme }) => theme.PALETTE.gray[100]};
  `,
};

const sizeCSS = {
  small: css``,
  medium: css``,
  full: css`
    font-size: 16px;
    width: 100%;
    line-height: 2.5;
    margin: 0 0 20px;

    @media only screen and (min-width: 840px) {
      width: calc(100% - 20px);
      margin: 0 0 20px 10px;
    }
  `,
  auto: css`
    padding: 5px 15px;
  `,
  etc: css`
    font-size: 11px;
    line-height: 1.2;
    padding: 7px 5px;
    border-radius: 5px;
  `,
}

export const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  :hover {
    opacity: 0.8;
  }
  & + & {
    margin-left: 5px;
  }
`;