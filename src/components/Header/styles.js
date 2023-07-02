import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: grid;
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LINE_COlOR};
  display: flex;
  align-items: center;
  gap: 64px;
  padding: 24px 123px;
  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const InputContainer = styled.div`
  width: 630px;
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
    padding: 19px 24px;

    &:placeholder {
      background-color: ${({ theme }) => theme.COLORS.GRAY_FONT};
    }
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 13px;
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  > div {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_FONT};
    }
    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
