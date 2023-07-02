import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, isnew }) =>
    isnew ? "transparent" : theme.COLORS.BLACK_INPUT};

  border: ${({ theme, isnew }) =>
    isnew ? `1px dashed ${theme.COLORS.GRAY_FONT}` : "none"};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  > button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > input {
    padding: 16px;
    height: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
