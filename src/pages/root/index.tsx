import * as UI from './styles';
import { useMediaQuery } from '../../core/hooks/useMediaQuery';
import { MobileWelcome } from '../../core/components/Mobile/WelcomePage';
import DesktopWrapper from '../../core/components/DesktopWrapper';

const Root = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <UI.Container>
      {isMobile ? (
        <UI.MobileWrapper>
          <MobileWelcome /> 
        </UI.MobileWrapper>
      ) : (
        <UI.DesktopWrapper>
          <DesktopWrapper />
        </UI.DesktopWrapper>
      )}
    </UI.Container>
  );
};

export default Root;