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
    background: rgba(94, 21, 69, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    justify-content: flex-start;
    padding: 10px 10px;

    img{ 
      width: 5vh;
    }


  `}
  
`;