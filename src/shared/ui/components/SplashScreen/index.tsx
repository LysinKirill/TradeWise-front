import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SplashContainer = styled.div<{ $isHiding: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  opacity: 1;
  pointer-events: none; 
  animation: ${({ $isHiding }) => $isHiding ? fadeOut : 'none'} 0.5s forwards;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(
    45deg,
    #ffffff,
    #cccccc,
    #999999,
    #cccccc,
    #ffffff
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientFlow} 6s ease infinite;
  text-transform: uppercase;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SplashScreen = ({ onHide }: { onHide: () => void }) => {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(onHide, 500);
    }, 2000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, [onHide]);

  return (
    <SplashContainer $isHiding={isHiding}>
      <Logo 
        src="/icon512_rounded.png" 
        alt="TradeWise Logo" 
      />
      <Title>TradeWise</Title>
    </SplashContainer>
  );
};