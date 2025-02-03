import { ReactNode } from 'react';

export interface IPropsWithChildren {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export type AnyObject = Record<string, any>;
