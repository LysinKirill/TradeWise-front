import { IPropsWithChildren } from '@core/utils/types';

export type TTitleStyleProps = {
  settings?: {
    size?: string,
    color?: string,
    textAlign?: string,
  }
};

export type TTitleProps = {
  children: IPropsWithChildren | string,
  settings?: TTitleStyleProps,
};
