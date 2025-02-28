import { FlattenSimpleInterpolation } from 'styled-components';

import { TColors } from '../../constants/colors';

export interface IPreloaderProps {
  /**
   * Дополнительный класс
   */
  className?: string;
  /**
   * Управление цветом
   */
  color?: TColors;
  /**
   * Управляет размером прелоадера
   */
  size?: number;
  /**
   * Переключение позиционирования relative/absolute
   */
  isAbsolute?: boolean;
  /**
   * Дополнительные стили для переопределения дефолтных
   */
  styles?: FlattenSimpleInterpolation;
}

export interface IPreloaderStylesProps extends Pick<IPreloaderProps, 'color' | 'isAbsolute' | 'styles'> {}

export interface IPagePreloaderProps {
  /**
   * Дополнительный класс
   */
  className?: string;
  /**
   * Дополнительные стили для переопределения дефолтных
   */
  styles?: FlattenSimpleInterpolation;
}

export interface IPagePreloaderStylesProps extends Pick<IPagePreloaderProps, 'styles'> {}
