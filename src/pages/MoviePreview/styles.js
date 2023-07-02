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

export const InputContainer = styled.div`
  width: fit-content;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.TAG_COLOR_2};
  color: ${({ theme }) => theme.COLORS.WHITE_COLOR_TAG};
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 5px 16px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 8px;
  > img {
    width: 16px;
    height: 16px;
    border-radius: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.LINE_COlOR};
  }
  svg {
    width: 15.178px;
    height: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Form = styled.form`
  display: grid;
  gap: 40px;
  max-width: 1137px;
  margin: 38px auto;
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
  }
  > header {
    width: 100%;
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

    > div.movie-title {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 19px;
    }
    > div.movie-title > div.stars {
      width: 100%;
      display: flex;
      gap: 6px;
      color: ${({ theme }) => theme.COLORS.PINK};
      svg {
        width: 20px;
        height: 20px;
      }
    }
    > div.tags {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }
`;
