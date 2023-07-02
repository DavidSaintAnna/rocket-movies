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
  width: 100%;
  font-weight: 400;
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.MOVIE_FONT_COLOR};
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.TAG_COLOR};
  border-radius: 16px;
  padding: 32px;
  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > div.stars {
    display: flex;
    gap: 6px;
    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  > div.tags {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 40px;
  max-width: 1137px;
  margin: 38px auto;
  text-align: justify;
  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: normal;
  }
  > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50.38px;
  }
  > div.movies {
    width: 100%;

    display: grid;
    gap: 24px;
  }
`;

export const InputContainer = styled.div`
  width: fit-content;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PINK_COUNTER_COLOR};
  color: ${({ theme }) => theme.COLORS.WHITE_COLOR_TAG};
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 5px 16px;
`;

export const ContainerButtonPink = styled.button`
  width: 207px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
  height: 48px;
  border: 0;
  padding: 27px;
  border-radius: 8px;
  font-weight: 400;

  gap: 8px;
  > svg {
    width: 16px;
    height: 16px;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
