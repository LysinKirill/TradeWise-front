import { IPropsWithChildren } from '../../../../utils/types';

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
