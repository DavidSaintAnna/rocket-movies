import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.PINK_COUNTER_COLOR};
  height: 56px;
  border: 0;
  margin-top: 16px;
  padding: 0 16px;
  font-weight: 500;
`;
