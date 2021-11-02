/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';


import { Container } from './styles';

const Header: React.FC = () => {

  const [scrollY, setScrollY] = useState(0);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

 // useEffect(() => {
   // HeaderScrollFixed();
  // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [scrollY]);


  const HeaderScrollFixed = () => {
    const Header = document.getElementById('header');
    const HeaderHeight = Header?.offsetHeight;

    window.onscroll = () => {
      setScrollY(window.pageYOffset)

      if(HeaderHeight) {
        if(scrollY >= HeaderHeight - 20) {
          setIsHeaderScrolled(true)
        }else{
          setIsHeaderScrolled(false)
        }
      }
    }
  }
  return (
    <Container id="header" isHeaderScrolled={isHeaderScrolled}>
      <img src={`/images/logo.png`} alt="JR açai Logo" />
    </Container>
  );
}

export default Header;