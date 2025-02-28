import { SVGAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { TColors } from '../../constants/colors';

export interface IStyledSvgProps {
  /**
   * Дополнительный класс
   */
  className?: string;
  /**
   * Цвет иконки
   */
  color?: TColors | any;
  /**
   * Размер иконки
   */
  size?: number;
  /**
   * Дополнительные стили для переопределения дефолтных
   */
  styles?: FlattenSimpleInterpolation;
}

export interface ISvgIconProps
  extends IStyledSvgProps,
  Omit<SVGAttributes<SVGSVGElement>, 'color' | 'fontSize' | 'style'> { }
