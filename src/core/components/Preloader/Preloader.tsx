import { SpinnerAnimate } from '../../ui/Icons';

import * as UI from './Preloader.styles';
import { IPreloaderProps } from './types';

const Preloader = (props: IPreloaderProps) => {
  const {
    className,
    color,
    isAbsolute,
    size = 28,
    styles,
  } = props;

  return (
    <UI.Preloader
      className={className}
      color={color}
      isAbsolute={isAbsolute}
      styles={styles}
    >
      <SpinnerAnimate
        color="inherit"
        size={size}
      />
    </UI.Preloader>
  );
};

export default Preloader;
