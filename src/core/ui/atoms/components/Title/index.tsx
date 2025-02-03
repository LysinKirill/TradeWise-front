import * as UI from './Title.styles';
import { TTitleProps } from './types';

export const Title = (props: TTitleProps) => {
  const { children, settings } = props;

  return (
    <UI.Container {...settings}>
      {children}
    </UI.Container>
  );
};