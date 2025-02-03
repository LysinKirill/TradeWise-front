import { useScrollLock } from '@core/hooks/useScrollLock';
import { SpinnerAnimate } from '@core/ui/Icons';

import * as UI from './Preloader.styles';
import { IPagePreloaderProps } from './types';

const PagePreloader = (props: IPagePreloaderProps) => {
  const {
    className,
    styles,
  } = props;

  useScrollLock();

  return (
    <UI.PagePreloader className={className} styles={styles}>
      <SpinnerAnimate
        color="white"
        size={56}
        styles={UI.pagePreloaderSpinnerStyles}
      />
    </UI.PagePreloader>
  );
};

export default PagePreloader;
