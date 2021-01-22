import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 5px;

  border: 2px solid ${props => props.theme.colors.wandscore};
  flex-grow: 1;
  max-height: 280px;
  max-width: 450px;
  h1 {
    font-family: ${props => props.theme.font.title};
    font-weight: 300;
    color: ${props => props.theme.colors.wandscore};
  }
  .message {
    font-family: ${props => props.theme.font.text};
    font-weight: 300;
    margin: 10px;
    text-align: justify;
  }
  .created-by {
    font-family: ${props => props.theme.font.text};
    font-weight: 300;
    margin: 10px;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
  }

  /* margin: auto; */
`;
