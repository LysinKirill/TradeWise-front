import { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';


export type TTextCardStyleProps = {
  name?: string,
  isActive?: boolean,
  withHover?: boolean,
  additionalStyles?: FlattenSimpleInterpolation,
  settings?: {
    padding?: string,
    backgroundColor?: string,
    alignItems?: string,
    justify?: string,
    gap?: string,
    fontSize?: string,
    cursor?: string,
    width?: string,
    fontWeight?: string,
  }
};

export interface ITextCardProps {
  id?: string,
  isActive?: boolean,
  withHover?: boolean,
  children: ReactNode | string | number,
  settings?: TTextCardStyleProps,
  additionalStyles?: FlattenSimpleInterpolation;
  onClick?: (event: any) => void,
  onClear?: (event?: any) => void,
  isShowCloseButton?: boolean,
}
