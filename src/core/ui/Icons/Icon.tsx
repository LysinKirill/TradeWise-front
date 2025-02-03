import { forwardRef } from 'react';

import * as UI from './Icon.styles';
import { ISvgIconProps } from './types';

const SvgIcon = forwardRef<SVGSVGElement, ISvgIconProps>(({
  size = 16,
  viewBox = '0 0 16 16',
  children,
  className,
  ...otherProps
}, ref) => (
  <UI.StyledSvgIcon
    className={className}
    ref={ref}
    size={size}
    viewBox={viewBox}
    {...otherProps}
  >
    {children}
  </UI.StyledSvgIcon>
));

export default SvgIcon;

export type TSvgIcon = typeof SvgIcon;
