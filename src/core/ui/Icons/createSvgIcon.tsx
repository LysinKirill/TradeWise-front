import { ReactNode, forwardRef } from 'react';

import SvgIcon, { TSvgIcon } from './Icon';
import { ISvgIconProps } from './types';

const createSvgIcon = (content: ReactNode, displayName: string, defaultProps: ISvgIconProps = {}): TSvgIcon => {
  const Component = forwardRef<SVGSVGElement, ISvgIconProps>((props, ref) => (
    <SvgIcon {...defaultProps} {...props} ref={ref}>
      {content}
    </SvgIcon>
  ));

  Component.displayName = `${displayName}Icon`;

  return Component;
};

export default createSvgIcon;
