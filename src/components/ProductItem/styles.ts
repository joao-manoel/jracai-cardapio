import styled from 'styled-components';

interface InfoContentProps {
  image: string;
}

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  
  padding: 7px;
`

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  max-width: 700px;
  margin-bottom: 14px;
  
  display: flex;
  flex-direction: column;

  border-radius: 14px;
`;

export const InfoItem = styled.div<InfoContentProps>`
  display: flex;
  width: 70%;
  div{
    padding: 7px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4{
      font-size: 1.3rem;
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
    border: 3px solid ${props => props.theme.colors.background};
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);

    img{
      height: 75px;

    }
  }
`

export const AddProduct = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;

  button{
    width: 33.3%;
    border: none;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 1.6rem;
    outline: none;

    &:first-child{
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child{
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  #dec{
    background: ${props => props.theme.colors.error};
  }

  #acre{
    background: ${props => props.theme.colors.success};
  }

  input{
    width: 33.3%;
    height: 100%;
    text-align: center;
    font-size: 1.5em;
    background: rgba(0,0,0, 0.4);
    padding: 0 7px;
    border: none;
    font-weight: ${props => props.theme.text.weight.light};
    color: ${props => props.theme.colors.text};
  }
`