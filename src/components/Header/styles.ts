import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  padding: 10px 0px;

  img{
    width: 10vh;
  }
`;


export const Alert = styled.div`
  background: ${props => props.theme.colors.third};
  color: ${props => props.theme.colors.text};

  position: absolute;
  bottom: -17px;

  width: 100vw;

  text-align: center;
  font-weight: ${props => props.theme.text.weight.light};
`