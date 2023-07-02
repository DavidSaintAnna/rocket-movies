import styled from "styled-components";
import backgroundImg from "../../assets/Background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.TITLE_FONT_COLOR};
  }
  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 48px;
    margin-bottom: 48px;
  }
  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 42px;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
