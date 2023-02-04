import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    background: ${({ theme }) => theme.PALETTE.primary[100]};
    color: ${({ theme }) => theme.PALETTE.fontColor['white']};
  `,

  'primary-green': css`
    background: ${({ theme }) => theme.PALETTE.primary[200]};
    color: ${({ theme }) => theme.PALETTE.fontColor['white']};
  `,

  'primary-txt': css`
    color: ${({ theme }) => theme.PALETTE.fontColor['blue']};
    text-decoration: none;
  `,
}
const sizeCSS = {
  auto: css`
    height: 48px;
    padding: 0 16px;
    font-size: ${({ theme }) => theme.FONT_SIZE.fs17};
  `,
  full: css`
    width: 100%;
    height: 48px;
    padding: 0 16px;
    font-size: ${({ theme }) => theme.FONT_SIZE.fs20};
  `,
}

export const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: 0;
  margin: 6px 0 0;
  font-weight: bold;
  border-radius: 6px;
  :hover {
    background-color: '#365899';
  }
`;

export const A = styled.a`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  color: #1877f2;
`;