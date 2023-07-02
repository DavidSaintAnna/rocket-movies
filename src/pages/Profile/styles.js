import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    display: flex;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.HEADER_COLOR};
    padding: 0 124px;
    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      margin-top: 64px;
      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }
  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.PINK_COUNTER_COLOR};
    }
  }
`;
