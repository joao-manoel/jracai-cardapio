import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 7px;

  background: ${props => props.theme.colors.primary};
`;

export const AsideLeft = styled.div`
  font-size: 1.2rem;

  span{
    font-weight: ${props => props.theme.text.weight.extraBold};
  }
`

export const AsideRight = styled.div`

  button{
    padding: 7px;

    cursor: pointer;

    color: ${props => props.theme.colors.text};
    font-weight: ${props => props.theme.text.weight.extraBold};
    font-size: 1.3rem;

    background: ${props => props.theme.colors.background};

    border: none;
    border-radius: 7px;

  }

`
