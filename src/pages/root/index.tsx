import * as UI from './styles';
import { useMediaQuery } from '@shared/hooks/useMediaQuery';
import { WelcomeWrapper } from '../welcome';


const Root = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <UI.Container>
        <UI.Wrapper>
          <WelcomeWrapper isMobile={isMobile}/>
        </UI.Wrapper>
    </UI.Container>
  );
};

export default Root;