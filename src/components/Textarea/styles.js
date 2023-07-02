import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  background-color: ${({ theme }) => theme.COLORS.BLACK_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  border-radius: 10px;
  padding: 19px 16px;

  &::placeholder {
    color: ${({ theme }) => theme.GRAY_FONT};
  }
`;
