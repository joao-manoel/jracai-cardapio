import styled from 'styled-components';

interface Props {
  isHeaderScrolled: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;


  padding: 10px 0px;

  img{
    width: 10vh;
    transition: all 0.5s ease-in-out;
  }

  ${props => props.isHeaderScrolled && `
    background: rgba(61, 6, 42, 1);
    position: fixed;
    top: 0;
    left: 0;
    justify-content: flex-start;
    padding: 10px 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    img{ 
      width: 5vh;
    }


  `}
  
`;