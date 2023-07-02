import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputContainer = styled.div`
  width: 536.5px;
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
export const ContainerButtonPink = styled.button`
  width: 536.5px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.PINK_COUNTER_COLOR};
  height: 56px;
  border: 0;
  padding: 16px 200px;
  border-radius: 10px;
  font-weight: 500;

  gap: 8px;

  &:disabled {
    opacity: 0.5;
  }
`;
export const ContainerButtonBlack = styled.button`
  width: 536.5px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK_STRONG};
  color: ${({ theme }) => theme.COLORS.PINK};
  height: 56px;
  border: 0;
  padding: 16px 210px;
  border-radius: 10px;
  font-weight: 500;

  gap: 8px;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 40px;
  max-width: 1137px;
  margin: 38px auto;
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
    }
  }
  > div {
    display: flex;
    gap: 40px;
  }
  > h2 {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_FONT};
    font-weight: 400;
  }
  > div.tags {
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLACK_STRONG};
  }

  > div.buttons {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;
