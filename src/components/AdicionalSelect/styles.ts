import styled from 'styled-components';

export const Container = styled.div`
   background: ${props => props.theme.colors.secundary};
   border-bottom-left-radius: 20px; 
   border-bottom-right-radius: 20px; 

  header{ 
    background: ${props => props.theme.colors.background};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 7px;

    p{
      font-size: .9rem;
      color: #ccc;
      font-weight: ${props => props.theme.text.weight.light}
      

    }

    button{
      border: none;
      background: transparent;
      padding: 4px;
      color: #ccc;
    }
  }

  ul{
    li{
      list-style: none;
      padding: 7px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      div:first-child{
        font-size: 1.2em;
        width: 70%;

        p{ 
          font-weight: ${props => props.theme.text.weight.medium};
          color: #f9f9f9;
          
        }
      }

      div:last-child{
        width: 30%;
        display: flex;
        justify-content: flex-end;

        button, input{
          width: 33.3%;
          height: 40px;
          padding: 4px;
          border: none;
          text-align: center;
          color: #fff;
        }

        button:first-child{
          background: ${props => props.theme.colors.error};
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
        }
        button:last-child{
          background: ${props => props.theme.colors.success};
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
        }
        input{
          background: ${props => props.theme.colors.background};
        }
      }
    }
  }
`;
