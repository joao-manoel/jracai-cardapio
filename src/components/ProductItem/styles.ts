import styled from 'styled-components';

interface InfoContentProps {
  image: string;
}

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  margin-bottom: 14px;
  padding: 7px;
  display: flex;
  justify-content: space-between;

  border-radius: 14px;
`;

export const InfoContent = styled.div<InfoContentProps>`
  display: flex;
  width: 170%;

  div{
    padding: 7px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4{
      font-size: 1rem;
    }

    span{ 
      color: #f9f9f9;
      font-weight: ${props => props.theme.text.weight.light};
    }
  }

  figure{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: url(${props => props.image}) center;
    background-size: 100px;
    overflow: hidden;

    img{
      height: 75px;

    }
  }
`

export const InputContent = styled.div`
  display: flex;
  justify-content: flex-end;

  button{
    width: 35%;
    border: none;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 1.6rem;
  }

  #dec{
    background: #ff4124;
  }

  #acre{
    background: #4aeb44;
  }

  input{
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 1.5em;
    background: transparent;
    border: none;
    font-weight: ${props => props.theme.text.weight.light};
    color: ${props => props.theme.colors.text};
  }
`