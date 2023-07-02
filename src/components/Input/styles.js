import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BLACK_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_FONT};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  > input {
    height: 56px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      background-color: ${({ theme }) => theme.COLORS.GRAY_FONT};
    }
  }
  > svg {
    margin-left: 16px;
    margin-right: 16px;
  }
`;
